import React, { useState, useEffect, useRef, useCallback } from 'react';
import "./History.scss";
import { getSentMessages } from '../../api/chats/chat';
import moment from 'moment/moment';
import CircleLoader from '../loaders/CircleLoader';

export default function History(params) {
    // const showInput = useRef(false);
    const [showInput, setShowInput] = useState(false);
    const [sentMessages, setSentMessages] = useState([]);
    const [query, setQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const searchInput = useRef();
    const observer = useRef();
    const [hasMore, setHasMore] = React.useState(true);
    const [pages, setPages] = React.useState(0);

    useEffect(() => {
        fetchSentMessages();
    }, [])

    const updateItems = async () => {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));

        await fetchSentMessages(query, sentMessages.length);

        setIsLoading(false);
    };

    const lastItemRef = useCallback(
        (node) => {
            if (isLoading) return;
            if (observer.current) observer.current.disconnect();

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    if (pages < 15) {
                        updateItems();
                        setPages((pages) => pages + 1);
                    } else {
                        setHasMore(false);
                    }
                }
            });

            if (node) observer.current.observe(node);
        },
        [isLoading, hasMore]
    );


    const fetchSentMessages = async (query = "", offset = 0) => {
        const res = await getSentMessages(query, offset);
        let prevDate = "";
        let prevChat = "";

        const msgList = res.map((msg) => {
            let flags = { showDate: false, showChat: false, isFirstMsg: false };

            if (prevDate === "" && prevChat === "") {
                prevDate = msg.created_at;
                prevChat = msg.chat_id;
                flags.showDate = true;
                flags.showChat = true;
                flags.isFirstMsg = true;
            }
            else {
                if (prevChat !== msg.chat_id) {
                    flags.showChat = true;
                    prevChat = msg.chat_id;
                    flags.isFirstMsg = true;
                }

                if (!moment(prevDate).isSame(moment(msg.created_at), "day")) {
                    flags.showDate = true;
                    flags.showChat = true;
                    flags.isFirstMsg = true;
                    prevDate = msg.created_at;

                }
            }
            return { ...msg, ...flags };
        })
        console.log("filtered list", msgList);

        query === "" ? setSentMessages((msg) => [...msg, ...msgList]) : setSentMessages(msgList);

    }

    const handleChange = (e) => {
        setQuery(e.target.value);
        fetchSentMessages(e.target.value);


    }

    return <>
        <div className="" style={{ backgroundColor: "#fff", width: "100%", borderRadius: "10px", marginTop: "4%", marginLeft: "2px", marginRight: "8px", position: "relative", paddingBottom: "20px" }}>

            {/* <div className='flexC'>
                <div className="flexC justifySB" style={{ padding: "5px 30px", borderBottom: "1px solid rgb(230,230,230)", fontFamily: "zoho-puvi-semi-bold", width: "100%" }}>

                  <div>
                        <div className="zcl-btn--primary cur zcl-btn-xs ">Start Chat</div>
                    </div> 
                </div>
            </div> */}
            <div className='flexC'>
                <div className="flexC justifySB" style={{ padding: "5px 30px", borderBottom: "1px solid rgb(230,230,230)", fontFamily: "zoho-puvi-semi-bold", width: "100%" }}>
                    <div className="flexC">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-send mR10" viewBox="0 0 16 16">
                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                        </svg>
                        <div className='bold font14'>Send Message</div>
                    </div>
                    <div style={{ marginLeft: "auto" }}>
                        <div className={`zcl-search ${showInput && "btnactive active"}`}>
                            <div className="zcl-seach-icon " onClick={() => { setShowInput(true); searchInput.current.focus(); console.log(searchInput.current) }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </div>
                            <div className="flexC">
                                <input id="ml_search_input" type="text" placeholder="Search by file name" style={{ width: "400px", outline: "none", border: "none" }} value={query} onChange={handleChange} ref={searchInput} />
                                <span data-action="clearSearch" className="zcl-search-clear" onClick={() => setShowInput(false)} style={{ marginRight: "10px" }}>Clear</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="date-display font13">
                Thursday 2023
            </div> */}
            <div className="chat-history-container">
                {sentMessages && sentMessages.length > 0 && sentMessages.map((msg, index) => {
                    return (
                        index + 1 === sentMessages.length ?
                            <div ref={lastItemRef}>
                                {index !== 0 && msg.showChat && <div className="end-border"></div>}

                                {msg.showDate && <div className="date-display font13">
                                    {`${moment(msg.created_at).isSame(moment(), 'day') ? "Today," : moment(msg.created_at).isSame(moment().subtract(1, 'days'), 'day') ? "Yesterday," : ""}${moment(msg.created_at).format("MMMM DD")}`}
                                </div>
                                }
                                <div className="chat-history" >
                                    {
                                        msg.showChat && <div className="sendTo">
                                            <div className='img_container'>
                                                <img width="100%" height="100%" src={`${msg.is_private ?
                                                    msg.receiver.image_url?.includes("https") ? msg.receiver.image_url : process.env.REACT_APP_BUCKET_END_POINT + msg.receiver.image_url
                                                    :
                                                    msg.channel.image_url?.includes("https") ? msg.channel.image_url : process.env.REACT_APP_BUCKET_END_POINT + msg.channel.image_url}`}></img>
                                            </div>
                                            <div className="receiver-name flexC">{msg.is_private ? msg.receiver.first_name : "#" + msg.channel.name}</div>

                                        </div>
                                    }
                                    <div className="msg-display flexC justifySB" >
                                        {
                                            msg.files.length === 0 ? <div className="sent-msg ellips">{msg.content}</div> :
                                                <div className="sent-msg ellips" style={{ fontStyle: "italic" }}> You shared a file</div>
                                        }
                                        <div className="sent-time" > {moment(msg.created_at).format("hh:mm A")}</div>
                                    </div>
                                </div>
                            </div> : <>
                                {index !== 0 && msg.showChat && <div className="end-border"></div>}

                                {msg.showDate && <div className="date-display font13">
                                    {`${moment(msg.created_at).isSame(moment(), 'day') ? "Today," : moment(msg.created_at).isSame(moment().subtract(1, 'days'), 'day') ? "Yesterday," : ""}${moment(msg.created_at).format("MMMM DD")}`}
                                </div>
                                }
                                <div className="chat-history" >
                                    {
                                        msg.showChat && <div className="sendTo">
                                            <div className='img_container'>
                                                <img width="100%" height="100%" src={`${msg.is_private ?
                                                    msg.receiver.image_url?.includes("https") ? msg.receiver.image_url : process.env.REACT_APP_BUCKET_END_POINT + msg.receiver.image_url
                                                    :
                                                    msg.channel.image_url?.includes("https") ? msg.channel.image_url : process.env.REACT_APP_BUCKET_END_POINT + msg.channel.image_url}`}></img>
                                            </div>
                                            <div className="receiver-name flexC">{msg.is_private ? msg.receiver.first_name : "#" + msg.channel.name}</div>

                                        </div>
                                    }
                                    <div className="msg-display flexC justifySB" >
                                        {
                                            msg.files.length === 0 ? <div className="sent-msg ellips">{msg.content}</div> :
                                                <div className="sent-msg ellips" style={{ fontStyle: "italic" }}> You shared a file</div>
                                        }
                                        <div className="sent-time" > {moment(msg.created_at).format("hh:mm A")}</div>
                                    </div>
                                </div>
                            </>)
                })}
            </div>
            {isLoading && <CircleLoader></CircleLoader>}

        </div>
    </>;
};
