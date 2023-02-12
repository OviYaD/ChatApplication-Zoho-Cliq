import React, { useState } from 'react';
import ChannelDescription from '../ChannelComponents/ChannelDescription';
import InputBox from '../InputBox/InputBox';
import './ChatWindow.scss';
import Header from './Header';
import ChatBody from './ChatBody';
import MediaFiles from './MediaFiles';
import { useEffect } from 'react';
import { getChannelInfo } from '../../api/Channel/Channel';
import LandingPage from '../LandingPage/LandingPage';

export default function ChatWindow({ isFinished, reload, setReload, newMsg, setWindow, messages, chatInfo, socket, setMessages, setActId }) {
    const [openDes, setOpenStatus] = useState(false);
    const [bodyContent, setBodyContent] = useState("chat");



    // useEffect(() => {
    //     console.log(windowInfo)
    //     const setChatDetails = async () => {
    //         const data = await getChannelInfo(windowInfo);
    //         setChatInfo(data);socket
    //     }
    //     if (windowInfo) {
    //         setChatDetails();
    //     }
    // }, [windowInfo])

    
    return <>
        <div className="" style={{ backgroundColor: "#fff", width: "100%", borderRadius: "10px", marginLeft: "2px", marginRight: "8px", position: "relative" }}>
            <Header setActId={setActId} setWindow={setWindow} chatInfo={chatInfo} bodyContent={bodyContent} setBodyContent={setBodyContent} setOpenStatus={setOpenStatus} ></Header>

            {bodyContent === "chat" ? <>
                <ChatBody isFinished={isFinished} setReload={setReload} reload={reload} newMsg={newMsg} socket={socket} messages={messages} chatInfo={chatInfo}></ChatBody>
                <InputBox messages={messages} setMessages={setMessages} socket={socket}></InputBox>
            </> : <MediaFiles></MediaFiles>}
        </div>
        {openDes && <ChannelDescription socket={socket} chatInfo={chatInfo} setOpenStatus={setOpenStatus} ></ChannelDescription>}
    </>;
};
