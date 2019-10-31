// Dependencies
const router = require('express').Router();
const path = require('path');

// File Imports
const exampleRoutes = require('./example.js');
// const anotherThingRoutes = require('./anotherThing.js')

// Routes -- already at /api
router.use('/example', exampleRoutes);  // so this is actually /api/example
// router.use('/anotherThing', anotherThingRoutes) // and this is actually /api/anotherThing

// any other route--send em to the build index.html
// router.use((req, res) => {
//     res.sendFile(path.join(__dirname, '../../client/build/index.html'))
// });

// export it!
module.exports = router;