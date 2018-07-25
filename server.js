var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./app/models/User');
var router = require('./app/router');
var config = require('./app/config');

mongoose.Promise = global.Promise;

mongoose.connect(config.db,{ useNewUrlParser: true });

app.use(express.static('www')); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router);

app.post('/Form', (req, res) =>{
  var user = new User({
      name: req.body.name,
       age: req.body.age
  });

  user.save(err => {
      if (err) return handleError(err);
  });

  res.redirect('/');
});

app.get('/users', (req, res) => {
  User.find({}, (err, docs) =>{
       if (err) return handleError(err);
       res.send(docs);
  });
});

app.listen(config.port, function () {
  console.log('Example app listening on port '+config.port);
});