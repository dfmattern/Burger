//depedencies
var mysql = require("mysql");



//mysql connection info
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "FmJmKm218@@",
    database: "burgers_db"
});

//initiate db connection
connection.connect(function(err){
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id: " + connection.threadId);
    
});

  module.exports = connection;