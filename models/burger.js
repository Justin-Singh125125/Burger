//connects to the orm that we configured so we can use the function for mysql
var orm = require("../config/orm.js");
console.log(orm);
var burger = {
    selectAll: function (cb) {
        orm.selectAll("burger", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burger", cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burger", objColVals, condition, function (res) {
            cb(res);
        });
    },
    deleteOne: function (condition, cb) {
        orm.deleteOne("burger", condition, function (res) {
            cb(res);
        })
    }
};

module.exports = burger;