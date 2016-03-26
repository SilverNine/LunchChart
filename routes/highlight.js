var path = require('path');

module.exports = function(app) {
    app.get('/highlight', function(req, res){
        res.sendFile(path.join(__dirname, '..', 'public', 'highlight', 'test.html'));
    });
}