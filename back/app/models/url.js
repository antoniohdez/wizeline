var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UrlsSchema   = new Schema({
    url: String,
    shortUrl: String,
    redirects: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Url', UrlsSchema);