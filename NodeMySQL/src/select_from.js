import Database from "better-sqlite3";
import dbFilePath from "./config.js";

function selectLevel(){
	let db = new Database(dbFilePath);
	let statement = db.prepare("SELECT * FROM level");
	let data = statement.all();
	db.close(); 
	return data;
}

function selectPlayer(){
	let db = new Database(dbFilePath);
	let statement = db.prepare("SELECT * FROM player");
	let data = statement.all();
	db.close(); 
	return data;
}

function selectBestScore(){
	let db = new Database(dbFilePath);
	let statement = db.prepare("SELECT * FROM level ORDER BY score DESC LIMIT 10");
	let data = statement.all();
	db.close(); 
	return data;
}

function selectBestTime(){
	let db = new Database(dbFilePath);
	let statement = db.prepare("SELECT * FROM level ORDER BY time LIMIT 10");
	let data = statement.all();
	db.close(); 
	return data;
}

function selectBestNbDeath(){
	let db = new Database(dbFilePath);
	let statement = db.prepare("SELECT * FROM level ORDER BY nbDeath LIMIT 10");
	let data = statement.all();
	db.close(); 
	return data;
}
	
export {selectPlayer as default, selectBestScore, selectBestTime, selectBestNbDeath};
