import React from 'react';
import './App.css';

import Quote from './components/Quotes'
import Footer from './components/Footer'

/* the main meat */
function App() {
    /* return a JSX formatted component stuff */
    return (
        <div className = "Main">
            <Quote />
            <Footer />
        </div>
    );
}

export default App;
