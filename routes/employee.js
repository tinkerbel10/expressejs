var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Employee = require('../models/employee');
//CREATE

router.get('/:id', function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  var id = req.params.id;
  Employee.findById(id, function(err, result){
    console.log("FORM DATA---> " + JSON.stringify(result));
    res.json(result);
    // res.render('view',{result:result});
  });
});


router.get('/', function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  Employee.find({}, function(err, result){
    console.log("FORM DATA---> " + JSON.stringify(result));
      // res.json(result);
      res.render('myindex', { result:result, title: 'Employee Details'});
  });
});

router.get('/lahat', function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  Employee.find({}, function(err, result){
    console.log("FORM DATA---> " + JSON.stringify(result));
      res.json(result);
      // res.render('myindex', { result:result, title: 'Employee Details'});
  });
});


router.post('/all', function(req, res, next){
  var data = req.body;
  Employee.find(data, function(err, result){
    console.log("FORM DATA---> " + JSON.stringify(result));
    objResponse = {result: "success", data: result}
      res.send(objResponse);
  });
});

router.post('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  var data = req.body
  var employee = new Employee(data);
      // employee.first_name = req.body.first_name;
      // employee.last_name = req.body.last_name;
      // employee.department = req.body.department;
      // employee.position = req.body.position;
  employee.save(function(err, result){
    console.log("Save data---->" +JSON.stringify(result));
    res.send(result)
  });
});
router.get('/editform/:id', function(req, res, next){
  var id = req.params.id;
  Employee.findById(id, function(err, result){
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
  Employee.findByIdAndUpdate(id, {$set: formData}, function(err, result){
    console.log("formData--->" + JSON.stringify(result))
  res.send(JSON.stringify(result));
  });
});

router.post('/delete/:id', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
   res.header('Access-Control-Allow-Headers', 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token');
  var id = req.params.id;
  Employee.findByIdAndRemove(id, function(err, results){
        console.log("FORM DATA---> " + JSON.stringify(results));
          res.send(JSON.stringify(results));
   });
});


module.exports = router;
