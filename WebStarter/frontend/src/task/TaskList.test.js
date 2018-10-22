import React from "react";
import chai, {expect} from "chai";
import {fake} from "sinon";
import sinonChai from "sinon-chai"
import {mount} from "enzyme";
import chaiEnzyme from "chai-enzyme";

import {Page} from "../util/TestUtils";
import TaskList from "./TaskList";

chai.use(sinonChai);
chai.use(chaiEnzyme());

class TaskEditorPage extends Page {
    constructor(tasks) {
        super();
        this.setComponent(mount(<TaskList tasks={tasks} onDelete={fake()}/>));
    }

    clickDeleteTask = (it) => this.find("#task_button_" + it).props().onClick();
    emptyListPlaceholder = () => this.find(".task-list__empty");
    taskText = (it) => this.find("#task_text_" + it);
    onDeleteCallback = () => this.props().onDelete;
}

describe("renders", () => {

    it("without crashing", () => {
        new TaskEditorPage([]);
    });

    it("a placeholder when the list is empty", () => {
        let taskList = new TaskEditorPage([]);

        expect(taskList.emptyListPlaceholder()).to.be.present();
    });

    it("no placeholder when the list is not empty", () => {
        let tasks = [{id: 1, text: "Sample1"}, {id: 2, text: "Sample2"}];
        let taskList = new TaskEditorPage(tasks);

        expect(taskList.emptyListPlaceholder()).to.not.be.present();
    });

    it("tasks text", () => {
        let tasks = [{id: 1, text: "Sample1"}, {id: 2, text: "Sample2"}];
        let taskList = new TaskEditorPage(tasks);

        tasks.map(it => {
            expect(taskList.taskText(it.id)).to.have.text(it.text);
        });
    });

});

it("notifies of a task to be deleted", () => {
    let task = {id: 1, text: "Sample1"};
    let tasks = [task, {id: 2, text: "Sample2"}];

    let taskList = new TaskEditorPage(tasks);
    taskList.clickDeleteTask(1);

    expect(taskList.onDeleteCallback()).to.have.been.called;
    expect(taskList.onDeleteCallback()).to.have.been.calledWith(task);
});