//this is how it works in using routes in different file

const express = require("express");

const router = express.Router();

//import UserModel
const UserModel = require("../models/User");

//import joi
const Joi = require("@hapi/joi");

//importing bcrypt
const bcrypt = require("bcrypt");
//if you want to encrypt the password it require two steps:1) generate a salt //salt is random string/text
//2)hash a password -> bcrypt create a hash(123131,salt) 1st parameter is password and 2nd is random text

const jwt = require("jsonwebtoken");
//this method takes two parameter first is id and 2nd one is secret string 'asdfasdfasdf' as it..which is used to encrypt the payload data and create the jwt...

const verifyToken = require("./verifyjwt");
router.get("/token", (req, res) => {
  // const token = jwt.sign({ _id: 123123 }, "asdfasdfasdf");

  //As the secret is very confidential we can't make it part of code/file..so we saved it in .env file and import it..as following

  const token = jwt.sign({ _id: 123123 }, process.env.SECRET);

  res.send(token);
  //once JWT is created,it sendby to the client in the response body using 'res.send()'
});

router.get("/home", (req, res) => {
  //console.log("This is Home API"); this will show in terminal ,, if you use this
  res.json({
    body: {
      message: "home API",
    },
  });

  // this will send reponse to user
});

router.post("/add", async (req, res) => {
  //suppose you want to create validation for name,email and password we need to create validation schema
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().min(3).email().required(),
    password: Joi.string().min(3).required(),
  });
  //To add validation for this schema there is Schema method

  const { error } = Joi.validate(req.body, schema);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  //bcrypt.genSalt(17)generates a random salt and the parameter is 17..
  const salt = await bcrypt.genSalt(17);
  //bcrypt.hash() then takes in the text password from body and convert it into hash password
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const user = new UserModel({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  });

  //To Save the data in database
  //user.save();

  //The following code:data we enter using postman which save on database and it print it on terminal using then and catch method..
  user
    .save()
    .then((result) => {
      console.log("User saved successfully:", result);
    })
    .catch((error) => {
      console.error("Error saving user:", error);
    });
});

//This code defines a route for GET requests to "/all" and retrieves all the data from the MongoDB database using the UserModel.find() method. The retrieved data is then sent as a response to the client using the res.send() method. If there is an error during the retrieval process, the error message is sent as a response instead of the data.
router.get("/all", async (req, res) => {
  const users = await UserModel.find();

  try {
    res.send(users);
  } catch (err) {
    res.send(err);
  }
});

//This route is used to get the details of a user by their ID. The user ID is passed as a URL parameter (":id") and is accessed using "req.param.id". The function then uses the "findById()" method of the "UserModel" to search the database for the user with the given ID. If the user is found, their details are sent in the response using "res.send()". If there is an error, the error message is sent in the response instead.

router.get("/user/:id", async (req, res) => {
  const id = req.params.id;

  const user = await UserModel.findById(id);

  try {
    res.send(user);
  } catch (err) {
    res.send(err);
  }
});

//This route is used to delete a specific user from the database using their ID. The ID of the user to be deleted is extracted from the URL parameter using req.params.id.
// The UserModel is used to call the remove() method to delete the user with the corresponding ID from the database.

router.delete("/user/:id", async (req, res) => {
  const id = req.params.id;

  const deletedUser = await UserModel.deleteOne({ _id: id });

  try {
    res.send(deletedUser);
  } catch (err) {
    res.send(err);
  }
});

//Now we will update data for that we used the Patch OR Put method route.
//we use req.params.id to get the id of the we want to update,and req.body to get data we want to update the user with.we then use 'findoneAndUpdate()' to find the user by their id,update the user with the new data and return the updated user

//the 'new : true' option is used to return the updated user instead of the orinigal user before the update.

router.patch("/user/:id", async (req, res) => {
  const id = req.params.id;
  const update = req.body;

  try {
    const updatedUser = await UserModel.findOneAndUpdate({ _id: id }, update, {
      new: true,
    });
    res.send(updatedUser);
  } catch (err) {
    res.send(err);
  }
});

//In Node.js, you can export a module by assigning its value to the module.exports object. In the code you provided, router is being exported as a module so that it can be used in other parts of the project. By requiring the module in another file, you can use the exported router object to define your API routes.
module.exports = router;
