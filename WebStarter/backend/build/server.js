"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Server = function () {
	function Server() {
		_classCallCheck(this, Server);

		this.app = (0, _express2.default)();
		this.app.use(_bodyParser2.default.json());
		this.router = _express2.default.Router();

		var self = this;

		self.router.get("/player", function (req, res) {
			res.send((0, _select_from2.default)());
		});

		self.router.post("/player", function (req, res) {
			(0, _insert_into2.default)(req.body.name);
			res.send((0, _select_from2.default)());
		});

		self.router.get("/scoreLevel/bestScore", function (req, res) {
			res.send((0, _select_from.selectBestScore)());
		});

		self.router.get("/scoreLevel/bestTime", function (req, res) {
			res.send((0, _select_from.selectBestTime)());
		});

		self.router.get("/scoreLevel/bestNbDeath", function (req, res) {
			res.send((0, _select_from.selectBestNbDeath)());
		});

		self.router.post("/scoreLevel", function (req, res) {
			(0, _insert_into.insertScore)(req.body.levelNumber, req.body.score, req.body.time, req.body.nbDeath, req.body.idPlayer);
			res.send((0, _select_from.selectBestScore)(), (0, _select_from.selectBestTime)(), (0, _select_from.selectBestNbDeath)());
		});

		self.app.use("/api", self.router);
		self.app.use(_express2.default.static(_path2.default.join(process.cwd(), "frontend")));
		self.app.get("/*", function (_, res) {
			return res.sendFile(_path2.default.join(process.cwd(), "frontend", "index.html"));
		});
	}

	_createClass(Server, [{
		key: "address",
		value: function address() {
			return this.currentApp ? this.currentApp.address() : null;
		}
	}, {
		key: "listen",
		value: function listen(port) {
			this.currentApp = this.app.listen(port);
			return this;
		}
	}, {
		key: "close",
		value: function close() {
			if (this.currentApp) {
				this.currentApp.close();
				this.currentApp = null;
			}
		}
	}]);

	return Server;
}();

exports.default = Server;