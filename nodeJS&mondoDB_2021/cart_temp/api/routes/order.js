
const express = require('express');
const router = express.Router();


const odController = require('../../controller/order')
const {DETAILS , HISTORY} = require('../../utils/config').ROUTER.ORDER;


router.get(DETAILS+'/:orderid', odController.orderfunction );



module.exports = router;