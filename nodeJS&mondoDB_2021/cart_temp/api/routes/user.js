
const express = require('express');
const router = express.Router();


const usrController = require('../../controller/user');

const {LOGIN , REGISTER , PROFILE} = require('../../utils/config').ROUTER.USER;


//for getting the content from the server side 
router.get(PROFILE, usrController.show);


router.post(LOGIN, usrController.login);

router.post(REGISTER, usrController.register);


module.exports = router;