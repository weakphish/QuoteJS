import React from 'react';
import './App.css';

function fetchQuote() {
    return fetch('http://quotes.stormconsultancy.co.uk/random.json') // fetch a response from the api
        .then((response) => { 
            let json = response.json(); // then assign the JSON'd response to a var
            return json; // return that bad boy
    });
}

/* component for the quote */
function Quote(props) {
    return (
        <div>
            <h1>{props.quoteAuthor}</h1>
            <p>{props.quote}</p>
        </div>
    );
}

function App() {
    /* assign placeholder values for the text */
    let quoteAuthor = "";
    let quote = "";

    /* async fetch the quotes and reassign the variables to them once processed */
    fetchQuote().then((response) => {
        let json = response;
        console.log(json); // debug
        quoteAuthor = json.author;
        quote = json.quote;
    });

    /* return a JSX formatted component stuff */
    return (
        <div className = "Main">
            <Quote author = {quoteAuthor} quote = {quote} />
        </div>
    );
}

export default App;
