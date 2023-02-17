import React, { useState, useEffect } from 'react';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AddMemberPopUp from '../ChannelComponents/AddMemberPopUp/AddMemberPopUp';
import { sendInvitation, getUserContacts, removeContact } from '../../api/contact/contact';
import ShowInfo from '../Organization/MemberList/ShowInfo';
import { toast } from 'react-toastify';

export default function PersonalChatHeader({ setActId, setWindow, chatInfo, setOpenStatus, bodyContent, setBodyContent }) {
    const [showMemList, setShowMemList] = useState(false);
    const [contactStatus, setContactStatus] = useState();
    const url = new URL(window.location);
    let params = new URLSearchParams(url.search);

    useEffect(() => {
        getContacts();
    }, [])
    const getContacts = async () => {
        const res = await getUserContacts();
        if (res.pendingInvites.find((invite) => invite.receiver.user_id === chatInfo.user_id)) {
            setContactStatus("PENDING");
        }
        else if (res.contacts.find((contact) => contact.user_id === chatInfo.user_id)) {
            setContactStatus("ACCEPTED");
        }
        else {
            setContactStatus("DECLINED");
        }
    }

    const handleDelete = async (id) => {
        const res = await removeContact(id);
        if (res) {
            toast.success("Invitation Deleted", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
            setContactStatus("DECLINED");
        }
        else {
            toast.error("Error, Try After Some times", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        }
    }

    const sentContactInvitation = async () => {
        const res = await sendInvitation(chatInfo.user_id);
        if (res) {
            toast.success("Invitation Sent", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
            setContactStatus("PENDING");
        }
        else {
            toast.error("Error, Try After Some times", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        }
    }

    return <>
        {chatInfo && <div className="chatHeader">
            <div className="chat-wrapper dflx" style={{ justifyContent: "space-between" }}>
                <div className=' dflx'>
                    <div className="chatIcon" style={{ cursor: "pointer" }} onClick={() => setOpenStatus(true)}>
                        <div className="chatIcon-wrapper" style={{ overflow: "hidden" }}>
                            <img width="100%" height="100%" src={chatInfo.mini_avatar_url?.includes("https") ? chatInfo.mini_avatar_url : process.env.REACT_APP_BUCKET_END_POINT + chatInfo.mini_avatar_url}></img>
                            {/* <Diversity3OutlinedIcon style={{ color: "#bfbfbf" }}></Diversity3OutlinedIcon> */}
                        </div>
                    </div>
                    <div className='chatInfo'>
                        <div className='dflx'>
                            <div className='' >{chatInfo?.first_name + " " + chatInfo.last_name ?? ""}</div>
                            {/* <div className='channelMem flexC' style={{ cursor: "pointer" }} onClick={() => setShowMemList(true)}>
                                <PersonOutlineOutlinedIcon style={{ fontSize: "18px", color: "#d6d6d6" }}></PersonOutlineOutlinedIcon> <span style={{ color: "#d6d6d6", paddingLeft: "2px", fontFamily: "zoho-puvi-regular" }}>{chatInfo?.members?.length}</span>
                            </div> */}
                        </div>


                        <div className='dflx opt cur' style={{ marginLeft: "0px", fontFamily: "zoho-puvi-regular", fontSize: "12px" }} >
                            {contactStatus && contactStatus === "ACCEPTED" && <div className='flexC' style={{ color: "red", textAlign: "center" }} onClick={() => handleDelete(chatInfo.user_id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                </svg>
                                <div style={{ color: "red", textAlign: "center", marginLeft: "3px" }}>Delete Contact</div>
                            </div>}
                            {contactStatus && contactStatus === "DECLINED" && <span onClick={sentContactInvitation}>+Add to Contact</span>}
                            {contactStatus && contactStatus === "PENDING" && "Invited"}
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
        </div>}
        {/* <div style={{ zIndex: "10000", position: "absolute", right: "0px" }}><ShowInfo userEmail={chatInfo.email}></ShowInfo></div> */}

    </>;
};
