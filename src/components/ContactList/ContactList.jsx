import React, { useState, useEffect } from 'react';
import { getUserContacts } from '../../api/contact/contact';
import { useSelector } from 'react-redux';

export default function ContactList(params) {
    const [contactList, setContactList] = useState();
    const user = useSelector((state) => state.user);

    useEffect(() => {
        const getContacts = async () => {
            await getUserContacts();
        }
    })

    return <>
        <div className="flexG flex-col h100 ovrflwH app-submodule-nav">
            <div className="flexG h100 flex-col mychats">

                <div className="flexG ovrflwA pb5 overflow-controls">

                    <div id="pinnedChats" >
                        <div className='dflx justifySB heading '>
                            <span className=" font17 ellips ">Contacts</span>
                        </div>
                        <div className='chatList'>
                            <div className={`dflx list `} style={{ position: "relative", paddingLeft: "0.9rem", paddingRight: "0px" }}>

                                <span className=' flexC' style={{ width: "30px", height: "30px", borderRadius: "100%", overflow: "hidden", marginLeft: "0px" }}>
                                    <img width="100%" height="100%" src='https://contacts.zoho.in/file?fs=thumb&nocache=1676568420755'></img>
                                </span>
                                <span className=' ellips flexC' style={{ minWidth: "30px", maxWidth: "100px", paddingLeft: "0.5rem" }}> {user.first_name + " " + user.last_name}</span>
                                <div className='flexC' style={{ position: "absolute", right: "10px" }}>
                                    <span className='flexC' style={{ backgroundColor: "rgba(84,217,196,0.2)", width: "30px", height: "30px", borderRadius: "100%", textAlign: "center" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(60,189,168)", marginLeft: "auto", marginRight: "auto" }} width="16" height="16" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
                                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                    </span>
                                    <span className='flexC' style={{ textAlign: "center" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                        </svg>
                                    </span>
                                </div>
                                {/* <ProfileInfoPopUp chatInfo={chats}></ProfileInfoPopUp> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
};
