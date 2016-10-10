module.exports = function(app) {
    app.get('/gameone', function(req, res){
        res.render('lunchchart/index', {});
    });
}
