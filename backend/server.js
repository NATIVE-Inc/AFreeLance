const localStorage = require('localStorage');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const mongoose = require('mongoose');

// data schemas for mongodb database
const User = require('./models/users');
const Job = require('./models/jobs');

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
  res.status(200).send("Welcome to the NATIVE api!");
});

/*
  Route: signup
  Type: POST
*/
app.post('/api/signup', function(req, res) {
  const { first_name, last_name, email, password } = req.body;
  const theUser = new User({ first_name, last_name, email, password });

  // checking if email is already in use
  User.findOne({ email }, function(err, user) {
    if (err) {
      res.status(401).send('Internal Server Error')
    } else if (user) {
        // if there is already a user with this email
        res.status(200).send('Email exist!')
    } else {
        // if everything is ok then create a new user
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
            res.status(200).send('wrong password')
        }
    } else {
        // the user doesn't exist
        res.status(200).send('No user found')
    };
  })
});

/*
  Route: /api/addJob
  Type: POST
  Description: adding jobs to the database
*/
app.post('/api/addJob', function(req, res) {
  var { title, descr, deadline, amount, skillList, author, location, category } = req.body;
  const theJob = new Job({ title, descr, deadline, amount, skillList, author, location, category })

  // saving the job into the database
  theJob.save(function(err) {
    if (err) {
      console.log(err);
      res.status(500).send("Error registering new job please try again.");
    } else {
      res.status(200).send("Success");
    }
  });
});

/*
  Route: /api/data
  Type: GET
  Description: getting all the jobs data from db
*/
app.get('/api/data', function (req, res) {
  Job.find(function (err, job) {
    if (err) {
      res.status(401).send('Internal Server Error')
    } else {
      // sending all the jobs fetch from the database
      res.status(200).send(job);
    }
  });
});
/*
  Route: /api/data/filter
  Type: POST
  Description: filtering through data in database
*/
app.post('/api/data/filter', function (req, res) {
  var { category, location } = req.body;
  Job.find({ category: category }, function (err, job) {
    if (err) {
      res.status(401).send('Internal Server Error')
    } else {
      // sending all the jobs fetch from the database
      res.status(200).send(job);
    }
  });
});
/*
  Route: /api/data/id
  Type: POST
  Description: get details about job
*/
app.post('/api/data/id', function (req, res) {
  console.log('got into route')
  var  jobId = req.body.id;
  console.log(jobId)
  Job.findOne({ _id: jobId }, function (err, job) {
    if (err) {
      res.status(401).send('Internal Server Error')
    } else {
      // send details about job
      res.status(200).send(job);
    }
  });
});

// listening on this port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});