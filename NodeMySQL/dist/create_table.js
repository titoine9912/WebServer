"use strict";

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodebd"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE score (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), score INT(11))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});