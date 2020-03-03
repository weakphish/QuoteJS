import React from 'react';

/* this function accesses the API and returns a json */
export default function fetchQuote() {
    return fetch('https://programming-quotes-api.herokuapp.com/quotes/random') // fetch a response from the api
        .then((response) => { 
            let json = response.json(); // then assign the JSON'd response to a var
            return json; // return that bad boy
    });
}
