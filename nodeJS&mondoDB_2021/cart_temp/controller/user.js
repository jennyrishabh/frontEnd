const msgBundle = require('../locales/eng');
const userCrud = require('../db/services/user_crud');

const userController = {

	show : function(request,response){
		response.send('u r in the show section')
	},

	login: async function(request,response){
		// const json = request.body;
		// console.log('data recieved from login pg : ',json);


		const {userid , password} = request.body;
		console.log('data recieved from login pg : ',userid,password);

		try {
			// statements
			const doc = await userCrud.login({userid ,password});
			console.log('doc here in user.js is :',doc)

			if(doc){
				response.status(200).json({message : msgBundle['login.welcome'] , data : doc.userid ,  pwd : doc.password});
			}
			else{
				response.status(404).json({message : msgBundle['login.fail']});
			}
		} catch(e) {
			
			console.log(e);
		}
		



		/*   All the satus code for the http req, response : 

			Informational responses (100–199)
			Successful responses (200–299)
			Redirection messages (300–399)
			Client error responses (400–499)
			Server error responses (500–599)
		*/

		// The below  request 200 status code means succeeded. The result meaning of "success" depends on the HTTP method
		//response.status(200).json({message : 'Welcome on the login page ~ !!' , data : JSON.stringify(json)});


		//response.send('u r in the login section : data recieved'+JSON.stringify(json))
	},

	register: function(request,response){
		//response.send('u r in the signup :  section');

		// note : this below name thing is same from the db/model/user.js model the naming in  userObject : 
		let userObject = {
			emailid : request.body.userid , 
			pwd : request.body.password , 
			name : request.body.name 
		}

		//calls the services
		const promise = userCrud.register(userObject) ;

		promise.then(
			function(value){response.status(200).json({message : msgBundle['register.welcome'] , doc : value});} , //sucess
			function(value){response.status(500).json({message : msgBundle['register.fail']});}	//error
			);


		/* this is the same thing as  written above ...

		promise.then(doc => {
			response.status(200).json({message : msgBundle['register.welcome'] , doc : doc});
		}).catch(err => {
			response.status(500).json({message : msgBundle['register.fail']});
		})

		*/


		/*  OUTPUT  : 

		how to send data from post man : 

			{
			    "userid" : "champ@yahoo.com",
			    "password" : "champ123",
			    "name" : "Unnu" 
			}

		and how do we get the data back to the console 

			{
			    "message": "register success !!",
			    "doc": {
			        "emailid": "champ@yahoo.com",
			        "pwd": "champ123",
			        "name": "Unnu",
			        "_id": "61b2f2e888b5f8343f9fd9a6",
			        "createdAt": "2021-12-10T06:25:44.483Z",
			        "updatedAt": "2021-12-10T06:25:44.483Z",
			        "__v": 0
			    }
			}
		*/



		
	}

}

module.exports = userController;


/*

//promise object in Js 
let promise = new Promise(function(myresolve , myreject ){
	if(err){myresolve();}
	else{myreject();}
})


promise.then(function(value){anotherFunction();}, function(value){anotherFunction();});

*/


