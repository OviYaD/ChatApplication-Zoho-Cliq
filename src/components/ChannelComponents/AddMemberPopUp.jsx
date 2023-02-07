import React, { useState, useEffect } from 'react';
import "./AddMemberPopUp.scss";
import { useSelector } from 'react-redux';
import { getMembers, addMembers } from '../../api/Channel/Channel';

export default function AddMemberPopUp({ chatInfo, setShowMemList }) {

    const user = useSelector((state) => state.user)
    const [superUsers, setSuperUsers] = useState([]);
    const [channelAdmins, setChannelAdmins] = useState([]);
    const [channelMembers, setChannelMembers] = useState([]);
    const [moderators, setModerators] = useState([]);
    const [members, setMembers] = useState([])
    const [searchInp, setSearchInp] = useState("");
    const [selectedMembers, setSelectedMembers] = useState([]);

    const [addMem, setAddMem] = useState();

    useEffect(() => {
        console.log("chat informations..", chatInfo);
        setSuperUsers(chatInfo.members.filter((mem) => {
            return mem.role === "SUPERUSER";
        }));
        setChannelMembers(chatInfo.members.filter((mem) => {
            return mem.role === "MEMBER";
        }))
        setChannelAdmins(chatInfo.members.filter((mem) => {
            return mem.role === "ADMIN"
        }))
        setModerators(chatInfo.members.filter((mem) => {
            return mem.role === "MODERATOR"
        }))

    }, []);

    const fetchMembers = async (data = "", memberList = []) => {
        const res = await getMembers({ query: data, channel_id: chatInfo._id, excludeMembers: memberList });
        console.log(res);
        setMembers(res);
    }

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInp(e.target.value);
        fetchMembers(e.target.value);
    }

    const addParticipants = (data) => {
        console.log(data);
        setSelectedMembers((selectedMembers) => [...selectedMembers, data]);
        fetchMembers("", members.map((mem) => mem.id));
    }

    const addChannelMembers = async () => {
        const res = await addMembers({ "channel_id": chatInfo._id, "users": selectedMembers.map((member) => member.id) });
        setShowMemList(false);

    }

    // const categorize = (list) => {
    //     setSuperAdmins(() => list.filter((mem) => {
    //         return true;
    //     }))
    // }

    return <>
        <div id="zcwindows" className="zcoverlay" style={{ zIndex: "20000" }}>
            <div id="participants" className="modalwindow zcl-win-modal1 zcalgncntr zcbg_mask">
                <div>
                    <div className="mcontent zcrchmcnt" style={{ width: "500px", padding: "0px" }}>
                        <div className="zcl-win-modal1-hdr fshrink  flexC justifySB">
                            <div className="flexC">
                                <div className="font17 fontB ellips cur" onClick={() => setAddMem(false)}>#Prezz</div>
                                {addMem && <div className='flexC'>
                                    <span className="mLR5 font17 clr-S__dark"> &gt; </span>
                                    <div style={{ fontFamily: "zoho-puvi-semi-bold" }}>Add Participants</div>
                                </div>}
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-lg zcl-icon--filled2" viewBox="0 0 16 16" onClick={() => setShowMemList(false)}>
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                            </svg>
                        </div>
                        <div className="zcl-win-modal1-srch fshrink flexC">
                            <div className="zcl-search2">
                                <span className="zcf-search2 zcl-seach-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </span>
                                <div className="zcl-search-input">
                                    <input type="text" id="participants-usersuggest-search-field" placeholder="Search by name or email address" onChange={handleChange} name="search" value={searchInp} />
                                </div>
                            </div>
                        </div>
                        {!addMem && <div className="add-parti-item flexC curP" onClick={() => { setAddMem(true); fetchMembers() }}>
                            <div className="mR12 add-parti-btn flexM zcf-plusB">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16" style={{ fontWeight: "600" }}>
                                    <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                </svg>
                            </div>
                            <div className="font15 fontB clr-theme">Add Participants</div>
                        </div>}
                        {!addMem && <div className="zcrchtlt flex-col">
                            <div
                                className="flexG zcteammember-list posl ps-container ps-theme-default ps-active-y">
                                <div id="participants" style={{ overflow: "auto", height: "100%", overflowX: "hidden", scrollBehavior: "smooth" }}>
                                    {superUsers.length > 0 && <div className=" stickytitle zcl-win-subcategory dN" style={{ position: "sticky", top: "0px", zIndex: "1000" }}>Super Admin</div>}
                                    {superUsers.length > 0 && superUsers.map((mem, index) => {
                                        return <div key={mem._id} uid={mem._id} className="zcl-win-modal1-item">
                                            <div className="fshrink posrel contct-img bdrR100">
                                                <img className="w100 h100 bdrR100" src={mem.user?.mini_avatar_url || ""} style={{ background: "transparent" }} />
                                            </div>
                                            <div className="mL12 flexG ellips">
                                                <div className="flexC">
                                                    <div className="font15 clr-M curP dIB ellips">{mem.user?.user_id === user.id ? "You" : mem.user?.first_name + " " + mem.user?.last_name}</div>
                                                </div>
                                                <div className="ellips clr-lp1 font13 mT3">
                                                    <a href="">{mem.user?.email}</a>
                                                </div>
                                            </div>
                                        </div>
                                    })}
                                    {channelAdmins.length > 0 && <div className="zcl-win-subcategory" style={{ position: "sticky", top: "0px", zIndex: "1000" }}>Channel Admin</div>}
                                    {channelAdmins.length > 0 && channelAdmins.map((mem) => {
                                        return <div key={mem._id} uid={mem._id} className="zcl-win-modal1-item">
                                            <div className="fshrink posrel contct-img bdrR100">
                                                <img className="w100 h100 bdrR100" src={mem.user?.mini_avatar_url || ""} style={{ background: "transparent" }} />
                                            </div>
                                            <div className="mL12 flexG ellips">
                                                <div className="flexC">
                                                    <div className="font15 clr-M curP dIB ellips">{mem.user?.user_id === user.id ? "You" : mem.user?.first_name + " " + mem.user?.last_name}</div>
                                                </div>
                                                <div className="ellips clr-lp1 font13 mT3">
                                                    <a href="">{mem.user?.email}</a>
                                                </div>
                                            </div>
                                            <span id="rolechange60016689060" uid="60016689060" className="rolechange-icn mL12 zcl-icon zcl-icon--plain zcf-moreV" purpose="changerole" currentrole="1" sameorguser="true">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                </svg>
                                                <div className='zcl-menu-wrap '>
                                                    <div>Assign as moderators</div>
                                                </div>
                                            </span>
                                        </div>
                                    })}
                                    {moderators.length > 0 && <div className="zcl-win-subcategory" style={{ position: "sticky", top: "0px", zIndex: "1000" }}>Moderators</div>}
                                    {moderators.length > 0 && moderators.map((mem) => {
                                        return <div key={mem._id} uid={mem._id} className="zcl-win-modal1-item">
                                            <div className="fshrink posrel contct-img bdrR100">
                                                <img className="w100 h100 bdrR100" src={mem.user?.mini_avatar_url} style={{ background: "transparent" }} />
                                            </div>
                                            <div className="mL12 flexG ellips">
                                                <div className="flexC">
                                                    <div className="font15 clr-M curP dIB ellips">{mem.user?.user_id === user.id ? "You" : mem.user?.first_name + " " + mem.user?.last_name}</div>
                                                </div>
                                                <div className="ellips clr-lp1 font13 mT3">
                                                    <a href="">{mem.user?.email}</a>
                                                </div>
                                            </div>
                                            <span id="rolechange60016689060" uid="60016689060" className="rolechange-icn mL12 zcl-icon zcl-icon--plain zcf-moreV" purpose="changerole" currentrole="1" sameorguser="true">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                </svg>
                                            </span>
                                        </div>
                                    })}
                                    {channelMembers.length > 0 && <div className="zcl-win-subcategory" style={{ position: "sticky", top: "0px", zIndex: "1000" }}>Members</div>}
                                    {channelMembers.length > 0 && channelMembers.map((mem) => {
                                        console.log(mem)
                                        return <div key={mem._id} uid={mem._id} className="zcl-win-modal1-item">
                                            <div className="fshrink posrel contct-img bdrR100">
                                                <img className="w100 h100 bdrR100" src={mem.user?.mini_avatar_url} style={{ background: "transparent" }} />
                                            </div>
                                            <div className="mL12 flexG ellips">
                                                <div className="flexC">
                                                    <div className="font15 clr-M curP dIB ellips">{mem.user?.user_id === user.id ? "You" : mem.user?.first_name + " " + mem.user?.last_name}</div>
                                                </div>
                                                <div className="ellips clr-lp1 font13 mT3">
                                                    <a href="">{mem.user?.email}</a>
                                                </div>
                                            </div>
                                            <span id="rolechange60016689060" uid="60016689060" className="tooltip rolechange-icn mL12 zcl-icon zcl-icon--plain zcf-moreV" purpose="changerole" currentrole="1" sameorguser="true">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                                </svg>
                                                <div className='zcl-menu-wrap '>
                                                    <div className='ellips zcl-menu-item'>Assign as moderators</div>
                                                    <div className='ellips zcl-menu-item'>Assign as moderators</div>
                                                    <div className='ellips zcl-menu-item'>Assign as moderators</div>
                                                    <div className='ellips zcl-menu-item'>Assign as moderators</div>
                                                    <div className='ellips zcl-menu-item remove'>Remove</div>

                                                </div>
                                            </span>
                                        </div>
                                    })}

                                </div>
                            </div>
                        </div>}
                        {addMem && <div className="zcrchtlt flex-col">
                            <div
                                className="flexG zcteammember-list posl ps-container ps-theme-default ps-active-y">
                                <div id="participants" style={{ overflow: "auto", height: "100%", overflowX: "hidden", scrollBehavior: "smooth" }}>
                                    {members.length <= 0 && <p style={{ textAlign: "center", color: "gray" }}>No user Found</p>}
                                    {members && members.map((mem) => {
                                        return <div uid={mem.id} key={mem.id} className="zcl-win-modal1-item" onClick={() => addParticipants(mem)}>
                                            <div className="fshrink posrel contct-img bdrR100">
                                                <img className="w100 h100 bdrR100" src={mem.profile.mini_avatar_url} style={{ background: "transparent" }} />
                                            </div>
                                            <div className="mL12 flexG ellips">
                                                <div className="flexC"><div className="font15 clr-M curP dIB ellips">{user.id === mem.id ? "You" : mem.profile.first_name + " " + mem.profile.last_name}</div></div>
                                                <div className="ellips clr-lp1 font13 mT3">{mem.email}</div>
                                            </div>

                                        </div>
                                    })}
                                    {selectedMembers.length > 0 &&
                                        <div className='flexC justifySB' style={{ position: "absolute", bottom: "0" }}>
                                            {selectedMembers.map((mem) => {
                                                return <div key={mem.id} className="zcl-win-modal1-footr fshrink">
                                                    <div className="w100 justifySB flexC footr-padding">
                                                        <div id="participantsnodecnt" className="zcrchicnt flexG">
                                                            <div id="addparticipants-usersuggest-select-field" contenteditable="false" className="">
                                                                <div uid="60016689064" className="dIB zcricnt posl" title={mem.profile.first_name + " " + mem.profile.last_name}>
                                                                    <img src={mem.profile.mini_avatar_url} />
                                                                    <div className="zcf-close " purpose="deleteimgnode">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16" style={{ color: "white" }}>
                                                                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="addparticipantsbtn" className="fshrink mL15 zcl-btn-sm zcl-btn--primary">Add</div>
                                                    </div>
                                                </div>
                                            })}
                                            <button className="btn btn-primary" style={{ marginLeft: "0%" }} onClick={addChannelMembers}>Add</button>
                                        </div>}

                                </div>
                            </div>
                        </div>}

                    </div>
                </div>
            </div>
        </div>


    </>
};
