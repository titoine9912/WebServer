import Database from "better-sqlite3";
import dbFilePath from "./config.js";

function selectFrom(){
	let db = new Database(dbFilePath);
	let statement=db.prepare("SELECT * FROM scores WHERE name=?");
	let data=statement.all('Antoine');
	db.close(); 
	return data;
}

export {selectFrom as default};
