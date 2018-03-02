var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var calcuSchema  = new Schema ({

	num1 : {type: Number},
	num2 : {type: Number},
	operator: {type: String},
	result	: {type: Number},
	createdAt   : {type : Date, default: Date.now},
  	updatedAt   : {type : Date, default: Date.now}
});

var calculator  = mongoose.model('calculator', calcuSchema);
module.exports = calculator;