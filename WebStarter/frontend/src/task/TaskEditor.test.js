import React from "react";
import chai, {expect} from "chai";
import {fake} from "sinon";
import sinonChai from "sinon-chai"
import {mount} from "enzyme";
import chaiEnzyme from "chai-enzyme";

import {KeyEvent, Page} from "../util/TestUtils";
import TaskEditor from "./TaskEditor";
import KeyboardUtils from "../util/KeyboardUtils";

chai.use(sinonChai);
chai.use(chaiEnzyme);

class TaskEditorPage extends Page {
    constructor(task) {
        super();
        this.setComponent(mount(<TaskEditor task={task} onChange={fake()} onConfirm={fake()}/>));
    }

    changeInput = (it) => this.find("input").simulate("change", {target: {value: it}});
    confirmWithEnter = () => this.find("input").simulate("keyDown", KeyEvent(KeyboardUtils.ENTER_KEYCODE));
    confirmWithButton = () => this.find("Button").props().onClick();
    onChangeCallback = () => this.props().onChange;
    onConfirmCallback = () => this.props().onConfirm;
}

it("renders without crashing", () => {
    new TaskEditorPage({text: "Sample"});
});

describe("notifies", () => {

    it("of changes to the task text", () => {
        let taskEditor = new TaskEditorPage({text: "Sample"});

        taskEditor.changeInput("New Sample");

        expect(taskEditor.onChangeCallback()).to.have.been.called;
        expect(taskEditor.onChangeCallback()).to.have.been.calledWith({text: "New Sample"});
    });

    describe("when the task is confirmed", () => {

        it("by pressing the enter key", () => {
            let taskEditor = new TaskEditorPage({text: "Sample"});

            taskEditor.confirmWithEnter();

            expect(taskEditor.onConfirmCallback()).to.have.been.called;
        });

        it("by clicking the \"+\" button", () => {
            let taskEditor = new TaskEditorPage({text: "Sample"});

            taskEditor.confirmWithButton();

            expect(taskEditor.onConfirmCallback()).to.have.been.called;
        });

    });

});