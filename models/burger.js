//connects to the orm that we configured so we can use the function for mysql
var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.all("burger", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertOne: function (cols, vals, cb) {
        orm.create("burger", cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.update("burger", objColVals, condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;