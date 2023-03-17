import React, { useState, useEffect, useRef } from 'react';
import { ReactDOM } from 'react-dom/client';
import CircleLoader from '../loaders/CircleLoader';
import Message from './MessageAssets/Message';
import LoadingPage from '../loaders/LoadingPage';
import { getMessageThroughSocket } from '../../SocketEvents/events';
import { markAsRead } from '../../SocketEvents/events';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function ChatBody({ setReplyTo, isFinished, reload, setReload, chatInfo, newMsg, socket, messages }) {

    const chatbody = useRef();
    const [loader, setLoader] = useState(false);
    const [newMsgId, setNewMsgId] = useState("");
    const url = new URLSearchParams(document.location.search);
    const style = {
        height: 30,
        border: "1px solid green",
        margin: 6,
        padding: 8
    };

    const handleScroll = event => {
        const height = event.currentTarget.scrollTop;
        const contentHeight = chatbody.current.scrollHeight
        // console.log("skdjskjsd", window.innerHeight, " ", height, " ", contentHeight, reload, isFinished);
        if (reload && !isFinished && contentHeight + height <= 399) {
            // console.log("reloading........")
            setTimeout(() => { getMessageThroughSocket(socket, localStorage.getItem("*&^%$#!@#$%^&Channel#$&^%$id*&^%^&*("), "", url.get("channel") === null ? true : false, messages.length) }, 2000)
            setReload(false);

        }
    };


    return <>
        {messages ? <div style={{ margin: "3px" }} >
            <div className='chatBody' onScroll={handleScroll}>
                <div className='chat-content' ref={chatbody} id="scrollableDiv" onClick={() => {
                    if (newMsgId) {
                        markAsRead(
                            socket,
                            localStorage.getItem("*&^%$#!@#$%^&Channel#$&^%$id*&^%^&*("),
                            url.get("channel") === null ? true : false
                        );
                        setNewMsgId("");
                    }


                }}>
                    <div ref={chatbody}></div>
                    {!isFinished && <CircleLoader></CircleLoader>}
                    {/* <InfiniteScroll
                        dataLength={1000}
                        next={() => getMessageThroughSocket(socket, chatInfo._id, messages.length)}
                        // style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
                        // inverse={true}
                        hasMore={true}
                        loader={<h4>Loading...</h4>}
                        scrollableTarget="scrollableDiv"
                    >
                        {messages.map((i, index) => (
                            <div style={style} key={index}>
                                div - #{index}
                            </div>
                        ))} */}
                    <Message chatInfo={chatInfo} newMsg={newMsg} socket={socket}
                        messages={messages}
                        newMsgId={newMsgId}
                        setNewMsgId={setNewMsgId}
                        setReplyTo={setReplyTo}
                    ></Message>
                    {/* </InfiniteScroll> */}
                </div>
            </div>
        </div> : <LoadingPage></LoadingPage>}
    </>
};
