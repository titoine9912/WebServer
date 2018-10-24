import Path from "path";
import Express from "express";
import BodyParser from "body-parser";
import createPlayerTable, {createScoreLevelTable} from "./create_db.js";
import selectPlayer, {selectBestScore, selectBestTime, selectBestNbDeath} from "./select_from.js";
import insertPlayer, {insertScore} from "./insert_into.js";
import Server from "./server.js";

createPlayerTable();
createScoreLevelTable();

let server = new Server();
server.listen(8080);