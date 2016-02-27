var mysql = require('../config/database').pool;
var path = require('path');

module.exports = function(app) {
    app.get('/pray', function(req, res){
        res.sendFile(path.join(__dirname, '..', 'public', 'pray', 'login.html'));
    });

    app.get('/pray/pray_list', function(req, res){
        mysql.getConnection(function(err,connection){
            var query = connection.query('SELECT * FROM PRAY', function (err, rows) {
                if(err){
                    connection.release();
                    throw err;
                }
                //console.log(rows);
                res.json(rows);
                connection.release();
            });
            //console.log(query);
        });
    });

    app.post('/pray/login', function(req, res){
        //console.log(req);
        console.log(req.body);
        if(req.body.id == 'admin' || req.body.password == 'admin1234') {
            res.sendFile(path.join(__dirname, '..', 'public', 'pray', 'pray_list.html'));
        } else {
            res.sendFile(path.join(__dirname, '..', 'public', 'pray', 'login.html'));
        }
    });
}