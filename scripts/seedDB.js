// Dependencies
const mongoose = require('mongoose');

// File Imports
const db = require('../models');

// Mongoose connection
const DBNAME = 'practiceApp' // *******CHANGE THIS*******

// connect to mongo db  -- dev or local?
mongoose.connect(
    process.env.MONGOD_URI || `mongodb://localhost/${DBNAME}`
);

const bookSeed = [
    {
        title: "The Dead Zone",
        author: "Stephen King"
      },
      {
        title: "Lord of the Flies",
        author: "William Golding"
      },
      {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger"
      },
      {
        title: "The Punch Escrow",
        author: "Tal M. Klein"
      },
      {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
      }
];

db.Book
    .remove({}) // drop if exists
    .then(() => db.Book.insertMany(bookSeed) // insertMany goes through the array and inserts each index, one at a time.
    )
    .then(data => { //bookDataInserted is a name I'm using to help me remember what the data is.
        console.log(data.result);
        // console.log(`${bookDataInserted.result.n} records inserted`);
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });