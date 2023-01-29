import React, { useState } from 'react';
import ChannelDescription from '../ChannelDescription/ChannelDescription';
import InputBox from '../InputBox/InputBox';
import './ChatWindow.scss';
import Header from './Header';
import ChatBody from './ChatBody';
import MediaFiles from './MediaFiles';

export default function ChatWindow(params) {
    const [openDes, setOpenStatus] = useState(false);
    const [bodyContent, setBodyContent] = useState("chat");
    return <>
        <div className="" style={{ backgroundColor: "#fff", width: "100%", borderRadius: "10px", marginLeft: "2px", marginRight: "8px", position: "relative" }}>
            <Header bodyContent={bodyContent} setBodyContent={setBodyContent} setOpenStatus={setOpenStatus} ></Header>

            {bodyContent === "chat" ? <>
                <ChatBody></ChatBody>
                <InputBox></InputBox>
            </> : <MediaFiles></MediaFiles>}
        </div>
        {openDes && <ChannelDescription setOpenStatus={setOpenStatus} ></ChannelDescription>}
    </>;
};
