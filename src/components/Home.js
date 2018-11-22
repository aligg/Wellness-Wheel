import {wellMessages} from "../../public/wellMessages.js";
import React from "react"
import Message from "./Message";
import Image from "./Image";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currIndex: Math.floor(Math.random() * wellMessages.length),
        }
    }

    componentDidMount(){
        document.addEventListener("keydown", this.handleKeyPress, false);
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.handleKeyPress, false);
    }

    handleKeyPress = (evt) => {
        if (evt.keyCode === 32) {
            this.setState({
                currIndex: Math.floor(Math.random() * wellMessages.length),
            })
        }
    }
    
    renderMessage = () => {
        const item = wellMessages[this.state.currIndex]
        if (item.type === "image") {
            return (
                <Image
                    image={item}
                />
            );
        }
        return (
            <Message
                item={item}
            />
        );
    }
    
    render() {
        return (
            <div
                style={{
                    display: "flex",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {this.renderMessage()}
            </div>
        )
    }
}

export default Home;
