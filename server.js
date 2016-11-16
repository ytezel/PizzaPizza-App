var express     = require('express');
var bodyParser  = require('body-parser');
var path = require('path');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var config = require('./config'); // get our config file
var port = process.env.PORT || 7001; // used to create, sign, and verify tokens
var app  = express();

mongoose.connect(config.database); // connect to database

app.set('superSecret', config.secret); // secret variable
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/node_modules', express.static(path.join(__dirname, '/client/node_modules')));
app.use('/app', express.static(path.join(__dirname, '/client/app')));
app.use('/systemjs.config.js', express.static(path.join(__dirname, '/client/systemjs.config.js')));
app.use('/favicon.ico', express.static(path.join(__dirname, '/favicon.ico')));


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/client/index.html'));
});

app.listen(port);
