import React, { useState, useEffect } from 'react';
import Profile from './Profile';
import CommonChats from './CommonChats';

export default function ShowInfo({ setStatus }) {
    return <>
        <div id="peopleUserPreviewCnt" className="people-user-preview-cnt userdetail fdirC">
            <div id="peoplePreviewHdr" className="people-user-preview-hdr posrel flexC">
                <div id="peoplePreviewSubHdr" className="winheader zcl-hdrline"><span id="hdr60016689751" data-key="60016689751" elemtype="contact" purpose="search">Anush Kumar</span>
                    <div className='brdr'></div>
                </div>
                <div className="people-preview-close zcf-closeB zcl-icon--filled2" documentclick="closePeoplePreview" onClick={() => setStatus(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                </div>
            </div>
            <div id="peopleUserPreview" className="people-user-preview flexG">
                <div id="60016689751" className="hvprofileinfo" data-component="profileview">
                    <div className="zcbsprfl">
                        <div className="zcl-img zcl-img-type2 xxl cht-imgbdr mR25">
                            <img
                                src="https://contacts.zoho.in/file?ID=60016689751&amp;exp=6000&amp;t=user&amp;fs=thumb"
                                imgsrc="https://contacts.zoho.in/file?ID=60016689751&amp;exp=6000&amp;t=user&amp;fs=thumb"
                                documentclick="viewprofileimage"
                                uid="60016689751"
                            />
                            <div className="usrstatusbg"><div id="contactscode60016689751" scode="-1" className="usrstatus zcstatus--1"></div></div>
                        </div>
                        <div className="usrinfo ellips">
                            <span id="contactdname60016689751" className="flexC"><span className="ellips font18 bold">Anush Kumar</span><span id="checkin_status" uid="60016689751" className="font14 checkin_status zcpredot"></span></span>
                            <div id="contactmailid60016689751" className="mT8 ellips">
                                <div className="deptinfo lineN">
                                    <div id="deprt60016689751" className="posl ellips"></div>
                                    <div id="desig60016689751" className="posl deptinfo-desig mT10 ellips"></div>
                                </div>
                            </div>
                        </div>
                        <div id="media60016689751" className="mL12">
                            <div className="gsmediacon">
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
                                </div>
                                <div id="media" className="mR15 zcl-icon-xl zcl-icon--filled search-media-disp" media-disable="false" action="audiocall" documentclick="user-profile-actions" title="Audio Call" uid="60016689751">
                                    <div className="zcf-call" action="audiocall" documentclick="user-profile-actions" title="Audio Call" uid="60016689751"></div>
                                </div>
                                <div id="media" className="mR15 zcl-icon-xl zcl-icon--filled search-media-disp" media-disable="false" action="videocall" documentclick="user-profile-actions" title="Video Call" uid="60016689751">
                                    <div className="zcf-video" action="videocall" documentclick="user-profile-actions" title="Video Call" uid="60016689751"></div>
                                </div>
                                <div id="media" className="mR15 zcl-icon-xl zcl-icon--filled search-media-disp" action="startchat" documentclick="user-profile-actions" title="Send a direct message" uid="60016689751">
                                    <div className="zcf-chat" action="startchat" documentclick="user-profile-actions" title="Send a direct message" uid="60016689751"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hdroption flexC">
                        <div data-purpose="profile" data-index="0" className="curpage active">Profile</div>
                        <div data-purpose="chats" data-index="1" className="">Chats in Common</div>
                        <div data-purpose="calls" data-index="2" className="">Calls</div>
                    </div>

                    <div id="info60016689751" purpose="profile" className="zcadinfo ps-container ps-theme-default ps-active-y" data-ps-id="0608b67f-4b12-2bd5-5f45-a9ba079e1060"  >
                        <div style={{ height: "calc(100vh - 310px)", overflow: "auto" }}>

                            <Profile></Profile>
                        </div>
                    </div>
                    <div id="info60016689751" purpose="chats" className="zcadinfo ps-container ps-theme-default dN" data-ps-id="ea8ff9f9-c7af-8d20-213a-d797c638d85b">
                        <CommonChats></CommonChats>
                    </div>




                </div>
            </div>
        </div>
    </>
};
