var express = require('express');
var mongoose = require('mongoose');
var router =  express.Router();
var Calculator = require('../models/calculator');


router.get('/', function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  Calculator.find({}, function(err, result){
    console.log("FORM DATA---> " + JSON.stringify(result));
      res.json(result);
  });
});

router.post('/', function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	var data = req.body;
	var calculator = new Calculator(data);
	 calculator.save(function(err, result){
	 	console.log('data-->'+ JSON.stringify(result));
	 	res.send(result);
	 })
});
module.exports = router;