const cart_model = require('../models/cart');


module.exports = {
	addCart : function(userObject){

		let promise = cart_model.create(userObject);
		return promise;
	} , 
	 show : async function({userid}){
	 	console.log('herre in user_crud. : ',userid )
		//return await cart_model.findOne({"emailid" : userid , "pwd" : password})
		const doc = await cart_model.find({"emailid" : userid });

		if(doc){
			console.log('doc received is : '+doc);
			return doc;
		}
		return null;
	} , 

		update : async function({userid , productid , quantity}){
	 	console.log('herre in user_crud. : ',userid )
		//return await cart_model.findOne({"emailid" : userid , "pwd" : password})
		
		let doc = await cart_model.updateOne({"emailid" : userid , "productID": productid },{$set:{"quantity":quantity}});

		if(doc){
			console.log('doc received is : '+JSON.stringify(doc));

			if(doc.productID==productid){
				console.log('doc productid received is : '+doc.productID);
				doc = await cart_model.update({"emailid" : userid},{$set:{"quantity":quantity}});
				return doc;
			}
			
		}
		return doc;
	
	} , 

		delete : async function({userid , productid}){
	 	console.log('herre in user_crud. : ',userid )
		//return await cart_model.findOne({"emailid" : userid , "pwd" : password})
		const doc = await cart_model.deleteOne({"emailid" : userid , "productid": productid });

		if(doc){
			console.log('doc received is : '+doc);
			return doc;
		}
		return null;
	
	}
}