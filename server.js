/*global console , $ , document */

const express = require('express'); //
const path = require('path');
const bodyParser = require('body-parser');
const knex = require('knex');
const port = 30000;
const app = express();


let initialPath = path.join(__dirname + "/public");

app.use(bodyParser.json());
app.use(express.static(initialPath));
app.use(express.urlencoded({ //to access html file
    extended:true
}))

app.get('/', (req, res) => {
    res.sendFile(path.join(initialPath, "js/index.html"));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(initialPath, "js/login.html"));
})

app.get('/Signup', (req, res) => {
    res.sendFile(path.join(initialPath, "js/Signup.html"));
})
app.get('/forgotpass', (req, res) => {
    res.sendFile(path.join(initialPath, "js/forgotpass.html"));
})



app.listen(port, (req,res) => {
    console.log(`Example app listening on port http://localhost:${port}`) //we can click and open the server
  });

  
  