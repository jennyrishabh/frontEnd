const express = require('express');
const app = express(); //express function calls and returens an app function ..
//it create an new app for the application

//getting the routing name for the url mapping from the config.js file
const {ROOT} = require('./utils/config').ROUTER;


//app.use(middleware) where middleware is an function
app.use(express.static('public')) //using middleware(it is an function)

// this is for reading the .env files from the project and load the data in that file into our project ...
require('dotenv').config();


//middleware so that our application can also recieve the json data 
app.use(express.json()); //json =>   {key : value}
//middleware so that our application can also data insode of the body in url encodeed form 
app.use(express.urlencoded())  // url =>    key=value&key=value     





//404 ERROR 
// app.get('/*',(req,res)=>{
// 	res.send('ERROR : typed ');
// })



//cart
app.use(ROOT,require('./api/routes/cart'))



app.use(ROOT,require('./api/routes/user'))
app.use(ROOT,require('./api/routes/order'))
app.use(require('./api/routes/404'))

//note : here 1111 is the port no. for the application.
const server = app.listen(process.env.PORT || 1111 ,(err)=>{
	if(err){console.log('server crash ..!! ',err)}
	else{console.log('server started .. at port no .  ',server.address().port)}
});


