# AFreeLance
>Online jobs for africans

### Install
- Clone repo
- cd `afreelancer`
- `npm install`
- cd `afreelancer/backend`
- `npm install`

Run frontend
- cd `afreelancer`
- npm start

Run backend _in another terminal_
- cd `afreelancer`
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
db.<name>.insert({})
    insert data into collection
db.<name>.find();
    show all data in collection
db.<name>.find().pretty;
    show all data in collection in a pretty way
db.<name>.update({},{})
    update the information in the field containing the first parameter
    db.customers.update({first_name}:"Steve",{$set:{age:45}});
        update the field age in the variable with first_name steve
        $unset: also exist
db.<name>.remove({})
```

### React Modules
##### Redux
This is used to keep track of a global state for the whole application

 Actions


`/src/components/reducers/postReducers.js `
- 'LOGIN':   return {isAuthenticated:true,};
- 'LOGOUT': return {isAuthenticated:false, token:null};


### To- do
- [x] login system
- [x] post page
- [] profile page
- [x] if else in the redirect not working
- [x] work page
- [] hire page
- [] page transitions
- [] ajax verifications
- [] protect routes with authentication
- [] counting number of post retrieved

