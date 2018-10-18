import Database from "better-sqlite3";

let dbFilePath = process.env.NODE_ENV == "PROD" ? "/.app/data.db" : "data.db";

function createDatabase() {
	let db = new Database(dbFilePath);
	db.exec("CREATE TABLE IF NOT EXISTS scores (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, score INTEGER);");
	db.close(); 
}

export {createDatabase as default};

/*

var mysql=require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE nodeBd", function (err, result){
	  if(err) throw err;
	  console.log("Database created");
  });
});

*/