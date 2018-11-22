import * as theme from "../../public/static/theme.js";
import React from "react"

class About extends React.Component {
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
                <div
                    style={{
                        maxWidth: "40vw",
                        fontSize: "16px",
                        color: theme.colors.blackish,
                        boxShadow: theme.boxShadow,
                        padding: theme.padding * 2,
                        borderRadius: "5px",
                    }}
                >
                    Welcome. This is a small project to encourage newcomers to React or open source to make first time contributions.
                    Building something novel along the way.
                    Started by 
                    <a style={
                        {textDecoration: "none",
                        color: theme.colors.blue,
                        fontWeight: 600,

                    }
                    } href="https://www.twitter.com/aliglenesk" target="_blank"> Ali Glenesk</a>.
                </div>
            </div>
        )
    }
}

export default About;
