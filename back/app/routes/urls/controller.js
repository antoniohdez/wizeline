var Url = require('../../models/url');
var urlService = require('../../services/createUrl');

exports.all = function(req, res) {
	Url.find(function(err, urls) {
		if (err) {
            res.send(err);
        }
        res.json(urls);
	});
};

exports.create = function(req, res) {
	var url = new Url();

    url.url = req.body.url;
    url.shortUrl = urlService.generateUrl(req.body.url);

    console.log(url.shortUrl);

    url.save(function(err) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Url created' });
    });
}

exports.show = function(req, res) {
    Url.findById(req.params.url_id, function(err, url) {
        if (err) {
            res.send(err);
        }
        res.json(url);
    });
}