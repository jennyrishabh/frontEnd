const  {Schema , SchemaTypes} = require('../connect');
const  mongoose = require('../connect');
const {USERS} = require('../../utils/config').SCHEMAS ; 


const userSchema = new Schema({
	emailid : {type : SchemaTypes.String , required : true , unique : true} , 
	pwd : {type : SchemaTypes.String , required : true , min : 4 , max : 15} , 
	name : {type : SchemaTypes.String , required : true }

} , {timestamps :true});

// what is the schema||COllection  name of the database in nosql , ie , build 'users' on the basis of userSchema
const usermodel = mongoose.model(USERS, userSchema);

module.exports = usermodel ; 