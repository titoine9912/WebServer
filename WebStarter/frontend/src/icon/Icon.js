import React, {Component} from "react";

import "material-design-icons/iconfont/material-icons.css"

class Icon extends Component {

    render() {
        return (
            <i className="material-icons">
                {this.props.children}
            </i>
        );
    }
}

export default Icon;