var mysql = require('mysql');
var express = require('express');
var path = require('path');
var app = express();
var pool;

if(app.get('env') === 'production') {
    pool = mysql.createPool({
        host: 'localhost',
        user: 'dev',
        password: 'roqkfxla',
        database: 'SILVERNINE'
    });
} else {
    pool = mysql.createPool({
        host: 'lunchchart.com',
        user: 'dev',
        password: 'roqkfxla',
        database: 'SILVERNINE'
    });
}

module.exports = {
    url : "mongodb://dev:dev@lunchchart.com:27017/lunchchart"
    ,pool : pool
}