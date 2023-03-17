import React, { useState, useEffect } from 'react';
import Message from '../ChatWindow/MessageAssets/Message';
import { getMemberDetails } from '../../api/Organization/Organization';
import CircleLoader from '../loaders/CircleLoader';
import { getRecentMsg } from '../../api/chats/chat';
import { useSelector } from 'react-redux';

export default function ChatDisplay({ openChat, setShowInfo, showInfo, selectedItem }) {

    const [profile, setProfile] = useState();
    const [message, setMessage] = useState();
    const user = useSelector((state) => state.user);

    useEffect(() => {
        console.log("chat_id:", showInfo);
        if (selectedItem === "users") {
            fetchProfile(showInfo);
        }
    }, [showInfo])

    const fetchProfile = async (showInfo) => {
        setProfile();
        const res = await getMemberDetails({ email: showInfo.email });
        setProfile(res);
    }

    return <>
        <div style={{ width: "53%", backgroundColor: "#fff", boxShadow: "-2px 0 4px var(--box-shadow-color)", minHeight: "592px", position: "absolute", marginLeft: "45%" }}>
            {selectedItem !== "channels" && profile ? <>
                <div className="profilecon">
                    <div className='profile-section flexC' style={{ position: "relative" }}>

                        <div style={{ width: "48px", height: "48px", overflow: "hidden", borderRadius: "100%" }}>
                            <img width="100%" height="100%" src={process.env.REACT_APP_BUCKET_COMP_END_POINT + profile.image_url}></img>
                        </div>
                        <div className="user-card-action-icn zcl-icon zcl-icon--default zcf-call">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            </svg>
                        </div>
                        <div className="user-card-action-icn zcl-icon zcl-icon--default zcf-video" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera-video" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z" />
                            </svg>
                        </div>
                        <div className="user-card-action-icn zcl-icon zcl-icon--default zcf-chat" uid="60016689751" documentclick="initiateChatWithUser" data-peoplepreview="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-left-text" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </div>
                        <div className='flexC' style={{ position: "absolute", top: "0", right: "0", width: "30px", height: "30px", backgroundColor: "rgb(241,244,247)", borderRadius: "100%", textAlign: "center", verticalAlign: "middle" }} onClick={() => setShowInfo("")}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16" style={{ margin: "auto" }}>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </div>
                    </div>
                    <div className='personal-det'>
                        <div style={{ fontFamily: "zoho-puvi-semi-bold", fontSize: "15px" }}>{profile.first_name + " " + profile.last_name}</div>
                        <div style={{ fontSize: "13px", color: "var(--color-lp1)" }}>{profile.email}</div>
                    </div>

                    <div className="show-opt flexC">
                        <div className="opt-item active"> Profile</div>
                        {/* <div className="opt-item"> Chats in Common</div> */}
                    </div>
                </div>
            </> : <CircleLoader></CircleLoader>}
            <div className='opt-content'>

                {selectedItem === "channels" ? <>
                    {/* <Message ></Message> */}
                </> : <>{
                    profile && <div className="prf-ifo-contact">
                        <div style={{ paddingTop: "15px", fontSize: "14px", fontFamily: "zoho-puvi-semi-bold" }}>
                            Contact
                        </div>
                        <div className="posrel pair">
                            <div className="prf-adinfo" >{profile.first_name + " " + profile.last_name}</div>
                            <div className="prf-cat ellips">Display Name</div>
                        </div>
                        <div className="posrel pair">
                            <div className="prf-adinfo" >{profile.email}</div>
                            <div className="prf-cat ellips">Email</div>
                        </div>
                        <div className="posrel pair">
                            <div className="prf-adinfo" >-</div>
                            <div className="prf-cat ellips">Work Phone</div>
                        </div>
                        <div className="posrel pair">
                            <div className="prf-adinfo" >{profile.phone_personal ?? "-"}</div>
                            <div className="prf-cat ellips">Personal Mobile</div>
                        </div>

                    </div>
                }</>
                }


                {profile && <div >
                    <div className="float zcl-btn zcl-btn--secondary " onClick={() => openChat(profile.user_id, "CHAT", [profile.user_id, user.user_id].sort().join(":"))}>
                        Chat with user
                    </div>

                </div>}
            </div>
        </div>
    </>
};
