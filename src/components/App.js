import React from "react";
import Router from "./Router";
import {hot} from "react-hot-loader";


class App extends React.Component{
  render(){
    return(
      <div
        style={{
            display: "flex",
            flex: 1,
        }}
      >
        <Router />
      </div>
    );
  }
}

export default hot(module)(App);
