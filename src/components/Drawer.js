import * as theme from "../../public/static/theme.js";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";


const styles = {
    drawer: {
        width: "100vw",
        height: "100vh",
        backgroundColor: "#FFE600",
        position: "fixed",
        top: 0,
        left: 0,
        transition: "transform .3s cubic-bezier(0, .52, 0, 1",
        overflow: "scroll",
        zIndex: 1000,
    },
    hidden: {
        transform: "translate3d(-100vw, 0, 0)",
    }, 
    show: {
        transform: "translate3d(0vw, 0, 0",
        overflow: "hidden",
    },
    link: {
        color: "#333",
        marginLeft: "15px",
        textDecoration: "none",
        padding: theme.padding,
    }
}


class Drawer extends React.Component {

    static propTypes = {
        open: PropTypes.bool.isRequired,
        handleClick: PropTypes.func.isRequired
    }

    render() {
        return (
            <div
                style={
                    this.props.open ?
                    {...styles.drawer, ...styles.show} :
                    {...styles.drawer, ...styles.hidden}
                }
                onClick={this.props.handleClick}
            >
                <div
                    style={{
                        padding: theme.padding * 2,
                        display: "flex",
                        flex: 1,
                        flexDirection: "column",
                    }}
                >
                    <Link
                        to="/"
                        style={styles.link}
                    >
                        
                        Home
                    </Link>
                    <Link
                        to="/about"
                        style={styles.link}
                    >
                        About
                    </Link>
                </div>
            </div>
        );
    }
}

export default Drawer;
