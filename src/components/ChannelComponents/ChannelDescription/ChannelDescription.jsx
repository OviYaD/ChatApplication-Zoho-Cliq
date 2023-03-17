import React, { useState } from 'react';
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import './ChannelDescription.scss'
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import Connector from './Connector';
import Permissions from './Permissions';
import moment from 'moment/moment';
import { useSelector } from 'react-redux';
import { leaveChannel } from '../../../api/Channel/Channel';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function ChannelDescription({ setEditOpenStatus, socket, setOpenStatus, chatInfo = { name: "prezz" } }) {
    const [viewOption, setViewOption] = useState(1);
    const user = useSelector((state) => state.user);
    const url = new URL(window.location);
    const navigate = useNavigate();


    const handleLeaveChannel = async () => {
        const res = await leaveChannel({ channel_id: chatInfo._id });
        if (res) {
            setOpenStatus(false)
            url.searchParams.delete('chat');
            url.searchParams.delete('channel');
            toast.success("You Left the Channel", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
            window.location.reload();
            navigate("/main");

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
        <div id="myModal" className="channel-modal">

            <div className="channel-modal-content">
                <span className="zchat-close cclose" onClick={() => setOpenStatus(false)} style={{ width: "38px", height: "38px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" style={{ marginTop: "10px" }} className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                </span>
                <div className='modal-header dflx'>
                    <div className='headername'>Channels  </div>
                    <div className='' style={{ paddingLeft: "50px", paddingTop: "2px" }} >&#x3E;</div>
                    <div className='chnName'>#{chatInfo.name}</div>
                </div>
                <div className='chnInfo dflx'>
                    <div className='chatIcon'>
                        <div className='chatIcon-wrapper'>
                            <Diversity3OutlinedIcon style={{ color: "#bfbfbf" }}></Diversity3OutlinedIcon>
                        </div>
                    </div>
                    <div className="desc">
                        <div className='dflx justifySB ' >
                            <div>
                                <div style={{ fontFamily: "zoho-puvi-semi-bold" }}>#{chatInfo.name}</div>
                                <div className='caption'>We are coming for Prezz's head</div>
                            </div>
                            <div className='dflx'>
                                <div className='desc-icon flexC cur'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-link-45deg" style={{ margin: "auto" }} viewBox="0 0 16 16">
                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                    </svg>
                                </div>
                                <div className='desc-icon flexC cur' onClick={() => { setEditOpenStatus(true); setOpenStatus(false) }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" style={{ margin: "auto" }} viewBox="0 0 16 16">
                                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                        <div className='auth-Info dflx justifySB'>

                            <div className=' dflx justifySB'>
                                <div className='name ellips' style={{ maxWidth: "230px" }}> Created By<span id="owner_name" className="per-name ellips">{user.user_id === chatInfo.owner?.user_id ? "You" : `${chatInfo.owner.first_name} ${chatInfo.owner.last_name === null ? "" : chatInfo.owner.last_name}`}</span></div>
                                <Tooltip
                                    anchorId="owner_name"
                                    place="bottom"
                                    content={`${chatInfo.owner?.first_name} ${chatInfo.owner?.last_name === null ? "" : chatInfo.owner?.last_name}`}
                                />
                                <div>
                                    <span className="font12 mL10 clr-lp1 flexC"><span className="zcl-dot mR5 "></span><span className="diB"><span title="Wednesday, January 4 , 12:01 PM">{moment(chatInfo.created_at).fromNow()}</span></span></span>
                                </div>
                                {/* <div className='authInfo-menu flexC'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" style={{ margin: "auto" }} viewBox="0 0 16 16">
                                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                    </svg>
                                </div> */}
                            </div>
                            <div className='' style={{ width: "50%" }}>
                                <button className="leave cur"><span style={{ margin: "auto" }} onClick={handleLeaveChannel}>Leave</span></button>
                                <button className="continue "><span style={{ margin: "auto" }}>Continue</span></button>
                            </div>

                        </div>

                        {/* <div className='auth-Info dflx'>
                            <div className='name'> Created By <span className="per-name"></span></div>
                            <div>
                                <span className="font12 mL10 clr-lp1 flexC"><span className="zcl-dot mR5 "></span><span className="diB"><span title="Wednesday, January 4 , 12:01 PM">14 days ago</span></span></span>
                            </div>
                            <div className='authInfo-menu flexC'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" style={{ margin: "auto" }} viewBox="0 0 16 16">
                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                </svg>
                            </div>
                            <button className="leave flexC"><span style={{ margin: "auto" }}>Leave</span></button>
                            <button className="continue flexC"><span style={{ margin: "auto" }}>Continue</span></button>

                        </div> */}
                    </div>
                </div>
                <div className="viewoptions">
                    <div className='optioncontent'>
                        <div className={`recentConvo ${viewOption === 1 && "active"}`} onClick={() => setViewOption(1)}> Recent Conversations</div>
                        <div className={`permissions ${viewOption === 2 && "active"}`} onClick={() => setViewOption(2)}> Permissions</div>
                        <div className={`connectors ${viewOption === 3 && "active"}`} onClick={() => setViewOption(3)}> Connectors</div>
                    </div>
                </div>
                <div className='chatbody'>
                    {viewOption === 1 && ""}
                    {viewOption === 2 && <Permissions socket={socket} chatInfo={chatInfo}></Permissions>}
                    {viewOption === 3 && <Connector></Connector>}
                </div>

            </div>


        </div>


    </>;
};
