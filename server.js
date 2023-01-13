/*global console , $ , document */

const express = require('express'); //
const path = require('path');
const bodyParser = require('body-parser');
const knex = require('knex');
const port = 3000
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

//Form validation(Signup)

      
// app.post("/",(req,res)=>{
//     res.sendFile(path.join(initialPath, "js/login.html"));
// })


app.post('/login',function(req,res){
    let fname= req.body.firstname;
    let lname = req.body.lastname;
    let pass = req.body.password;
    let email=req.body.emailorphone;
    let dob = req.body.dob;
    let gender = req.body.gender;
    var htmlData = 'Hello:' + fname +  lname + pass + email + dob + gender;
    res.send(htmlData);
    console.log(htmlData);
 });
 app.post('',function(req,res){
     let pass = req.body.password;
     let email=req.body.emailorphone;
     var htmlData = 'Hello:' +  pass + email ;
     res.send(htmlData);
     console.log(htmlData);
  });
 

app.listen(port, (req,res) => {
    console.log(`Example app listening on port http://localhost:${port}`) //we can click and open the server
  })

  
  