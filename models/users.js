// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure
const User = new Schema(
  {
    id: Number,
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    location: String,
    userSkills: Array,
    my_jobs: Array,
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", User);