import React, { useState, useRef, useEffect } from 'react';
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
import FilePreview from '../ChatWindow/FilePreview/FilePreview';
// import InputEmoji from 'react-input-emoji'

export default function InputBox({ replyTo, setReplyTo, messages, socket, setMessages, chatInfo }) {

    const [message, setMessage] = useState("");
    const [emojiSelector, setEmojiSelector] = useState(false);
    const [showTagOpt, setShowTagOpt] = useState(false);
    const url = new URLSearchParams(document.location.search);
    const fileInp = useRef();
    const [previewFile, setPreviewFile] = useState(false);
    const [fileData, setFileData] = useState();
    const textField = useRef();

    useEffect(() => {
        replyTo && textField.current.focus();
    }, [replyTo])

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            setReplyTo("");
            console.log("emiting messages.........")
            createMessage(socket, {

                organization_id: JSON.parse(localStorage.getItem("!@#$%^org)(*&^%$")).id,
                is_private: url.get("channel") === null ? true : false,
                chat_id: url.get("channel") === null ? url.get("chat") : url.get("channel"),
                content: message.replace(/^\s+|\s+$/g, ''),
                reply_to: replyTo === "" ? "" : replyTo._id
            });
            setMessage("");
        }
    }

    function onEmojiClick(emojiData, id) {
        console.log("emoji data....", emojiData);
        setMessage((message) => message + emojiData.emoji)
        setEmojiSelector(false)
    }

    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        console.log(fileUploaded);
        setFileData(fileUploaded);
        setShowTagOpt(false);
        setPreviewFile(true);
    };

    const fileUpload = () => {
        fileInp.current.click();
    }

    const shareFiles = (message) => {

        createMessage(socket, {
            organization_id: JSON.parse(localStorage.getItem("!@#$%^org)(*&^%$")).id,
            is_private: url.get("channel") === null ? true : false,
            chat_id: url.get("channel") === null ? url.get("chat") : url.get("channel"),
            content: message.replace(/^\s+|\s+$/g, ''),
            reply_to: replyTo === "" ? "" : replyTo._id,
            files: [{
                originalname: fileData.name,
                mimetype: fileData.type,
                buffer: fileData,
                size: fileData.size
            }]
        });
        setMessage("");
        setReplyTo("");

    }


    return <>
        <div className="chatarea">
            <div className='actions dflx justifySB'>
                <div className='dflx'>
                    {/* <div className=''>Actions</div>
                    <div className='arrow'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-chevron-down " viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div> */}
                </div>
            </div>
            <div className='chateditrmn'>

                <div className='linkTag'>
                    <OutsideClickHandler onOutsideClick={() => setShowTagOpt(false)}>
                        {showTagOpt &&
                            <div className="filepckr-actn" style={{ display: "block" }}>
                                <div className="fileatchmnt zcl-menu-wrap" align="top" editoption="false">
                                    {/* <div className="zcl-menu-item ellips">
                                        <em className="zcl-menu-item-icn zcf-code-snippet">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-code-slash" viewBox="0 0 16 16">
                                                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                                            </svg>
                                        </em>
                                        <span className="ellips">Code Snippet<span></span></span>
                                    </div>
                                    <div className="zcl-menu-item ellips">
                                        <em className="zcl-menu-item-icn zcf-artboard">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-display" viewBox="0 0 16 16">
                                                <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z" />
                                            </svg>
                                        </em>
                                        <span className="ellips">Whiteboard</span></div>
                                    <div className="zcl-menu-item ellips">
                                        <em className="zcl-menu-item-icn zcf-cloud">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-upload" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
                                                <path fillRule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z" />
                                            </svg>
                                        </em>
                                        <span className="ellips">Attach from Cloud</span>
                                    </div> */}
                                    <div id="subfileCT_1263979249193350435_60016673028" className="zcl-menu-item ellips" onClick={fileUpload}>
                                        <em className="zcl-menu-item-icn zcf-computer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-laptop" viewBox="0 0 16 16">
                                                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                                            </svg>
                                        </em>
                                        <span className="ellips">Upload from Computer</span>
                                        <input
                                            type="file"
                                            ref={fileInp}
                                            accept=".pdf"
                                            onChange={handleChange}
                                            style={{ display: "none" }} />
                                    </div>
                                </div>
                            </div>}</OutsideClickHandler>
                    {previewFile && <FilePreview setPreviewFile={setPreviewFile} chatInfo={chatInfo} shareFiles={shareFiles} fileData={fileData} ></FilePreview>}

                    <AttachFileOutlinedIcon className='flexC attachment' onClick={() => setShowTagOpt(true)}></AttachFileOutlinedIcon></div>
                <div className="textArea dflx">
                    {/* <div id="" contentEditable="true" data-type="composer" rule="msg" className="textarea" data-trigger="smiley" data-purpose="zcslash" dir="auto" tabIndex="0" value="{message}" onChange={(e) => setMessage(e.target.value)}> */}
                    {/* </div> */}

                    <textarea ref={textField} data-type="composer" rule="msg" className="textarea" data-trigger="smiley" data-purpose="zcslash" dir="auto" tabIndex="0" value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={handleKeyDown}></textarea>
                    {/* </div> */}
                </div>
                {/* <div className='part-list'>
                    <div>
                        <div className='mem-cat'>Participants</div>
                        <div className='mem-list'>
                            <div className="mem-list-item flexC">
                                <div className='mem-img'>
                                    <img src='https://contacts.zoho.in/file?fs=thumb&nocache=1672909825507' width="44px" height="44px">
                                    </img>
                                </div>
                                <div className="mem-info mLR20 ">
                                    <div className="mem-name">Oviya D</div>
                                    <div className="mem-email">oviyad.19cse@kongu.edu</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div> */}
                {replyTo &&
                    <div id="" className="zcurlprv" msguid="1675428007330%202281018395736" uid="60016689077_1675428007330" style={{ display: "block" }}>
                        <div id="closepreview" className="msi-close cclose prvlngcls" onClick={() => setReplyTo("")}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </div>
                        <div className="zcreplypreview clrboth">
                            <div id="preview" className="dIB zcmsgrlypr msgtxt me">
                                <pre>
                                    <span className="msi-reply zcclr floatl" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" style={{ verticalAlign: "bottom", color: "var(--color-theme)" }} fill="currentColor" className="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z" />
                                        </svg>
                                    </span>
                                    <div className='flexC'>
                                        {replyTo.files && replyTo.files.length > 0 && replyTo.files[0].mimetype.includes("image") &&
                                            <div style={{ width: "60px", height: "60px", marginRight: "10px" }}>
                                                <img style={{ borderRadius: "10px" }} src={process.env.REACT_APP_BUCKET_END_POINT + replyTo.files[0].key} width="100%" height="100%"></img>
                                            </div>}
                                        {replyTo.files && replyTo.files.length > 0 && replyTo.files[0].mimetype.includes("pdf") &&
                                            <div style={{ margin: "10px" }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "var(--color-icon)" }} width="36" height="36" fill="currentColor" className="bi bi-filetype-pdf" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z" />
                                                </svg>
                                            </div>}
                                        <div className="quotedmsgellips">
                                            <div className="quotedmsgsender">
                                                <span className="cur floatl ellips bold w100" style={{ fontSize: "13px" }}>
                                                    {replyTo.sender.first_name + " " + replyTo.sender.last_name ?? ""}
                                                </span>
                                            </div>
                                            {replyTo.content || <>
                                                <span className='' style={{ marginTop: "30px" }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-paperclip" viewBox="0 0 16 16">
                                                        <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                                                    </svg>
                                                </span>
                                                {replyTo.files[0].name}
                                            </>
                                            }
                                        </div>
                                    </div>

                                </pre>
                            </div>
                        </div>
                    </div>
                }


                {emojiSelector && <OutsideClickHandler onOutsideClick={() => setEmojiSelector(false)}> <div className='Inp-emoji-container'>
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
                    {/* <div className="chatOption">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-mic" viewBox="0 0 16 16">
                            <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                            <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
                        </svg>

                    </div> */}
                    <div className='chatOption cur'>
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
