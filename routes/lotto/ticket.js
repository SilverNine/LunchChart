var request = require("request");
var cheerio = require("cheerio");

exports.list = function(req, res){
  request({
          uri: "http://nlotto.co.kr/result.do?method=win520&Round="+req.param('round'),
        }, function(error, response, body) {
        
        var bodyContent = '<?xml version="1.0" encoding="UTF-8"?><body>';
        
        var $ = cheerio.load(body);
        
        $(".no1_1 > li").each(function(i) {
            var link = $(this);
            bodyContent += '<text>' + link.text().substring(0,1) + '</text>';
        });  
        
        $(".no1_2 > li").each(function(i) {
            var link = $(this);
            bodyContent += '<text>' + link.text().substring(0,1) + '</text>';
        });
        
        $("#tablenum > tbody > tr > td").each(function(i) {
          var link = $(this);
          if(link.text().length < 2 && link.text() != '-' && link.text() !== ''){
              bodyContent += '<text>' + link.text() + '</text>';  
          }
        });
        
        bodyContent+='<currentRound>'+ $("#Round").val() + "</currentRound>";
        
        var title = $(".middle_title").text();
        title = title.substring(title.indexOf("("), title.indexOf(")"));
        
        bodyContent += '<date>'+ title.substring(1,5) + '-' + title.substring(8,10) + '-' + title.substring(13,15) + "</date>";
        bodyContent += '<round>' + req.param('round') + '</round>';
        bodyContent += '</body>';
        
        res.header('Content-Type','application/xml');
        res.header('Cache-Control','no-cache');
        res.header('Pragma','no-cache');
        res.send(bodyContent);
    });
};