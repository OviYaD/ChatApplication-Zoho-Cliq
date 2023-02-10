import React, { useState, useEffect } from 'react';
import { getStarredMessage } from '../../api/General/message';
import CircleLoader from '../loaders/CircleLoader';
import "./StarMessages.scss";
import moment from 'moment';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const starType = { "IMPORTANT": "type1", "TODO": "type2", "NOTE": "type3", "MANAGER": "type4", "FOLLOWUP": "type5" };


export default function StarMessages(params) {

    const [user, setUser] = useState();
    const [activeCat, setActiveCategory] = useState();
    const [starMessages, setStarMessages] = useState();
    const [messageToShow, setMsgToShow] = useState();

    const navigate = useNavigate();
    useEffect(() => {
        const getStarMsg = async () => {
            const res = await getStarredMessage();
            // console.log(res);
            setStarMessages(res);
            setActiveCategory("all");
            setMsgToShow(res);
        }
        getStarMsg();
        setUser(localStorage.getItem("!@#$%^&*(user_id)*&^%$#@!"));
    }, [])

    const filterCat = (type) => {
        if (type === "all") {
            setMsgToShow(starMessages)
        }
        else {
            setActiveCategory(type);
            setMsgToShow(starMessages.filter((msg, index) => {
                return msg.starred_by[0].message_type === type;
            }))
        }


    }
    return <>
        <div id="zcwindows" className="zcoverlay" style={{ zIndex: "20000" }}>
            <div id="participants" className="modalwindow zcl-win-modal1 zcalgncntr zcbg_mask" style={{ width: "100%", height: "100%" }}>
                <div style={{ height: "100%" }}>
                    <div className="mcontent zcrchmcnt" style={{ padding: "0px" }}>
                        <div className="zcl-win-modal1-hdr fshrink  flexC justifySB">
                            <div className="flexC">
                                <div className="font17 fontB ellips cur" style={{ fontFamily: "zoho-puvi-semi-bold", fontSize: "15px" }}>Star Messages</div>

                            </div>
                            <div id="starcatview" className="staroptnsbox src_tip zcl-tab font14 fontB">
                                <span category="0" selected="" className={`default ${activeCat === "all" && "star-opt-active"}`} onClick={() => filterCat("all")}>All</span>
                                <span category="1" className="msi-starsel type1" onClick={() => filterCat("IMPORTANT")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#f44b4b", marginRight: "4px" }} width="12" height="12" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    Important</span>
                                <span category="2" className={`msi-starsel ${activeCat === "important" && "star-opt-active"}`} onClick={() => filterCat("TODO")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#66c32d", marginRight: "4px" }} width="12" height="12" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    To-do</span>
                                <span category="3" className={`msi-starsel ${activeCat === "todo" && "star-opt-active"}`} onClick={() => filterCat("NOTE")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#ffae1e", marginRight: "4px" }} width="12" height="12" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    Note</span>
                                <span category="4" className={`msi-starsel ${activeCat === "note" && "star-opt-active"}`} onClick={() => filterCat("MANAGER")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#00cce6", marginRight: "4px" }} width="12" height="12" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>Manager</span>
                                <span category="5" className={`msi-starsel ${activeCat === "followup" && "star-opt-active"}`} onClick={() => filterCat("FOLLOWUP")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "#2F3BB9", marginRight: "4px" }} width="12" height="12" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>Follow-up</span>
                            </div>

                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-lg zcl-icon--filled2" viewBox="0 0 16 16" onClick={() => navigate(-1)}>
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                            </svg>
                        </div>
                        <div className='star-msg-content'>
                            {
                                messageToShow ? messageToShow.length === 0 ? <span style={{ textAlign: "center" }}>
                                    <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                        <div>
                                            <img style={{ width: "180", height: "130px" }} src='	https://static.zohocdn.com/chat/source/officechat/images/default/emptystate/nostarred_messages.svg'></img>

                                        </div>
                                        <div>
                                            <div class="zcempty-title font18">Its empty here. <br /> Just go ahead and star your messages under the label <b>{activeCat}</b></div>
                                        </div>
                                    </div>
                                </span> :
                                    messageToShow.map((msg, index) => {
                                        console.log(user, msg.sender.user_id)
                                        return <div className="strsmg" key={msg._id}>
                                            <div className="zcstrrow">
                                                <div className="usrimgsts floatl zc-1" style={{ backgroundColor: "black", borderRadius: "100%", overflow: "hidden" }}>
                                                    <img className="floatl rds4" title={`${msg.sender.first_name}`} src={msg.sender.mini_avatar_url} />
                                                </div>
                                                <div className="zcunrd-rht">
                                                    <div className="zcunrdlt-txt">
                                                        <span className="floatl ellips bold zcunrdtit">{msg.sender.user_id === user ? "You" : msg.sender.first_name + "" + msg.sender.last_name ?? ""}<span className="zcstarw">&nbsp;❭❭&nbsp;</span>
                                                            <span className="ellips bold zcunrdtit" holder="chattitle"> </span>{msg.is_private ? msg.receiver.user_id === user.user_id ? "You" : msg.receiver.first_name + "" + msg.receiver.last_name ?? "" : msg.channel.name}</span>
                                                        <span className="zcunrd-dt ellips"><span title="Yesterday, February 9" style={{ fontSize: "13px", fontFamily: "zoho-puvi-regular" }}>{moment(msg.created_at).isSame(moment(), 'day') ? "Today" : moment(msg.created_at).isSame(moment().subtract(1, 'days'), 'day') ? "Yesterday" : moment(msg.created_at).format("dddd, MMMM DD YYYY ")} {" " + moment(msg.created_at).format("hh:mm A")}</span></span>
                                                    </div>
                                                    <div id="starmessage1675966241731" chid="1264013913136366373" uid="60016689068_1675966241731" star="true" type="1" purpose="staroptions" className="msi-starsel type1 cur">
                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ marginRight: "4px" }} width="12" height="12" fill="currentColor" className={`bi bi-star-fill ${starType[msg.starred_by[0].message_type]}`} viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="strbmsg">{msg.content} </div>
                                        </div>
                                    }) : <CircleLoader></CircleLoader>
                            }

                        </div>



                    </div>
                </div>
            </div>
        </div>


    </>
};
