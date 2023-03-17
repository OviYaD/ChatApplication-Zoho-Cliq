import React, { useState, useEffect } from 'react';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AddMemberPopUp from '../../ChannelComponents/AddMemberPopUp/AddMemberPopUp';

export default function Header({ setActId, setWindow, chatInfo, setOpenStatus, bodyContent, setBodyContent }) {
    const [showMemList, setShowMemList] = useState(false);
    const url = new URL(window.location);
    let params = new URLSearchParams(url.search);


    return <>
        <div className="chatHeader">
            <div className="chat-wrapper dflx" style={{ justifyContent: "space-between" }}>
                <div className=' dflx'>
                    <div className="chatIcon" style={{ cursor: "pointer" }} onClick={() => setOpenStatus(true)}>
                        <div className="chatIcon-wrapper" style={{ overflow: "hidden" }}>
                            <img width="100%" height="100%" src={chatInfo?.image_url?.includes("https") ? chatInfo.image_url : process.env.REACT_APP_BUCKET_END_POINT + chatInfo.image_url}></img>
                            {/* <Diversity3OutlinedIcon style={{ color: "#bfbfbf" }}></Diversity3OutlinedIcon> */}
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
