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
  var sql = "INSERT INTO score (name, score) VALUES ?";
  var values = [['John', 1000], ['Antoine', 325], ['Amy', 652], ['Hannah', 2000], ['Michael', 3000]];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});