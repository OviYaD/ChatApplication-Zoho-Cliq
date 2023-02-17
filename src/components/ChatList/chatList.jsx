import React, { useState, useEffect } from 'react'
import './chatList.scss'
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import { useSelector } from 'react-redux';
import { fetchPinChats, fetchConvoChats } from '../../api/chats/chat';
import { pinChats, upinChats } from '../../SocketEvents/events';
import ProfileInfoPopUp from '../PersonalChats/ProfileInfoPopUp';
import { useHistory, useLocation } from 'react-router-dom'
import { getUnreadCount } from '../../api/Channel/Channel';

export default function ChatList({ unreadCount, setUnreadCount, actId, socket, setActId, setWindow, setChatDetails }) {
    const [openPins, setOpenPins] = useState(true);
    const [openConversations, setOpenConversations] = useState(true);
    const [pinnedChats, setPinnedChats] = useState();
    const [convoChats, setConvoChats] = useState([]);
    const [showProfile, setShowProfile] = useState("");
    const user = useSelector((state) => state.user);
    const [delayHandler, setDelayHandler] = useState(null)
    const searchParams = new URLSearchParams(document.location.search);
    const url = new URL(window.location);

    useEffect(() => {
        console.log(pinnedChats)
    }, [pinnedChats])

    useEffect(() => {

        const getChatList = async () => {
            const pin = await fetchPinChats();
            let convo = await fetchConvoChats();
            const res = await getUnreadCount();
            console.log("unread count", res)
            setUnreadCount(res);
            console.log(convo);
            setPinnedChats(pin);
            convo = filterUnpiChats(pin, convo);
            console.log(convo, pin)
            setConvoChats(convo);
        }

        getChatList();

        socket.on("pin-chat", (data) => {
            const pin = data.pinned_chats;
            let convo = data.conversations;
            console.log(convo);
            setPinnedChats(pin);
            convo = filterUnpiChats(pin, convo);
            console.log(convo, pin)
            setConvoChats(convo);
        })

        socket.on("unpin-chat", (data) => {
            const pin = data.pinned_chats;
            let convo = data.conversations;
            console.log(convo);
            setPinnedChats(pin);
            convo = filterUnpiChats(pin, convo);
            console.log(convo, pin)
            setConvoChats(convo);
        })


    }, [])

    const filterUnpiChats = (pin, chats) => {
        return chats.filter((chat) => {
            return !pin.find(cht => cht.chat_id === chat.chat_id)
        })
    }

    const openChat = (chat, type) => {
        if (type !== "CHANNEL") {
            if (searchParams.get("channel")) {
                url.searchParams.delete('channel');
                window.history.pushState({}, '', url);
            }
            url.searchParams.set('chat', chat.user.user_id);
            setWindow("chat");
            window.history.pushState({}, '', url);
            setActId(chat.chat_id);
            setChatDetails(chat.user.user_id, true)
            localStorage.setItem("*&^%$#!@#$%^&Channel#$&^%$id*&^%^&*(", chat.user.user_id)
        }
        else {
            if (searchParams.get("chat")) {
                url.searchParams.delete('chat');
                window.history.pushState({}, '', url);
            }
            url.searchParams.set('channel', chat.chat_id);
            setWindow("chat");
            window.history.pushState({}, '', url);
            setActId(chat.chat_id);
            setChatDetails(chat.chat_id, false)
            localStorage.setItem("*&^%$#!@#$%^&Channel#$&^%$id*&^%^&*(", chat.chat_id)
        }
    }

    const handleMouseEnter = (chats) => {
        setDelayHandler(setTimeout(() => {
            setShowProfile(chats.chat_id)
        }, 3000))
    }

    const handleMouseLeave = () => {
        clearTimeout(delayHandler)
        setShowProfile("")
    }

    return <>
        {convoChats &&
            <div className="flexG flex-col h100 ovrflwH app-submodule-nav">
                <div className="flexG h100 flex-col mychats">

                    <div className="flexG ovrflwA pb5 overflow-controls">
                        {pinnedChats &&
                            <div id="pinnedChats" >
                                <div className='dflx justifySB heading ' onClick={() => setOpenPins(!openPins)}>
                                    <span className=" font17 ellips ">My Pins</span>
                                    {/* <span className='more'><MoreHorizTwoToneIcon style={{ fontSize: "18px" }}></MoreHorizTwoToneIcon></span> */}
                                </div>
                                {openPins &&
                                    <div className='chatList'>
                                        {pinnedChats.map((chats, index) => {
                                            return <div key={chats.chat_id} className={`dflx list ${actId === chats.chat_id && "active"} `} onMouseEnter={() => handleMouseEnter(chats)} onMouseLeave={handleMouseLeave} onClick={() => openChat(chats, chats.chat_type)}>

                                                {chats.chat_type === "CHANNEL" ? <span className='hashTag'>#</span> :
                                                    <span className=' flexC'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" fill="currentColor" className="bi bi-circle" viewBox="0 0 16 16" >
                                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                        </svg>
                                                    </span>}
                                                <span className='pL1 ellips'> {chats.channel ? chats.channel.name : chats.user.first_name + " " + chats.user.last_name}</span>
                                                <div className='options dflx'>
                                                    {unreadCount[chats.chat_id] && <span className='notify' style={{ fontFamily: "zoho-puvi-semi-bold", color: "#fff", backgroundColor: "var(--color-red)", borderRadius: "100%" }}>{unreadCount[chats.chat_id]}</span>}

                                                    <div title="Unpin" onClick={() => upinChats(socket, chats.chat_id)}>

                                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="currentColor" width="10" height="10"  >
                                                            <g>
                                                                <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"><path d="M1036.6,4983.2c-102.4-35.6-460.8-380.7-514.2-492c-40.1-84.6-44.5-213.7-8.9-282.7c35.6-69,8499.7-8537.5,8573.2-8577.6c77.9-40.1,204.8-40.1,296.1,2.2c40.1,20,162.5,126.9,273.8,240.4c227.1,233.8,273.8,329.5,227.1,478.6c-22.3,66.8-886,941.7-4272.1,4332.2C2655.1,3643,1341.6,4945.3,1279.3,4974.2C1174.7,5023.2,1150.2,5023.2,1036.6,4983.2z" />
                                                                    <path d="M6370.7,4920.8c-118-37.9-285-202.6-360.7-358.4c-98-200.4-133.6-351.8-133.6-592.2v-211.5l1386.9-1386.9L8648.1,987.1h193.7c247.1,0,389.6,31.2,587.7,124.7c340.6,160.3,478.6,438.6,374,756.9c-33.4,100.2-167,240.4-1487.1,1558.4C6998.5,4747.2,6858.2,4880.7,6758,4914.1C6635.6,4954.2,6482,4956.4,6370.7,4920.8z" />
                                                                    <path d="M5063.9,2901.6L4396,2233.8l1358-1358l1358-1358l672.3,672.3l674.5,674.5L7107.5,2216c-745.8,745.8-1358,1353.5-1364.7,1353.5C5736.2,3569.5,5431.2,3269,5063.9,2901.6z" />
                                                                    <path d="M1408.4,1844.2c-236-51.2-391.8-151.4-703.5-454.2l-285-278.3L1673.3-141.6L2926.7-1395l-928.3-928.3l-926.1-930.5l-472-732.4C54.9-4836.7,70.5-4812.2,126.1-4781c24.5,11.1,371.8,233.8,776.9,492l732.4,472l930.6,926.1l928.3,928.3l1246.7-1246.7L5987.8-4456l289.4,289.4c320.6,320.6,405.2,449.7,456.4,699c28.9,138,28.9,202.6-11.1,650.1l-44.5,498.7L4623.1-264.1L2568.3,1790.8l-487.5,42.3C1517.5,1884.3,1586.5,1882,1408.4,1844.2z" />
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </div>
                                                {showProfile === chats.chat_id && <ProfileInfoPopUp chatInfo={chats}></ProfileInfoPopUp>}
                                            </div>
                                        })}
                                    </div>}


                            </div>
                        }
                        <div id="conversations">
                            <div className='dflx justifySB heading ' onClick={() => setOpenConversations(!openConversations)}>
                                <span className=" font17 ellips ">Conversations</span>
                                {/* <span className='more'><MoreHorizTwoToneIcon style={{ fontSize: "18px" }}></MoreHorizTwoToneIcon></span> */}
                            </div>
                            {openConversations && <div className="chatList">
                                {convoChats.map((chats, index) => {
                                    return <div key={chats.chat_id} className={`dflx list ${actId === chats.chat_id && "active"} `} onMouseEnter={() => setShowProfile(chats.chat_id)} onMouseLeave={() => setShowProfile("")} onClick={() => openChat(chats, chats.chat_type)}>
                                        {chats.chat_type === "CHANNEL" ? <span className='hashTag'>#</span> :
                                            <span className=' flexC'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" fill="currentColor" className="bi bi-circle" viewBox="0 0 16 16" >
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                </svg>
                                            </span>}
                                        <span className='pL1 ellips'>{chats.channel ? chats.channel.name : chats.user.first_name + " " + chats.user.last_name}</span>
                                        <div className='options dflx'>
                                            {unreadCount[chats.chat_id] && <span className='notify' style={{ fontFamily: "zoho-puvi-semi-bold", color: "#fff", backgroundColor: "var(--color-red)", borderRadius: "100%" }}>{unreadCount[chats.chat_id]}</span>}

                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-pin-angle-fill" viewBox="0 0 16 16" onClick={() => pinChats(socket, chats.chat_id, chats.chat_type)}>
                                                <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                            </svg>
                                        </div>
                                        {showProfile === chats.chat_id && <ProfileInfoPopUp chatInfo={chats}></ProfileInfoPopUp>}
                                    </div>
                                })}
                            </div>}
                        </div>

                    </div>
                </div>
            </div>}
        {/* <div className="contact-list">
            <div className="pinned-chats">
                <span className=" font17 ellips">My Pins</span>
            </div>
        </div> */}
    </>;
};