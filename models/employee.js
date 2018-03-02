var mongoose =  require('mongoose');
var Schema = mongoose.Schema;
var employeeSchema = new Schema({

  first_name   : {type : String},
  last_name   : {type : String},
  department  : {type : String},
  position    : {type : String },
  createdAt   : {type : Date, default: Date.now},
  updatedAt   : {type : Date, default: Date.now},
  is_deleted  : {type : Boolean}

});
var employee = mongoose.model('employee', employeeSchema);
module.exports = employee;
