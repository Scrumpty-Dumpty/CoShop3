// Import express module
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const User = require('./client/models/User');
// const { connectToDB } = require('./dbConnection');

// You need to use an Express middleware function that will grant access to the user's data from the body
const app = express();

// Middleware for parsing JSON request bodies
app.use(express.json());
// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));


// specify the directory from which to serve static files
// make the src directory dynamic
app.use(express.static(__dirname + '/client'));

// to start the server, use command "node server.js"
// to stop server, use Ctrl + C
app.listen(3000, () => {
  console.log('Server is running on localhost:3000');
});



// place this code before starting the server:


// // ROUTE TO HANDLE USER CREATION
// app.post('/register', async (req, res) => {
//  // Set Content-Type header to application/json
//  req.headers['content-type'] = 'application/json';      
//  const name = req.body.name;
//       const email =  req.body.email;
//       const password = req.body.password; 
 
//       // Extract name, email, and password from the request body
//   // Log the extracted values to the console
//   console.log('Name:', name);
//   console.log('Email:', email);
//   console.log('Password:', password);
//   // Log the extracted values to the console

//          //  enforce required fields

//   if (!name || !email || !password ) {
//     res.status(400).send("All fields are required.");
//   }
//       // Create a new user using the User model
//       const user = new User({ name, email, password });
  
//       // Save the new user to the database
//       await user.save()
//       .then(savedUser => {
//               console.log('User document saved successfully:', savedUser);
           
//             })
//             .catch(error => {
//               console.error('Error saving User document:', error);
              
//             });
        
//   });
  