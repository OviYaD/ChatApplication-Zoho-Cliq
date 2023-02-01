import React, { useState } from 'react';
import ChannelDescription from '../ChannelDescription/ChannelDescription';
import InputBox from '../InputBox/InputBox';
import './ChatWindow.scss';
import Header from './Header';
import ChatBody from './ChatBody';
import MediaFiles from './MediaFiles';
import { useEffect } from 'react';
import { getChannelInfo } from '../../api/Channel/Channel';

export default function ChatWindow({ chatInfo }) {
    const [openDes, setOpenStatus] = useState(false);
    const [bodyContent, setBodyContent] = useState("chat");

    // useEffect(() => {
    //     console.log(windowInfo)
    //     const setChatDetails = async () => {
    //         const data = await getChannelInfo(windowInfo);
    //         setChatInfo(data);
    //     }
    //     if (windowInfo) {
    //         setChatDetails();
    //     }
    // }, [windowInfo])
    return <>
        <div className="" style={{ backgroundColor: "#fff", width: "100%", borderRadius: "10px", marginLeft: "2px", marginRight: "8px", position: "relative" }}>
            <Header chatInfo={chatInfo} bodyContent={bodyContent} setBodyContent={setBodyContent} setOpenStatus={setOpenStatus} ></Header>

            {bodyContent === "chat" ? <>
                <ChatBody></ChatBody>
                <InputBox></InputBox>
            </> : <MediaFiles></MediaFiles>}
        </div>
        {openDes && <ChannelDescription chatInfo={chatInfo} setOpenStatus={setOpenStatus} ></ChannelDescription>}
    </>;
};
