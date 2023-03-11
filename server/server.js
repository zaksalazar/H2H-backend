
const express = require('express');
// Run npm install mongodb and require mongodb and MongoClient class
const mongodb = require('mongodb').MongoClient;
const Users = require('./models/users')
const genericItems = require('./models/genericItems')
const supplies = require('./models/supplies')
const mongoose = require('mongoose');

const app = express();
const port = 3001;

// Connection string to local instance of MongoDB including database name
const connectionStringURI = `mongodb+srv://RangerZak:comeonyouspurs@cluster0.upfuis5.mongodb.net/?retryWrites=true&w=majority`;

// Declare a variable to hold the connection
let db;


// Creates a connection to a MongoDB instance and returns the reference to the database
mongodb.connect(
  // Defines connection between app and MongoDB instance
  connectionStringURI,
  // Sets connection string parser and Server Discover and Monitoring engine to true and avoids warning
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    // Use client.db() constructor to add new db instance
    db = client.db();
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }
);

app.use(express.json());


