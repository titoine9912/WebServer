"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _betterSqlite = require("better-sqlite3");

var _betterSqlite2 = _interopRequireDefault(_betterSqlite);

var _config = require("./config.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//simple
function insertInto(name, score, nbDeaths) {
	var db = new _betterSqlite2.default(_config2.default);
	var statement = db.prepare("INSERT INTO scores(name, score, nbDeath) VALUES (?,?,?);");
	statement.run(name, score, nbDeaths);
	db.close();
}

exports.default = insertInto;