var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Product = require('../models/product');
//CREATE

router.post('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  var data = req.body
  var product = new Product(data);
  product.save(function(err, result){
    console.log("Save data---->" +JSON.stringify(result));
    res.send(result)
  });
});
router.get('/editform/:id', function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  var id = req.params.id;
  Product.findById(id, function(err, result){
    console.log("FORM DATA---> " + JSON.stringify(result));
    // res.send(result);
    res.render('edit',{result:result});
  });
});
router.post('/:id', function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  var id = req.params.id;
  var formData = req.body;
  Product.findByIdAndUpdate(id, {$set: formData}, function(err, result){
    console.log("formData--->" + JSON.stringify(result))
  res.send(JSON.stringify(result));
  });
});

router.post('/delete/:id', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  var id = req.params.id;
  Product.findByIdAndRemove(id, function(err, results){
        console.log("FORM DATA---> " + JSON.stringify(results));
          res.send(JSON.stringify(results));
   });
});

router.get('/:id', function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  var id = req.params.id;
  Product.findById(id, function(err, result){
    console.log("FORM DATA---> " + JSON.stringify(result));
    res.json(result);
    // res.render('view',{result:result});
  });
});


router.get('/', function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  Product.find({}, function(err, result){
    console.log("FORM DATA---> " + JSON.stringify(result));
      res.json(result);
      // res.render('myindex', { result:result, title: 'Employee Details'});
  });
});


router.post('/all', function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  var data = req.body;
  Product.find(data, function(err, result){
    console.log("FORM DATA---> " + JSON.stringify(result));
    objResponse = {result: "success", data: result}
      res.send(objResponse);
  });
});

module.exports = router;
