const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

// connection details 
const db = mysql.createConnection({
    host : '127.0.0.1',
    user : 'root',
    password : '',
    database : 'skillfindr'
});

db.connect();

/* This is to create the database 
  // creating db 
let tsql = `CREATE DATABASE nodemysql`;
db.query(tsql, function (err, result) {
// if (err) throw err;
console.log("The Database is created!!");
});

// creating table
bsql = `CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))`;
db.query(bsql, function (err, result) {
// if (err) throw err;
console.log("The customers table is created!!");
});

*/

app.post('/data', function(req,res){
    // var data = {location:req.body.location, categories:req.body.categories};
    var sql = 'SELECT * FROM work';
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log("The query: ", sql);
        res.send(result); // sending the result back 
    });
});


app.post('/data/id', function(req,res){
    var dataId = req.body.id
    var sql = 'SELECT * FROM work WHERE id = "' + dataId + '"';
    db.query(sql, (err, result)=>{
        if(err) throw err;
        var data = result[0]
        console.log('sending id data')
        res.send(data); // sending the result back 
    });
});
 
app.post('/addJob', function(req, res){
    const today = new Date();
    const jobData = {
        title: req.body.title,
        description: req.body.descr, 
        deadline: req.body.deadline, 
        amount: req.body.amount, 
        skills: req.body.skills,
        author: req.body.author,
        location: req.body.location,
        category: req.body.category

    };
    // var sql = 'INSERT * INTO work';
    // db.query(sql, (err, result)=> {
    //     if(err) throw err;
    //     console.log("The query: ", sql);
    //     res.send(result);
    // })
    console.log('-----------------------------------------')
    console.log(jobData);
    console.log('-----------------------------------------')
});

app.post('/oAuth/signup', function(req, res) {
    const today = 'This is the date' // new Date.Date();
    const signupData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password
    };
    var sql = 'INSERT INTO oauth(first_name, last_name, email, password, auth_date) VALUES ("' + signupData.first_name + '","' + signupData.last_name + '","' + signupData.email + '","' + signupData.password + '","' + today + '")';
    db.query(sql, (err, result)=> {
        if(err) throw err;
        console.log(result)
        console.log("successfully created user");
        res.send(true);
    })

})

app.post('/oAuth/login', function(req, res){
    const loginData = {
        email: req.body.email,
        password: req.body.password
    }; 

    var sql = 'SELECT * FROM oauth WHERE email LIKE "' + loginData.email + '" AND password LIKE "' + loginData.password + '" '

    db.query(sql, (err, result)=> {
        if(err) throw err;
        if(result.length !== 0){
            console.log('login confirmed')
            console.log(result)
            res.send(result)
        }
        else{
            console.log('no user exist')
            res.send(false)
        }
    })
}) 

app.listen(3210, ()=>{
    console.log('Server listening on port 3210')
});