import Database from "better-sqlite3";

let dbFilePath = process.env.NODE_ENV == "PROD" ? "/.app/data.db" : "data.db";

function selectFrom(){
	let db = new Database(dbFilePath);
	db.exec("SELECT * FROM scores WHERE name='Antoine'");
	db.close(); 
}

export {selectFrom as default};
/*
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodebd"
});

con.connect(function(err) {
  if (err) throw err;
  var name='Antoine';
  var sql='SELECT * FROM score WHERE name=?';
  con.query(sql,[name], function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
*/