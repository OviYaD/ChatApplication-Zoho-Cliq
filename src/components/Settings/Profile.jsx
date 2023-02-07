import React, { useState, useEffect } from 'react';
import "./Profile.scss"
import { Logout } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



export default function Profile({ setOpenStatus, setOpenPersonalizeStatus }) {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user)
    const navigate = useNavigate();
    const [profileInfo, setProfileInfo] = useState({});

    useEffect(() => {
        console.log("profile info", user);
        setProfileInfo(user);
    }, []);

    const Logout = () => {
        localStorage.removeItem('token');
        dispatch(removeUser());
        navigate('/signin', { replace: true });
    }




    return <>
        <div id="myModal" className="profile-modal">

            <div className="profile-modal-content" style={{ padding: "0px 0 0 0px" }}>
                <div style={{ height: "calc(100vh - 50px)", overflow: "auto" }}>
                    <div className="zc-usermenuheader">
                        <div purpose="closerhswin" className="msi-chtclose cur" onClick={() => setOpenStatus(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" style={{ marginTop: "10px" }} className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                            </svg>
                        </div>
                        <div className="cuserimg mrgT25 dIB posl">
                            <div className="usrimg" type="imgpreview">
                                <img id="userprofileimgview" src="https://contacts.zoho.in/file?ID=60016689094&nocache=1674451340247&t=user&fs=thumb" />
                            </div>
                            <input type="file" id="profilephotochange" name="photo" className="sendfile" accept="image/*" />
                            <span className="zuserimgchng msi-camera posa">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-camera-fill" style={{ marginTop: "-5px", marginLeft: "-2px", zIndex: "100" }} viewBox="0 0 16 16">
                                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                                </svg>
                            </span>
                        </div>
                        <div className="usrdetails ellips username bold" style={{ textTransform: "capitalize" }}>{`${profileInfo.first_name} ${profileInfo.last_name === null ? "" : profileInfo.last_name}`}</div>
                        <div className="ellips useremail" title="oviya.d@codingmart.com">{profileInfo.email}</div>
                        <div className="ellips font13 mrgT10 ">
                            <span className="mrgR5 myaccntlink hvrinfo"><a href="https://accounts.zoho.in" target="_blank">My Zoho Account</a></span><span className="dot">.</span>
                            <span documentclick="logout" type="button" className="signout hvrinfo cur mrgL5 " onClick={Logout}>Sign Out</span>
                        </div>
                        <div id="userstatusdetails" statuspickerdiv="" className="userstatusui flexC">
                            <div className="status-dropdown scodestatus dIB fshrink mR10 " id="statusoptionscont_userstatusdetails" showstatusoptions="">
                                <div currentscode="1" className="cur currentactivityprfl flexC pLR10" scode="3" style={{ paddingRight: "10px", paddingLeft: "10px" }}><span className="status zcstatus-3 dsinblk"></span><em className="zcf-downArrow font10 mL10 clr-icon2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16" style={{ color: "#000", paddingLeft: "10px" }}>
                                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </em></div>
                                <div id="statusoptions_userstatusdetails" className="scodeoptions font13 posa">
                                    <div scode="1" purpose="setscode" smsg="Available" className="cur profile-status-element flexC">
                                        <div className="profile-status-icon">
                                            <div className="statushoverbox hover-scode-1 flexM"><span className="status zcstatus-1"></span></div>
                                        </div>
                                        <div className="profile-status-message">
                                            <span className="flexC"><span className="font14 ellips clr-H flexG">Available</span></span>
                                        </div>
                                    </div>
                                    <div scode="7" purpose="setscode" smsg="Away" className="cur profile-status-element flex">
                                        <div className="profile-status-icon">
                                            <div className="statushoverbox hover-scode-7 flexM"><span className="status zcstatus-7">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" style={{ fontWeight: "600" }} viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                                </svg>
                                            </span></div>
                                        </div>
                                        <div className="profile-status-message">
                                            <span className="flexC"><span className="font14 ellips clr-H flexG">Away</span></span>
                                            <div className="mT5 font12 profile-status-desc clr-lp1">Let others know you are on a break. You will still receive notifications and calls.</div>
                                        </div>
                                    </div>
                                    <div scode="3" purpose="setscode" smsg="Busy" className="cur profile-status-element flex profile-current-status">
                                        <div className="profile-status-icon">
                                            <div className="statushoverbox hover-scode-3 flexM"><span className="status zcstatus-3"></span></div>
                                        </div>
                                        <div className="profile-status-message">
                                            <span className="flexC"><span className="font14 ellips clr-H flexG">Busy</span></span>
                                            <div className="mT5 font12 profile-status-desc clr-lp1">Let others know you're busy. All notification sounds will be turned off, but you'll still receive notification popups and calls.</div>
                                        </div>
                                    </div>
                                    <div scode="2" purpose="setscode" smsg="Invisible" className="cur profile-status-element flex">
                                        <div className="profile-status-icon">
                                            <div className="statushoverbox hover-scode-2 flexM"><span className="status zcstatus-2"></span></div>
                                        </div>
                                        <div className="profile-status-message">
                                            <span className="flexC"><span className="font14 ellips clr-H flexG">Invisible</span></span>
                                            <div className="mT5 font12 profile-status-desc clr-lp1">You'll appear to be offline, but you can still chat/call.</div>
                                        </div>
                                    </div>
                                    <div scode="5" purpose="setscode" smsg="Do not disturb" className="cur profile-status-element flex dnd-status-border">
                                        <div className="profile-status-icon">
                                            <div className="statushoverbox hover-scode-5 flexM"><span className="status zcstatus-5">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-slash" viewBox="0 0 16 16">
                                                    <path d="M5.164 14H15c-.299-.199-.557-.553-.78-1-.9-1.8-1.22-5.12-1.22-6 0-.264-.02-.523-.06-.776l-.938.938c.02.708.157 2.154.457 3.58.161.767.377 1.566.663 2.258H6.164l-1 1zm5.581-9.91a3.986 3.986 0 0 0-1.948-1.01L8 2.917l-.797.161A4.002 4.002 0 0 0 4 7c0 .628-.134 2.197-.459 3.742-.05.238-.105.479-.166.718l-1.653 1.653c.02-.037.04-.074.059-.113C2.679 11.2 3 7.88 3 7c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0c.942.19 1.788.645 2.457 1.284l-.707.707zM10 15a2 2 0 1 1-4 0h4zm-9.375.625a.53.53 0 0 0 .75.75l14.75-14.75a.53.53 0 0 0-.75-.75L.625 15.625z" />
                                                </svg>
                                            </span></div>
                                        </div>
                                        <div className="profile-status-message">
                                            <span className="flexC">
                                                <span className="font14 ellips clr-H flexG">Do not disturb</span><span purpose="gotoStatusSettingsFromDnd" className="zcf-setting zcl-icon-sm zcl-icon--plain dnd-settings" title="Go to DND Settings"></span>
                                            </span>
                                            <div className="mT5 font12 profile-status-desc clr-lp1">You won't receive chat pop-ups, sounds, calls etc.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div custstatusmsg="" className="status-dropdown statusmsg flexG flexC ">
                                <input stmsgeditor="" autoComplete="off" value="" /><span id="showcstmoptns_userstatusdetails" className="icnoptns zcf-downArrow clr-icon2 flexM font10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16" style={{ color: "#000", paddingLeft: "10px" }}>
                                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                    </svg>

                                </span>
                                <div id="statusmsgsugg_userstatusdetails" className="smsgoptions ps-container ps-theme-default ps-active-y" data-ps-id="27a1d8da-8f25-909b-f103-4113ebe001b4">
                                    <ul statusmsg="">
                                        <div className="flexC zcl-divider-from-title p10"><span className="clr-lp1 font12 fontI fontB">Default Status</span></div>
                                        <li scode="1" data-target="Available" className="cur"><span className="status zcstatus-1 dsinblk mrgR10"></span>Available</li>
                                        <li scode="7" data-target="Away" className="cur"><span className="status zcstatus-7 dsinblk mrgR10" style={{ position: "relative" }}>

                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" style={{ marginTop: "-5px", marginLeft: "-3px" }} height="16" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                                            </svg>
                                        </span>Available</li>
                                        <li scode="3" data-target="Busy" className="cur"><span className="status zcstatus-3 dsinblk mrgR10"></span>Busy</li>
                                        <li scode="2" data-target="Invisible" className="cur"><span className="status zcstatus-2 dsinblk mrgR10"></span>Invisible</li>
                                        <li scode="5" data-target="Do not disturb" className="cur "><span className="status zcstatus-5 dsinblk mrgR10">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-slash" style={{ marginTop: "-5px" }} viewBox="0 0 16 16">
                                                <path d="M5.164 14H15c-.299-.199-.557-.553-.78-1-.9-1.8-1.22-5.12-1.22-6 0-.264-.02-.523-.06-.776l-.938.938c.02.708.157 2.154.457 3.58.161.767.377 1.566.663 2.258H6.164l-1 1zm5.581-9.91a3.986 3.986 0 0 0-1.948-1.01L8 2.917l-.797.161A4.002 4.002 0 0 0 4 7c0 .628-.134 2.197-.459 3.742-.05.238-.105.479-.166.718l-1.653 1.653c.02-.037.04-.074.059-.113C2.679 11.2 3 7.88 3 7c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0c.942.19 1.788.645 2.457 1.284l-.707.707zM10 15a2 2 0 1 1-4 0h4zm-9.375.625a.53.53 0 0 0 .75.75l14.75-14.75a.53.53 0 0 0-.75-.75L.625 15.625z" />
                                            </svg>
                                        </span>Do not disturb</li>
                                        <div className="flexC zcl-divider-from-title p10"><span className="clr-lp1 font12 fontI fontB">Custom Status</span></div>
                                        <li data-target="In a Meeting" data-skey="" className="cur">
                                            <div className="wrd-wrp">In a Meeting</div>
                                            <span data-purpose="delete_status" data-skey="" className="status-del-icn flexM pL5 zcl-icon-sm font14 hide"><span className="zcf-delete2 zcl-icon--neg"></span></span>
                                        </li>
                                        <li data-target="Coffee break" data-skey="" className="cur">
                                            <div className="wrd-wrp">Coffee break</div>
                                            <span data-purpose="delete_status" data-skey="" className="status-del-icn flexM pL5 zcl-icon-sm font14 hide"><span className="zcf-delete2 zcl-icon--neg"></span></span>
                                        </li>
                                        <li data-target="Travelling" data-skey="" className="cur">
                                            <div className="wrd-wrp">Travelling</div>
                                            <span data-purpose="delete_status" data-skey="" className="status-del-icn flexM pL5 zcl-icon-sm font14 hide"><span className="zcf-delete2 zcl-icon--neg"></span></span>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div purpose="mycliq" className="zc-usersubsection">
                        <div className="pro-header">My Cliq</div>
                        <div className="options">
                            <div purpose="personalize" onClick={() => { setOpenPersonalizeStatus(true); setOpenStatus(false) }}>
                                <span className="zcf-personalise-settng"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
                                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                                </svg></span>
                                <span className="ellips" >Profile &amp; Settings</span>
                            </div>
                            <div purpose="internal_tools">
                                <span className="zcf-bot-thin">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-robot" viewBox="0 0 16 16">
                                        <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z" />
                                        <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z" />
                                    </svg>
                                </span>
                                <span className="ellips">Bots &amp; Tools</span>
                            </div>
                            <div purpose="manage_guests" className="posl">
                                <span className="zcf-guestconnect">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                    </svg>
                                </span>
                                <span className="ellips">Manage Guests</span>
                            </div>
                            <div purpose="showUserAttendance" className="userAttendanceRHSItem">
                                <span className="zcf-attendance">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar2" viewBox="0 0 16 16">
                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                                        <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
                                    </svg>
                                </span>
                                <span className="ellips">Attendance</span>
                            </div>
                            <div purpose="pendinginvites">
                                <span className="zcf-pendinginv">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                                    </svg>
                                </span>
                                <span className="ellips" title="Pending Invites">Pending Invites</span>
                            </div>
                        </div>
                    </div>
                    <div purpose="guide" className="zc-usersubsection userguide">
                        <div className="pro-header">Help</div>
                        <div className="options">
                            <div purpose="whatsnewlink">
                                <span className="msi-whatsnew">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gift" viewBox="0 0 16 16">
                                        <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z" />
                                    </svg>
                                </span>
                                <span className="ellips">What's New</span>
                            </div>
                            <div purpose="cliqresources">
                                <span className="msi-cliqresources">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-heading" viewBox="0 0 16 16">
                                        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                                        <path d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1z" />
                                    </svg>
                                </span>
                                <span className="ellips">Resources</span>
                            </div>
                            <div purpose="webinars">
                                <span className="msi-webinar">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera-reels" viewBox="0 0 16 16">
                                        <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" />
                                        <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z" />
                                        <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                    </svg>
                                </span>
                                <span className="ellips">Webinars</span>
                            </div>
                            <div purpose="keyboardshortcuts">
                                <span className="msi-keyboard">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-keyboard" viewBox="0 0 16 16">
                                        <path d="M14 5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12zM2 4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2z" />
                                        <path d="M13 10.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm0-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-5 0A.25.25 0 0 1 8.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 8 8.75v-.5zm2 0a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25v-.5zm1 2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-5-2A.25.25 0 0 1 6.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 6 8.75v-.5zm-2 0A.25.25 0 0 1 4.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 4 8.75v-.5zm-2 0A.25.25 0 0 1 2.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 2 8.75v-.5zm11-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-2 0a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-2 0A.25.25 0 0 1 9.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 9 6.75v-.5zm-2 0A.25.25 0 0 1 7.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 7 6.75v-.5zm-2 0A.25.25 0 0 1 5.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 5 6.75v-.5zm-3 0A.25.25 0 0 1 2.25 6h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5A.25.25 0 0 1 2 6.75v-.5zm0 4a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm2 0a.25.25 0 0 1 .25-.25h5.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-5.5a.25.25 0 0 1-.25-.25v-.5z" />
                                    </svg>
                                </span>
                                <span className="ellips">Shortcuts</span>
                            </div>
                            <div purpose="feedback">
                                <span className="msi-feedback">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                    </svg>
                                </span>
                                <span className="ellips">Send Feedback</span>
                            </div>
                            <div purpose="chatwithus">
                                <span className="msi-livechat">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tv" viewBox="0 0 16 16">
                                        <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z" />
                                    </svg>
                                </span>
                                <span className="ellips">Chat with us</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="zc-profilefootr" style={{ width: "25%" }}>
                <div purpose="cliqapps" className="zc-mycliqapps justifySB flexC">
                    <div className="mobileapps flexC">
                        <span className="font13">Mobile</span><a target="_blank" href="http://itunes.apple.com/app/id1056478397?ls=1&amp;mt=8" className="mR20"><span className="msi-macstore font18 tooltip-up posrel" tooltip-title="iOS">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-apple" viewBox="0 0 16 16">
                                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                            </svg>

                        </span></a>
                        <a target="_blank" href="http://play.google.com/store/apps/details?id=com.zoho.chat"><span className="msi-plystore font18 tooltip-up posrel" tooltip-title="Android">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google-play" viewBox="0 0 16 16">
                                <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586Zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295ZM1 13.396V2.603L6.846 8 1 13.396ZM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27Z" />
                            </svg>
                        </span></a>
                    </div>
                    <div className="desktopapps flexC">
                        <span className="font13">Desktop</span><a target="_blank" className="mR20" href="https://www.zoho.com/cliq/desktop/osx.html"><span className="msi-macstore font18 tooltip-up posrel" tooltip-title="Mac">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-apple" viewBox="0 0 16 16">
                                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                            </svg>
                        </span></a>
                        <a target="_blank" className="mR20" href="https://www.zoho.com/cliq/desktop/windows.html"><span className="msi-windws font18 tooltip-up posrel" tooltip-title="Windows">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-windows" viewBox="0 0 16 16">
                                <path d="M6.555 1.375 0 2.237v5.45h6.555V1.375zM0 13.795l6.555.933V8.313H0v5.482zm7.278-5.4.026 6.378L16 16V8.395H7.278zM16 0 7.33 1.244v6.414H16V0z" />
                            </svg>
                        </span></a>
                        <a target="_blank" className="sel" href="https://www.zoho.com/cliq/desktop/linux.html"><span className="zcf-linuxicon font18 tooltip-up posrel" tooltip-title="Linux"></span></a>
                    </div>
                </div>
            </div>

        </div>
    </>;
};
