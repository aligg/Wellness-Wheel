import * as theme from "../../public/static/theme.js";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";


const styles = {
    drawer: {
        width: "100vw",
        height: "100vh",
        backgroundColor: theme.colors.blue,
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
        color: theme.colors.fuschia,
        marginLeft: "15px",
        textDecoration: "none",
        padding: theme.padding,
        fontWeight: 600,
        fontSize: "50px",
    },
    underline: {
        textDecoration: "underline",
    }
}


class Drawer extends React.Component {

    static propTypes = {
        open: PropTypes.bool.isRequired,
        handleClick: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            hovered: null,
        }
    }

    toggleHover = (name) => {
        return () => {
                (
                this.setState({
                    hovered: name,
                })
            )
        }
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
                        style={this.state.hovered === "home" ? 
                            {...styles.link, ...styles.underline} :
                            {...styles.link}
                        }
                        onMouseOver={this.toggleHover("home")}
                        onMouseOut={this.toggleHover(null)}
                    >
                        
                        Home
                    </Link>
                    <Link
                        to="/about"
                        style={this.state.hovered === "about" ? 
                            {...styles.link, ...styles.underline} :
                            {...styles.link}
                        }
                        onMouseOver={this.toggleHover("about")}
                        onMouseOut={this.toggleHover(null)}
                    >
                        About
                    </Link>
                </div>
            </div>
        );
    }
}

export default Drawer;
