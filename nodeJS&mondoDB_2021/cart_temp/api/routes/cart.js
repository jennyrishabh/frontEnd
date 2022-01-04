
const express = require('express');
const router = express.Router();


const cart = require('../../controller/cart');


router.get('/cart', cart.show);


router.get('/cart/:emailid', cart.update);


router.get('/cart/:emailid/delete', cart.delete);



router.post('/addcart', cart.addCart);

module.exports = router;