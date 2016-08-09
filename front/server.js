var express    = require('express');
var app        = express();

app.use(express.static('public'));

app.get('/', function (req, res, next) {
	res.sendFile('public/index.html');

});

var port = process.env.PORT || 8080;

app.listen(port);
console.log('Listening on port ' + port);
