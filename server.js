//dependencies
const express = require('express');
const mongoose = require('mongoose');

// Imports
const routes = require('./routes');

// Invoke express instance
const app = express();

// PORT-- production or local
const PORT = process.env.PORT || 3001;

// Configue body parsing for AJAX requests aka middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up the static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
};

// add routes, just API
app.use(routes);

const DBNAME = 'practiceApp' // *******CHANGE THIS*******

// connect to mongo db  -- dev or local?
mongoose.connect(
    process.env.MONGOD_URI || `mongodb://localhost/${DBNAME}`,
    {
        useCreateIndex: true,
        useNewUrlParser: true
    }
);

// SERVER LISTENER
app.listen(PORT, () => {
    console.log(`Server is up. Check it out at http://localhost/${PORT}`);
});