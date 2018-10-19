"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.insertScore = exports.default = undefined;

var _betterSqlite = require("better-sqlite3");

var _betterSqlite2 = _interopRequireDefault(_betterSqlite);

var _config = require("./config.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function insertScore(idLevel, score, time, nbDeath, idPlayer) {
	var db = new _betterSqlite2.default(_config2.default);
	var statement = db.prepare("INSERT INTO level(idLevel, score, time, nbDeath, idPlayer) VALUES (?,?,?,?,?);");
	statement.run(idLevel, score, time, nbDeath, idPlayer);
	db.close();
}

function insertPlayer(name) {
	var db = new _betterSqlite2.default(_config2.default);
	var statement = db.prepare("INSERT INTO player(name) VALUES (?);");
	statement.run(name);
	db.close();
}

exports.default = insertPlayer;
exports.insertScore = insertScore;