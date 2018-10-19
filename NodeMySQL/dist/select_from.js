"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.selectBestNbDeath = exports.selectBestTime = exports.selectBestScore = exports.default = undefined;

var _betterSqlite = require("better-sqlite3");

var _betterSqlite2 = _interopRequireDefault(_betterSqlite);

var _config = require("./config.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function selectLevel() {
	var db = new _betterSqlite2.default(_config2.default);
	var statement = db.prepare("SELECT * FROM level");
	var data = statement.all();
	db.close();
	return data;
}

function selectPlayer() {
	var db = new _betterSqlite2.default(_config2.default);
	var statement = db.prepare("SELECT * FROM player");
	var data = statement.all();
	db.close();
	return data;
}

function selectBestScore() {
	var db = new _betterSqlite2.default(_config2.default);
	var statement = db.prepare("SELECT * FROM level ORDER BY score DESC LIMIT 10");
	var data = statement.all();
	db.close();
	return data;
}

function selectBestTime() {
	var db = new _betterSqlite2.default(_config2.default);
	var statement = db.prepare("SELECT * FROM level ORDER BY time LIMIT 10");
	var data = statement.all();
	db.close();
	return data;
}

function selectBestNbDeath() {
	var db = new _betterSqlite2.default(_config2.default);
	var statement = db.prepare("SELECT * FROM level ORDER BY nbDeath LIMIT 10");
	var data = statement.all();
	db.close();
	return data;
}

exports.default = selectPlayer;
exports.selectBestScore = selectBestScore;
exports.selectBestTime = selectBestTime;
exports.selectBestNbDeath = selectBestNbDeath;