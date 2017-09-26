var connection = require('./connection.js');

var orm = {
    selectAll: function(cb){
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, results){
            if (err) throw err;
            cb(results);
        }); 
    },
    insertOne: function(burgerName, cb){
        var queryString = "INSERT INTO burgers_db.burgers (burger_name, devoured, date) VALUE (?, false, CURRENT_TIMESTAMP)"
        connection.query(queryString, [burgerName], function(err, results){
            if (err) throw err;
            cb(results);
        });
    },
    updateOne: function(selectedBurger, cb){
        var queryString = "UPDATE burgers SET devoured = true WHERE burger_name = ?";
        connection.query(queryString, [selectedBurger], function(err, results){
            if (err) throw err;
            cb(results);
        });
    }
}

module.exports = orm;