import React from "react";
import chai, {expect} from "chai";
import {mount} from "enzyme";
import chaiEnzyme from "chai-enzyme";

import {Page} from "../util/TestUtils";
import Icon from "./Icon";

chai.use(chaiEnzyme());

class IconPage extends Page {
    constructor(children) {
        super();
        this.setComponent(mount(<Icon>{children}</Icon>));
    }
}

describe("renders", () => {

    it("without crashing", () => {
        new IconPage("Sample")
    });

    it("children", () => {
        let icon = new IconPage("Sample");

        expect(icon.children()).to.have.text("Sample");
    });

});