import React, { useState, useEffect } from 'react';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import CreateChannelModal from '../CreateChannel/CreateChannelModal';
import { getChannels } from '../../api/Channel/Channel';
import { useSelector } from 'react-redux';
import { getUnreadCount } from '../../api/Channel/Channel';


export default function ChannelList({ setShowJoinChannelModal, unreadCount, setUnreadCount, unreadMsg, setWindow, actId, setActId, setStatus, setChatDetails }) {
    const user = useSelector((state) => state.user);
    const [orgChannelList, setOrgChannelList] = useState([]);
    const [personalChannelList, setPersonalChannelList] = useState([]);
    const searchParams = new URLSearchParams(document.location.search);
    const url = new URL(window.location);
    // const [unreadCount,setUn]

    useEffect(() => {

    }, [unreadMsg])


    useEffect(() => {
        const getChannelList = async () => {
            const data = await getChannels();
            console.log("channel list.......", data);
            const res = await getUnreadCount();
            console.log("unread count", res)
            setUnreadCount(res);

            setOrgChannelList(() => {
                return data.filter((chn, i) => {
                    return chn.type === "PUBLIC"
                })
            });
            setPersonalChannelList(() => {
                return data.filter((chn, i) => {
                    return chn.type === "PRIVATE"
                })
            });

        }
        getChannelList();
        console.log(user);

    }, []);

    const setChatId = (id) => {
        console.log("chat id changed", id);
        const newCount = { ...unreadCount }
        delete newCount[id];
        setUnreadCount(newCount)
        localStorage.setItem("*&^%$#!@#$%^&Channel#$&^%$id*&^%^&*(", id)
        setActId(id);
        setWindow("chat");
        if (searchParams.get("chat")) {
            url.searchParams.delete('chat');
            window.history.pushState({}, '', url);
        }
        url.searchParams.set('channel', id);
        window.history.pushState({}, '', url);
        setChatDetails(id);

    }

    return <>
        <div className="flexG flex-col h100 ovrflwH app-submodule-nav">
            <div className="flexG h100 flex-col mychats">
                <div className="flexG ovrflwA pb5 overflow-controls">
                    <div id="pinnedChats" >
                        <div className='dflx justifySB heading ' >
                            <span className="flexC font17 ellips ">Channels
                                <span className=" mL8 flexC font12 ellips join" onClick={() => setShowJoinChannelModal(true)}>
                                    <span className='dot' style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "var(--color-lp1)", marginRight: "4px" }}> </span>
                                    Join</span>
                            </span>
                            <span className='more' onClick={() => setStatus(true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                </svg>
                            </span>
                        </div>

                        <div className='dflx justifySB heading ' >
                            <span className=" font17 ellips flexC " style={{ fontSize: "13px", color: "#8cbfff" }}>
                                <span style={{ padding: "0.25rem 0.2rem 0rem 0.25rem", backgroundColor: "#458deb", borderRadius: "5px", textAlign: "center", marginRight: "0.5rem" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" style={{ color: "white" }} fill="currentColor" className="bi bi-diagram-2-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 5 7h2.5V6A1.5 1.5 0 0 1 6 4.5v-1zm-3 8A1.5 1.5 0 0 1 4.5 10h1A1.5 1.5 0 0 1 7 11.5v1A1.5 1.5 0 0 1 5.5 14h-1A1.5 1.5 0 0 1 3 12.5v-1zm6 0a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 9 12.5v-1z" />
                                    </svg>
                                </span>
                                Organization</span>
                            <span className='more'><MoreHorizTwoToneIcon style={{ fontSize: "18px" }}></MoreHorizTwoToneIcon></span>
                        </div>

                        {orgChannelList.map((channel, index) => {
                            return <div className={`dflx list ${channel._id === actId ? "active" : ""}`} key={channel._id} onClick={() => setChatId(channel._id)}>
                                <span className='hashTag'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hash" viewBox="0 0 16 16" style={{ marginLeft: "-10px" }}>
                                        <path d="M8.39 12.648a1.32 1.32 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 0 0-.523-.516.539.539 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z" />
                                    </svg>
                                </span>
                                <span className='pL1 ellips'> {channel.name}</span>
                                <span className='options dflx'>
                                    {unreadCount[channel._id] && <span className='notify' style={{ fontFamily: "zoho-puvi-semi-bold", color: "#fff", backgroundColor: "var(--color-red)", borderRadius: "100%" }}>{unreadCount[channel._id]}</span>}
                                    <span className='dflx hideShow'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-pin-angle-fill" viewBox="0 0 16 16">
                                            <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                        </svg>
                                    </span>
                                </span>
                            </div>
                        })}

                        <div className='dflx justifySB heading flexC' >
                            <span className=" font17 ellips flexC" style={{ fontSize: "13px", color: "#ff8687" }}>
                                <span style={{ padding: "0.29rem 0.2rem 0.1rem 0.2rem", backgroundColor: "#f26c6e", borderRadius: "5px", textAlign: "center", marginRight: "0.5rem" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" style={{ color: "white" }} fill="currentColor" className="bi bi-radioactive" viewBox="0 0 16 16">
                                        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z" />
                                        <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                                    </svg>

                                </span>
                                Personal</span>
                            <span className='more'><MoreHorizTwoToneIcon style={{ fontSize: "18px" }}></MoreHorizTwoToneIcon></span>
                        </div>

                        {personalChannelList.map((channel, index) => {
                            return <div className={`dflx list ${channel._id === actId ? "active" : ""}`} key={channel._id} onClick={() => setChatId(channel._id)}>
                                <span className='hashTag'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hash" viewBox="0 0 16 16" style={{ marginLeft: "-10px" }}>
                                        <path d="M8.39 12.648a1.32 1.32 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 0 0-.523-.516.539.539 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z" />
                                    </svg>
                                </span>
                                <span className='pL1 ellips'> {channel.name}</span>
                                <span className='options dflx'>
                                    {unreadCount[channel._id] && <span className='notify' style={{ fontFamily: "zoho-puvi-semi-bold", color: "#fff", backgroundColor: "var(--color-red)", borderRadius: "100%" }}>{unreadCount[channel._id]}</span>}
                                    {/* {unreadMsg[channel._id] && <span className='notify' style={{ fontFamily: "zoho-puvi-semi-bold", color: "#fff", backgroundColor: "var(--color-red)", borderRadius: "100%" }}>{unreadMsg[channel._id].length}</span>} */}
                                    <span className='dflx hideShow'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-pin-angle-fill" viewBox="0 0 16 16">
                                            <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                        </svg>
                                    </span>
                                </span>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    </>
};
