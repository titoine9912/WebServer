"use strict";

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

var _server = require("./server.js");

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _create_db2.default)();
(0, _create_db.createScoreLevelTable)();

var server = new _server2.default();
server.listen(8080);