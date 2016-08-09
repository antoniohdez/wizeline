var Url = require('../models/url');

var availableUrl = function(shortUrl) {
    var test = Url.findOne({ 'shortUrl': shortUrl }, 'url shortUrl', function (err, url) {
	  	if (err) return handleError(err);
	  	
	});
	console.log(test);
}

exports.generateUrl = function(url) {
	var possibleChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];
	do {
		var shortUrl = "";

		for (var i = 6; i > 0; i--) {
			var nextChar = Math.floor(Math.random() * possibleChars.length);
			shortUrl += possibleChars[nextChar];
		}	
	} while (false)
	//} while( !availableUrl(shortUrl) )

	return shortUrl;
}