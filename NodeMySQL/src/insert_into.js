import Database from "better-sqlite3";
import dbFilePath from "./config.js";

//simple
function insertInto(name, score, nbDeaths) {
	let db = new Database(dbFilePath);
	let statement = db.prepare("INSERT INTO scores(name, score, nbDeath) VALUES (?,?,?);");
	statement.run(name, score, nbDeaths);
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