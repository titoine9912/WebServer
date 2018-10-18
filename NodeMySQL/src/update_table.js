import Database from "better-sqlite3";
import dbFilePath from "./config.js";

function updateTable(id, score, nbDeaths){
	let db = new Database(dbFilePath);
	let statement = db.prepare("UPDATE scores SET score = ?, nbDeath = ? WHERE id = ?");
	statement.run(score, nbDeaths, id);
	db.close();
}

export {updateTable as default};