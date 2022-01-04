const  {Schema , SchemaTypes} = require('../connect');
const  mongoose = require('../connect');

/*
{
    "userid" : "champ@gmail.com",
    "productID" : "MB123",
    "productname" : "nokia",
    "productTYPE":"mobile",
    "price" : "1250"
}

*/

const cartSchema = new Schema({
	emailid : {type : SchemaTypes.String , required : true } , 
	productID : {type : SchemaTypes.String , required : true , min : 2 , max : 15} , 
	productname : {type : SchemaTypes.String , required : true } , 
	productTYPE : {type : SchemaTypes.String , required : true } , 
	price : {type : SchemaTypes.String , required : true } , 
	quantity : {type : SchemaTypes.String , required : true , min : 2 , max : 10}

} , {timestamps :true});

// what is the schema||COllection  name of the database in nosql , ie , build 'users' on the basis of cartSchema
const cartModel = mongoose.model('cart', cartSchema);

module.exports = cartModel ; 