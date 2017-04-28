//set the the MySQL connection
var mysql = require("mysql");

var connection = mysql.net.createConnection({
	port: 3306,
	host: "localhost",
	user: "root",
	password: "root",
	database: "cat_db"
	});

//Make the connection.
connection.connect(function(err){
	if(err) {
		console.error("error connecting: " + err.stack);
			return;
	}
	console.log("connected as id " + connection.threadId);

});

//Export the connection so ORM can locate data.
module.exports = connection;