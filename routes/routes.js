var Restaurant = require("./model/Restaurant.js");

module.exports = function(app) {
    app.get('/api/restaurants', function(req, res){
        Restaurant.find(function(err, restaurants){
            if(err) {
                res.send(err);
            }

            res.json(restaurants);
        });
    });
}