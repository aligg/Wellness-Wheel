import React from "react";
import Router from "./Router";
import {hot} from "react-hot-loader";
import Drawer from "@material/react-drawer";
import ExampleContent from "./ExampleContent";


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

    render() { console.log(this.state.open)
        return(
            <div
                style={{
                    display: "flex",
                    flex: 1,
                }}
            >
                <Drawer
                    modal={true}
                    dismissible
                    open={this.state.open}
                    onClose={() => this.setState({open: false})}
                >
                    <ExampleContent />
                </Drawer>
                <Router
                    toggleDrawer={this.toggleDrawer}
                />
            </div>
        );
    }
}

export default hot(module)(App);
