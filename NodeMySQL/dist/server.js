"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _create_db = require("./create_db.js");

var _create_db2 = _interopRequireDefault(_create_db);

var _select_from = require("./select_from.js");

var _select_from2 = _interopRequireDefault(_select_from);

var _update_table = require("./update_table.js");

var _update_table2 = _interopRequireDefault(_update_table);

var _delete = require("./delete.js");

var _delete2 = _interopRequireDefault(_delete);

var _insert_into = require("./insert_into.js");

var _insert_into2 = _interopRequireDefault(_insert_into);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _create_db2.default)();

var app = (0, _express2.default)();
app.use(_bodyParser2.default.json());

app.get('/', function (req, res) {
	res.send((0, _select_from2.default)());
});

app.post("/scores", function (req, res) {
	//insertInto(req.body.name, req.body.score, req.body.nbDeaths);
	(0, _update_table2.default)(req.body.id, req.body.score, req.body.nbDeaths);
	//deleteFrom(req.body.id);
	res.send((0, _select_from2.default)());
});

app.listen(8080, function () {
	console.log('Example app listening on port 8080.');
});