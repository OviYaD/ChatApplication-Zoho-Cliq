import React, { useState, useEffect } from 'react';
import { getProfileAndLastMessage, getChatUserInfo } from '../../api/chats/chat';
import "./ProfileInfoPopUp.scss"
import moment from 'moment/moment';
import { useSelector } from 'react-redux';

export default function ProfileInfoPopUp({ styles, chatInfo, isChatUser }) {
    const [chatDetails, setChatDetails] = useState();
    const searchParams = new URLSearchParams(document.location.search);
    const url = new URL(window.location);
    const user = useSelector((state) => state.user);

    useEffect(() => {
        const getLastMsg = async () => {
            const res = await getProfileAndLastMessage(chatInfo);
            setChatDetails(res);
        };
        const getChatUser = async () => {
            const res = await getChatUserInfo(chatInfo);
            setChatDetails({ profile: res });
        }

        if (isChatUser) {
            getChatUser()
        }
        else {
            getLastMsg();
        }

    }, [])

    const openChat = (chatUser, user) => {
        console.log("open chat")
        if (searchParams.get("channel")) {
            url.searchParams.delete('channel');
            window.history.pushState({}, '', url);
        }
        const chat_id = [chatUser, user].sort().join(":");
        url.searchParams.set('chat', chatUser);
        window.history.pushState({}, '', url);
        setChatDetails(chatUser, true)
        localStorage.setItem("*&^%$#!@#$%^&Channel#$&^%$id*&^%^&*(", chatUser);
    }

    return <>
        {chatDetails && <div className="info-container" >
            <div className='sub-container'>
                <div className="img-wrapper">
                    <img className='img-bg-fill' src={chatDetails.chat_type === "CHANNEL" ? chatDetails.profile.image_url ?? "https://www.shutterstock.com/image-vector/business-communication-group-discussion-icon-260nw-1677444301.jpg" : chatDetails.profile.image_url.includes("https") ? chatDetails.profile.image_url : process.env.REACT_APP_BUCKET_END_POINT + chatDetails.profile.image_url}></img>
                    <img className="img-display" src={chatDetails.chat_type === "CHANNEL" ? chatDetails.profile.image_url ?? "https://www.shutterstock.com/image-vector/business-communication-group-discussion-icon-260nw-1677444301.jpg" : chatDetails.profile.image_url.includes("https") ? chatDetails.profile.image_url : process.env.REACT_APP_BUCKET_END_POINT + chatDetails.profile.image_url}></img>
                </div>
                <div className='profile-info'>
                    <div className='flexC'>
                        {chatDetails.chat_type !== "CHANNEL" && <span className='flexC' style={{ color: "orange" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
                                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                            </svg>
                        </span>}
                        <span className='prof-name ellips'>{chatDetails.chat_type === "CHANNEL" ? "#" + chatDetails.profile.name : chatDetails.profile.first_name + " " + chatDetails.profile.last_name ?? ""}</span>
                        {chatDetails.chat_type !== "CHANNEL" && <>
                            <span className='dot'></span>
                            <span className='in-out'>Out</span>
                        </>}
                    </div>
                    {chatDetails.chat_type !== "CHANNEL" && <div className='prof-email'>{chatDetails.profile.email}</div>}
                    {chatDetails.chat_type !== "CHANNEL" && <div className='personal-num'>Personal Mobile : <span className='number'>{chatDetails.profile.phone_personal || "-"}</span> </div>}
                    {!isChatUser && <div className='lastChat'>
                        <div className=' flexC justifySB'>
                            <div className='flexC'>
                                <span style={{ width: "30px", height: "30px", borderRadius: "100%", overflow: "hidden" }}>
                                    <img width="100%" height="100%" src={chatDetails.last_message.sender.image_url.includes("https") ? chatDetails.last_message.sender.image_url : process.env.REACT_APP_BUCKET_END_POINT + chatDetails.last_message.sender.image_url}></img>
                                </span>

                                {/* <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(98, 114, 130)" }} width="14" height="14" fill="currentColor" className="bi bi-chat-fill" viewBox="0 0 16 16">
                                        <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
                                    </svg>
                                </span> */}
                                <span className='flexC prof-name ellips'>{chatDetails.last_message.sender.first_name + " " + chatDetails.last_message.sender.last_name ?? ""}</span>
                            </div>
                            <div className='lastChatTym'>{moment(chatDetails.last_message.created_at).format("hh:mm A")}</div>
                        </div>
                        <div className='ellips msg-text'>{chatDetails.last_message.content}</div>
                    </div>}
                    {user?.user_id !== chatDetails.profile.user_id &&
                        <div className="info-option flexC justifySB">
                            <span title='Send Direct Message' className='cur' >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chat-fill" viewBox="0 0 16 16" onClick={() => openChat(chatDetails.profile.user_id, user.user_id)}>
                                    <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
                                </svg>
                            </span>
                            <span title='Audio call'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                </svg>
                            </span>
                            <span title='Video call'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-camera-video-fill" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z" />
                                </svg>
                            </span>
                            <span title='Profile'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                </svg>
                            </span>
                        </div>}
                </div>
            </div>
        </div>
        }
    </>
};
