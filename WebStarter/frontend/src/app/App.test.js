import React from "react";
import chai, {expect} from "chai";
import {shallow} from "enzyme";
import chaiEnzyme from "chai-enzyme";

import {Page} from "../util/TestUtils";
import App from "./App";
import Home from "../home/Home";
import About from "../about/About";

chai.use(chaiEnzyme());

class AppPage extends Page {
    constructor() {
        super();
        this.setComponent(shallow(<App/>));
    }

    linkTo = (it) => this.find("NavLink").filter({to: it});
    routeTo = (it) => this.find("Route").filter({component: it});
}

describe("renders", () => {

    it("without crashing", () => {
        new AppPage();
    });

    it("a link to the Home page", () => {
        let app = new AppPage();

        expect(app.linkTo("/").exists()).to.be.true;
        expect(app.routeTo(Home).exists()).to.be.true;
    });

    [
        [About, "/about"]
    ].map(([destination, path]) => {
        it("a link to the " + destination.name + " page", () => {
            let app = new AppPage();

            expect(app.linkTo(path)).to.be.present();
            expect(app.routeTo(destination)).to.be.present();
            expect(app.routeTo(destination)).to.have.prop("path").equal(path);
        });
    });

});
