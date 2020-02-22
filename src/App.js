import React from 'react';
import './App.css';

/* this function accesses the API and returns a json */
function fetchQuote() {
    return fetch('http://quotes.stormconsultancy.co.uk/random.json') // fetch a response from the api
        .then((response) => { 
            let json = response.json(); // then assign the JSON'd response to a var
            return json; // return that bad boy
    });
}

/* component for the quote */
class Quote extends React.Component {
    /* placeholder */
    constructor(props) {
        super(props);
        this.state = {quoteAuthor: "Rick Osborne", quote: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."}
    }
    /* actually render things */
    render() {
        return (
        <div>
            <h1>{this.state.quoteAuthor}</h1>
            <p>{this.state.quote}</p>
        </div>
        );
    }
    /* start a timer */
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          20000
        );
    }
    /* idk what this does but facebook told me to do it */
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

/* the main meat */
function App() {
    /* return a JSX formatted component stuff */
    return (
        <div className = "Main">
            <Quote />
        </div>
    );
}

export default App;
