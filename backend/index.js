const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload')



const conn = mysql.createConnection({
  host: 'localhost',
  user: 'monika',
  password:'0000',
  database: 'auctiondb',
})



var app = express()

const server = require('http').createServer(app)

app.use(cors({credentials: true, origin: true}), express.json(), fileUpload(), bodyParser.json(),bodyParser.urlencoded({extended: true}))

conn.connect(err => {
  if(err) throw err;
  console.log('MySQL connected')
})


server.listen(3000, () => {
  console.log('Server is listening')
})


app.get('/', function (req, res) {
  conn.query('SELECT * FROM user', function (error, results) {
      if (error, console.log('There is an issue')) throw error; 
      return res.send({ error: false, data: results, message: 'The data is send anyhow.' });
  });
});

app.post('/products',(req, res) => {
  let data = {product_name: req.body.product_name, description: req.body.description, price: req.body.price};
  let sql = "INSERT INTO products SET ?";
  let query = conn.query(sql, data,(error, results) => {
    if(error) throw error;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});



