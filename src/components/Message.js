import PropTypes from "prop-types";
import React from "react";

class Message extends React.Component {

    static propTypes = {
        item: PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                {this.props.item.content}
            </div>
        )
    }
}

export default Message;
