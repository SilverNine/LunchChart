var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'hotba.kr',
    user: 'dev',
    password: 'roqkfxla',
    database: 'SILVERNINE'
});

module.exports = {
    url : "mongodb://dev:dev@lunchchart.com:27017/lunchchart"
    ,pool : pool
}