import React, { useState, useEffect } from 'react';
import moment from 'moment/moment';
import { Tooltip } from 'react-tooltip';
import { useSelector } from 'react-redux';

export default function MessageDisplay({ messages }) {

    const user = useSelector((state) => state.user)
    return <>
        {messages && messages.reverse().map((msg, index) => {
            return <div key={index} className={`msgContainer ${msg.sender.user_id !== user.user_id && msg.read_by.length === 0 && "newMsg"}`}>

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
                                                    {msg.reply_to.sender.first_name + " " + msg.reply_to.sender.last_name ?? ""}
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
                                {/* <div>{formatBytes(msg.files[0].fileSize)}</div> */}
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


                    {msg.is_updated && <span
                        id="editinfo"
                        className="cur zcedtinfo hvrinfo"
                        title={moment(msg.update_history[msg.update_history.length - 1]?.updated_at).format("dddd, MMMM DD YYYY HH:mm a")}
                    >
                        (Edited)
                    </span>}
                    {msg.sender.user_id === user.user_id && <div className={`read-msg ${msg.read_by.length === 0 && "unread"}`} style={{ marginLeft: "5px", position: "absolute", bottom: "0px ", right: "10px" }} >
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 122.88 74.46">

                            <path className="cls-1" d="M1.87,47.2a6.33,6.33,0,1,1,8.92-9c8.88,8.85,17.53,17.66,26.53,26.45l-3.76,4.45-.35.37a6.33,6.33,0,0,1-8.95,0L1.87,47.2ZM30,43.55a6.33,6.33,0,1,1,8.82-9.07l25,24.38L111.64,2.29c5.37-6.35,15,1.84,9.66,8.18L69.07,72.22l-.3.33a6.33,6.33,0,0,1-8.95.12L30,43.55Zm28.76-4.21-.31.33-9.07-8.85L71.67,4.42c5.37-6.35,15,1.83,9.67,8.18L58.74,39.34Z" />
                        </svg>
                    </div>}
                </div>
            </div>
        })}
    </>
};
