var orm = require('../config/orm.js');

var ormCalls = {
    select: function(cb) {
        orm.selectAll(function(res) {
            cb(res)
        });
    },
    insert: function(burgerInput) {
        orm.insertOne(burgerInput);
    },
    update: function(burgerId, cb) {
        orm.updateOne(burgerId, function(res) {
            cb(res)
        }) 
            
       
    }
}

module.exports = ormCalls;