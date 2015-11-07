var request = require("request");
var cheerio = require("cheerio");

exports.list = function(req, res){
  request({
          uri: "http://nlotto.co.kr/result.do?method=win520",
        }, function(error, response, body) {
        
        var bodyContent = '<?xml version="1.0" encoding="UTF-8"?><body>';
        
        var $ = cheerio.load(body);
        
        for( var i = $("#Round").val() ; i >= 1 ; i-- ){
            bodyContent += '<round>'+ i + "</round>";    
        }

        bodyContent += '<currentRound>' + $("#Round").val() + '</currentRound>';

        bodyContent += '</body>';
        
        res.header('Content-Type','application/xml');
        res.header('Cache-Control','no-cache');
        res.header('Pragma','no-cache');
        res.send(bodyContent);
    });
};