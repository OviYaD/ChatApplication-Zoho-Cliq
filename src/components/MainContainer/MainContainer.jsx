/* eslint-disable default-case */
import React, { useState } from 'react';
import "./MainContainer.scss";
import RemoteworkToggle from './RemoteworkToggle';
import ContactList from '../ContactList/contactList';
import SideNav from './SideNav';
import ChatWindow from '../ChatWindow/ChatWindow';
import ChannelDescription from '../ChannelComponents/ChannelDescription';
import OrganizationList from '../OrganizationList/OrganizationList';
import CreateChannelModal from '../CreateChannel/CreateChannelModal';
import MemberList from '../Organization/MemberList/MemberList';
import Profile from '../Settings/Profile';
import ProfileInfo from '../ChatWindow/ProfileInfo';
import ChannelList from '../ChannelComponents/ChannelList';
import { useEffect } from 'react';
import { getChannelInfo } from '../../api/Channel/Channel';
import { getMessageThroughSocket, markAsRead } from '../../SocketEvents/events';
import LandingPage from '../LandingPage/LandingPage';


export default function MainContainer({ isFinished, reload, setReload, newMsg, messages, socket, setMessages }) {

    const searchParams = new URLSearchParams(document.location.search);
    const [showCreateModal, setStatus] = useState(false);
    const [window, setWindow] = useState("chat");
    const [activeMenu, setActiveMenu] = useState("channels");
    const [chatInfo, setChatInfo] = useState();
    const [actId, setActId] = useState("");

    useEffect(() => {

        const channel_id = searchParams.get('channel');
        setActId(channel_id);
        if (channel_id) {

            setChatDetails(channel_id);
        }
    }, [])


    const setChatDetails = async (id) => {
        console.log("socket=", socket);
        const data = await getChannelInfo(id);
        setChatInfo(data);
        setWindow("chat");
        getMessageThroughSocket(socket, id);
        markAsRead(socket, id);

    }


    return <>
        <div className="zccontent flexG main_container " >
            <article>
                <div className="zcleftsidebar">
                    <RemoteworkToggle></RemoteworkToggle>

                    <div className="left-wrapper flexG mT2 ps-container ">
                        <SideNav activeMenu={activeMenu} setActiveMenu={setActiveMenu} setWindow={setWindow}></SideNav>
                        {(() => {
                            switch (activeMenu) {
                                case "chats": return <ContactList></ContactList>
                                case "channels": return <ChannelList setWindow={setWindow} setStatus={setStatus} setChatDetails={setChatDetails} actId={actId} setActId={setActId}></ChannelList>
                                case "Org": return <OrganizationList></OrganizationList>
                            }
                        })()}
                        {/* <ContactList></ContactList> */}
                        {/* <ChannelList setStatus={setStatus}></ChannelList> */}
                        {/* <OrganizationList setStatus={setStatus}></OrganizationList> */}
                    </div>
                </div>
                {(() => {
                    switch (window) {
                        case "Org": return <MemberList></MemberList>
                        case "chat": return <ChatWindow isFinished={isFinished} reload={reload} setReload={setReload} newMsg={newMsg} setWindow={setWindow} setActId={setActId} setMessages={setMessages} messages={messages} socket={socket} chatInfo={chatInfo}></ChatWindow>
                        case "quote": return <LandingPage></LandingPage>

                    }
                })()}

                {/* <ChatWindow></ChatWindow> */}
                {/* <MemberList></MemberList> */}
                {/* <ChannelDescription></ChannelDescription> */}
                {/* <ProfileInfo></ProfileInfo> */}

            </article>
            {showCreateModal && <CreateChannelModal setStatus={setStatus}></CreateChannelModal>}
        </div>


    </>;
}