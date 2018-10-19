import Express from "express";
import BodyParser from "body-parser";
import createPlayerTable, {createLevelTable} from "./create_db.js";
import selectPlayer, {selectBestScore, selectBestTime, selectBestNbDeath} from "./select_from.js";
import insertPlayer, {insertScore} from "./insert_into.js";

createPlayerTable();
createLevelTable();


let app = Express();
app.use(BodyParser.json());

app.get('/player', (req, res) => {
	res.send(selectPlayer());
});

app.get('/level', (req, res) => {
res.send(selectBestScore(), selectBestTime(), selectBestNbDeath());
});

app.post("/level", (req, res) => {
	insertScore(req.body.idLevel, req.body.score, req.body.time, req.body.nbDeath, req.body.idPlayer);
	res.send(selectBestScore(), selectBestTime(), selectBestNbDeath());
});

app.post("/player", (req,res)=>{
	insertPlayer(req.body.name);
	res.send(selectPlayer());
});

app.listen(8080, () => {
    console.log('Example app listening on port 8080.');
});