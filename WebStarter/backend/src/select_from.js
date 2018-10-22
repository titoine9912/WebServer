import Database from "better-sqlite3";
import dbFilePath from "./config.js";

function selectPlayer(){
	let db = new Database(dbFilePath);
	let statement = db.prepare("SELECT * FROM player");
	let data = statement.all();
	db.close(); 
	return data;
}

function selectBestScore(){
	let db = new Database(dbFilePath);
	let statement = db.prepare("SELECT * FROM scoreLevel ORDER BY score DESC LIMIT 10");
	let data = statement.all();
	db.close(); 
	return data;
}

function selectBestTime(){
	let db = new Database(dbFilePath);
	let statement = db.prepare("SELECT * FROM scoreLevel ORDER BY time LIMIT 10");
	let data = statement.all();
	db.close(); 
	return data;
}

function selectBestNbDeath(){
	let db = new Database(dbFilePath);
	let statement = db.prepare("SELECT * FROM scoreLevel ORDER BY nbDeath LIMIT 10");
	let data = statement.all();
	db.close(); 
	return data;
}
	
export {selectPlayer as default, selectBestScore, selectBestTime, selectBestNbDeath};