"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _create_db = require("./create_db.js");

var _create_db2 = _interopRequireDefault(_create_db);

var _select_from = require("./select_from.js");

var _select_from2 = _interopRequireDefault(_select_from);

var _insert_into = require("./insert_into.js");

var _insert_into2 = _interopRequireDefault(_insert_into);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _create_db2.default)();
(0, _create_db.createLevelTable)();

var app = (0, _express2.default)();
app.use(_bodyParser2.default.json());

app.get('/player', function (req, res) {
	res.send((0, _select_from2.default)());
});

app.get('/level', function (req, res) {
	res.send((0, _select_from.selectBestScore)(), (0, _select_from.selectBestTime)(), (0, _select_from.selectBestNbDeath)());
});

app.post("/level", function (req, res) {
	(0, _insert_into.insertScore)(req.body.idLevel, req.body.score, req.body.time, req.body.nbDeath, req.body.idPlayer);
	res.send((0, _select_from.selectBestScore)(), (0, _select_from.selectBestTime)(), (0, _select_from.selectBestNbDeath)());
});

app.post("/player", function (req, res) {
	(0, _insert_into2.default)(req.body.name);
	res.send((0, _select_from2.default)());
});

app.listen(8080, function () {
	console.log('Example app listening on port 8080.');
});