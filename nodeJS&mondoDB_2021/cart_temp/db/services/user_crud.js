const user_model = require('../models/user');

const encryption = require('../../utils/encrypt');

module.exports = {
	register : function(userObject){
		console.log('pass recevide. 1 :'+userObject.pwd)
		userObject.pwd = encryption.generateHash(userObject.pwd);
		console.log('pass recevide. 2 :'+userObject.pwd)


		let promise = user_model.create(userObject);
		return promise;
	} , 
	 login : async function({userid , password}){
	 	console.log('herre in user_crud. : ',userid , password)
		//return await user_model.findOne({"emailid" : userid , "pwd" : password})
		const doc = await user_model.findOne({"emailid" : userid });

		if(doc){
			console.log('doc received is : '+doc)
			//console.log('doc pwd : '+doc.pwd+'  : user :'+password)
			if(encryption.compareHash(doc.pwd , password)){
				console.log('doc.password is :'+doc.pwd+' : user entered password is : '+password)
				return doc;
			}
		}
		return null;
	}
}