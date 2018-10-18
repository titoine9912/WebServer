import Database from "better-sqlite3";
import dbFilePath from "./config.js";

function deleteFrom(name){
	let db = new Database(dbFilePath);
	let statement = db.prepare("DELETE FROM scores WHERE name = name");
	statement.run(name);
	db.close(); 
}

export {deleteFrom as default};