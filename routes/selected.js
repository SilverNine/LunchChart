var app = 'selected';
var default_url = '/'+app + '/';
var path = require('path');
var mysql = require(path.join(__dirname,'..','config','database_mysql')).pool;

function getDefaultUrl(name){
    return default_url + name;
}

module.exports = function(app) {
    app.get('/selected', function(req, res){
        res.sendFile(path.join(__dirname, '..', 'public', 'selected', 'login.html'));
    });

    app.post(getDefaultUrl('login'), function(req, res){
        //temporarily
        if(req.body.id == 'admin' || req.body.password == 'admin1234') {
            res.sendFile(path.join(__dirname, '..', 'public', 'selected', 'main.html'));
        } else {
            res.sendFile(path.join(__dirname, '..', 'public', 'selected', 'login.html'));
        }
    });

    app.get(getDefaultUrl('recommend_stock_list'), function(req, res){
        mysql.getConnection(function(err,connection){
            var query = connection.query(
                'SELECT' +
                ' id'         +
                ',stock_code' +
                ',stock_name' +
                ',start_price' +
                ',now_price' +
                ',DATE_FORMAT(recommend_date,\'%Y-%m-%d\') AS recommend_date' +
                ' FROM selected_admin_recommend_stock' +
                ' ORDER BY recommend_date DESC'
                , function (err, rows) {
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

    app.get(getDefaultUrl('member_list'), function(req, res){
        mysql.getConnection(function(err,connection){
            var query = connection.query(
                'SELECT' +
                ' member_id' +
                ',member_name' +
                ',member_nickname' +
                ',member_email' +
                ',member_status' +
                ',DATE_FORMAT(create_date,\'%Y-%m-%d\') AS create_date' +
                ' FROM selected_admin_member' +
                ' ORDER BY create_date DESC'
                , function (err, rows) {
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

    app.post('/pray/pray_detail', function(req, res){
        res.sendFile(path.join(__dirname, '..', 'public', 'pray', 'pray_detail.html'));
    });
}