"use strict";

var _chai = require("chai");

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require("chai-http");

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _server = require("./server");

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_chaiHttp2.default);

var request = _chai2.default.request;
var currentServer = null;

beforeEach(function () {
	currentServer = new _server2.default();
});

afterEach(function () {
	currentServer = null;
});

describe("Database is empty", function () {
	it("Database is empty", function (done) {
		request(currentServer).get("/player").end(function (error, response) {
			(0, _chai.expect)(error).to.be.null;
			(0, _chai.expect)(response).to.have.status(200);
			done();
		});
	});
});

describe('/POST player/register', function () {
	it("Ajouter un joueur", function (done) {
		request(currentServer).post("/player").send({ name: 'Antoine' }).end(function (error, response) {
			(0, _chai.expect)(error).to.be.null;
			(0, _chai.expect)(response).to.have.status(200);
			(0, _chai.expect)(response).be.a('object');
			done();
		});
	});
});

describe('/POST scoreLevel/register', function () {
	it("Ajouter un score", function (done) {
		request(currentServer).post("/scoreLevel").send({ levelNumber: 1, score: 420, time: 20, nbDeath: 3, idPlayer: 23 }).end(function (error, response) {
			console.log(error);
			(0, _chai.expect)(error).to.be.null;
			(0, _chai.expect)(response).to.have.status(200);
			(0, _chai.expect)(response).be.a('array');
			done();
		});
	});
});