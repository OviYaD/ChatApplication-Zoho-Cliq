import React, { useEffect, useState } from "react";
import "./EditHistory.scss";
import moment from 'moment/moment';

export default function EditHistory({ idForHistory, setIdForHistory }) {
    const [msgHistory, setMsgHistory] = useState();


    useEffect(() => {
        setMsgHistory(idForHistory.update_history.reverse());
    }, [])

    return <>
        {msgHistory && <div id="zcwindows" className="zcoverlay" style={{ zIndex: "20000" }}>
            <div id="participants" className="modalwindow zcl-win-modal1 zcalgncntr zcbg_mask">
                <div style={{ height: "inherit", maxHeight: "750px" }}>
                    <div className="mcontent zcrchmcnt" style={{ width: "900px", padding: "0px", minHeight: "100px", maxHeight: "750px" }}>
                        <div className="zcl-win-modal1-hdr fshrink  flexC justifySB">
                            <div className="flexC">
                                <div className="font17 fontB ellips cur" style={{ fontFamily: "Lato,sans-serif" }} >Edit History</div>
                            </div>
                            <div onClick={() => setIdForHistory("")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-lg zcl-icon--filled2" viewBox="0 0 16 16" >
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                </svg>

                            </div>
                        </div>
                        <div className="flexG zcteammember-list posl ps-container ps-theme-default ps-active-y">
                            <div id="participants" style={{ overflow: "auto", maxHeight: "300px", overflowX: "hidden", scrollBehavior: "smooth" }}>
                                <div id="edithistorycontainer" class="edit-hist-bdy in-view ps-container ps-theme-default ps-active-y" data-ps-id="b33fe6ef-f7a0-42b4-e750-93d63ae6d61e">
                                    {msgHistory.map((msg, index) => {
                                        return <>
                                            <div class={`flex edit-hist-cont ${index === 0 ? "edit-hist-lastmsg" : index === idForHistory.update_history.length - 1 ? "edit-hist-frstmsg" : ""}`}>
                                                <div class="font12 edit-hist-time">{moment(msg.updated_at).format("HH:mm A, MMM DD")}</div>
                                                <div class="edit-hist-msgcont">
                                                    {index === 0 && <div class="edit-hist-lastmsgday">{moment(msg.updated_at).fromNow()}, {moment(msg.updated_at).format("MMMM DD")}</div>}
                                                    <pre
                                                        class="edit-hist-msg"
                                                    >{msg.content}
                                                    </pre>
                                                </div>
                                            </div>
                                        </>
                                    })}


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>}
    </>
};
