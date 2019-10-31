// Dependencies
const router = require('express').Router()

// File Imports
const exampleController = require('../../controllers/exampleController');

// Matches with '/api/books'
router.route('/')
    .get(exampleController.findAll);

// matches with '/api/books/:id'
router.route('/:id')
    .get(exampleController.findById)
    .post(exampleController.addExample)
    .put(exampleController.updateExample)
    .delete(exampleController.deleteById);

module.exports = router;