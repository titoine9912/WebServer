import Express from "express";
import BodyParser from "body-parser";
import createDatabase from "./create_db.js";
import selectFrom from "./select_from.js";
import updateTable from "./update_table.js";
import deleteFrom from "./delete.js";
import insertMultiple, {insertInto} from "./insert_into.js";

createDatabase();
insertInto();

let app = Express();
let parser = BodyParser();

app.get('/', (req, res) => {
	res.send(selectFrom());
});

app.get('/welcome', (req, res) => {
    res.send('<b>Hello</b> welcome to my http server made with express');
});

app.use((req, res, next) => {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

app.listen(8080, () => {
    console.log('Example app listening on port 8080.');
});