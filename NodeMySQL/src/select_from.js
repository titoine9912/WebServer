import Database from "better-sqlite3";
import dbFilePath from "./config.js";

function selectFrom(){
	let db = new Database(dbFilePath);
	db.exec("SELECT * FROM scores WHERE name='Antoine'");
	db.close(); 
}

export {selectFrom as default};
