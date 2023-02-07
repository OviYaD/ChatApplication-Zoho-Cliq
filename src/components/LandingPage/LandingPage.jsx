import React, { useState, useEffect } from 'react';
import "./LandingPage.scss";
import { getQuote } from '../../api/General/quote';
import LoadingPage from '../loaders/LoadingPage';

export default function LandingPage() {
    const [quote, setQuote] = useState();
    useEffect(() => {
        const fetchQuote = async () => {
            const res = await getQuote();
            setQuote(res);
        }
        fetchQuote();
    }, [])

    if (quote) {
        return <>
            <div className="" style={{ backgroundColor: "#fff", width: "100%", borderRadius: "10px", marginLeft: "2px", marginRight: "8px", position: "relative" }}>
                <div className="quote-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" fill="currentColor" className="bi bi-quote" viewBox="0 0 16 16" style={{ color: "var(--color-icon)", opacity: "0.08" }}>
                        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                    </svg>
                    <h1 className='quote-text' >Quote of the Day</h1>
                    <div className='quote-msg'>{quote.quote}</div>
                    <div className='quote-auth'>{quote.author}</div>
                </div>
            </div>
        </>
    }
    else {
        return <LoadingPage></LoadingPage>
    }
}