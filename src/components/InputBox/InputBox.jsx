import React, { useState } from 'react';
import './InputBox.scss';
import OutsideClickHandler from 'react-outside-click-handler';

import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import { createMessage } from '../../SocketEvents/events';
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
// import InputEmoji from 'react-input-emoji'

export default function InputBox({ messages, socket, setMessages }) {

    const [message, setMessage] = useState();
    const [emojiSelector, setEmojiSelector] = useState(false);
    const url = new URLSearchParams(document.location.search);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            console.log("emiting messages.........")
            createMessage(socket, {
                is_private: url.get("channel") === null ? true : false,
                chat_id: url.get("channel") === null ? url.get("chat") : url.get("channel"),
                content: message.replace(/^\s+|\s+$/g, ''),
            });
            setMessage("");
        }
    }
    function onEmojiClick(emojiData, id) {
        console.log("emoji data....", emojiData);
        // toggleReaction(socket, id, { unicode: emojiData.unified, name: emojiData.names[0] === "+1" ? emojiData.names[1] : emojiData.names[0] })
        // setSelectedEmoji(emojiData.unified);
        // console.log(EmojiClickData.emojiData)
        setEmojiSelector(false)
    }

    // return (
    //     <InputEmoji
    //         value={message}
    //         onChange={(e) => setMessage(e.target?.value)}
    //         cleanOnEnter
    //         onKeyDown={handleKeyDown}
    //         placeholder="Type a message"
    //     />
    // )

    return <>
        <div className="chatarea">
            <div className='actions dflx justifySB'>
                <div></div>
                <div className='dflx'>
                    <div className=''>Actions</div>
                    <div className='arrow'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-chevron-down " viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className='chateditrmn'>
                <div className='linkTag'> <AttachFileOutlinedIcon className='flexC attachment'></AttachFileOutlinedIcon></div>
                <div className="textArea dflx">
                    {/* <div id="" contentEditable="true" data-type="composer" rule="msg" className="textarea" data-trigger="smiley" data-purpose="zcslash" dir="auto" tabIndex="0" value="{message}" onChange={(e) => setMessage(e.target.value)}> */}
                    {/* </div> */}

                    <textarea data-type="composer" rule="msg" className="textarea" data-trigger="smiley" data-purpose="zcslash" dir="auto" tabIndex="0" value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={handleKeyDown}></textarea>
                    {/* </div> */}
                </div>
                {/* <div id="" className="zcurlprv" msguid="1675428007330%202281018395736" uid="60016689077_1675428007330" style={{ display: "block" }}>
                    <div id="closepreview" className="msi-close cclose prvlngcls">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>
                    <div className="zcreplypreview clrboth">
                        <div id="preview" className="dIB zcmsgrlypr msgtxt me">
                            <pre><span className="msi-reply zcclr floatl">
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" style={{ verticalAlign: "bottom", color: "var(--color-theme)" }} fill="currentColor" className="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z" />
                                </svg>
                            </span>
                                <div className="quotedmsgellips">
                                    <div className="quotedmsgsender">
                                        <span className="cur floatl ellips bold w100" style={{ fontSize: "13px" }}>
                                            Moh'd Sahad
                                        </span>
                                    </div>arigatou arigatou</div>

                            </pre>
                        </div>
                    </div>
                </div> */}

                {emojiSelector && <OutsideClickHandler onOutsideClick={() => setEmojiSelector(false)}> <div className='emoji-container'>
                    <EmojiPicker
                        onEmojiClick={(emojiData) => onEmojiClick(emojiData)}
                        autoFocusSearch={false}
                        height={350}
                        emojiVersion="0.6"
                        lazyLoadEmojis={true}
                        suggestedEmojisMode={SuggestionMode.RECENT}
                        emojiStyle={EmojiStyle.APPLE}

                    />
                </div></OutsideClickHandler>}
                <div className='dflx' style={{ position: "absolute", right: "0px", top: "35%", bottom: "65%" }}>
                    <div className="chatOption">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-mic" viewBox="0 0 16 16">
                            <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                            <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
                        </svg>

                    </div>
                    <div className='chatOption'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-emoji-smile" viewBox="0 0 16 16" onClick={() => setEmojiSelector(true)}>
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                        </svg>

                    </div>
                </div>
            </div>
            <div id="helptip" className="zcedtrinfo posl dflxcent" style={{ visibility: "visible" }}>
                <div className="flexC composrhelp posrel">
                    <div className="flexG textC font14 ellips">Type "/" for quick commands</div>
                    <div className="zcqustnmn posl fshrink">
                        <div className="markdwnHlp curP flexM" customtooltip="" data-operation="showmarkdown">
                            <span className="zcf-markdown font20 flexC"></span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
};
