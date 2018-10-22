import Path from "path";
import Express from "express";
import BodyParser from "body-parser";
import createPlayerTable, {createScoreLevelTable} from "./create_db.js";
import selectPlayer, {selectBestScore, selectBestTime, selectBestNbDeath} from "./select_from.js";
import insertPlayer, {insertScore} from "./insert_into.js";

export default class Server {
	constructor() {
	
		this.app = Express();
		this.app.use(BodyParser.json());
		this.router = Express.Router();
	
		let self=this;
	
		self.router.get("/player", (req, res) => {
			res.send(selectPlayer());
		});
	
		self.router.post("/player", (req,res) => {
			insertPlayer(req.body.name);
			res.send(selectPlayer());
		});
	
		self.router.get("/scoreLevel/bestScore", (req, res) => {
			res.send(selectBestScore());
		});
	
		self.router.get("/scoreLevel/bestTime", (req, res) => {
			res.send(selectBestTime());
		});
	
		self.router.get("/scoreLevel/bestNbDeath", (req, res) => {
			res.send(selectBestNbDeath());
		});
	
		self.router.post("/scoreLevel", (req, res) => {
			insertScore(req.body.levelNumber, req.body.score, req.body.time, req.body.nbDeath, req.body.idPlayer);
			res.send(selectBestScore(), selectBestTime(), selectBestNbDeath());
		});
	
		self.app.use("/api",self.router);
		if (process.env.NODE_ENV === "production") {
			self.app.use(Express.static(Path.join(process.cwd(),"frontend")));
			self.app.get("/*",(_,res)=>res.sendFile(Path.join(process.cwd(),"frontend","index.html")));
		}
	}
	
	address(){
		return this.currentApp ? this.currentApp.address():null;
	}
	
	listen(port){
		this.currentApp=this.app.listen(port);
		return this;
	}
	
	close(){
		if(this.currentApp){
			this.currentApp.close();
			this.currentApp=null;
		}
	}
}
