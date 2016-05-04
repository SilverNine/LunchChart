var crawl = require('./oneshop/crawl');

module.exports = function(app) {
    app.get('/oneshop/crawl', crawl.list);
}