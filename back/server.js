var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');


mongoose.connect('mongodb://localhost/urls');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



var router = express.Router();

app.use(function(req, res, next) {
  	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  	next();
});

router.use(function(req, res, next) {
    console.log('Middleware for Analytics.');
    next();
});

app.use('/api', router);

app.use('/api/urls', require('./app/routes/urls'));


var port = process.env.PORT || 8000;

app.listen(port);
console.log('Listening on port ' + port);
