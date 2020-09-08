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

app.use(cors({credentials: true, origin: true}), express.json(), fileUpload(), bodyParser.json(),bodyParser.urlencoded({extended: true}))

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



