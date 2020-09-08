const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload')



const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'',
  database: 'auctiondb',
})


var app = express()

const server = require('http').createServer(app)

app.use(cors({credentials: true, origin: 'http://localhost:8080'}), express.json(), fileUpload(), bodyParser.json(),bodyParser.urlencoded({extended: true}))

// fixing CORS issues
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE" // what matters here is that OPTIONS is present
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


app.get('/products', function (req, res) {
  conn.query('SELECT * FROM products', function (error, results) {
      // if (error, console.log('There is an issue')) throw error; 
      // return res.send({ error: false, data: results, message: 'The data is send anyhow.' });
      if (error) {
        console.log('There is an issue')
        throw error
      }else {
        return res.send({ error: false, data: results, message: 'The data is send anyhow.' });
      }
  });
});

app.post('/products',(req, res) => {
  let data = {product_name: req.body.product_name, description: req.body.description, category: req.body.category,product_status: req.body.status, personal_number: req.body.personalNumber, 
    start_price: req.body.startPrice, reserve_price: req.body.reservePrice, currency: req.body.currency, date_added: req.body.date,};
  let sql = "INSERT INTO products SET ?";
  conn.query(sql, data,(error, results) => {
    if(error) throw error;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});



