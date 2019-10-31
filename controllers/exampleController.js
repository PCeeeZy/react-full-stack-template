// File Imports
const db = require('../models');

module.exports = {
    findAll: (req, res) => {
        db.Book.find({
            //all
        }).then(dbBooks => {
            res.json(dbBooks)
        }).catch(err => {
            res.err(err)
        })
    },
    findById: (req, res) => {
        db.Book.findOne({
            id: req.params.id
        })
        .then(singleBook => {
            res.json(singleBook)
        })
        .catch(err => {
            res.err(err)
        })
    },
    addBook: (req, res) => {
        res.send(`addbook is hit. Id is ${req.params.id}`)
    },
    updateBook: (req, res) => {
        res.send(`updateBook is hit. Id is ${req.params.id}`)
    },
    deleteById: (req, res) => {
        res.send(`deleteById is hit. Id is ${req.params.id}`)
    }
}