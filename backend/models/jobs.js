// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure
const Job = new Schema(
  {
    id: Number,
    title: String,
    descr: String,
    deadline: Date,
    amount: String,
    skillList: Array,
    author: String,
    author_Id: String,
    location: String,
    category: String,
    author_Info: {},
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Job", Job);