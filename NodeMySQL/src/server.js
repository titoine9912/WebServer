import Express from "express";
import BodyParser from "body-parser";
import createDatabase from "./create_db.js";
import selectFrom from "./select_from.js";
import updateTable from "./update_table.js";
import deleteFrom from "./delete.js";
import insertInto from "./insert_into.js";

createDatabase();

let app = Express();
app.use(BodyParser.json());

app.get("/", (req, res) => {
	res.send(selectFrom());
});

app.post("/scores", (req, res) => {
	insertInto(req.body.name, req.body.score, req.body.nbDeaths);
	updateTable(req.body.id, req.body.score, req.body.nbDeaths);
	deleteFrom(req.body.id);
	res.send(selectFrom());
});

app.listen(8080, () => {
    console.log("Example app listening on port 8080.");
});