import * as theme from "../../public/static/theme.js";
import PropTypes from "prop-types";
import React from "react";

class Image extends React.Component {

    static propTypes = {
        image: PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <img
                    src={this.props.image.content}
                    style={{
                        maxHeight: "90vh",
                        maxWidth: "90vw",
                        boxShadow: theme.boxShadow,
                    }}

                />
            </div>
        )
    }
}

export default Image;
