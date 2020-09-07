// const cors = require('cors');
const mysql = require('mysql');
// const bodyParser = require('body-parser');

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

// const conn = mysql.createConnection({
//   host: 'localhost',
//   user: 'monika',
//   password:'0000',
//   database: 'auctiondb',
// })

// var app = express()
// const server = require('http').createServer(app)

// app.use(cors(), express.json(),bodyParser.json())


// conn.connect(err => {
//   if(err) throw err;
//   console.log('MySQL connected')
// })


// server.listen(3000, () => {
//   console.log('Server is listening')
// })


// app.get('/', function (req, res) {
//   conn.query('SELECT * FROM products', function (error, results, fields) {
//       if (error, console.log('There is an issue')) throw error; 
//       return res.send({ error: false, data: results, message: 'The data is send anyhow.' });
//   });
// });


