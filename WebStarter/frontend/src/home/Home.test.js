import React from "react";
import chai, {expect} from "chai";
import {mount} from "enzyme";
import chaiEnzyme from "chai-enzyme"

import {Page} from "../util/TestUtils"
import Home from "./Home";
import TaskRepository from "../task/TaskRepository"

jest.mock("../task/TaskRepository"); //Mock the TaskRepository.
chai.use(chaiEnzyme());

class HomePage extends Page {
    constructor() {
        super();
        this.setComponent(mount(<Home/>));
    }

    changeCurrentTask = (it) => this.find("TaskEditor").props().onChange(it);
    confirmTaskCreation = (it) => this.find("TaskEditor").props().onConfirm(it);
    clickTaskDeleteButton = (it) => this.find("TaskList").props().onDelete(it);
    taskList = () => this.find("TaskList");
    taskEditor = () => this.find("TaskEditor");
}

afterEach(() => {
    TaskRepository.__reset();
});

describe("renders", () => {

    it("without crashing", async () => {
        //Load
        new HomePage();
    });

    it("tasks", async () => {
        let initialTasks = [{id: 1, text: "Sample1"}, {id: 2, text: "Sample2"}];
        TaskRepository.__setTasks(initialTasks);

        //Load
        let home = new HomePage();

        expect(home.component()).to.have.state("tasks").deep.equal(initialTasks);
        expect(home.taskList()).to.have.prop("tasks").deep.equal(initialTasks);
    });

    it("empty task editor", async () => {
        //Load
        let home = new HomePage();

        expect(home.component()).to.have.state("currentTask").deep.equal({text: ""});
        expect(home.taskEditor()).to.have.prop("task").deep.equal({text: ""});
    });

});

it("can change the current task", async () => {
    //Load
    let home = new HomePage();

    //Change the task
    let newTask = {text: "New Sample"};
    home.changeCurrentTask(newTask);

    expect(home.component()).to.have.state("currentTask").equal(newTask);
});

it("can add a task", async () => {
    //Load
    let home = new HomePage();

    //Add task
    let newTask = {text: "New Sample"};
    home.confirmTaskCreation(newTask);

    expect(TaskRepository.__tasks()).to.deep.include(newTask);
});

it("reload tasks when task is added", async () => {
    //Load
    let home = new HomePage();

    //Add task (and fake new tasks)
    let newTask = {text: "New Sample"};
    let newTasks = [{id: 1, text: "Sample1"}, {id: 2, text: "Sample2"}];
    TaskRepository.__setTasks(newTasks);
    home.confirmTaskCreation(newTask);

    newTasks.map(it => expect(home.component()).to.have.state("tasks").deep.include(it));
    newTasks.map(it => expect(home.taskList()).to.have.prop("tasks").deep.include(it));
});

it("make current tasks empty when task is added", async () => {
    //Load
    let home = new HomePage();

    //Add task
    home.confirmTaskCreation({text: "Sample"});

    expect(home.component()).to.have.state("currentTask").deep.equal({text: ""});
});

it("can delete a task", async () => {
    let task = {id: 1, text: "Sample1"};
    TaskRepository.__setTasks([task]);

    //Load
    let home = new HomePage();

    //Delete task
    home.clickTaskDeleteButton(task);

    expect(TaskRepository.__tasks()).to.be.empty;
});

it("reload tasks when task is deleted", () => {
    let task = {id: 1, text: "Sample1"};
    TaskRepository.__setTasks([task]);

    //Load
    let home = new HomePage();

    //Delete task (and fake new tasks)
    let newTasks = [{id: 1, text: "Sample1"}, {id: 2, text: "Sample2"}];
    newTasks.map(it => TaskRepository.__tasks().push(it));
    home.clickTaskDeleteButton(task);

    newTasks.map(it => expect(home.component()).to.have.state("tasks").deep.include(it));
    newTasks.map(it => expect(home.taskList()).to.have.prop("tasks").deep.include(it));
});