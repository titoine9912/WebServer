import React, {Component} from "react";
import PropTypes from "prop-types";

import KeyboardUtils from "../util/KeyboardUtils"
import StateUtils from "../util/StateUtils"
import Button from "../button/Button"
import Icon from "../icon/Icon"

import "./TaskEditor.css";

class TaskEditor extends Component {

    static propTypes = {
        task: PropTypes.shape({
            text: PropTypes.string.isRequired
        }).isRequired
    };

    notifyTaskChanged(task) {
        if (this.props.onChange) {
            this.props.onChange(task);
        }
    }

    notifyConfirm(task) {
        if (this.props.onConfirm) {
            this.props.onConfirm(task);
        }
    }

    onInputChanged = (event) => {
        let task = StateUtils.createNew(this.props.task);
        task.text = event.target.value;

        this.notifyTaskChanged(task);
    };

    onInputKeyDown = (event) => {
        if (event.keyCode === KeyboardUtils.ENTER_KEYCODE) {
            event.preventDefault();
            this.notifyConfirm(this.props.task);
        }
    };

    render() {
        return (
            <div className="task-editor">
                <input value={this.props.task.text}
                       type="text"
                       onChange={this.onInputChanged}
                       onKeyDown={this.onInputKeyDown}/>
                <Button onClick={this.props.onConfirm}>
                    <Icon>add</Icon>
                </Button>
            </div>
        );
    }

}

export default TaskEditor;