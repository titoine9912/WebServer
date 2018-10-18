import Database from "better-sqlite3";
import dbFilePath from "./config.js";

function insertInto(name, score, nbDeaths) {
	let db = new Database(dbFilePath);
	let statement = db.prepare("INSERT INTO scores(name, score, nbDeath) VALUES (?,?,?);");
	statement.run(name, score, nbDeaths);
	db.close(); 
}

export {insertInto as default};