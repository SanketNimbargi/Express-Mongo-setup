//in models,file with Captial U User.js in this file I Create mongodb schema

//By convention, model files in Node.js are often named with capital letters to differentiate them from other files in the application.

const mongoose = require("mongoose");

const User = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//exporting this schema
module.exports = mongoose.model("User", User);

//what does this schema do :
//I am telling mongodb that please create table with fields..
