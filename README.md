# ExpressJS+MongoDB : Learn Express And MongoDB using this Repository..

first thing to do create a File and open command prompt and do \*\*cd filename to go that file directory and run => npm init command that initializes a new package.json file for a Node.js project. then install express: npm install Express and check package.json file you will see package express and its version and other information.

**\*nodemon**
it is used to automatically restart the node.js server..when some changes done in code
npm i nodemon <= this command is used to install nodemon.This can save time and increase the productivity..

**Mongoose Installation**
Open the terminal run command known as => npm install mongoose
code for connection of database write in app.js file...
=>>>>>>Here are the steps to create a free cluster in MongoDB Atlas:

1)Go to the MongoDB Atlas website and sign up for a free account.

2)Once you have signed up and logged in, click on the "Build a Cluster" button.

3)Select the free tier option and choose a cloud provider and region where you want to host your cluster.

4)Choose a cluster name and click on "Create Cluster".

5)Once the cluster is ready, you can start configuring your database by creating database users, setting up security,add your IP address to it and connecting your applications to the cluster.
Copy the link of mongodb+srv://jaykulkarni17ab:<password>@cluster0.5ppco0v.mongodb.net/test like this...you can also use MongoDB Compass..

\***\*\*\*\*\*\***For testing API's,I generally used POSTMAN..you can go for thunder client also it's your choice**\*\***\***\*\***

**\*\***Data Validation\***\*\*\*\*\*\*\***
for data Validation we used hapi/joi it is the Validation library for javaScript. it is commonly used in Node.js applications to validate user input before it is processed by the application.
you can use the Express Validation Also..
for install it use this command: npm i @hapi/joi
if our validate function is not working then run this commmand: npm install @hapi/joi@15.0.3 and
try again

\***\*Encryption of password in database\*\***
bcrypt is a Node.js module that provides password hashing and verification functionality. It is used for securing user passwords stored in databases.
To use bcrypt install it using "npm install bcrypt"

Now we create JSON web token..it jwtwebtoken is a library..for that we need to install : npm install jsonwebtoken
//JWT commanly used for authentication and authorization purposes.it securly handles user authentication and authorization in web Application
