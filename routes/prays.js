var path = require('path');
var mysql = require(path.join(__dirname,'..','config','database')).pool;

module.exports = function(app) {
    app.get('/pray', function(req, res){
        res.sendFile(path.join(__dirname, '..', 'public', 'pray', 'login.html'));
    });

    app.get('/pray/pray_list', function(req, res){
        mysql.getConnection(function(err,connection){
            var query = connection.query(
                'SELECT' +
                ' PRAY_NO' +
                ',PRAY_TITLE' +
                ',PRAY_CONTENT' +
                ',USE_YN' +
                ',DATE_FORMAT(RDATE,\'%Y-%m-%d\') AS RDATE' +
                ',DATE_FORMAT(MDATE,\'%Y-%m-%d\') AS MDATE' +
                ' FROM PRAY' +
                ' ORDER BY RDATE DESC'
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

    app.get('/pray/pray_today_list', function(req, res){
        mysql.getConnection(function(err,connection){
            var query = connection.query(
                'SELECT' +
                ' WORD_NO' +
                ',WORD_CONTENT' +
                ',WORD_DATE' +
                ',WORD_WHERE' +
                ',DATE_FORMAT(RDATE,\'%Y-%m-%d\') AS RDATE' +
                ',DATE_FORMAT(MDATE,\'%Y-%m-%d\') AS MDATE' +
                ' FROM PRAY_TODAY_WORD' +
                ' ORDER BY RDATE DESC'
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

    app.post('/pray/login', function(req, res){
        //temporarily
        if(req.body.id == 'admin' || req.body.password == 'admin1234') {
            res.sendFile(path.join(__dirname, '..', 'public', 'pray', 'pray_list.html'));
        } else {
            res.sendFile(path.join(__dirname, '..', 'public', 'pray', 'login.html'));
        }
    });

    app.post('/pray/pray_detail', function(req, res){
        res.sendFile(path.join(__dirname, '..', 'public', 'pray', 'pray_detail.html'));
    });
}