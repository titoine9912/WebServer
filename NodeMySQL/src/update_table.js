import Database from "better-sqlite3";
import dbFilePath from "./config.js";

function updateTable(){
	let db = new Database(dbFilePath);
	db.exec("UPDATE score SET name = 'Tony' WHERE name = 'Antoine'");
	db.close();
}

export {updateTable as default};
