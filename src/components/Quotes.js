import React from 'react';
import * as theme from '../../public/static/theme';

class Quotes extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            isLoading : true,
            quote : "fetching Quotes ..."
        }
    }
    getQuote = () =>{
        fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes/1")
        .then(result => result.json())
        .then((response)=>{
            if(response)
            {
                this.setState({"quote":response[0]});
            }
            else{
                this.setState({"quote":"Sorry refresh the page or try again later!!"});
            }
            this.setState({"isLoading":false});
        });
    }
    componentDidMount(){
        this.getQuote();
    }
    render()
    {
        let content;
        if(this.state["isLoading"]){
            content = <img src="https://media.giphy.com/media/jAYUbVXgESSti/giphy.gif" width="100%"/>
        }
        else{
            content = <p>{this.state.quote}</p>
        }
        return (
            <div style={
                {
                    display : 'flex',
                    alignItems : 'center',
                    justifyContent : 'center',
                    flex : '1'
                }
            }>
                <div style={{
                    maxWidth: '30vw',
                    fontSize: '14px',
                    color: theme.colors.blackish,
                    boxShadow: theme.boxShadow,
                    padding: theme.padding * 4,
                    borderRadius: '5px',
                    lineHeight: 1.3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems : 'center'
                    }}>
                    <div style={{
                        fontWeight: 600,
                        color: theme.colors.fuschia,
                        fontSize: '30px',
                        marginBottom: '10px',
                        flex : '1'
                    }}>
                        <span>Todays Quotes</span>
                    </div>
                    <div>
                        {content}
                    </div>
                </div>
            </div>
        );
    }
}
export default Quotes;