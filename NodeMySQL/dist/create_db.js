"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.createLevelTable = exports.default = undefined;

var _betterSqlite = require("better-sqlite3");

var _betterSqlite2 = _interopRequireDefault(_betterSqlite);

var _config = require("./config.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createPlayerTable() {
	var db = new _betterSqlite2.default(_config2.default);
	var statementPlayer = db.prepare("CREATE TABLE IF NOT EXISTS player (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT);");
	statementPlayer.run();
	db.close();
}

function createLevelTable() {
	var db = new _betterSqlite2.default(_config2.default);
	var statementLevel = db.prepare("CREATE TABLE IF NOT EXISTS level (idLevel INTEGER PRIMARY KEY, score INTEGER, time REAL, nbDeath INTEGER,idPlayer INTEGER, FOREIGN KEY (idPlayer) REFERENCES Player(id));");
	statementLevel.run();
	db.close();
}
exports.default = createPlayerTable;
exports.createLevelTable = createLevelTable;