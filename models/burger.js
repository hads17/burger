var orm = require('../config/orm.js');

var burger = {
    all: function(cb) {
        orm.selectAll(function(results){
            cb(results);
        });
    },

    create: function(burgerName, cb){
        orm.insertOne(burgerName, function(results){
            cb(results);
        });
    },

    update: function(selectedBurger, cb){
        orm.updateOne(selectedBurger, function(results){
            cb(results);
        });
    }
}

module.exports = burger;