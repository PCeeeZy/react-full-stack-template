// Dependencies
const router = require('express').Router();
const path = require('path');

// File Imports
const apiRoutes = require('./api');

// Routes
router.use('/api', apiRoutes); //localhost:3000/api

// any other route--send em to the build index.html
// router.use((req, res) => {
//     res.sendFile(path.join(__dirname, '../../client/build/index.html'))
// });

// export it!
module.exports = router;