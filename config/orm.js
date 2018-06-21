var connection = require("./connection")

var orm = {
    selectAll: function(cb) {
        var queryString = 'SELECT * FROM burgers';
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result)
        });
    },
    insertOne: function(value) {
        var queryString = 'INSERT INTO burgers(burger_name) values(?)';
        connection.query(queryString, [value], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(id, cb) {
        var queryString = 'UPDATE burgers SET devoured = 1 WHERE id=?';
        connection.query(queryString, [id], function(err, result) {
            if (err) throw err;
            console.log(result);

            cb(result)
        })
    }
}

module.exports = orm;