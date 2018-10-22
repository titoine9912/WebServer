import React, {Component} from "react";

import TaskRepository from "../task/TaskRepository"
import TaskList from "../task/TaskList"
import TaskEditor from "../task/TaskEditor"

import "./Home.css";

class Home extends Component {

    state = {
        tasks: [],
        currentTask: TaskRepository.createNew()
    };

    componentDidMount() {
        this.loadTasksFromServer();
    }

    setTasks(tasks) {
        this.setState({
            tasks: tasks
        });
    }

    setCurrentTask(task) {
        this.setState({
            currentTask: task
        });
    }

    loadTasksFromServer() {
        TaskRepository.findAll(
            this.onLoadingStarted,
            this.onLoadingEnded,
            this.onTasksLoaded,
            this.onConnectivityError,
            this.onServerError,
            this.onConnectivityError
        );
    }

    sendTaskToServer(task) {
        TaskRepository.insert(
            task,
            this.onLoadingStarted,
            this.onLoadingEnded,
            this.onTaskSent,
            this.onConnectivityError,
            this.onServerError,
            this.onConnectivityError
        );
    }

    deleteTaskOnServer(task) {
        TaskRepository.delete(
            task.id,
            this.onLoadingStarted,
            this.onLoadingEnded,
            this.onTaskDeleted,
            this.onConnectivityError,
            this.onServerError,
            this.onConnectivityError
        );
    }

    onLoadingStarted = () => {
        //TODO
    };

    onLoadingEnded = () => {
        //TODO
    };

    onTasksLoaded = (tasks) => {
        this.setTasks(tasks);
    };

    onTaskSent = () => {
        this.loadTasksFromServer();
        this.setCurrentTask(TaskRepository.createNew());
    };

    onTaskDeleted = () => {
        this.loadTasksFromServer();
    };

    onServerError = () => {
        //TODO
    };

    onConnectivityError = () => {
        //TODO
    };

    onTaskDeleteClick = (task) => {
        this.deleteTaskOnServer(task);
    };

    onCurrentTaskChange = (task) => {
        this.setCurrentTask(task);
    };

    onCurrentTaskConfirm = (task) => {
        this.sendTaskToServer(task);
    };

    render() {
        return (
            <div className="home">
                <h1>Tâches</h1>
                <TaskList tasks={this.state.tasks}
                          onDelete={this.onTaskDeleteClick}/>
                <TaskEditor task={this.state.currentTask}
                            onChange={this.onCurrentTaskChange}
                            onConfirm={this.onCurrentTaskConfirm}/>
            </div>
        );
    }

}

export default Home;