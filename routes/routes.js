var Restaurant = require("./model/restaurant");

function getRestaurants(res) {
    Restaurant.find(function(err, restaurants){
        if(err) {
            res.send(err);
        }

        res.json(restaurants);
    });
}

module.exports = function(app) {
    app.get('/api/restaurants', function(req, res){
        getRestaurants(res);
    });

    app.post('/api/restaurants', function(req, res){
        Restaurant.create({
            name : req.body.name
        }, function(err, restaurant){
            if(err) {
                res.send(err);
            }

            getRestaurants(res);
        });
    });

    app.delete('/api/restaurants/:id', function(req, res){
        Restaurant.remove({
            _id : req.param.id
        }, function(err, restaurant){
            if(err){
                res.send(err);
            }

            getRestaurants(res);
        });
    });

    app.get('*', function(req, res){
        res.sendfile('./public/index.html');
    });
}