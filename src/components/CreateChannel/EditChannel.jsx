import React, { useState, useEffect } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Switch from '@mui/material/Switch';
import { editChannel } from '../../api/Channel/Channel';
import { toast } from 'react-toastify';

export default function EditChannel({ setEditOpenStatus, socket, setOpenStatus, chatInfo }) {
    const [loading, setLoading] = useState(false);
    const [visibility, setVisibility] = useState(false);
    const [chnType, setChnType] = useState();
    const [channelName, setChannelName] = useState();
    const [chnDes, setChnDes] = useState();
    const [error, setError] = useState({ type: false, name: false });
    const [file, setFile] = useState();
    const [profile, setProfile] = useState();

    useEffect(() => {
        setChannelName(chatInfo.name)
        setChnType(chatInfo.type);
        setChnDes(chatInfo.description);
        if (chatInfo.type === "PUBLIC") {
            setVisibility(chatInfo.visibility)
        }
        setProfile(chatInfo.image_url?.includes("https") ? chatInfo.image_url : process.env.REACT_APP_BUCKET_END_POINT + chatInfo.image_url)
    }, [])


    const handleChange = (e) => {
        if (e.target.name === "name") {
            setChannelName(e.target.value);
        }
        else if (e.target.name === "desc") {
            setChnDes(e.target.value);
        }
    }
    const handleAddProfile = (e) => {

        setFile(e.target.files[0])
        setProfile(URL.createObjectURL(e.target.files[0]))
    }

    const handleEditChannel = async () => {
        setLoading(true);
        if (!channelName) {
            setError({ type: false, name: true });
            setLoading(false);
            return;
        }
        const formData = new FormData();
        formData.append("file", file);
        formData.append("data", JSON.stringify({ name: channelName, description: chnDes, visibility }))
        const res = await editChannel(formData, chatInfo._id);
        if (res) {
            toast.success("Edited Successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            setEditOpenStatus(false);
            window.location.reload();

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
        setLoading(false);

    }

    return <>
        <div id="myModal" className="channelcreation-modal">
            <div className="channelcreation-modal-content">
                <span id="winclose" className="cc-zchat-close cclose" title="Close [Esc]" onClick={() => { setEditOpenStatus(false); setOpenStatus(true) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" style={{ marginTop: "10px" }} className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                </span>
                <div className='modal-header dflx'>
                    <div className='headername flexC'>Channels  </div>
                    <div className='' style={{ paddingLeft: "50px", paddingTop: "2px" }} >&#x3E;</div>
                    <div className='chnName '>#{channelName}</div>
                    <div className='' style={{ paddingLeft: "10px", paddingTop: "2px" }} >&#x3E;</div>
                    <div className='chnName '>Edit Channel</div>
                </div>
                {/* <div className='modal-header dflx'>
                        <div className='headername'>Channels  </div>
                        <div className='' style={{ paddingLeft: "5px", paddingTop: "2px" }} >&#x3E;</div>
                        <div className='chnName'>Create  Channel</div>
                    </div> */}
                <div className='mTB10' style={{ color: "var(--color-lp1)", lineHeight: "24px", fontSize: "15px", marginRight: "20px" }}>
                    Channels are meant for enhanced collaboration across your organization. You can create channels for the entire organization, your team or across multiple teams.
                </div>
                <div style={{ backgroundColor: "#fff", height: "100vh" }}>
                    <div className='collectDetails'>
                        <div className="chnLevel">
                            <div className='flexC' style={{ marginTop: "30px", justifyContent: "center" }}>
                                <button className={`org-btn disabled ${chnType === "PUBLIC" && "btn-active"}`} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-people-fill" style={{ marginRight: "5px", marginLeft: "5px" }} viewBox="0 0 16 16">
                                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                                    </svg>Organization
                                </button>
                                <button className={`org-btn disabled ${chnType === "PRIVATE" && "btn-active"}`}  >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-incognito" style={{ marginRight: "5px" }} viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="m4.736 1.968-.892 3.269-.014.058C2.113 5.568 1 6.006 1 6.5 1 7.328 4.134 8 8 8s7-.672 7-1.5c0-.494-1.113-.932-2.83-1.205a1.032 1.032 0 0 0-.014-.058l-.892-3.27c-.146-.533-.698-.849-1.239-.734C9.411 1.363 8.62 1.5 8 1.5c-.62 0-1.411-.136-2.025-.267-.541-.115-1.093.2-1.239.735Zm.015 3.867a.25.25 0 0 1 .274-.224c.9.092 1.91.143 2.975.143a29.58 29.58 0 0 0 2.975-.143.25.25 0 0 1 .05.498c-.918.093-1.944.145-3.025.145s-2.107-.052-3.025-.145a.25.25 0 0 1-.224-.274ZM3.5 10h2a.5.5 0 0 1 .5.5v1a1.5 1.5 0 0 1-3 0v-1a.5.5 0 0 1 .5-.5Zm-1.5.5c0-.175.03-.344.085-.5H2a.5.5 0 0 1 0-1h3.5a1.5 1.5 0 0 1 1.488 1.312 3.5 3.5 0 0 1 2.024 0A1.5 1.5 0 0 1 10.5 9H14a.5.5 0 0 1 0 1h-.085c.055.156.085.325.085.5v1a2.5 2.5 0 0 1-5 0v-.14l-.21-.07a2.5 2.5 0 0 0-1.58 0l-.21.07v.14a2.5 2.5 0 0 1-5 0v-1Zm8.5-.5h2a.5.5 0 0 1 .5.5v1a1.5 1.5 0 0 1-3 0v-1a.5.5 0 0 1 .5-.5Z" />
                                    </svg>Personal
                                </button>
                            </div>
                            {chnType === "PRIVATE" ?
                                <div className='mTB10 cat-desc' style={{ alignItem: "center" }}>Organization members can only join on invite.</div>
                                :
                                chnType === "PUBLIC" ?
                                    <div className='mTB10 cat-desc' style={{ alignItem: "center" }}>All organization members can find and join the channel based on the channel's visibility.</div>
                                    :
                                    error.type ?
                                        <div className='mTB10 cat-desc' style={{ alignItem: "center", color: "red" }}>Select the channel level that you want to create.</div>
                                        :
                                        <div className='mTB10 cat-desc' style={{ alignItem: "center" }}>Select the channel level that you want to create.</div>
                            }


                        </div>
                        <div className="chnfields">
                            <div className="zcl-row mT25 mTB10 pR36 flexC">
                                <div className="zcl-row-label">Channel Image &amp; Name</div>
                                <div className="flexG flexC">
                                    <div className="zcl-avatar">
                                        <div id="chnimgdata" documentclick="viewprofileimage"></div>
                                        <div id="channeldefimg" className="zcl-avatar-default flexM">
                                            <em><div className="msi-sc1" title="Organization Channel"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-people-fill" style={{ marginRight: "5px", marginLeft: "5px" }} viewBox="0 0 16 16">
                                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                                            </svg></div></em>
                                        </div>
                                        <label htmlFor="channelphoto" className="zcl-avatar-action flexM zcf-camera">{console.log(profile)}
                                            {profile ? <img style={{ width: "150px", height: "150px" }} src={profile}></img> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera" style={{ position: "absolute", top: "10px" }} viewBox="0 0 16 16">
                                                <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                                                <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                                            </svg>}
                                            <input type="file" id="channelphoto" name="cphoto" className="dN" onChange={handleAddProfile} /></label>
                                    </div>
                                    <div className="posrel flexG mL25">
                                        <span className="flexM zcl-input-pretext">#</span>
                                        <input type="text" name="name" value={channelName} listen="keyup" id="channelnameval" tabIndex="2" autoComplete="off" className={`zcl-input pL40 pR30 ${error.name && "zcl-input-error"}`} placeholder="Development-hacks, competitor-news " onChange={handleChange} />
                                        <span id="channelnamecount" category="charcount" limit="50" className="limit-txt dN"></span><span className="hint-txt">Your channel name cannot have &lt; &gt; " | @ #</span>
                                        <span id="channelnameerrormsg" category="errormsg" className="error-txt"></span>
                                    </div>
                                </div>
                            </div>
                            {chnType === "organization" && <div className="zcl-row mT25 mTB10 pR36 flexC">
                                <div className="zcl-row-label">Visibility</div>
                                <div className="flexG flexC">
                                    <Switch defaultChecked onChange={(e) => setVisibility((visibility) => !visibility)} />
                                    <span style={{ textTransform: "capitalize", color: "var(--color-lp1)", fontSize: "15px" }}>{visibility ? "All org members can join the channel." : "Organization members can be added only by the channel admin."}</span>
                                </div>
                            </div>}

                            <div className="zcl-row mT50 pR36 flex">
                                <div className="zcl-row-label mT8">Channel Description</div>
                                <div className="flexG posrel">
                                    <textarea id="channeldescval" name="desc" value={chnDes} tabIndex="6" listen="keyup" className="zcl-textarea" placeholder="Channel Description" onChange={handleChange}></textarea><span className="limit-txt dN" id="channeldesccount" category="charcount" limit="300">300</span>
                                    {/* <span className="error-txt">&lt; &gt; "" | @ # aren't allowed. Let's do it again, shall we?</span> */}
                                </div>
                            </div>


                        </div>

                    </div>
                    <div className='cancleOpt'>
                        <div className="fshrink flexC">
                            <div className="zcl-btn zcl-btn--secondary" id="cancel" onClick={() => { setEditOpenStatus(false); setOpenStatus(true) }} >Cancel</div>
                            <div className=" mL20" id="createchannel" tabIndex="7" style={{ cursor: "pointer" }} >
                                {/* Create Channel */}
                                <LoadingButton
                                    className='zcl-btn zcl-btn--primary'
                                    onClick={handleEditChannel}
                                    loading={loading} color="success" variant="contained">
                                    Edit Channel
                                </LoadingButton>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </>
};
