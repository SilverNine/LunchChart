var ticket = require('./lotto/ticket');
var round = require('./lotto/round');

module.exports = function(app) {
    app.get('/lotto/ticket', ticket.list);
    app.get('/lotto/round', round.list);
}