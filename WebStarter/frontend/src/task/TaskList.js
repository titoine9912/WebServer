import React, {Component} from "react";
import PropTypes from "prop-types";

import Button from "../button/Button"
import Icon from "../icon/Icon"

import "./TaskList.css";

class TaskList extends Component {

    static propTypes = {
        tasks: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired
            })
        ).isRequired
    };

    render() {
        let tasks = this.props.tasks.map(it =>
            <li key={it.id} className="task-list__item">
                <span id={"task_text_" + it.id}>{it.text}</span>
                <Button id={"task_button_" + it.id} onClick={() => this.props.onDelete(it)}>
                    <Icon>clear</Icon>
                </Button>
            </li>
        );

        return (
            <ul className="task-list">
                {tasks.length === 0 && <li className="task-list__empty">Vide</li>}
                {tasks}
            </ul>
        );
    }

}

export default TaskList;