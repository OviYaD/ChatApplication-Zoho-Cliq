import React, { useState, useEffect } from 'react';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AddMemberPopUp from '../ChannelComponents/AddMemberPopUp';

export default function Header({ setActId, setWindow, chatInfo, setOpenStatus, bodyContent, setBodyContent }) {
    const [showMemList, setShowMemList] = useState(false);
    const url = new URL(window.location);
    let params = new URLSearchParams(url.search);


    return <>
        <div className="chatHeader">
            <div className="chat-wrapper dflx" style={{ justifyContent: "space-between" }}>
                <div className=' dflx'>
                    <div className="chatIcon" style={{ cursor: "pointer" }} onClick={() => setOpenStatus(true)}>
                        <div className="chatIcon-wrapper">
                            <Diversity3OutlinedIcon style={{ color: "#bfbfbf" }}></Diversity3OutlinedIcon>
                        </div>
                    </div>
                    <div className='chatInfo'>
                        <div className='dflx'>
                            <div className='' >#{chatInfo?.name}</div>
                            <div className='channelMem flexC' style={{ cursor: "pointer" }} onClick={() => setShowMemList(true)}>
                                <PersonOutlineOutlinedIcon style={{ fontSize: "18px", color: "#d6d6d6" }}></PersonOutlineOutlinedIcon> <span style={{ color: "#d6d6d6", paddingLeft: "2px", fontFamily: "zoho-puvi-regular" }}>{chatInfo?.members?.length}</span>
                            </div>
                        </div>

                        <div className='dflx opt' style={{ marginLeft: "0px" }}>
                            <div className={`curP ${bodyContent === "chat" && "opt-active"}`} onClick={() => setBodyContent("chat")}>Messages</div>
                            <div className={`curP ${bodyContent !== "chat" && "opt-active"}`} onClick={() => setBodyContent("media")}> Media Files</div>
                        </div>
                    </div>
                </div>
                <div className='flexC chat-option'>
                    <div className='flexC icons cur'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-chat-square" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                        </svg>
                    </div>
                    <div className='flexC icons cur'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </div>
                    <div className='flexC icons cur'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-camera-video" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z" />
                        </svg>
                    </div>
                    <div className='flexC icons cur'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                        </svg>
                    </div>
                    <div className='flexC icons-last cur'
                        onClick={() => {
                            url.searchParams.delete('channel');
                            window.history.pushState({}, '', url);
                            setWindow("quote");
                            setActId("");
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                        </svg>
                    </div>
                </div>


            </div>
            {/* <AddMemberPopUp></AddMemberPopUp> */}
            {showMemList && <AddMemberPopUp setShowMemList={setShowMemList} chatInfo={chatInfo}></AddMemberPopUp>}
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
                    </svg> */}
        </div>
    </>;
};
