const localStorage = require('localStorage');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

// data schemas for mongodb database 
const User = require('./models/users');

// Import the library:
var cors = require('cors');

const app = express();

// Then use it before your routes are set up:
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

const mongo_uri = 'mongodb://localhost/afreelancer';

mongoose.connect(mongo_uri, { useNewUrlParser: true }, function(err) {
  if (err) {
    throw err;
  } else {
    console.log(`Successfully connected to ${mongo_uri}`);
  }
});

app.use(express.static(path.join(__dirname, 'public')));

// the default api route
app.get('/api', function (req, res) {
  res.status(200).send("Welcome to the api!");
}); 

/* 
  Route: signup
  Type: POST 
*/
app.post('/api/signup', function(req, res) {
  const { first_name, last_name, email, password } = req.body;
  const theUser = new User({ first_name, last_name, email, password });
  console.log(first_name, last_name, email, password)

  // checking if email is already in use 
  User.findOne({ email }, function(err, user) {
    if (err) {
      res.status(401).send('Internal Server Error')
    } else if (user) {
        // if there is already a user with this email
        res.status(200).send('Email exist!')
    } else {
        // if everytinbg is ok then create a new user 
        theUser.save(user, function(err) {
            if (err) {
              console.log(err);
              res.status(500).send("Error registering new user please try again.");
            } else {
              console.log('Successfully created user')
              res.status(200).send("Success");
            }
        });
    };
  })
});

/*
  Route: /api/login
  Type: POST
*/
app.post('/api/login', function(req, res) {
  var { email, password } = req.body;

  // checking if email is already in use 
  User.findOne({ email }, function(err, user) {
    if (err) {
      res.status(401).send('Internal Server Error')
    } else if (user) {
        console.log("user exist")
        // checking for the password validity 
        if(user.password === password){
            // sends user information back to frontend
            res.status(200).send(user)
        } else {
            console.log('wrong password')
            res.status(500).send('wrong password')
        }
    } else {
        // the user doesn't exist 
        res.send('No user found')
    };
  })
});

app.post('/api/authenticate', function(req, res) {
  const { email, password } = req.body;
  User.findOne({ email }, function(err, user) {
    if (err) {
      console.error(err);
      res.status(500)
        .json({
        error: 'Internal error please try again'
      });
    } else if (!user) {
      res.status(401)
        .json({
        error: 'Incorrect email or password'
      });
    } else {
      user.isCorrectPassword(password, function(err, same) {
        if (err) {
          res.status(500)
            .json({
            error: 'Internal error please try again'
          });
        } else if (!same) {
          res.status(401)
            .json({
            error: 'Incorrect email or password'
          });
        } else {
          // Issue token
          const payload = { email };
          const token = jwt.sign(payload, secret, {
            expiresIn: '1h'
          });
          res.cookie('token', token, { httpOnly: true }).sendStatus(200);
        }
      });
    }
  });
});

// listening on this port 
app.listen(3001);
