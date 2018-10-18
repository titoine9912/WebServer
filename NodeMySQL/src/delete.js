import Database from "better-sqlite3";
import dbFilePath from "./config.js";

function deleteFrom(id){
	let db = new Database(dbFilePath);
	let statement = db.prepare("DELETE FROM scores WHERE id = id");
	statement.run(id);
	db.close(); 
}

export {deleteFrom as default};