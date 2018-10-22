import React from "react";
import chai, {expect} from "chai";
import {mount} from "enzyme";
import chaiEnzyme from "chai-enzyme";
import StringUtils from "../util/StringUtils";

import {Page} from "../util/TestUtils";
import About from "./About";

chai.use(chaiEnzyme());

class AboutPage extends Page {
    constructor() {
        super();
        this.setComponent(mount(<About/>));
    }

    licenseTitle = (it) => this.find("#licence_title_" + StringUtils.toKebabCase(it));
    licenseContent = (it) => this.find("#licence_content_" + StringUtils.toKebabCase(it));
}

describe("renders", () => {

    it("without crashing", () => {
        new AboutPage();
    });

    [
        ["Web-Starter", "MIT"],
        ["React", "MIT"],
        ["React Router", "MIT"],
        ["lodash", "MIT"],
        ["normalize.css", "MIT"],
        ["Material design icons", "Apache"],
        ["express", "MIT"],
        ["body-parser", "MIT"],
        ["better-sqlite3", "MIT"],
    ].map(([name, license]) => {
        it(name + "'s " + license + " licence", () => {
            let about = new AboutPage();

            expect(about.licenseTitle(name)).to.be.present();
            expect(about.licenseTitle(name)).to.have.text(name);
            expect(about.licenseContent(name)).to.be.present();
            expect(about.licenseContent(name)).to.include.text(license);
        });
    });

});
