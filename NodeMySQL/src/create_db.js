import Database from "better-sqlite3";
import dbFilePath from "./config.js";

function createDatabase() {
	let db = new Database(dbFilePath);
	db.exec("CREATE TABLE IF NOT EXISTS scores (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, score INTEGER);");
	db.close(); 
}

export {createDatabase as default};
