import React, { useRef, useState, useEffect } from 'react';
import moment from 'moment/moment';
import { useSelector } from 'react-redux';
import OutsideClickHandler from 'react-outside-click-handler';
import { deleteMessage, editMessage, toggleReaction, createMessage } from '../../../SocketEvents/events';
import EditMessageInputBox from "../EditMessagePopup/EditMessageInputBox"
import EmojiPicker, {
    EmojiStyle,
    SkinTones,
    Theme,
    Categories,
    EmojiClickData,
    Emoji,
    SuggestionMode,
    SkinTonePickerLocation
} from "emoji-picker-react";
import MessageOptions from '../MessageOptions/MessageOptions';
import EditHistory from '../EditHistory/EditHistory';
import CircleLoader from '../../loaders/CircleLoader';
import InfiniteScroll from 'react-infinite-scroll-component';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import StarWrapper from './StarWrapper';
import { starMessage } from '../../../api/General/message';
import { Tooltip } from 'react-tooltip';
import ProfileInfoPopUp from '../../PersonalChats/ProfileInfoPopUp';


const starType = { "IMPORTANT": "type1", "TODO": "type2", "NOTE": "type3", "MANAGER": "type4", "FOLLOWUP": "type5" };

export default function Message({ setReplyTo, newMsgId, setNewMsgId, chatInfo, newMsg, socket, messages }) {

    const user = useSelector((state) => state.user);
    const lastmsg = useRef();
    const msg = useRef();
    const [selectedEmoji, setSelectedEmoji] = useState();
    const [emojiSelector, setEmojiSelector] = useState([]);
    const [messageList, setMessages] = useState();
    const [editMsgInp, setEditMsgInp] = useState("");
    const [msgId, setMsgId] = useState("");
    const [idForHistory, setIdForHistory] = useState("");
    const [showInput, setShowInput] = useState(false);
    const [showMsgOptions, setShowMsgOptions] = useState("");
    const [starId, setStarId] = useState("");
    const [staredMsg, setStaredMsg] = useState([]);
    const [showProfile, setShowProfile] = useState("");
    const url = new URLSearchParams(document.location.search);

    useEffect(() => {
        console.log(messages);
        let prevDate = "";
        let prevUser = "";
        let setScroll = true;
        let intValue = new Array(messages.length).fill(false);
        setEmojiSelector(intValue);
        let unreadMsgId = "";
        const msgList = messages.map((msg, index) => {

            let flags = { showDate: false, showUser: false, isFirstMsg: false };
            if (!unreadMsgId && msg.read_by.length === 0) {
                unreadMsgId = msg._id;
            }
            if (prevDate === "" && prevUser === "") {
                prevDate = msg.created_at;
                prevUser = msg.sender.user_id;
                flags.showDate = true;
                flags.showUser = true;
                flags.isFirstMsg = true;
            }
            else {
                if (prevUser !== msg.sender.user_id) {
                    flags.showUser = true;
                    prevUser = msg.sender.user_id;
                    flags.isFirstMsg = true;
                }

                if (!moment(prevDate).isSame(moment(msg.created_at), "day")) {
                    flags.showDate = true;
                    flags.showUser = true;
                    flags.isFirstMsg = true;
                    prevDate = msg.created_at;

                }
            }
            const isStar = msg.starred_by.filter((strMsg, i) => {
                return strMsg.user.user_id === user.user_id;
            });
            setNewMsgId(unreadMsgId);
            return { ...msg, ...flags, isStar: isStar ? isStar[0] : undefined };

        })
        setMessages(msgList);
        if (newMsg && msgList[msgList.length - 1]?.sender.user_id === user.user_id) setTimeout(() => lastmsg.current.scrollIntoView({ block: "end" }), 100);

    }, [messages])

    function onEmojiClick(emojiData, id) {
        console.log("emoji data....", emojiData);
        toggleReaction(socket, id, { unicode: emojiData.unified, name: emojiData.names[0] === "+1" ? emojiData.names[1] : emojiData.names[0] })
        setSelectedEmoji(emojiData.unified);
        // console.log(EmojiClickData.emojiData)
        setEmojiSelector(false)
    }

    const handleChange = (e) => {
        e.preventDefault();
        setEditMsgInp(e.target.value);
    }

    const editInputEnabler = (msg) => {
        setShowInput(true);
        setEditMsgInp(msg.content);
        setMsgId(msg._id);

    }

    const toggleStar = async (msgId, isStar) => {
        if (!isStar) {
            setStarId(msgId);
        }
        else {
            setStarId("");
            const res = await starMessage({ id: msgId, type: isStar.message_type });


            setMessages(messageList => {

                messageList[messageList.findIndex(msg => msg._id === msgId)] = { ...res, isStar: undefined };
                return [...messageList]
            })

        }

    }

    const handleReaction = (id, reaction) => {
        toggleReaction(socket, id, reaction);

    }

    const userExists = (reactions) => {
        console.log(reactions)
        return reactions.filter((reac) => {
            return reac.user_id === user.user_id;
        }).length > 0
    }

    function formatBytes(bytes, decimals = 2) {
        if (!+bytes) return '0 Bytes'

        const k = 1024
        const dm = decimals < 0 ? 0 : decimals
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

        const i = Math.floor(Math.log(bytes) / Math.log(k))

        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
    }

    return <>
        {/* <CircleLoader></CircleLoader> */}
        {/* <InfiniteScroll
            dataLength={10}
            next={() => console.log("sskdjskdjsk")}
            // style={{ display: 'flex', flexDirection: '' }} //To put endMessage and loader to the top.
            // inverse={false} //
            hasMore={true}
            loader={<h4>Loading...</h4>}
            scrollableTarget="scrollableDiv"
        > */}

        {messages && messageList && messageList.length === 0 && <div className='' style={{ textAlign: "center", alignItems: "center" }}>
            <div className="chatIcon-wrapper" style={{ marginLeft: "auto", marginRight: "auto" }}>
                <Diversity3OutlinedIcon style={{ color: "#bfbfbf" }}></Diversity3OutlinedIcon>
            </div>
            <h3>Here's the very start of this channel..</h3>
            <p style={{ color: "gray", fontSize: "15px", marginBottom: "1.7rem", marginTop: "-0.51rem" }}>Use @mentions to mention someone specifically during the course of the conversation, and use /commands as shortcuts to perform things faster.</p>
            <span className='cur' onClick={() => createMessage(socket, {
                organization_id: JSON.parse(localStorage.getItem("!@#$%^org)(*&^%$")).id, chat_id: url.get("channel") === null ? url.get("chat") : url.get("channel"), content: "Hi Frndz 👋", is_private: url.get("channel") === null ? true : false
            })} style={{ border: "1px solid var(--color-secondary-lhs)", padding: "10px 30px", borderRadius: "10px" }}>Say <b>Hello</b></span>

        </div>
        }

        {
            messageList && messageList.map((msg, index) => {
                return <div key={index} className={`msgContainer ${msg.sender.user_id !== user.user_id && msg.read_by.length === 0 && "newMsg"}`}>
                    {msg.showDate && <div msguid={msg._id} purpose="date" className="zcmsg_dvdrmn in-view">
                        <div msguid={msg._id} className="zcdvdmsg ">{moment(msg.created_at).isSame(moment(), 'day') ? "Today" : moment(msg.created_at).isSame(moment().subtract(1, 'days'), 'day') ? "Yesterday" : moment(msg.created_at).format("dddd, MMMM DD YYYY")}</div>
                    </div>}

                    {user.user_id !== msg.sender.user_id && newMsgId === msg._id && <div msguid={msg._id} purpose="new_msg" className="zcmsg_dvdrmn in-view">
                        <div msguid={msg._id} className="zcdvdmsg-new " style={{ fontSize: "13px", color: "orange" }}>New Message</div>
                    </div>}

                    <OutsideClickHandler onOutsideClick={() => setShowProfile("")}>
                        {msg.showUser &&
                            <div className="sender ellips in-view" style={{ position: "relative" }}>
                                <div className="chtimg floatl " onClick={() => { setShowProfile(msg.sender.user_id + index); console.log(msg.sender.user_id + index) }}>
                                    <img elemtype="user" hover="true" uid="60016689094" src={msg.sender.image_url.includes("https") ? msg.sender.image_url : process.env.REACT_APP_BUCKET_COMP_END_POINT + msg.sender.image_url} className="cur" />
                                </div>
                                <span elemtype="user" hover="true" uid="60016689094" className="zctxtseln cur">{msg.sender.user_id === user.user_id ? "You" : msg.sender.first_name + " " + msg.sender.last_name}</span>
                            </div>}
                        {showProfile === msg.sender.user_id + index &&
                            <div style={{ position: 'absolute', zIndex: "1000", top: "-99%", left: "10%" }}>
                                <ProfileInfoPopUp chatInfo={msg.sender.user_id} isChatUser={true}></ProfileInfoPopUp>
                            </div>}
                    </OutsideClickHandler>
                    <div className='msgtxt'  >
                        {starId === msg._id && <StarWrapper setMessages={setMessages} setStarId={setStarId} msgId={msg._id}></StarWrapper>}

                        <div className={`zcnew-strtng ${msg.isStar && "showStar"} flexC`}>
                            {!msg.is_deleted && <span className='starred'>
                                {!msg.isStar ? <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16" style={{ color: "grey" }} onClick={() => toggleStar(msg._id, false)} >
                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                </svg> :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" className={`bi bi-star-fill ${starType[msg.isStar.message_type]}`} viewBox="0 0 16 16" onClick={() => toggleStar(msg._id, true)}>
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>}
                            </span>}
                            <div className="sent-time">{moment(msg.created_at).format("hh:mm a")}</div>
                        </div>


                        {!msg.is_deleted && emojiSelector[index] && <OutsideClickHandler
                            onOutsideClick={() => {
                                setEmojiSelector((emojiSelector) => {
                                    let arr = new Array(messages.length).fill(false);
                                    return [...arr];
                                });
                            }}
                        >

                            <div className='emoji-container'>
                                <EmojiPicker
                                    onEmojiClick={(emojiData) => onEmojiClick(emojiData, msg._id)}
                                    autoFocusSearch={false}
                                    height={350}
                                    emojiVersion="0.6"
                                    lazyLoadEmojis={true}
                                    suggestedEmojisMode={SuggestionMode.RECENT}
                                    emojiStyle={EmojiStyle.FACEBOOK}

                                />
                            </div>
                        </OutsideClickHandler>}
                        {/* <EditMessageInputBox></EditMessageInputBox> */}

                        {msg.is_deleted ? <pre msgtype="msg" className="zcmsgcnt textL" dir="auto">
                            This message has been
                            <span className="curD" title={`Deleted at ${moment(msg.deleted_at).format("HH:mm A")}`} style={{ marginLeft: "3px" }}>deleted</span>
                        </pre> : msgId === msg._id ? <EditMessageInputBox setMsgId={setMsgId} msgContent={msg} socket={socket} ></EditMessageInputBox> :
                            <div style={{ position: "relative" }} className={`message flexC  ${msg.isFirstMsg && "msg-first"} ${msg.sender.user_id === user.user_id && "me"}`}>
                                <div style={{ marginRight: "15px" }}>
                                    {msg.reply_to &&
                                        <blockquote className="quotedmsgdiv" purpose="viewreplied" msgtime="1675427606981" chid="" sender="" data-chatid="CT_1282961093560040365_60016673028">
                                            <span className="msi-reply zcclr floatl"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" style={{ margin: "auto" }} fill="currentColor" className="bi bi-arrow-90deg-left " viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z" />
                                            </svg></span>
                                            <div className="quotedmsgellips">
                                                {/* {msg.reply_to.files?.length === 0 && <div className="quotedmsgsender">
                                                <span elemtype="user" hover="true" uid="60016689060" className="cur ellips bold flexC">
                                                    <span className="ellips">{msg.reply_to.sender.first_name + "" + msg.reply_to.sender.last_name ?? ""}</span>
                                                    <span className="reply-dt ellips fshrink">
                                                        <span title="">{moment(msg.reply_to.created_at).isSame(moment(), 'day') ? moment(msg.reply_to.created_at).format("hh:mm A") : moment(msg.reply_to.created_at).isSame(moment().subtract(1, 'days'), 'day') ? "Yesterday , " + moment(msg.reply_to.created_at).format("hh:mm A") : moment(msg.reply_to.created_at).format("MMM DD, hh:mm A")} </span>
                                                    </span>
                                                </span>
                                            </div>} */}
                                                <div className='flexC'>
                                                    {msg.reply_to.files && msg.reply_to.files.length > 0 && msg.reply_to.files[0].mimetype.includes("image") &&
                                                        <div style={{ width: "60px", height: "60px", marginRight: "10px" }}>
                                                            <img style={{ borderRadius: "10px" }} src={process.env.REACT_APP_BUCKET_END_POINT + msg.reply_to.files[0].key} width="100%" height="100%"></img>
                                                        </div>}
                                                    {msg.reply_to.files && msg.reply_to.files.length > 0 && msg.reply_to.files[0].mimetype.includes("pdf") &&
                                                        <div style={{ margin: "10px" }}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "var(--color-icon)" }} width="36" height="36" fill="currentColor" className="bi bi-filetype-pdf" viewBox="0 0 16 16">
                                                                <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z" />
                                                            </svg>
                                                        </div>}
                                                    <div className="quotedmsgellips">
                                                        <div className="quotedmsgsender">
                                                            <span className="cur floatl ellips bold w100" style={{ fontSize: "13px" }}>
                                                                {msg.sender.user_id === user.user_id ? "You" : msg.reply_to.sender.first_name + " " + msg.reply_to.sender.last_name ?? ""}
                                                                <span className="reply-dt ellips fshrink">
                                                                    <span title="">{moment(msg.reply_to.created_at).isSame(moment(), 'day') ? moment(msg.reply_to.created_at).format("hh:mm A") : moment(msg.reply_to.created_at).isSame(moment().subtract(1, 'days'), 'day') ? "Yesterday , " + moment(msg.reply_to.created_at).format("hh:mm A") : moment(msg.reply_to.created_at).format("MMM DD, hh:mm A")} </span>
                                                                </span>

                                                            </span>
                                                        </div>
                                                        {msg.reply_to.content || <>
                                                            <span className='' style={{ marginTop: "30px" }}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-paperclip" viewBox="0 0 16 16">
                                                                    <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                                                                </svg>
                                                            </span>
                                                            {msg.reply_to.files[0].name}
                                                        </>
                                                        }
                                                    </div>
                                                </div>
                                                {/* {msg.reply_to.content} <em title="Relaxed" className="zcslymsg-relaxed" code=":relaxed:" nodetype=":"></em> */}
                                            </div>
                                        </blockquote>}

                                    {msg.files && msg.files[0]?.mimetype.includes("pdf") && <div className='flexC' style={{ height: "fit-content", backgroundColor: "#fff", width: "97%", padding: "10px 8px", borderRadius: "10px" }}>
                                        <div style={{ margin: "10px" }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "var(--color-icon)" }} width="36" height="36" fill="currentColor" className="bi bi-filetype-pdf" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z" />
                                            </svg>
                                        </div>
                                        <div className='file-display' >
                                            <div style={{ fontFamily: "Lato,'sans-serif'", fontSize: "15px" }}>{msg.files[0].name}</div>
                                            <div>{formatBytes(msg.files[0].fileSize)}</div>
                                        </div>

                                        <div style={{ paddingRight: "32px", borderLeft: "1px solid var(--color-divider)" }}>
                                            <div style={{ padding: "7px 10px 5px 10px", borderBottom: "1px solid var(--color-divider)", background: "linear-gradient(to right, rgba(var(--color-icon-rgb),0.08), rgba(var(--color-mode-rgb),0))" }}>
                                                <a href={process.env.REACT_APP_BUCKET_END_POINT + msg.files[0].key} target="_blank" download={msg.files[0].name} className="dwnld-btn ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                                                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                                    </svg>
                                                </a>
                                            </div>
                                            <div className='cur' style={{ padding: "7px 10px 5px 10px", background: "linear-gradient(to right, rgba(var(--color-icon-rgb),0.08), rgba(var(--color-mode-rgb),0))" }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "var(--color-icon)" }} width="16" height="16" fill="currentColor" className="bi bi-arrow-90deg-right" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4z" />
                                                </svg>
                                            </div>

                                        </div>
                                    </div>}
                                    {msg.files && !msg.files[0]?.mimetype.includes("pdf") && msg.files.length > 0 && <div className="msg-img" style={{ position: "relative", maxWidth: "fit-content", minWidth: "26rem", height: "14rem   ", backgroundColor: "#fff", borderRadius: "10px", textAlign: "center" }}>
                                        <img height="100%" style={{ margin: "auto" }} src={process.env.REACT_APP_BUCKET_END_POINT + msg.files[0].key}></img>

                                        <a href={process.env.REACT_APP_BUCKET_END_POINT + msg.files[0].key} target="_blank" download={msg.files[0].name} className="dwnld-btn ">
                                            <div style={{ position: "absolute", bottom: "5px", right: "15px", backgroundColor: "#fff", padding: "7px 10px 5px 10px", textAlign: "center", boxShadow: "0 0 4px rgb(0 0 0 / 20%)", borderRadius: "4px" }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                                </svg>
                                            </div>
                                        </a>

                                    </div>}
                                    {msg.files.length > 0 && msg.content !== "" && <span>
                                        <svg version="1.1" width="10" height="10" style={{ marginRight: "5px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" >
                                            <g>
                                                <path d="M369.5,91.2C183.9,175.2,10,375.2,10,633.4c0,159.5,101.5,275.5,226.1,275.5c130.5,0,197.2-98.6,197.2-188.5c0-104.3-72.5-185.6-179.8-185.6c-31.9,0-63.8,8.7-81.2,23.2c0-127.6,101.4-278.4,258-356.6L369.5,91.2z M926.2,91.2c-185.6,84-362.4,284.1-362.4,542.2c0,159.5,104.4,275.5,229,275.5c130.5,0,197.2-98.6,197.2-188.5c0-104.3-72.5-185.6-182.7-185.6c-31.9,0-60.9,8.7-78.3,23.2c0-127.6,101.5-278.4,258-356.6L926.2,91.2z" />
                                            </g>
                                        </svg>
                                    </span>}
                                    {msg.content}
                                </div>
                                <div className={`msg-options zcreactn_emoji ${showMsgOptions._id === msg._id && "displayBlck"}`}>
                                    <div className="instant-reactions" onClick={() => handleReaction(msg._id, { unicode: "1f44d", name: "thumbsup" })}>
                                        <div>👍</div>
                                    </div>
                                    <div className="instant-reactions" onClick={() => handleReaction(msg._id, { unicode: "1f44c", name: "ok hand" })}>
                                        <div>👌</div>
                                    </div>
                                    <div className="instant-reactions" onClick={() => handleReaction(msg._id, { unicode: "2795", name: "Heavy Plus" })}>
                                        <div>➕</div>
                                    </div>
                                    <div className="instant-reactions" id="reply" title='Reply' onClick={() => setReplyTo(msg)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" style={{ marginTop: "6px" }} fill="currentColor" className="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z" />
                                        </svg>
                                        <Tooltip
                                            anchorId="reply"
                                            place="bottom"
                                            content="Reply"
                                        />
                                    </div>

                                    <div className="instant-reactions " onClick={() => setEmojiSelector((emojiSelector) => {
                                        let arr = new Array(messages.length).fill(false);
                                        arr[index] = true;
                                        return [...arr];
                                    })} >
                                        <div><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M22 11v1a10 10 0 1 1-9-10" />
                                            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                                            <line x1="9" y1="9" x2="9.01" y2="9" />
                                            <line x1="15" y1="9" x2="15.01" y2="9" />
                                            <path d="M16 5h6" />
                                            <path d="M19 2v6" />
                                        </svg>
                                        </div>
                                    </div>
                                    <div className="instant-reactions">
                                        <div className='zcf-more' onClick={() => setShowMsgOptions(msg)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16" >
                                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                            </svg>
                                        </div>
                                    </div>

                                </div>

                                {showMsgOptions._id === msg._id && <MessageOptions setShowMsgOptions={setShowMsgOptions} isUser={showMsgOptions.sender.user_id === user.user_id} msg={msg} socket={socket} editInputEnabler={editInputEnabler}></MessageOptions>}
                                {msg.is_updated && <span
                                    id="editinfo"
                                    className="cur zcedtinfo hvrinfo"
                                    title={moment(msg.update_history[msg.update_history.length - 1]?.updated_at).format("dddd, MMMM DD YYYY HH:mm a")}
                                    onClick={() => { setIdForHistory(msg) }}>
                                    (Edited)
                                </span>}
                                {idForHistory !== "" && <EditHistory setIdForHistory={setIdForHistory} idForHistory={idForHistory}></EditHistory>}
                                {msg.sender.user_id === user.user_id && <div className={`read-msg ${msg.read_by.length === 0 && "unread"}`} style={{ marginLeft: "5px", position: "absolute", bottom: "0px ", right: "10px" }} >
                                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 122.88 74.46">

                                        <path className="cls-1" d="M1.87,47.2a6.33,6.33,0,1,1,8.92-9c8.88,8.85,17.53,17.66,26.53,26.45l-3.76,4.45-.35.37a6.33,6.33,0,0,1-8.95,0L1.87,47.2ZM30,43.55a6.33,6.33,0,1,1,8.82-9.07l25,24.38L111.64,2.29c5.37-6.35,15,1.84,9.66,8.18L69.07,72.22l-.3.33a6.33,6.33,0,0,1-8.95.12L30,43.55Zm28.76-4.21-.31.33-9.07-8.85L71.67,4.42c5.37-6.35,15,1.83,9.67,8.18L58.74,39.34Z" />
                                    </svg>
                                </div>}
                            </div>}
                        {!msg.is_deleted && Object.keys(msg.reactions).length > 0 &&
                            <div className="zcsetrectns flexC mrgT10" purpose="reactionarea">
                                {console.log(Object.keys(msg.reactions))}

                                {Object.keys(msg.reactions).map((reaction) => {
                                    return <div className={`zcreactn-optns cur   ${userExists(msg.reactions[reaction]) ? "zcreactn-optns-me" : "zcreactn-optns-others"}`} onClick={() => toggleReaction(socket, msg._id, { unicode: reaction.split(":")[0], name: reaction.split(":")[1] })}>
                                        {console.log(reaction)}
                                        <em className="zcslymsg-anim-24-joy">
                                            <Emoji
                                                unified={reaction.split(":")[0]}
                                                emojiStyle={EmojiStyle.FACEBOOK}
                                                size={22}
                                            />
                                        </em><span count="1">{msg.reactions[reaction].length}</span>
                                    </div>
                                })}
                                <div style={{ marginTop: "-8px", color: "var(--color-icon-lhs)", cursor: "pointer" }} onClick={() => setEmojiSelector((emojiSelector) => {
                                    let arr = new Array(messages.length).fill(false);
                                    arr[index] = true;
                                    return [...arr];
                                })}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M22 11v1a10 10 0 1 1-9-10" />
                                        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                                        <line x1="9" y1="9" x2="9.01" y2="9" />
                                        <line x1="15" y1="9" x2="15.01" y2="9" />
                                        <path d="M16 5h6" />
                                        <path d="M19 2v6" />
                                    </svg>
                                </div>

                            </div>}
                    </div>
                </div>
            })
        }
        <div ref={lastmsg} style={{ height: "10px" }}></div>

        {/* </InfiniteScroll> */}

        {/* {showInput && <><input type="text" value={editMsgInp} onChange={handleChange} />
            <button className='btn btn-primary' onClick={() => editMessage(socket, msgId, editMsgInp)}>EDit</button></>} */}






    </>
};
