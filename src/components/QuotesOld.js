import React from 'react';
import fetchQuote from './Fetch'

/* component for the quotes */
export default class Quote extends React.Component {
    /* placeholder */
    constructor(props) {
        super(props);
        this.state = {
            quoteAuthor: "Rick Osborne", 
            quote: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."
        }
    }
    /* actually render things */
    render() {
        return (
            <div className="quotes">
                <h1>{this.state.quoteAuthor}</h1>
                <p>{this.state.quote}</p>
                <div className="button">
                    <button id="button" onClick={this.update}>New quote</button>
                </div>
            </div>
        );
    }
    
    /* async fetch the quotes and reassign the variables to them once processed */
    update = async() => {
        let response = await fetchQuote();
        console.log(response);
        this.setState({
            quoteAuthor: response.author,
            quote: response.en
        });
    };   
}

/* https://www.npmjs.com/package/react-share
Twitter share button args:
title (string): Title of the shared page
via: (string)
hashtags (array): Hashtags
*/