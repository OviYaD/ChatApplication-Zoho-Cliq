import React, { useState, useEffect } from 'react';

export default function DeleteConfirmation(params) {
    return <>
        <div id="zcwindows" className="zcoverlay" style={{ zIndex: "20000" }}>
            <div id="participants" className="modalwindow zcl-win-modal1 zcalgncntr zcbg_mask">
                <div style={{ height: "calc(100vh - 400px)" }}>
                    <div className="mcontent zcrchmcnt" style={{ width: "500px", padding: "0px" }}>
                        <div className="zcl-win-modal1-hdr fshrink  flexC justifySB">
                            <div className="flexC">
                                <div className="font17 fontB ellips cur" >Delete Message</div>

                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-lg zcl-icon--filled2" viewBox="0 0 16 16" >
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                            </svg>
                        </div>
                        <div className='del-content' style={{ textAlign: "center", paddingTop: "50px" }}>
                            <span style={{ fontSize: "20px", color: "var(--color-red)", fontFamily: "zoho-puvi-semi-bold" }}>Are you sure about deleting this message?</span>
                        </div>
                        <div className='flexC mLA ' style={{ position: "absolute", bottom: "50px", right: "30px" }}>
                            <button style={{ border: "1px solid var(--color-lp3)", backgroundColor: "white", padding: "10px 30px", fontSize: "15px", borderRadius: "50px", color: "gray", fontFamily: "zoho-puvi-semi-bold" }} >Cancel</button>
                            <button style={{ border: "1px solid var(--color-red)", backgroundColor: "var(--color-red)", padding: "10px 30px", fontSize: "15px", borderRadius: "50px", color: "white", fontFamily: "zoho-puvi-semi-bold", marginLeft: "20px" }}>Delete</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
};
