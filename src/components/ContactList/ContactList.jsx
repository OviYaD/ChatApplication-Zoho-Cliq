import React, { useState, useEffect } from 'react';
import { getUserContacts, declineInvite, acceptInvite } from '../../api/contact/contact';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export default function ContactList(params) {
    const [contactList, setContactList] = useState();
    const [invites, setInvites] = useState();
    const user = useSelector((state) => state.user);

    useEffect(() => {
        getContacts();
    }, [])

    const getContacts = async () => {
        const res = await getUserContacts();
        setContactList(res.contacts);
        setInvites(res.invites);
    }
    const handleDecline = async (id) => {
        const res = await declineInvite(id);
        if (res) {
            toast.success("Invite has been Declined", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
            setInvites((invites) => invites.filter((invite) => invite._id !== id));
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

    const handleAccept = async (id) => {
        const res = await acceptInvite(id);
        if (res) {
            toast.success("Invitation Accepted", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
            getContacts();
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
        <div className="flexG flex-col h100 ovrflwH app-submodule-nav">
            <div className="flexG h100 flex-col mychats">

                <div className="flexG ovrflwA pb5 overflow-controls">

                    <div id="pinnedChats" >
                        {invites?.length === 0 && contactList?.length === 0 && <div className='dflx justifySB heading '>
                            <span className="  ellips ">No Contacts Found</span>
                        </div>}
                        {invites && invites.length > 0 &&
                            <><div className='dflx justifySB heading '>
                                <span className=" font17 ellips ">Contact Invites</span>
                            </div>
                                <div className='chatList'>
                                    {invites.map((invite) => {
                                        return <div key={invite._id} className={`dflx list `} style={{ position: "relative", paddingLeft: "0.9rem", paddingRight: "0px" }}>

                                            <span className=' flexC' style={{ width: "30px", height: "30px", borderRadius: "100%", overflow: "hidden", marginLeft: "0px" }}>
                                                <img width="100%" height="100%" src={invite.sender.mini_avatar_url.includes("https") ? invite.sender.mini_avatar_url : process.env.REACT_APP_BUCKET_END_POINT + invite.sender.mini_avatar_url}></img>
                                            </span>
                                            <span className=' ellips flexC' style={{ minWidth: "30px", maxWidth: "100px", paddingLeft: "0.5rem" }}> {invite.sender.first_name + " " + invite.sender.last_name}</span>
                                            <div className='flexC' style={{ position: "absolute", right: "10px" }}>
                                                <span className='flexC' style={{ backgroundColor: "rgba(84,217,196,0.2)", width: "30px", height: "30px", borderRadius: "100%", textAlign: "center" }} onClick={() => handleAccept(invite._id)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(60,189,168)", marginLeft: "auto", marginRight: "auto" }} width="16" height="16" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
                                                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                                    </svg>
                                                </span>
                                                <span className='flexC' style={{ textAlign: "center" }} onClick={() => handleDecline(invite._id)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16" >
                                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                                    </svg>
                                                </span>
                                            </div>
                                            {/* <ProfileInfoPopUp chatInfo={chats}></ProfileInfoPopUp> */}
                                        </div>
                                    })}

                                </div>
                            </>
                        }
                    </div>

                    <div id="pinnedChats" >
                        {contactList && contactList.length > 0 &&
                            <><div className='dflx justifySB heading '>
                                <span className=" font17 ellips ">Contacts</span>
                            </div>
                                <div className='chatList'>
                                    {contactList.map((contact) => {
                                        return <div key={contact._id} className={`dflx list `} style={{ position: "relative", paddingLeft: "0.9rem", paddingRight: "0px" }}>

                                            <span className=' flexC' style={{ width: "30px", height: "30px", borderRadius: "100%", overflow: "hidden", marginLeft: "0px" }}>
                                                <img width="100%" height="100%" src={contact.mini_avatar_url.includes("https") ? contact.mini_avatar_url : process.env.REACT_APP_BUCKET_END_POINT + contact.mini_avatar_url}></img>
                                            </span>
                                            <span className=' ellips flexC' style={{ minWidth: "30px", maxWidth: "100px", paddingLeft: "0.5rem" }}> {contact.first_name + " " + contact.last_name}</span>

                                            {/* <ProfileInfoPopUp chatInfo={chats}></ProfileInfoPopUp> */}
                                        </div>
                                    })}

                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
};
