import chai, {expect} from "chai";
import chaiHttp from "chai-http";
import Server from "./server.js";

chai.use(chaiHttp);

let request = chai.request;
let currentServer = null;

beforeEach(() => {
	currentServer = new Server();
});

afterEach(() => {
	currentServer = null;
});

describe("Player table is empty", () => {
	it("Player table is empty", (done) => {
		request(currentServer)
		.get("/api/player")
		.end(function (error,response) {
			console.log(error);
			expect(error).to.be.null;
			expect(response).to.have.status(200);
			done();
		});
	});
});

describe("ScoreLevel table is empty", () => {
	it("ScoreLevel table is empty", (done) => {
		request(currentServer)
		.get("/api/scoreLevel")
		.end(function (error,response) {
			console.log(error);
			expect(error).to.be.null;
			expect(response).to.have.status(200);
			done();
		});
	});
});

describe("/POST player/register", () => {
	it("Add a player", (done) => {
		request(currentServer)
		.post("/api/player")
		.send({ name : "Antoine" })
		.end(function (error,response){
			expect(error).to.be.null;
			expect(response).to.have.status(200);
			expect(response).be.a("object");
			done();
		});
	});
});

describe("/POST scoreLevel/register", () => {
	it("Add a score", (done) => {
		request(currentServer)
		.post("/api/scoreLevel")
		.send({ levelNumber : 1, score : 420, time : 20, nbDeath : 3, idPlayer : 1 })
		.end(function (error,response) {
			console.log(error);
			expect(error).to.be.null;
			expect(response).to.have.status(200);
			expect(response).be.a("object");
			done();
		});
	});
});