const msgBundle = require('../locales/eng');
const cartCrud = require('../db/services/cart_crud');

const cart = {

	show: async function(request,response){
		

		// URL  :    http://localhost:1111/cart?emailid=champ@gmail.com


		//const {userid} = request.body;
		const userid = request.query.emailid; 

		console.log('data recieved from cart showing : ',userid);

		try {
			// statements
			const doc = await cartCrud.show({userid});
			console.log('doc here in user.js is :',doc)

			if(doc){
				response.status(200).json({message : msgBundle['cartshow.welcome'] , data : doc});
			}
			else{
				response.status(404).json({message : msgBundle['cartshow.fail']});
			}
		} catch(e) {
			
			console.log(e);
		}
		
	},

	addCart: function(request,response){


		// adding of the cart items are done through the postman post request 

		// note : this below name thing is same from the db/model/user.js model the naming in  userObject : 
		let userObject = {
			emailid : request.body.userid , 
			productID : request.body.productID , 
			productname : request.body.productname ,
			productTYPE : request.body.productTYPE ,
			price : request.body.price ,
			quantity : request.body.quantity
		}

		//calls the services
		const promise = cartCrud.addCart(userObject) ;

		promise.then(
			function(value){response.status(200).json({message : msgBundle['cart.welcome'] , doc : value});} , //sucess
			function(value){response.status(500).json({message : msgBundle['cart.fail']});}	//error
			);



		
	} ,

	update : async function (request , response) {
		//URL    :     http://localhost:1111/cart/champ@gmail.com?productid=MB125&quantity=2




		const userid = request.params.emailid; 
		const productid = request.query.productid;
		const quantity = request.query.quantity;


		console.log('data recieved from cart showing : ',userid);

		try {
			// statements
			const doc = await cartCrud.update({userid , productid  ,quantity});
			console.log('doc here in user.js is :',doc)

			if(doc){
				response.status(200).json({message : msgBundle['cartshow.welcome'] , data : doc});
			}
			else{
				response.status(404).json({message : msgBundle['cartshow.fail']});
			}
		} catch(e) {
			
			console.log(e);
		}



	} , 

	delete : async function (request , response) {

		//URL   :  http://localhost:1111/cart/champ@gmail.com/delete?productid=MB123



		const userid = request.params.emailid; 
		const productid = request.query.productid;


		console.log('data recieved from cart showing : ',userid);

		try {
			// statements
			const doc = await cartCrud.delete({userid , productid });
			console.log('doc here in user.js is :',doc)

			if(doc){
				response.status(200).json({message : msgBundle['cartshow.welcome'] , data : doc});
			}
			else{
				response.status(404).json({message : msgBundle['cartshow.fail']});
			}
		} catch(e) {
			
			console.log(e);
		}



	}

}

module.exports = cart;

