const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const multer  = require('multer')


const conn = mysql.createConnection({
  host: 'localhost',
  user: 'monika',
  password:'0000',
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


app.get('/', function (req, res) {
  conn.query('SELECT * FROM products', function (error, results) {
     
      if (error) {
        console.log(req)
        console.log('There is an issue with GET /products on backend:index.js, dumping error')
        throw error
      }else {
        return res.send({ error: false, data: results, message: 'The data is send.' });
      }
  });
});

app.post('/products',(req, res) => {
  console.log(serverImageName);
  let data = {product_name: req.body.product_name, description: req.body.description, category: req.body.category,product_status: req.body.product_status, personal_number: req.body.personal_number, 
    start_price: req.body.start_price, reserve_price: req.body.reserve_price, currency: req.body.currency, image: serverImageName, date_added: req.body.date_added};
  let sql = "INSERT INTO products SET ?";
  conn.query(sql, data,(error, results) => {
    if(error) {
      throw error
    } else {
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    }
   
  });
});


//uploading images
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

app.post('/upload', upload.single('photo'), async (req, res) => {
  try {
    const photo = req.file;

    if (!photo) {
      res.status(400).send({
          status: false,
          data: 'No file is selected.'
      })
    } else {
      // send response

      res.send({
        status: true,
        message: 'File is uploaded.',

        data: {
          name: photo.originalname,
          mimetype: photo.mimetype,
          size: photo.size
      }
  });

      }

  } catch(err){
    res.status(500).send(err);

  }

})

app.use(function(err,req,res,next){
  if(err.code === "LIMIT_FILE_TYPES"){
    res.status(422).json({error:"Only images are allowed"})
    return
  }
})