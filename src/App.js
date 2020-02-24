import React from 'react';
import './App.css';

import Quote from './components/Quotes'
import Footer from './components/Footer'
import Share from './components/Share'

/* the main meat */
function App() {
    /* return a JSX formatted component stuff */
    return (
        <div className = "Main">
            <Quote />
            <Footer />
            <Share />
        </div>
    );
}

export default App;
