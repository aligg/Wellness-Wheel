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
                        maxWidth: "30vw",
                        fontSize: "14px",
                        color: theme.colors.blackish,
                        boxShadow: theme.boxShadow,
                        padding: theme.padding * 4,
                        borderRadius: "5px",
                        lineHeight: 1.3,
                        display: "flex",
                        flexDirection: "column"
                    }}
                >
                    <div
                        style={{
                            fontWeight: 600,
                            color: theme.colors.fuschia,
                            fontSize: "30px",
                            marginBottom: "10px",
                        }}
                    >
                        Welcome.
                    </div>
                    <div>
                        This is a small project to encourage newcomers to React or open source to make first time contributions.
                        Building something novel along the way. Click the space bar on the homescreen to see something new.
                    </div>
                    <div
                        style={{
                            marginTop: "20px",
                            lineHeight: 1.3,
                        }}
                    >
                        Created by 
                            <a style={
                                {textDecoration: "none",
                                color: theme.colors.blue,
                                fontWeight: 600,
                            }} href="https://www.twitter.com/aliglenesk" target="_blank"> Ali Glenesk </a> and
                            <a style={
                                {textDecoration: "none",
                                color: theme.colors.blue,
                                fontWeight: 600,
                            }} href="https://github.com/aligg/Wellness-Wheel/graphs/contributors" target="_blank"> friends</a>.
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
