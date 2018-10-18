import Database from "better-sqlite3";
import dbFilePath from "./config.js";

function deleteFrom(){
	let db = new Database(dbFilePath);
	db.exec("DELETE FROM scores WHERE name = 'Tony'");
	db.close(); 
}

export {deleteFrom as default};