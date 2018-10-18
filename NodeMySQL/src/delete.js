import Database from "better-sqlite3";
import dbFilePath from "./config.js";

function deleteFrom(){
	let db = new Database(dbFilePath);
	db.exec("DELETE FROM score WHERE name = 'Antoine'");
	db.close(); 
}

export {deleteFrom as default};