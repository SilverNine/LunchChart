var mysql = require('mysql');
var express = require('express');
var path = require('path');
var app = express();
var pool;

if(app.get('env') === 'production') {
    pool = mysql.createPool({
        host: 'lunchchart.com',
        user: 'root',
        password: 'roqkfxla',
        database: 'SILVERNINE',
        port: "3306"
    });
} else {
    pool = mysql.createPool({
        host: 'lunchchart.com',
        user: 'root',
        password: 'wjddmsrn',
        database: 'SILVERNINE',
        port: "3306"
    });
}

module.exports = {
    pool : pool
}