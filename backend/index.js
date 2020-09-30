const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const multer  = require('multer')
const path = require('path')


const conn = mysql.createConnection({
  host: 'localhost',
  user: 'nara',
  password:'root',
  database: 'auctiondb',
})


var app = express()

const server = require('http').createServer(app)


app.use(cors({credentials: true, origin: 'http://localhost:8080'}), express.json(),  bodyParser.json(),bodyParser.urlencoded({extended: true}))
app.use(express.static('./assets'));

//CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE" 
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

//Connecting to database with error catching
conn.connect((req,res,err) => {
  if(err) {
    console.log(err)
  }else {
    console.log('Database connected!')
  }
})

//Listening on port
const port = 3000
server.listen(port, () => {
  console.log(`Server is listening on port: ${port}`)
})



//fetching objects 
app.get('/products', function (req, res) {
  //Removed "GROUP BY products.id"
  conn.query('SELECT * FROM images INNER JOIN products ON products.image_ref = images.image_ref', function (error, results) {
     
      if (error) {
        console.log(req)
        throw error
      }else {
        return res.send({ error: false, data: results, message: 'The data is send.' });
      }
  });
});

app.get('/product', function (req, res) {
  let sql = 'SELECT * FROM products INNER JOIN images ON products.image_ref = images.image_ref WHERE products.id = ? GROUP BY products.id'

   let data = req.query.id

  conn.query(sql,[data], function (error, results) {
     
    if (error) {
      console.log(req)
      throw error
    }else {
      return res.send({ data: results });
    }
});
});

//deleting
app.get('/product/id', function (req, res) {
  let sql = 'DELETE from products JOIN images ON products.image_ref = images.image_ref WHERE products.id = ?'
   let data = req.params.id

  conn.query(sql,data, function (error, results) {
     
    if (error) {
      console.log(req)
      throw error
    }else {
      return res.send({ data: results });
    }
});
});


//adding products to the database
app.post('/products',(req, res) => {

  console.log(req.body.image)
  let data = {product_name: req.body.product_name, description: req.body.description, category: req.body.category,product_status: 'New', personal_number: req.body.personal_number, 
    start_price: req.body.start_price, reserve_price: req.body.reserve_price, currency: req.body.currency, image_ref: req.body.image, date_added: new Date()};
 
  let sql = "INSERT INTO products SET ?";
  
  conn.query(sql, data,(error, results) => {
    if(error) {
      throw error
    } else {
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
     
    }
   
  });
});

//upload images code below


var storage = multer.diskStorage({   

  destination: function(req, file, cb) { 
     cb(null, './assets');    
  }, 
  filename: function (req, file, cb) { 
    
     serverImageName = Date.now() + "_" + file.originalname;
     cb(null ,  serverImageName);   
    
  }
});


//validating what type of images can be uploaded to the server
const fileFilter = function (res,file,cb) {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];

  if(!allowedTypes.includes(file.mimetype)){
    const error = new Error("Wrong file type");
    error.code = "LIMIT_FILE_TYPES";
    return cb(error,false)
  }
  cb(null,true)
}



const upload = multer ({
  storage:storage,
  fileFilter
})

//storing multiple images in the assets folder

app.post('/upload', upload.array('photo', 4), async (req, res) => {
   try {
     const reqFiles = []
     const photo = req.files;
     for (let i =0; i < photo.length; i++ ){
      reqFiles.push(photo[i].filename)
      let imageref = req.query.imageref;
      console.log(imageref)
  let data2 = {image_name:photo[i].filename, image_ref: imageref}
  let sql2 = "INSERT INTO images SET ?"
  conn.query(sql2,data2, (err,res)=>{
    if(err){
      throw err
    } else {
     console.log("Image has been added to the image table")
    }
  })
     }
     if (!photo) {
      res.status(400).send({
          status: false,
          data: 'No file is selected.'
      })
    } else {
      // send response
      console.log("images are uploaded to assets folder")
      res.send({
        status: true,
        message: 'File is uploaded.',
        data: {
          name: photo.originalname,
          mimetype: photo.mimetype,
          size: photo.size
      }

    })
  }

   } catch(err){
     res.status(500).send(err)
   }

})

app.use(function(err,req,res,next){
  if(err.code === "LIMIT_FILE_TYPES"){
    res.status(422).json({error:"Only images are allowed"})
    return
  }
})