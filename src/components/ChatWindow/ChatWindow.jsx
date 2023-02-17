import React, { useState } from 'react';
import ChannelDescription from '../ChannelComponents/ChannelDescription/ChannelDescription';
import InputBox from '../InputBox/InputBox';
import './ChatWindow.scss';
import Header from './MessageAssets/Header';
import ChatBody from './ChatBody';
import MediaFiles from './MessageAssets/MediaFiles';
import { useEffect } from 'react';
import { getChannelInfo } from '../../api/Channel/Channel';
import LandingPage from '../LandingPage/LandingPage';
import PersonalChatHeader from '../PersonalChats/personalChatHeader';
import EditChannel from '../CreateChannel/EditChannel';

export default function ChatWindow({ isFinished, reload, setReload, newMsg, setWindow, messages, chatInfo, socket, setMessages, setActId }) {
    const [openDes, setOpenStatus] = useState(false);
    const [openEdit, setEditOpenStatus] = useState(false);
    const [bodyContent, setBodyContent] = useState("chat");
    const [replyTo, setReplyTo] = useState("");



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

    useEffect(() => {
        console.log("OPEN EDIT", openEdit)
    }, [openEdit])


    return <>
        <div className="" style={{ backgroundColor: "#fff", width: "100%", borderRadius: "10px", marginLeft: "2px", marginRight: "8px", position: "relative" }}>
            {chatInfo?.user_id === undefined ? <Header setActId={setActId} setWindow={setWindow} chatInfo={chatInfo} bodyContent={bodyContent} setBodyContent={setBodyContent} setOpenStatus={setOpenStatus} ></Header>
                : <PersonalChatHeader setActId={setActId} setWindow={setWindow} chatInfo={chatInfo} bodyContent={bodyContent} setBodyContent={setBodyContent} setOpenStatus={setOpenStatus} ></PersonalChatHeader>}

            {bodyContent === "chat" ? <>
                <ChatBody setReplyTo={setReplyTo} isFinished={isFinished} setReload={setReload} reload={reload} newMsg={newMsg} socket={socket} messages={messages} chatInfo={chatInfo}></ChatBody>
                <InputBox setReplyTo={setReplyTo} replyTo={replyTo} messages={messages} setMessages={setMessages} socket={socket} chatInfo={chatInfo}></InputBox>
            </> : <MediaFiles></MediaFiles>}
        </div>
        {openDes && <ChannelDescription setEditOpenStatus={setEditOpenStatus} socket={socket} chatInfo={chatInfo} setOpenStatus={setOpenStatus} ></ChannelDescription>}
        {openEdit && <EditChannel setEditOpenStatus={setEditOpenStatus} socket={socket} chatInfo={chatInfo} setOpenStatus={setOpenStatus} ></EditChannel>}

    </>;
};
