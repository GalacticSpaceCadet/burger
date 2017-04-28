//Import MySQl path
var connection = require("../config/connection.js");

//Create a helper function to create computer readable syntax
function placeTheQMark(num) {
    var markArr = [];

    for (var i = 0; i < num; i++) {
        markArr.push("?");
    }
    return markArr.toString();
}

//Next we create a helper functon to create correct SQL syntax.
function createSqlObj(ob) {
    var arr = [];

    for (var key in ob) {
        if (Object.hasOwnProperty.call(ob, key)) {
            arr.push(key + "=" + ob[key]);
        }
    }
    return arr.toString();
}

//Obj for all sql statement function. cb is callback.
var orm = {
        all: function(tableInput, cb) {
            var queryString = "SELECT * FROM " + tableInput + ";";
            connection.query(queryString, function(err, result)) {
                if (err) {
                    throw err;
                }
                cb(result);
            });
    },
    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
},
	delete: function(table, condition, cb) {
    var queryString = "DELETE FROM " + table;
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

//Export orm to js file

module.exports = orm;
