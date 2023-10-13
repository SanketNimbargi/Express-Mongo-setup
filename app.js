const express = require("express");
//by Doing this you can able use all the dependencies of express

const app = express(); //we need to use express() every time thats why we assign app to it

//import mongoose in our file
const mongoose = require("mongoose");

//import env..
const env = require("dotenv/config");

app.use(express.json()); //this allow json posting to the server

//importing user.js file
const userRoutes = require("./routes/user");
app.use("/api/", userRoutes);
//if you use any seperate file route it will take two parameter 1st one is 'url' and second one is the userRoute why userRoute bcz we imported user route file

//if you have auth route you can do that following thing
//app.use('/api/auth/',authRoutes)

//express is our function now
app.listen("3000", () => {
  console.log("server running!!");
});

//connection of mongoose....
//DB is key write in .env file
mongoose
  .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

//when we write connection for mongodb our username , password anyone can see it to prevent this we use .env file
//install package : npm install dotenv run this command in terminal
