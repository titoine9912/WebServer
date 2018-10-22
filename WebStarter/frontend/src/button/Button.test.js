import React from "react";
import chai, {expect} from "chai";
import {fake} from "sinon";
import sinonChai from "sinon-chai"
import {mount} from "enzyme";
import chaiEnzyme from "chai-enzyme";

import {Page} from "../util/TestUtils";
import Button from "./Button";

chai.use(sinonChai);
chai.use(chaiEnzyme());

class ButtonPage extends Page {
    constructor(children) {
        super();
        this.setComponent(mount(<Button onClick={fake()}>{children}</Button>));
    }

    click = () => this.find("button").simulate("click");
    onClickCallback = () => this.props().onClick;
}

describe("renders", () => {

    it("without crashing", () => {
        new ButtonPage("Sample");
    });

    it("children", () => {
        let button = new ButtonPage("Sample");

        expect(button.children()).to.have.text("Sample");
    });

});

it("notifies when clicked", () => {
    let button = new ButtonPage("Sample");

    button.click();

    expect(button.onClickCallback()).to.have.been.called;
});