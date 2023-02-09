import React, { useState, useEffect } from 'react';
import "./StarMessages.scss"

export default function StarMessages(params) {
    return <>
        <div id="zcwindows" className="zcoverlay" style={{ zIndex: "20000" }}>
            <div id="participants" className="modalwindow zcl-win-modal1 zcalgncntr zcbg_mask" style={{ width: "100%", height: "100%" }}>
                <div style={{ height: "100%" }}>
                    <div className="mcontent zcrchmcnt" style={{ padding: "0px" }}>
                        <div className="zcl-win-modal1-hdr fshrink  flexC justifySB">
                            <div className="flexC">
                                <div className="font17 fontB ellips cur" style={{ fontFamily: "zoho-puvi-semi-bold", fontSize: "15px" }}>Star Messages</div>

                            </div>
                            <div id="starcatview" className="staroptnsbox src_tip zcl-tab font14 fontB">
                                <span category="0" selected="" className="default">All</span>
                                <span category="1" className="msi-starsel type1">
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#f44b4b", marginRight: "4px" }} width="12" height="12" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    Important</span>
                                <span category="2" className="msi-starsel type2">
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#66c32d", marginRight: "4px" }} width="12" height="12" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    To-do</span>
                                <span category="3" className="msi-starsel type3">
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#ffae1e", marginRight: "4px" }} width="12" height="12" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    Note</span>
                                <span category="4" className="msi-starsel type4">
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#00cce6", marginRight: "4px" }} width="12" height="12" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>Manager</span>
                                <span category="5" className="msi-starsel type5">
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#2F3BB9", marginRight: "4px" }} width="12" height="12" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>Follow-up</span>
                            </div>

                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-lg zcl-icon--filled2" viewBox="0 0 16 16" >
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                            </svg>
                        </div>
                        <div className='star-msg-content'>
                            <div className="strsmg" id="1264013913136366373|60016689068|1675966241731" purpose="starmessage" chid="1264013913136366373" msgtime="1675966241731" chattitle="You" threadchattitle="" ctype="1" documentclick="starmessagerow">
                                <div className="zcstrrow">
                                    <div className="usrimgsts floatl zc-1" style={{ backgroundColor: "black", borderRadius: "100%", overflow: "hidden" }}><img elemtype="user" hover="true" uid="60016689068" className="floatl rds4" title="Richard Joyal G" src="https://contacts.zoho.in/file?ID=60016689068&amp;exp=6000&amp;t=user&amp;fs=thumb" /></div>
                                    <div className="zcunrd-rht">
                                        <div className="zcunrdlt-txt">
                                            <span className="floatl ellips bold zcunrdtit">Richard Joyal G <span className="zcstarw">&nbsp;❭❭&nbsp;</span>
                                                <span className="ellips bold zcunrdtit" holder="chattitle"> You </span></span>
                                            <span className="zcunrd-dt ellips"><span title="Yesterday, February 9" style={{ fontSize: "13px", fontFamily: "zoho-puvi-regular" }}>Yesterday, 11:40 PM</span></span>
                                        </div>
                                        <div id="starmessage1675966241731" chid="1264013913136366373" uid="60016689068_1675966241731" star="true" type="1" purpose="staroptions" className="msi-starsel type1 cur">
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#f44b4b", marginRight: "4px" }} width="12" height="12" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="strbmsg">Okay <span className="emoji" elemtype="emoji" nodetype=":" code="👍" title="Thumbs up">👍</span></div>
                            </div>

                        </div>



                    </div>
                </div>
            </div>
        </div>


    </>
};
