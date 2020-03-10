import React, { useEffect, useState } from 'react';
import fetchQuote from './Fetch';

/* https://reactjs.org/docs/hooks-overview.html 
 * https://stackoverflow.com/questions/60610256/what-is-the-proper-way-to-fetch-json-in-react-with-hooks
 */

export default function Quote() {
    const [author, setAuthor] = useState("Rick Osborne");
    const [quote, setQuote] = useState(
        "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."
    );

    const fetchMyAPI = async () => {
        let json = await fetchQuote();
        setAuthor(json.author);
        setQuote(json.en);
        console.log(json);
    }
    
    useEffect(() => {
        fetchMyAPI();
       }, []);
    
    return (
        <div className="quotes">
            <h1>{author}</h1>
            <p>{quote}</p>
            <div className="button">
                <button id="button" onClick={fetchMyAPI}>
                    New quote
                </button>
            </div>
        </div>
    )
}