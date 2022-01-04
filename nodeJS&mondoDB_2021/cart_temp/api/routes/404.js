const express = require('express');
const router = express.Router(); // This function is used when you want to create a new router object in your program to handle requests.


const four = require('../../controller/404')


//404 ERROR 
router.get('*', four.err)

module.exports = router;

