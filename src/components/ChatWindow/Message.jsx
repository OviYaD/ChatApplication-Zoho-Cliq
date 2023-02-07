import React, { useRef, useState, useEffect } from 'react';
import moment from 'moment/moment';
import { useSelector } from 'react-redux';
import OutsideClickHandler from 'react-outside-click-handler';
import { deleteMessage, editMessage, toggleReaction } from '../../SocketEvents/events';
import EditMessageInputBox from "./EditMessageInputBox"
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
import MessageOptions from './MessageOptions';
import EditHistory from './EditHistory';

export default function Message({ newMsg, socket, messages }) {

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

    useEffect(() => {
        console.log(messages);
        if (newMsg) lastmsg.current.scrollIntoView();

        let prevDate = "";
        let prevUser = "";
        let setScroll = true;
        let intValue = new Array(messages.length).fill(false);
        setEmojiSelector(intValue);
        const msgList = messages.map((msg, index) => {

            let flags = { showDate: false, showUser: false, isFirstMsg: false };

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

            return { ...msg, ...flags };

        })
        setMessages(msgList);



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

    const handleReaction = (id, reaction) => {
        toggleReaction(socket, id, reaction);

    }

    const userExists = (reactions) => {
        console.log(reactions)
        return reactions.filter((reac) => {
            return reac.user_id === user.user_id;
        }).length > 0
    }
    return <>

        {messageList && messageList.map((msg, index) => {
            return <div key={index}>
                {msg.showDate && <div msguid={msg._id} purpose="date" className="zcmsg_dvdrmn in-view">
                    <div msguid={msg._id} className="zcdvdmsg ">{moment(msg.created_at).format("dddd, MMMM DD YYYY")}</div>
                </div>}
                {msg.showUser && <div className="sender ellips   in-view">
                    <div className="chtimg floatl ">
                        <img elemtype="user" hover="true" uid="60016689094" src={msg.sender.mini_avatar_url} className="cur" />
                    </div>
                    <span elemtype="user" hover="true" uid="60016689094" className="zctxtseln cur">{msg.sender.user_id === user.user_id ? "You" : msg.sender.first_name + " " + msg.sender.last_name}</span>
                </div>}
                <div className='msgtxt'  >
                    <div className='zcnew-strtng flexC'>
                        {!msg.is_deleted && <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16" style={{ color: "grey" }}>
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg>}
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
                                emojiStyle={EmojiStyle.APPLE}

                            />
                        </div>
                    </OutsideClickHandler>}
                    {/* <EditMessageInputBox></EditMessageInputBox> */}

                    {msg.is_deleted ? <pre msgtype="msg" className="zcmsgcnt textL" dir="auto">
                        This message has been
                        <span className="curD" title={`Deleted at ${moment(msg.deleted_at).format("HH:mm A")}`} style={{ marginLeft: "3px" }}>deleted</span>
                    </pre> : msgId === msg._id ? <EditMessageInputBox setMsgId={setMsgId} msgContent={msg} socket={socket} ></EditMessageInputBox> :
                        <div className={`message flexC  ${msg.isFirstMsg && "msg-first"} ${msg.sender.user_id === user.user_id && "me"}`}>
                            {/* <blockquote className="quotedmsgdiv" purpose="viewreplied" msgtime="1675427606981" chid="" sender="" data-chatid="CT_1282961093560040365_60016673028">
                            <span className="msi-reply zcclr floatl"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" style={{ margin: "auto" }} fill="currentColor" className="bi bi-arrow-90deg-left " viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z" />
                            </svg></span>
                            <div className="quotedmsgellips">
                                <div className="quotedmsgsender">
                                    <span elemtype="user" hover="true" uid="60016689060" className="cur ellips bold flexC">
                                        <span className="ellips">Sriraam R V</span><span className="reply-dt ellips fshrink"><span title="Friday, February 3 ">Feb. 3, 06:03 PM</span></span>
                                    </span>
                                </div>
                                nice <em title="Relaxed" className="zcslymsg-relaxed" code=":relaxed:" nodetype=":"></em>
                            </div>
                        </blockquote> */}

                            {msg.content}
                            <div className='msg-options zcreactn_emoji'>
                                <div className="instant-reactions" onClick={() => handleReaction(msg._id, { unicode: "1f44d", name: "thumbsup" })}>
                                    <div>👍</div>
                                </div>
                                <div className="instant-reactions" onClick={() => handleReaction(msg._id, { unicode: "1f44c", name: "ok hand" })}>
                                    <div>👌</div>
                                </div>
                                <div className="instant-reactions" onClick={() => handleReaction(msg._id, "2795")}>
                                    <div>➕</div>
                                </div>
                                <div className="instant-reactions">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" style={{ marginTop: "6px" }} fill="currentColor" className="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z" />
                                    </svg>

                                </div>
                                <div className="instant-reactions " onClick={() => setEmojiSelector((emojiSelector) => {
                                    let arr = new Array(messages.length).fill(false);
                                    arr[index] = true;
                                    return [...arr];
                                })} >
                                    <div>😊</div>
                                </div>
                                <div className="instant-reactions">
                                    <div className='zcf-more' onClick={() => setShowMsgOptions(msg._id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16" >
                                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                        </svg>
                                    </div>
                                    {showMsgOptions === msg._id && <MessageOptions setShowMsgOptions={setShowMsgOptions} isUser={true} msg={msg} socket={socket} editInputEnabler={editInputEnabler}></MessageOptions>}
                                </div>

                            </div>
                            {msg.is_updated && <span
                                id="editinfo"
                                class="cur zcedtinfo hvrinfo"
                                title={moment(msg.update_history[msg.update_history.length - 1]?.updated_at).format("dddd, MMMM DD YYYY HH:mm a")}
                                onClick={() => { setIdForHistory(msg) }}>
                                (Edited)
                            </span>}
                            {idForHistory !== "" && <EditHistory setIdForHistory={setIdForHistory} idForHistory={idForHistory}></EditHistory>}
                            {msg.sender.user_id === user.user_id && <div className={`read-msg ${msg.read_by.length === 0 && "unread"}`} style={{ marginLeft: "5px", }} >
                                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 122.88 74.46">
                                    <title>double-tick</title>
                                    <path class="cls-1" d="M1.87,47.2a6.33,6.33,0,1,1,8.92-9c8.88,8.85,17.53,17.66,26.53,26.45l-3.76,4.45-.35.37a6.33,6.33,0,0,1-8.95,0L1.87,47.2ZM30,43.55a6.33,6.33,0,1,1,8.82-9.07l25,24.38L111.64,2.29c5.37-6.35,15,1.84,9.66,8.18L69.07,72.22l-.3.33a6.33,6.33,0,0,1-8.95.12L30,43.55Zm28.76-4.21-.31.33-9.07-8.85L71.67,4.42c5.37-6.35,15,1.83,9.67,8.18L58.74,39.34Z" />
                                </svg>
                            </div>}
                        </div>}
                    {!msg.is_deleted && Object.keys(msg.reactions).length > 0 &&
                        <div className="zcsetrectns flexC mrgT10" purpose="reactionarea">
                            {console.log(Object.keys(msg.reactions))}

                            {Object.keys(msg.reactions).map((reaction) => {
                                return <div className={`zcreactn-optns   ${userExists(msg.reactions[reaction]) ? "zcreactn-optns-me" : "zcreactn-optns-others"}`} onClick={() => toggleReaction(socket, msg._id, { unicode: reaction.split(":")[0], name: reaction.split(":")[1] })}>
                                    <em className="zcslymsg-anim-24-joy">
                                        <Emoji
                                            unified={reaction.split(":")[0]}
                                            emojiStyle={EmojiStyle.APPLE}
                                            size={22}
                                        />
                                    </em><span count="1">{msg.reactions[reaction].length}</span>
                                </div>
                            })}
                            <div style={{ marginTop: "-8px", color: "var(--color-icon-lhs)", cursor: "pointer" }} onClick={() => setEmojiSelector((emojiSelector) => {
                                let arr = new Array(messages.length).fill(false);
                                arr[index] = true;
                                return [...arr];
                            })}>😊 </div>

                        </div>}
                </div>
            </div>
        })}

        {/* {showInput && <><input type="text" value={editMsgInp} onChange={handleChange} />
            <button className='btn btn-primary' onClick={() => editMessage(socket, msgId, editMsgInp)}>EDit</button></>} */}

        <div ref={lastmsg}></div>




    </>
};
