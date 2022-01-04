

module.exports.orderfunction = function (request,response){
	// this below is for the query string 
	//url : http://localhost:1111/order?orderid=12021
	//url : http://localhost:1111/order?orderid=12021&name=Jain

	// const orderID = request.query.orderid; //query string 
	// const name = request.query.name;




	// this below is for the path param
	const name='default name';
	const orderID = request.params.orderid; 
	response.send(new Date().toLocaleTimeString() + ' : order id received : '+orderID + ' : name : '+name);

}


