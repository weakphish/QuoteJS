import React from 'react';
import './App.css';

import fetchQuote from './components/Fetch'
import Quote from './components/Quotes'

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
