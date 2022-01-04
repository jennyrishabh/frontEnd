const mongoose = require('mongoose');

const dbOptions = {
	maxPoolSize : 5
}



//function is a callback function taking the err functin as there maybe an error option 
mongoose.connect(process.env.DB_URL , dbOptions , (err) => {

	if(err){console.log('ERROR occuried in DB connect.js',err);}
	else{console.log('Connection Successful !!')}

});

module.exports = mongoose ; 