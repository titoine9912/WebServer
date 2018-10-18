import Express from "express";
import createDatabase from "./create_db.js";
import selectFrom from "./select_from.js";
import updateTable from "./update_table.js";
import deleteFrom from "./delete.js";

createDatabase();

let app = Express();

app.get('/', (req, res) => {
	res.send('<b>My</b> first express http server');
});

app.get('/welcome', (req, res) => {
    res.send('<b>Hello</b> welcome to my http server made with express');
});

app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080.');
});