import Database from "better-sqlite3";
import dbFilePath from "./config.js";

//simple
function insertInto() {
	let db = new Database(dbFilePath);
	db.exec("INSERT INTO scores(name, score, nbDeath) VALUES ('Name', 9000,3);");
	db.close(); 
}

//multiple
function insertMultiple() {
	let db = new Database(dbFilePath);
	let values = [
		['John', 1000],
		['Antoine', 325],
		['Amy', 652],
		['Hannah', 2000],
		['Michael', 3000]
	];
	db.exec("INSERT INTO scores (name, score, nbDeath) VALUES ('Antoine',3000,2);");
	db.close(); 
}

export {insertMultiple as default, insertInto};