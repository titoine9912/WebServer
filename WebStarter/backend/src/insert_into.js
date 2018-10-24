import Database from "better-sqlite3";
import dbFilePath from "./config.js";

function insertScore(levelNumber, score, time, nbDeath, idPlayer) {
	let db = new Database(dbFilePath);
	let statement = db.prepare("INSERT INTO scoreLevel(levelNumber, score, time, nbDeath, idPlayer) VALUES (?,?,?,?,?);");
	statement.run(levelNumber, score, time, nbDeath, idPlayer);
	db.close(); 
}

function insertPlayer(name) {
	let db = new Database(dbFilePath);
	let statement = db.prepare("INSERT INTO player(name) VALUES (?);");
	statement.run(name);
	db.close();
}

export {insertPlayer as default, insertScore};