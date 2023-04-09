const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();


// Connect to the MongoDB database
mongoose.connect('mongodb+srv://CoShopUser:6TvlGsCx9PGmwpNl@coshopcluster.iyjalfb.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define a schema for the user collection
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

// Set up middleware to parse incoming request bodies as JSON
app.use(bodyParser.json());

// Set up a route to serve the user registration form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './register.html'));
});

// Set up a route to handle form submissions
app.post('/register', async (req, res) => {
  try {
    // Check if the two password fields match
    if (req.body.password !== req.body.confirmPassword) {
      res.status(400).send('Passwords do not match!');
      return;
    }

    // Create a new user based on the form data
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      //profileImage: req.file.filename
    });

    // Save the user to the database
    await user.save();

    // Send a success response
    res.send('User registered successfully!');
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).send('Error registering user!');
  }
});

// Start the server
app.listen(8080, () => {
  console.log('Server started on port 8080');
});