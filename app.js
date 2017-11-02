var app = require('express')();
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
// mongoose.connect('mongodb://achim:mQ8sOpOikNKXTjWt@cluster0-shard-00-00-j6d3u.mongodb.net:27017,cluster0-shard-00-01-j6d3u.mongodb.net:27017,cluster0-shard-00-02-j6d3u.mongodb.net:27017/yota?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', {useMongoClient: true})
mongoose.connect('mongodb://localhost/yota', {useMongoClient: true})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var index = require('./routes/index');
var cars = require('./routes/car');
var destinations = require('./routes/destination');
var positions = require('./routes/position');

app.use('/', index);
app.use('/cars', cars);
app.use('/destinations', destinations);
app.use('/positions', positions);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.send('something error bray');
});

module.exports = app;
