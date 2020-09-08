// const cors = require('cors');
const mysql = require('mysql');
const express = require('express')
// const bodyParser = require('body-parser');

const app = express()
//Body-parser
app.use(express().JSON)
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "toor",
  database: "auction.db"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


const port = 5000

