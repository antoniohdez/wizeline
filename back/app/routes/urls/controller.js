var Url = require('../../models/url');

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
    url.shortUrl = req.body.shortUrl;

    url.save(function(err) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Url created' });
    });

}