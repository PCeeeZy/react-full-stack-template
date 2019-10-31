// Dependencies
const mongoose = require('mongoose');

// schema instance
const Schema = mongoose.Schema;

// new Schema = Book
const exampleSchema = new Schema({
    nameIGuess: {
        type: String,
        required: true
    },
    isCool: {
        type: String,
        required: true
    }
});

const example = mongoose.model('Example', exampleSchema);

module.exports = example;