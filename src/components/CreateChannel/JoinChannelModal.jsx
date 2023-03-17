import React, { useState, useEffect } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { getOrganizationChannels, joinChannel } from '../../api/Channel/Channel';
import CircleLoader from '../loaders/CircleLoader';
import moment from 'moment/moment';
import { toast } from 'react-toastify';
// import { query } from 'firebase/firestore';

export default function JoinChannelModal({ setShowJoinChannelModal, setStatus }) {
    const [channelList, setChannelList] = useState();
    const [query, setQuery] = useState();

    useEffect(() => {
        getChannelList("");
    }, [])

    const getChannelList = async (query) => {
        console.log("get channel list")
        const res = await getOrganizationChannels(query);
        setTimeout(() => setChannelList(res), 2000);
    }

    const joinOrgChannel = async (channel_id) => {
        const res = await joinChannel(channel_id);
        if (res) {
            toast.success("Joinned Successfully", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }
        else {
            toast.error("Error, Try After Sometime", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        }
        setShowJoinChannelModal(false);

    }

    const handleChange = (e) => {
        setQuery(e.target.value);
        setChannelList();
        getChannelList(e.target.value);


    }

    return <>
        <div className="CreateChannel">
            <div id="myModal" className="channelcreation-modal">
                <div className="channelcreation-modal-content">
                    <span id="winclose" className="cc-zchat-close cclose" onClick={() => setShowJoinChannelModal(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" style={{ marginTop: "10px" }} className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                        </svg>
                    </span>
                    <div className='modal-header dflx'>
                        <div className='headername flexC'>Channels  </div>
                        {/* <div className='' style={{ paddingLeft: "50px", paddingTop: "2px" }} >&#x3E;</div> */}
                        <div className='mL20 zcl-btn zcl-btn--primary' id="createchannel" tabIndex="7" style={{ cursor: "pointer", marginLeft: "auto", marginRight: "20px" }} onClick={() => { setStatus(true); setShowJoinChannelModal(false) }}>
                            Create Channel
                            {/* <LoadingButton
                                className='zcl-btn zcl-btn--primary'
                                color="success" variant="contained">
                                Create Channel
                            </LoadingButton> */}
                        </div>
                    </div>
                    {/* <div className='modal-header dflx'>
                        <div className='headername'>Channels  </div>
                        <div className='' style={{ paddingLeft: "5px", paddingTop: "2px" }} >&#x3E;</div>
                        <div className='chnName'>Create  Channel</div>
                    </div> */}
                    <div className='mTB10' style={{ color: "var(--color-lp1)", lineHeight: "24px", fontSize: "15px", marginRight: "20px" }}>
                        Prezz Channels are where conversations happen on any topic ranging from #engineering to #garage-bands. Join channels that interests you or simply create one!
                    </div>

                    <div id="channellistsearchholder" className=" fshrink mT16" style={{ padding: "20px 36px 20px 0px" }}>
                        <div className="zcl-search2">
                            <span className="zcf-search2 zcl-seach-icon">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </span>
                            <div className="zcl-search-input">
                                <input type="text" id="channelslistsearch" placeholder="Search" value={query} onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className='flexG ovyflwH mT12'>
                        <div className='channelRHS-list'>

                            {(!channelList && <span style={{ fontFamily: "zoho-puvi-semi-bold", fontSize: "15px" }}>Channels you can join</span>) || (channelList.length !== 0 && <span style={{ fontFamily: "zoho-puvi-semi-bold", fontSize: "15px" }}>Channels you can join</span>)}
                            {channelList ? channelList.length !== 0 ? channelList.map((channel, index) => {
                                return <div className="zcl-list-item large cur" style={{ width: "90%" }}>
                                    <div className="zcl-img lg flexM mR10">
                                        <div title="Organization Channel" className="msi-sc1 msci">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-diagram-2-fill" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 5 7h2.5V6A1.5 1.5 0 0 1 6 4.5v-1zm-3 8A1.5 1.5 0 0 1 4.5 10h1A1.5 1.5 0 0 1 7 11.5v1A1.5 1.5 0 0 1 5.5 14h-1A1.5 1.5 0 0 1 3 12.5v-1zm6 0a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 9 12.5v-1z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="posrel flexG ellips">
                                        <div className="fontB font14 ellips">
                                            <div className="zchnsrclft">#{channel.name}&nbsp;</div>
                                        </div>
                                        <div className="mT8 flexC">
                                            <span className="font13 clr-lp1">Active
                                                <span title={moment(channel.last_active).format("MMM DD, hh:mm A")} style={{ marginLeft: "5px" }}>{moment(channel.last_active).fromNow()} </span>
                                            </span>
                                            <span className="zcmemsts">
                                            </span>
                                            <div className="dIB  flexC" title="12 participants">
                                                <div className="zcf-guest clr-S font11 mR5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ color: "var(--color-lp1)" }} width="14" height="14" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                                                    </svg>
                                                </div>
                                                <div className="font12 clr-S flexC " style={{ alignItem: "center" }}>{channel.members.length}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fshrink mL20" >
                                        <span className="zcl-theme-link bold" purpose="join" onClick={() => { joinOrgChannel(channel._id) }}>Join</span>
                                    </div>
                                </div>
                            }) :
                                <div style={{ marginTop: "4rem", width: "100%", textAlign: "center" }}>
                                    <img width="10%" height="10%" src='https://static.zohocdn.com/chat/source/officechat/images/default/emptystate/noresults_channel.svg'></img>
                                    <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto", color: "#666", marginTop: "10px" }}>The channel you're looking for is not here. You can create one for the same and invite your colleagues to join</div>
                                </div>
                                : <CircleLoader></CircleLoader>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
};
