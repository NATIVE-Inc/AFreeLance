# AFreeLance
>Online jobs for africans

### Documentation
#### What is AfreeLancer
#### Hire
Platform to find expertise on projects
Find professionals who can implement your projects

#### Work
Work from Home
Make commision by providing expertise to projects

Examples
Create Websites
Create Logos
Do Assignments

### To- do
- [x] login system
- [x] post page
- [] profile page
- [] hire page
- [x] if else in the redirect not working
- [x] work page
- [] page transitions
- [] ajax verifications
- [x] protect routes with authentication
- [x] counting number of post retrieved
- [] place warnings for when db is down
- [x] reverse order of feed
- [] manipulating date

#### Use Cases
As Admin
- [] As an Admin I want to login
- [] As an Admin I want to view all Jobs
- [] As an Admin I want to Edit Jobs posted (delete, unplubish, open, closed)
- [] As an Admin I want to view all users
- [] As an Admin I want to Edit users (delete, block)
- [] As an Admin I want to send notification to users

As Client
- [] As a Client I want to signup and login
- [] As a Client I want post a Job
- [] As a Client I want to view Jobs I posted
- [] As a Client I want to Edit Jobs I posted
- [] As a Client I view and modify my informations
- [] As a Client I want select one Freelancer for the Job
- [] As a Client I want to have listing of freelancers according to skills


As Freelancer
- [] As a Freelancer I want to signup and login
- [] As a Freelancer I want to have listing of all jobs available
- [] As a Freelancer I want to view the details of a job
- [] As a Freelancer I want to apply for **open** jobs
- [] As a Freelancer I want to filter through jobs
- [] As a Freelancer I want to view all the jobs I applied for
- [] As a Freelancer I view and modify my informations
- [] As a Freelancer I want to get notified when I am accepted for a job

### Install
Make sure you have [Node](www.google.com) and [Git](www.github.com) installed.
- Clone repo
- cd `afreelancer`
- `npm install`
- cd `afreelancer/backend`
- `npm install`

Run frontend
- cd `afreelancer`
- npm start

This will start the frontend

Run backend _in another terminal_
- cd `afreelancer/backend`
- nodemon server.js

### Structure

    └───backend/
        └───models
    └───node_modules/
    └───public/
    └───src/
        └───components
            ├───images
            │   └───blog
            ├───layout
            ├───modules
            └───reducers
    └───package-lock.json
    └───package.json
    └───README.md


### Database
**Mongodb** is used in this application
Here are some useful command for _mongodb database_. You can find more online
**NoSql** databases

```
Mongodb notes
show dbs
    show databases
use <name>
    create and use a database
db.createUser({})
    create a user for the database
db.createCollection(<name>)
    collections are similar to tables in relational databases
show collections
    show all the collections in database
db.<collection name>.insert({})
    insert data into collection
db.<collection name>.find();
    show all data in collection
db.<collection name>.find().pretty;
    show all data in collection in a pretty way
db.<name>.update({},{})
    update the information in the field containing the first parameter
    db.customers.update({first_name}:"Steve",{$set:{age:45}});
        update the field age in the variable with first_name steve
        $unset: also exist
db.<collection name>.remove({})
    delete element in collection
```

### React Modules
##### Redux
This is used to keep track of a global state for the whole application

 Actions

`/src/components/reducers/postReducers.js `
- 'LOGIN':   return {isAuthenticated:true,};
- 'LOGOUT': return {isAuthenticated:false, token:null};