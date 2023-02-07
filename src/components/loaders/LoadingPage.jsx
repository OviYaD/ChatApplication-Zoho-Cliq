import React, { useState, useEffect } from 'react';
import "./LoadingPage.scss"
import ThreeDotLoader from './ThreeDotLoader';
import { getQuote } from "../../api/General/quote"
export default function LoadingPage(params) {
    const [quote, setQuote] = useState();
    useEffect(() => {
        const getQuotes = async () => {
            const data = await getQuote();
            setQuote(data);
        }
        getQuotes();
    }, [])
    return <>
        {quote && <div id="quoteui" type="quote" className="quoteui">
            <div id="quotebg" className="quotebg" style={{ background: "url(https://static.zohocdn.com/chat/source/officechat/images/default/loading-bg.jpg)" }}></div>
            <div id="quotecontainer" className="zcdqut">
                <div className="zcquttxt">
                    {quote.quote}
                    <div className="zcqutauth">{quote.author}</div>
                    <div className='pgload'><ThreeDotLoader></ThreeDotLoader></div>

                </div>
            </div>
        </div>}
    </>;
};
