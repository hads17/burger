var orm = require('../config/orm.js');

var burger = {
    all: function(cb) {
        orm.all("burgers", function(results){
            cb(results);
        });
    },

    create: function(burgerName, cb){
        orm.create("burgers", burgerName, function(results){
            cb(results);
        });
    },

    update: function(selectedBurger, cb){
        orm.update("burgers", selectedBurger, function(results){
            cb(results);
        });
    }
}

module.exports = burger;