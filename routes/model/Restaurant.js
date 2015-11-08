var mongoose = require('mongoose');

module.exports = mongoose.model('Restaurant', {
    name : {type : String, default : ''}
});