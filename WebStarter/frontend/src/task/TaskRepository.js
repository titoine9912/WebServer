import Database from "../database/Database"

const API_URL = "/api/task";

class TaskRepository {

    static createNew() {
        return {text: ""};
    }

    static findAll(onStart, onEnd, onSuccess, onNotFound, onServerError, onConnectivityError) {
        Database.get(
            API_URL,
            onStart,
            onEnd,
            onSuccess,
            onNotFound,
            onServerError,
            onConnectivityError
        );
    }

    static findById(id, onStart, onEnd, onSuccess, onNotFound, onServerError, onConnectivityError) {
        Database.get(
            API_URL + "/" + id,
            onStart,
            onEnd,
            onSuccess,
            onNotFound,
            onServerError,
            onConnectivityError
        );
    }

    static insert(task, onStart, onEnd, onSuccess, onNotFound, onServerError, onConnectivityError) {
        Database.post(
            API_URL,
            task,
            onStart,
            onEnd,
            onSuccess,
            onNotFound,
            onServerError,
            onConnectivityError
        );
    }

    static delete(id, onStart, onEnd, onSuccess, onNotFound, onServerError, onConnectivityError) {
        Database.delete(
            API_URL + "/" + id,
            onStart,
            onEnd,
            onSuccess,
            onNotFound,
            onServerError,
            onConnectivityError
        );
    }

}

export default TaskRepository;