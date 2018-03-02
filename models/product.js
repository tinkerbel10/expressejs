var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var productSchema = new Schema({

  product_name :{type:String},
  product_desc : {type:String},
  product_quantity :{type: Number},
  expiration_date: {type: Date}
});
var product = mongoose.model('product',productSchema);
module.exports = product;
