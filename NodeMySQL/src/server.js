import Express from "express";
import BodyParser from "body-parser";
import createPlayerTable, {createScoreLevelTable} from "./create_db.js";
import selectPlayer, {selectBestScore, selectBestTime, selectBestNbDeath} from "./select_from.js";
import insertPlayer, {insertScore} from "./insert_into.js";

createPlayerTable();
createScoreLevelTable();


let app = Express();
app.use(BodyParser.json());

app.get("/player", (req, res) => {
	res.send(selectPlayer());
});

app.get("/scoreLevel", (req, res) => {
	res.send(selectBestScore(), selectBestTime(), selectBestNbDeath());
});

app.post("/player", (req,res) => {
	insertPlayer(req.body.name);
	res.send(selectPlayer());
});

app.post("/scoreLevel", (req, res) => {
	insertScore(req.body.idLevel, req.body.levelNumber, req.body.score, req.body.time, req.body.nbDeath, req.body.idPlayer);
	res.send(selectBestScore(), selectBestTime(), selectBestNbDeath());
});

app.listen(8080, () => {
    console.log("App listening on port 8080.");
});