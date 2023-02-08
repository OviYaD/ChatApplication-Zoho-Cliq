import React, { useState, useEffect } from "react";
import InputBox from "../InputBox/InputBox";
import "./FilePreview.scss";
import OutsideClickHandler from 'react-outside-click-handler';
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
import { Viewer } from '@react-pdf-viewer/core';


export default function FilePreview({ setPreviewFile, fileData }) {
    const [message, setMessage] = useState("");
    const [fileSize, setFileSize] = useState();
    const [emojiSelector, setEmojiSelector] = useState(false);
    const url = new URLSearchParams(document.location.search);

    useEffect(() => {
        var _size = fileData.size;
        var fSExt = new Array('Bytes', 'KB', 'MB', 'GB'),
            i = 0; while (_size > 900) { _size /= 1024; i++; }
        var exactSize = (Math.round(_size * 100) / 100) + ' ' + fSExt[i];
        setFileSize(exactSize)
    }, [])

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            console.log("emiting messages.........")
            // createMessage(socket, {
            //     is_private: url.get("channel") === null ? true : false,
            //     chat_id: url.get("channel") === null ? url.get("chat") : url.get("channel"),
            //     content: message.replace(/^\s+|\s+$/g, ''),
            // });
            setMessage("");
        }
    }
    function onEmojiClick(emojiData, id) {
        console.log("emoji data....", emojiData);
        setMessage((message) => message + emojiData.emoji)
        setEmojiSelector(false)
    }
    return <>
        <div id="zcwindows" className="zcoverlay preview" style={{ zIndex: "20000" }}>
            <div id="participants" className="modalwindow  zcl-win-modal1 zcalgncntr zcbg_mask">
                <div>
                    <div className="mcontent zcrchmcnt" style={{ width: "750px", padding: "0px" }}>
                        <div className="zcl-win-modal1-hdr fshrink  flexC justifySB">
                            <div className="flexC">
                                <div className="font17 fontB ellips cur" >Share with
                                </div>
                                <div style={{ height: "22px", width: "22px", boxShadow: "0 0 2px var(--color-lp3)", backgroundColor: "white", borderRadius: "100%", marginLeft: "15px" }}>
                                    <img style={{ height: "100%", width: "100%", borderRadius: "50%" }} src="https://contacts.zoho.in/file?ID=60016689064&exp=6000&t=user&fs=thumb"></img>
                                </div>
                                <div style={{ fontSize: "16px", fontFamily: "zoho-puvi-semi-bold", color: "rgb(61,194,172", marginLeft: "15px" }}>Oviya D</div>

                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-lg zcl-icon--filled2" viewBox="0 0 16 16" onClick={() => setPreviewFile(false)}>
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                            </svg>
                        </div>
                        <div id="fileuploadwinbody" class="mcontent zfileupldcnt zppwd1">
                            <div id="filescontainer" class="zimgprvmn">
                                <div class="zcfuimgcnt" id="filespreviewlist">
                                    <div id="maincontainer" chid="1264013913143657497" class="zfleprv">
                                        <div type="file" fileindex="0" class="zcupldimgmn posl zfle" content="image/jpeg" fileextn=".jpg">
                                            <div class="zupldimg">
                                                {fileData.type.includes("pdf") ? <div
                                                    className="zupldimg"
                                                    style={{
                                                        width: '100px !important',
                                                        marginLeft: "100px",
                                                        // position: "absolute",
                                                        // right: "0",
                                                        // marginRight: "auto"
                                                    }}
                                                >
                                                    <Viewer fileUrl={URL.createObjectURL(fileData)} />

                                                </div> :
                                                    <div type="preview">
                                                        <img src={URL.createObjectURL(fileData)}></img>
                                                    </div>}
                                                <div id="filedetails" class="filedetails">
                                                    <div class="flexC w100">
                                                        <div class="flexG mR40 fname-con">
                                                            <div id="fname" class="flexC">

                                                                <span id="fnameholder" class="fname" purpose="editfname" type="fname" index="0" chid="1264013913143657497" fileextn=".jpg" data-val="20201126_113928">{fileData.name}</span>
                                                            </div>
                                                            <div id="fsize" class="mT2 pL5 font13">{fileSize}</div>
                                                        </div>
                                                        <div chid="1264013913143657497" purpose="annotateImg" class="zcl-icon zcl-icon--filled zcf-edit2 fshrink" title="Edit image">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="zcffcmtcnt mT20" fileindex="0">
                                                <div class="flex w100 dN p8 zcf-schedulemsgprompt posrel" data-view="schedulemsgprompt"></div>
                                                <div id="composer-component-2" composer-component="" class="zc-composer-wrap">
                                                    <div class="zc-composer-cont">
                                                        <div class="zc-composer-main" composer-main-container="">
                                                            <div attachment-feature-container=""></div>
                                                            <div
                                                                id="composer-component-2-editor"
                                                                class="zc-composer-input zcaudiorecord"
                                                                data-composer-id="composer-component-2"
                                                                placeholder="Your comments go here... (Ctrl + Enter to upload the file right away)"
                                                                data-type="composer"
                                                                data-trigger="smiley"
                                                                dir="auto"
                                                                tabindex="0"
                                                                composer-component-editor=""
                                                                rule="msg"
                                                                contenteditable="true"
                                                            ></div>
                                                        </div>
                                                    </div>
                                                    <div class="zc-composer-emoji flexM"><em class="zcf-emoji cur" id="composer-component-2-smiley-icon" data-composer-id="composer-component-2" data-action="openSmileyContainer"></em></div>
                                                    <div id="composer-component-2-smiley-container" class="smileydivmn" ignore_sticker="true" ignore_giphy="true"></div>

                                                    <div voice-recorder-feature-container=""></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="chatarea" style={{ bottom: "30px", marginLeft: "10px" }}>

                                <div className='chateditrmn' style={{ width: "calc(100% - 80px)" }}>
                                    <div className="textArea dflx">
                                        <textarea data-type="composer" rule="msg" className="textarea" data-trigger="smiley" data-purpose="zcslash" dir="auto" tabIndex="0" value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={handleKeyDown}></textarea>
                                    </div>
                                    {emojiSelector && <OutsideClickHandler onOutsideClick={() => setEmojiSelector(false)}> <div className='Inp-emoji-container' style={{ zIndex: "10000" }}>
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
                                        <div className='chatOption cur'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-emoji-smile" viewBox="0 0 16 16" onClick={() => setEmojiSelector(true)}>
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                                            </svg>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div class="fileshare-ftr flexC" style={{ marginTop: "-15px" }}>
                        <div class="admorefiles fshrink">
                            <div class="hvrinfo font15 theme-link fontB" purpose="addmorefiles" style={{ marginTop: "-25px" }}>+ Add files</div>
                            <form id="upload" type="html5" enctype="multipart/form-data"><input id="addfile1264013913143657497" chid="1264013913143657497" class="dN" type="file" multiple="true" /></form>
                        </div>
                        <div class="mLA fshrink" style={{ marginTop: "-25px" }} id="fileactionbtns">
                            <button purpose="cancel" class="zcl-btn zcl-btn--secondary" tabindex="1" onClick={() => setPreviewFile(false)}>Cancel</button>
                            <button purpose="upload" class="zcl-btn zcl-btn--primary mL20 zcl-split-btn" tabindex="0" clearcomposer="true">
                                <span>Share</span><span id="scheduleasoption" class="split-icon flexM zcf-schedule" purpose="showDropDownOptions" style={{ marginLeft: "10px" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                                    </svg>
                                </span>

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
};

