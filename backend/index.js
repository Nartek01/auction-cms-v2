

const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const multer = require('multer')
const formidable = require('formidable');
const { request } = require('http');


const conn = mysql.createConnection({
  host: 'localhost',
  user: 'monika',
  password: '0000',
  database: 'auctiondb',
})


var app = express()

const server = require('http').createServer(app)


app.use(cors({ credentials: true, origin: 'http://localhost:8080' }), express.json(), bodyParser.json(), bodyParser.urlencoded({ extended: true }))
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
conn.connect((req, res, err) => {
  if (err) {
    console.log(err)
  } else {
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
  conn.query('SELECT * FROM images INNER JOIN products ON products.image_ref = images.image_ref GROUP BY products.id', function (error, results) {


    if (error) {
      console.log(req)
      throw error
    } else {
      return res.send({ error: false, data: results, message: 'The data is send.' });
    }
  });
});

//fetching one object based on its id
app.get('/product', function (req, res) {
  let sql = 'SELECT * FROM products INNER JOIN images ON products.image_ref = images.image_ref WHERE products.id = ?'
  let data = req.query.id

  conn.query(sql, [data], function (error, results) {

    if (error) {
      console.log(req)
      throw error
    } else {
      return res.send({ data: results })
    }
  });
});


//editing products
app.patch('/productsedit', (req, res) => {

  new formidable.IncomingForm().parse(req, (err, fields, files) => {
    if (err) {
      console.error('Error', err)
      throw err
    }
    console.log('Fields', fields)
    console.log('Files', files)
    console.log(fields.product)
    updatedData = JSON.parse(fields.product)

    let id = updatedData[0]['id']
    let product_name = updatedData[0]['product_name']
    let description = updatedData[0]['description']
    let category = updatedData[0]['category']
    let personal_number = updatedData[0]['personal_number']
    let start_price = updatedData[0]['start_price']
    let reserve_price = updatedData[0]['reserve_price']
    let currency = updatedData[0]['currency']
    let status = updatedData[0]['product_status']
    let data = {
      product_name, description,category,personal_number,start_price,reserve_price,currency,status
    }

    

    let sql = "UPDATE products SET product_name = ?, description = ?, category = ?, product_status = ?, personal_number = ?, start_price = ?, reserve_ price = ?, currency = ?" 

    console.log(data);
    conn.query(sql, [data,id], function (results, error) {
      if (error) {
        throw error

      }
      res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
      console.log('OK');
     
    })

  })



})


//adding products to the database
app.post('/products', (req, res) => {

  console.log(req.body.image)
  let data = {
    product_name: req.body.product_name, description: req.body.description, category: req.body.category, product_status: 'New', personal_number: req.body.personal_number,
    start_price: req.body.start_price, reserve_price: req.body.reserve_price, currency: req.body.currency, image_ref: req.body.image, date_added: new Date()
  };
  console.log(data)
  let sql = "INSERT INTO products SET ?";

  conn.query(sql, [data], (error, results) => {
    if (error) {
      throw error
    } else {
      res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));

    }

  });
});

//upload images code
var storage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, './assets');
  },
  filename: function (req, file, cb) {

    serverImageName = Date.now() + "_" + file.originalname;
    cb(null, serverImageName);

  }
});


//validating what type of images can be uploaded to the server
const fileFilter = function (res, file, cb) {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];

  if (!allowedTypes.includes(file.mimetype)) {
    const error = new Error("Wrong file type");
    error.code = "LIMIT_FILE_TYPES";
    return cb(error, false)
  }
  cb(null, true)
}



const upload = multer({
  storage: storage,
  fileFilter
})

//storing multiple images in the assets folder

app.post('/upload', upload.array('photo', 4), async (req, res) => {
  try {
    const reqFiles = []
    const photo = req.files;
    for (let i = 0; i < photo.length; i++) {
      reqFiles.push(photo[i].filename)
      let imageref = req.query.imageref;
      console.log(imageref)
      let data2 = { image_name: photo[i].filename, image_ref: imageref }
      let sql2 = "INSERT INTO images SET ?"
      conn.query(sql2, data2, (err, res) => {
        if (err) {
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

  } catch (err) {
    res.status(500).send(err)
  }

})

app.use(function (err, req, res, next) {
  if (err.code === "LIMIT_FILE_TYPES") {
    res.status(422).json({ error: "Only images are allowed" })
    return
  }
})

//DELETING

app.delete('/products', function (req, res) {
  let sql = 'DELETE FROM products, images USING products INNER JOIN images ON products.image_ref = images.image_ref WHERE products.image_ref = ?'
  let data = req.body.image_ref
  conn.query(sql, [data], (err, res) => {
    if (err) {
      throw err;
    }
  })

})

