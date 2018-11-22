import {
    Route,
    withRouter,
} from "react-router-dom";
import Home from "./Home";
import Footer from "./Footer";
import Header from "./Header";
import React from "react";
import About from "./About";

class Router extends React.Component {

    render() { 
        return (
            <div
                style={{
                    flex: 1,
                    flexDirection: "column",
                    display: "flex",
                }}
            >
                <Route
                    path="/"
                    render={(props) => <Header {...props} toggleDrawer={this.props.toggleDrawer}/>}
                />
                <div
                    style={{
                        flex: 1,
                        flexDirection: "column",
                        display: "flex"
                    }}
                >
                    <Route
                        path="/"
                        exact={true}
                        component={Home}
                    />
                    <Route
                        path="/about"
                        exact={true}
                        component={About}
                    />
                </div>
                <Route
                    path="/"
                    component={Footer}
                />
            </div>
        );
    }
}

export default withRouter(Router);
