const bcrypt = require('bcrypt');

module.exports = {
	SALT : 10,
	//during the time of the registration of the details 
	generateHash(password){
		console.log('pass recevide. encryption  :'+password)
		return bcrypt.hashSync(password,this.SALT);
	} , 

	// during the time of login details checking if they r correct or not 
	compareHash(dbPassword , plainPassword){
		//return an boolean value 
		console.log('compareSync : dbPassword : '+dbPassword+' plainPassword : '+plainPassword);

		//function defination is : function compareSync(data, hash) 
		return bcrypt.compareSync(plainPassword , dbPassword);

	}

}