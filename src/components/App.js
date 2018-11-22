import React from "react";
import Router from "./Router";
import {hot} from "react-hot-loader";
import Drawer from "./Drawer";


class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }

    toggleDrawer = () => {
        this.setState({
            open: !this.state.open
        })
    }

    handleClick = (e) => {
        this.toggleDrawer();    
        e.stopPropagation();
    }

    home = () => {
        this.props.history.push("/")
    }

    about = () => {
        console.log('about')
        this.props.history.push("/about")
    }

    render() {
        return(
            <div
                style={{
                    display: "flex",
                    flex: 1,
                }}
            >
                <Drawer
                    open={this.state.open}
                    handleClick={this.handleClick}
                    about={this.about}
                    home={this.home}
                />
                <Router
                    toggleDrawer={this.toggleDrawer}
                />
            </div>
        );
    }
}

export default hot(module)(App);
