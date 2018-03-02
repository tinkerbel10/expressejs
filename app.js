var express = require('express');
var mongo = require('mongodb').MongoClient;
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var routes = require('./routes/index');
var users = require('./routes/users');
var employee = require('./routes/employee');
var calculator = require('./routes/calculator');
var product = require('./routes/product');
var fetchCrud = require('./routes/new');
//models
var router = express.Router();
var notificationModel = require('./models/employee');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname,'./node_modules/bootstrap')));
app.use(express.static(path.join(__dirname,'./node_modules/jquery')));


// app.use('/', routes);
app.use('/users', users);
app.use('/employee', employee);
app.use('/calculator', calculator);
app.use('/product', product);
app.use('/', fetchCrud);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});



var http = require('http');
var server = http.createServer(app);  //pass a http.Server instance
// var io = require('socket.io').listen(server);
server.listen(4300);

mongoose.connect('mongodb://127.0.0.1/employeedb', function(err, db){

});
// mongo.connect('mongodb://127.0.0.1/ridedb', function(err, db){
//   if (err) throw err;
// io.sockets.on('connection', function(socket) {
//
//   var col = db.collection('notification');
//   var room = "";
//
//   socket.on('join-room', function(data){
//     room = data.room;
//     console.log("ROOM----> " + data.room)
//     socket.join(data.room);
//   });
//
//   socket.on('driverLocation', function(data){
//     var formData = {
//         userId: data.userId,
//         lat: data.lat,
//         long: data.long
//     }
//     io.sockets.in(room).emit('placeDriverLocation', formData);
//   });
//
//   socket.on('userLocation', function(data){
//     var formData = {
//       driverId : data.driverId,
//       lat : data.lat,
//       long : data.long
//     }
//     io.sockets.in(room).emit('placeUserLocation', formData);
//   });
//
//   socket.on('scheduleRecord' , function(data){
//     var reservationId = data.reservationId;
//     //---->>Fetch data where reservationid = reservationId
//
//     col.find().sort({_id: reservationId}).toArray(function(err, res){
//       if (err) throw err;
//       socket.in(room).emit('scheduleListing', data);
//     });
//   });
//
//   socket.on('saveNewNotification', function(data){
//       // console.log(data);
//     // ------>>Insert Data
//     col.insert({
//       subscriber_id   : data.subscriber_id,
//       notifier_name   : data.notifier_name,
//       type            : data.type,
//       reference_id    : data.reference_id,
//       reference_title : data.reference_title,
//       text            : data.text
//     }, function(){
//         socket.emit('myoutput', [data]);
//     });
//   });
//   socket.on('createNotif', function(data){
//     col.find().toArray(function(err, data){
//       console.log(data)
//       io.sockets.in(room).emit('sampleSocket', data);
//     });
//   });

//
//
// });
// });


module.exports = app;
