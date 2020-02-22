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
class Quote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {author: "", quote: ""}
    }
    render() {
        return (
        <div>
            <h1>{this.state.quoteAuthor}</h1>
            <p>{this.state.quote}</p>
        </div>
        );
    }
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          20000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    /* async fetch the quotes and reassign the variables to them once processed */
    async tick() {
        let response = await fetchQuote();
        console.log(response);
        this.setState({
            quoteAuthor: response.author,
            quote: response.quote
        });
    }
    
}

function App() {


    /* return a JSX formatted component stuff */
    return (
        <div className = "Main">
            <Quote />
        </div>
    );
}

export default App;
