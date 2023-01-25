import React, { useState, useEffect } from 'react';
import "./MemberList.scss"
import InvitationModal from '../InvitationModal';
import ShowInfo from './ShowInfo';
import { getMember } from '../../../api/Organization/Organization';

export default function MemberList(params) {

    const [showInfo, setStatus] = useState(false);
    const [memList, setMemList] = useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        const getMemberList = async () => {
            const mems = await getMember();
            setMemList(mems);
        }
        getMemberList();
    }, [])
    return <>
        <div className="flex" style={{ backgroundColor: "#fff", width: "100%", borderRadius: "10px", marginLeft: "2px", marginRight: "8px", position: "relative" }}>
            <div className='wh100'>
                <div className="main-container-header ovrflwH fshrink people-cont-header">
                    <div className="w100 flex justifySB">
                        <div className="flexG flexC" >
                            <div className="flexC fshrink" style={{ lineHeight: "1" }}>
                                <div className="zcf-peopledirectory module-icn clr-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-journals" viewBox="0 0 16 16">
                                    <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" />
                                    <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" />
                                </svg></div>
                                <div className="font16 clr-H fontB" style={{ marginBottom: "2px" }}>People</div>
                            </div>
                            <div className="mLR30 flexG">
                                <div className="fshrink dflx">
                                    <div id="peoplesearchcont" className="zcl-search2" style={{ maxWidth: "45%", marginLeft: "25%" }}>
                                        <span className="zcf-search2 zcl-seach-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                            </svg>
                                        </span>
                                        <div className="zcl-search-input">
                                            <input type="text" id="user-search-field" placeholder="Search by name or email address" />
                                        </div>
                                    </div>
                                    <button className='invite-btn' onClick={handleOpen}>Invite</button>
                                    <InvitationModal open={open} handleClose={handleClose}></InvitationModal>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="people_listview flexC" zc_sticky_title_list="" className="flexG ovrflwA user-card-container">
                    <div className="flex flexW listview"  >
                        {memList.map((mem, index) => {
                            return <div uid={mem.id} key={index} type="user" className="user-card-item" documentclick="viewUserProfile" data-peoplepreview="" onClick={() => setStatus(true)}>
                                <div className="flex fdirC">
                                    <div className="user-card-image">
                                        <div id="imgcontainer" className="flexM curP" uid="60016689751" imgsrc="https://contacts.zoho.in/file?ID=60016689751&amp;exp=6000&amp;t=user&amp;fs=thumb">
                                            <img style={{ height: "110px" }} src={mem.profile.mini_avatar_url !== null ? mem.profile.mini_avatar_url : "https://contacts.zoho.in/file?ID=60016688887&exp=6000&t=user&fs=thumb"} /><span id="time" className="zchvrtm dN">11:43 PM</span>
                                        </div>
                                    </div>
                                    <div className="user-card-pinfo">
                                        <div className="flex fdirC">
                                            <div className="user-personal">
                                                <div className="flexC font15 line20 posrel">
                                                    <span id="status" className="usrstatus zcstatus--1 fshrink"></span>
                                                    <span className="ellips fontB clr-M">{mem.profile.first_name}</span>
                                                    <span id="checkin_status" uid="60016689751" className="font14 checkin_status zcpredot fshrink"></span>
                                                </div>
                                                <div className="mT3 font14 line18 clr-S ellips"><a className="clr-S" href="mailto:anush.kumar@codingmart.com">{mem.email}</a></div>
                                            </div>
                                            <div className="mT15 font14 clr-lp1 line18">
                                                <div className="ellips"></div>
                                                <div className="ellips mT3"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="user-card-actions-band">
                                        <div className="flexC " style={{ margin: "auto" }}>
                                            <div className="user-card-action-icn zcl-icon zcl-icon--default zcf-call" uid="60016689751" documentclick="makeGlobalAudioCall" data-peoplepreview="">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                                </svg>
                                            </div>
                                            <div className="user-card-action-icn zcl-icon zcl-icon--default zcf-video" uid="60016689751" documentclick="makeGlobalVideoCall" data-peoplepreview="">
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
                                            <div className="user-card-action-icn zcl-icon zcl-icon--default zcf-info font11 fontB" uid="60016689751" documentclick="viewUserProfile" data-peoplepreview="">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-lg" viewBox="0 0 16 16">
                                                    <path d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704l1.323-6.208Zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0Z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}

                    </div>

                </div>
            </div>
            {showInfo && <ShowInfo setStatus={setStatus}></ShowInfo>}

        </div>
    </>;
};
