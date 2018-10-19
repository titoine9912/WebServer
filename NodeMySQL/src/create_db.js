import Database from "better-sqlite3";
import dbFilePath from "./config.js";

function createPlayerTable() {
	let db = new Database(dbFilePath);
	let statementPlayer=db.prepare("CREATE TABLE IF NOT EXISTS player (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT);");
	statementPlayer.run();
	db.close(); 
}

function createLevelTable(){
	let db = new Database(dbFilePath);
	let statementLevel = db.prepare("CREATE TABLE IF NOT EXISTS level (idLevel INTEGER PRIMARY KEY, score INTEGER, time REAL, nbDeath INTEGER,idPlayer INTEGER, FOREIGN KEY (idPlayer) REFERENCES Player(id));");
	statementLevel.run();
	db.close(); 
}
export {createPlayerTable as default, createLevelTable};
