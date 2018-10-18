import Database from "better-sqlite3";
import dbFilePath from "./config.js";

function createDatabase() {
	let db = new Database(dbFilePath);
	let statement = db.prepare("CREATE TABLE IF NOT EXISTS scores (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, score INTEGER);");
	statement.run();
	db.close(); 
}

export {createDatabase as default};
