import Database from "better-sqlite3";
import dbFilePath from "./config.js";

function updateTable(name, score, nbDeaths){
	let db = new Database(dbFilePath);
	let statement = db.prepare("UPDATE scores SET score = ?, nbDeaths = ? WHERE name = name");
	statement.run(name, score, nbDeaths)
	db.close();
}

export {updateTable as default};
