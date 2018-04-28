var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

//selectAll() method
var orm = {
	selectAll: function(table, cb) {
		var queryString = "SELECT * FROM " + table + ";";
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},

//insertOne() method
	insertOne: function(table, cols, vals, cb) {
		var queryString = "INSERT INTO " + table + " (";
		queryString += cols.toString() + ") VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";

		console.log(queryString);

		connection.query(queryString, vals, function (err, result) {
			if (err) {
				throw err;
			}
			res(result);
		});
	},

//udateOne() method
	updateOne: function(table, objColVals, condition, cb) {
		var queryString = "UPDATE " + table;
		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	}
};

module.exports = orm;