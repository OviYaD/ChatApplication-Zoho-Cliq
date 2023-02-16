/* eslint-disable default-case */
import React, { useState } from 'react';
import "./MainContainer.scss";
import RemoteworkToggle from './RemoteworkToggle';
import ChatList from '../ChatList/chatList';
import SideNav from './SideNav';
import ChatWindow from '../ChatWindow/ChatWindow';
import ChannelDescription from '../ChannelComponents/ChannelDescription/ChannelDescription';
import OrganizationList from '../OrganizationList/OrganizationList';
import CreateChannelModal from '../CreateChannel/CreateChannelModal';
import MemberList from '../Organization/MemberList/MemberList';
import Profile from '../Settings/Profile';
import ProfileInfo from '../ChatWindow/MessageAssets/ProfileInfo';
import ChannelList from '../ChannelComponents/ChannelList';
import { useEffect } from 'react';
import { getChannelInfo } from '../../api/Channel/Channel';
import { getMessageThroughSocket, markAsRead } from '../../SocketEvents/events';
import LandingPage from '../LandingPage/LandingPage';
import { useSelector } from 'react-redux';
import JoinChannelModal from '../CreateChannel/JoinChannelModal';
import { sendNotification } from '../../SocketEvents/events';
import { getChatUserInfo } from '../../api/chats/chat';
import LoadingPage from '../loaders/LoadingPage';
import ContactList from '../ContactList/ContactList';


export default function MainContainer({ setNewMsg, isFinished, reload, setReload, newMsg, messages, socket, setMessages }) {

    const searchParams = new URLSearchParams(document.location.search);
    const [showCreateModal, setStatus] = useState(false);
    const [showJoinChannelModal, setShowJoinChannelModal] = useState(false);
    const [window, setWindow] = useState("quote");
    const [activeMenu, setActiveMenu] = useState("chats");
    const [chatInfo, setChatInfo] = useState();
    const [actId, setActId] = useState("");
    const [unreadMsg, setUnreadMsg] = useState({});
    const [unreadCount, setUnreadCount] = useState();
    const url = new URLSearchParams(document.location.search);
    const user = useSelector((state) => state.user);

    useEffect(() => {

        const channel_id = searchParams.get('channel');
        const chat_id = searchParams.get("chat");

        if (channel_id) {
            localStorage.setItem("*&^%$#!@#$%^&Channel#$&^%$id*&^%^&*(", channel_id);
            setActId(channel_id);
            setChatDetails(channel_id, false);
        }
        if (chat_id) {
            localStorage.setItem("*&^%$#!@#$%^&Channel#$&^%$id*&^%^&*(", chat_id);
            setActId(chat_id);
            setChatDetails(chat_id, true);
        }

        socket.on("edit-permissions", (data) => {
            console.log("edit permission", data);
            setChatInfo((chatInfo) => {
                return {
                    ...chatInfo,
                    permissions: data
                }
            })
        })
        socket.on("read-message", (data) => {
            console.log("read message", data.messages, user);
            if (data.messages) {
                console.log(data.messages, messages)
                setMessages((messages) => messages.map((msg, index) => {
                    for (let i = 0; i < data.messages.length; i++) {
                        if (msg._id === data.messages[i]._id) {
                            return data.messages[i]
                        }
                    }
                    return msg;
                }))

                // if (data.messages[0].read_by.filter((readUser, i) => {
                //     return readUser.user_id === localStorage.getItem("!@#$%^&*(user_id)*&^%$#@!")
                // }).length > 0) {
                //     setUnreadMsg((unread) => delete unread[data.messages[0].chat_id])
                // }

                // console.log(readMsg);
                // setMessages(readMsg);
            }

        })

        socket.on("send-message", (data) => {
            console.log("send message.........", data, user);
            if (data.sender.user_id === localStorage.getItem("!@#$%^&*(user_id)*&^%$#@!") || data.chat_id === localStorage.getItem("*&^%$#!@#$%^&Channel#$&^%$id*&^%^&*(") || data.sender.user_id === localStorage.getItem("*&^%$#!@#$%^&Channel#$&^%$id*&^%^&*(")) {
                console.log("receiving message/.....", data)
                setMessages((messages) => [...messages, data])
            }
            console.log(data.sender.user_id, "!==", localStorage.getItem("!@#$%^&*(user_id)*&^%$#@!"), " &&", data.chat_id, "!== ", localStorage.getItem("*&^%$#!@#$%^&Channel#$&^%$id*&^%^&*("))
            if (data.sender.user_id !== localStorage.getItem("!@#$%^&*(user_id)*&^%$#@!") && data.chat_id !== localStorage.getItem("*&^%$#!@#$%^&Channel#$&^%$id*&^%^&*(")) {
                console.log("send unread count", unreadCount);
                const notifyToken = localStorage.getItem("$%^&*(*&^%$#@#$%^&*()n(*(*otify(*&&*(t(*&*(oken)(*&^&*(")
                if (notifyToken)
                    sendNotification(socket, data._id, notifyToken);
                setUnreadCount(unreadCount => {
                    unreadCount[data.chat_id] = unreadCount[data.chat_id] ? unreadCount[data.chat_id] + 1 : 1;
                    return { ...unreadCount }
                })
            }

            // console.log("unread", unread, unreadMsg);
            // const unread = unreadMsg[data.chat_id] ? [...unreadMsg[data.chat_id], data] : [data];

            // setUnreadMsg(unreadMsg => {
            //     return { ...unreadMsg, [data.chat_id]: unread }
            // });
            setNewMsg(true);
        })
    }, [])


    const setChatDetails = async (id, isPrivate) => {
        let data;
        console.log("id = ", id, " isPrivate = ", isPrivate);
        if (isPrivate) {
            data = await getChatUserInfo(id)
            console.log(data);
        }
        else {
            data = await getChannelInfo(id);
        }

        setChatInfo(data);
        setWindow("chat");
        getMessageThroughSocket(socket, localStorage.getItem("*&^%$#!@#$%^&Channel#$&^%$id*&^%^&*("), url.get("channel") === null ? true : false,);
        // markAsRead(socket, id);

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
                                case "chats": return <ChatList unreadCount={unreadCount} setUnreadCount={setUnreadCount} setChatDetails={setChatDetails} socket={socket} setWindow={setWindow} setActId={setActId} actId={actId}></ChatList>
                                case "channels": return <ChannelList setShowJoinChannelModal={setShowJoinChannelModal} unreadCount={unreadCount} setUnreadCount={setUnreadCount} setWindow={setWindow} setStatus={setStatus} setChatDetails={setChatDetails} actId={actId} setActId={setActId}></ChannelList>
                                case "Org": return <OrganizationList></OrganizationList>
                                case "contact": return <ContactList></ContactList>
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
            {showJoinChannelModal && <JoinChannelModal setStatus={setStatus} setShowJoinChannelModal={setShowJoinChannelModal}></JoinChannelModal>}

        </div>


    </>;
}