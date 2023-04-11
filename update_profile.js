// NOTE: THIS CODE HAS NOT BEEN TESTED YET
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;
const uri = "mongodb+srv://CoShopUser:<password>@coshopcluster.iyjalfb.mongodb.net/?retryWrites=true&w=majority";

// Middleware to parse JSON data in request body
app.use(bodyParser.json());

// Endpoint to handle POST request from form
app.post('/update-user-info', function(req, res) {
  // Get the user's email and password from the request body
  const { email, password } = req.body;

  // Connect to the MongoDB database
  MongoClient.connect(uri, function(err, client) {
    if (err) {
      console.log(err);
      res.status(500).send('Error connecting to database');
      return;
    }

    // Get a reference to the users collection in the database
    const db = client.db('CoShopDatabase');
    const collection = db.collection('users');

    // Find the user in the database with the given email and password
    collection.findOne({ _id: email, __v: password }, function(err, user) {
      if (err) {
        console.log(err);
        res.status(500).send('Error finding user in database');
        client.close();
        return;
      }

      if (!user) {
        res.status(401).send('Invalid email or password');
        client.close();
        return;
      }

      // Update the user's information in the database
      collection.updateOne({ _id: updateEmail, __v: updatePassword }, { $set: req.body.newInfo }, function(err, result) {
        if (err) {
          console.log(err);
          res.status(500).send('Error updating user information');
        } else {
          res.send('User information updated successfully');
        }

        client.close();
      });
    });
  });
});

// Start the server
app.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});
