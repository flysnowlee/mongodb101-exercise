var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/vcard');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('MongoDB: connected.');	
});

var userSchema = mongoose.Schema({
    Name: String,
    Phone: String,
    Email: String,
    Address: String,
    Age: Number
})

var userModel = mongoose.model('user', userSchema)

var messageSchema = mongoose.Schema({
    userId: String,
    createdTime: String,
    message: String
})

var messageModel = mongoose.model('message', messageSchema)

// CRUD section

/*var create = function() {
	var person = {
		Name: 'jollen',
		Phone: '0987654321',
		Email: 'test@yahoo.com',
		Address: 'taipei',
		Age: '35'
	};

	var user = new userModel(person);
	user.save();

	console.log('created.');
};

create();*/

//Converter Class
var Converter=require("csvtojson").core.Converter;

//CSV File Path or CSV String or Readable Stream Object
var csvFileName="./roxtal.csv";

//new converter instance
var csvConverter=new Converter();

//end_parsed will be emitted once parsing finished
csvConverter.on("end_parsed",function(jsonObj){
    //console.log(jsonObj); //here is your result json object

    var data = jsonObj.csvRows;

	for(var i in data) {
		var name = data[i].Name;
		var phone = data[i].Phone;
		var email = data[i].Email;
		var adddress = data[i].Address;
		var age = data[i].Age;
		
		console.log(data[i]);
		var user = new userModel(data[i]);
		user.save();
	}

	//var user = new userModel(jsonObj);
	//user.save();

	//console.log('created.');   
});

//read from file
csvConverter.from(csvFileName);


