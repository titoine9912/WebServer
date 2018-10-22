import RandomUtils from "../../util/RandomUtils"
import ArrayUtils from "../../util/ArrayUtils"

class TaskRepositoryMock {

    static tasks = [];

    static __setTasks(tasks) {
        TaskRepositoryMock.tasks = tasks;
    }

    static __tasks() {
        return TaskRepositoryMock.tasks;
    }

    static __reset() {
        TaskRepositoryMock.tasks = [];
    }

    static __generateId() {
        let randomId = RandomUtils.generate();
        while (TaskRepositoryMock.tasks.find(it => it.id === randomId) !== undefined) {
            randomId = RandomUtils.generate();
        }
        return randomId;
    }

    static createNew() {
        return {text: ""};
    }

    static findAll(onStart, onEnd, onSuccess, onNotFound, onServerError, onConnectivityError) {
        onStart();
        onSuccess(TaskRepositoryMock.tasks);
        onEnd();
    }

    static findById(id, onStart, onEnd, onSuccess, onNotFound, onServerError, onConnectivityError) {
        onStart();
        onSuccess(TaskRepositoryMock.tasks.find(it => it.id === id));
        onEnd();
    }

    static insert(task, onStart, onEnd, onSuccess, onNotFound, onServerError, onConnectivityError) {
        onStart();
        task.id = TaskRepositoryMock.__generateId();
        TaskRepositoryMock.tasks.push(task);
        onSuccess(task);
        onEnd();
    }

    static delete(id, onStart, onEnd, onSuccess, onNotFound, onServerError, onConnectivityError) {
        onStart();
        let index = TaskRepositoryMock.tasks.find(it => it.id === id);
        if (index) {
            ArrayUtils.remove(TaskRepositoryMock.tasks, index);
        }
        onSuccess();
        onEnd();
    }

}

export default TaskRepositoryMock;