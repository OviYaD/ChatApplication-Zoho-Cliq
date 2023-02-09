import React, { useState } from 'react';
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import PermissionTable from './PermissionTable';
import Toggle from './Toggle';
import { useSelector } from 'react-redux';


export default function Permissions({ socket, chatInfo }) {
    const [replyType, setReplyType] = useState("");
    const [discussionType, setDiscussionType] = useState("");
    const user = useSelector((state) => state.user);

    const handleReplyTypeChange = (event) => {
        setReplyType(event.target.value);
    };
    const handleDiscussionTypeChange = (event) => {
        setDiscussionType(event.target.value);
    };

    const getUserRole = () => {
        return chatInfo.members.filter((member) => {
            return member.user_id === user.user_id;
        })[0].role;
    }

    return <>
        <div className="channelPermissions">
            <div className='channelConfig'>
                <div className='subcategry'>Configuration</div>
                <div className='channelConfigCont'>
                    <div className='ContList dflx justifySB'>
                        <div className='ContDes mTB10'>
                            <div> Reply Modes</div>
                            <div className='clr-S'> Configure and update the mode of reply in this channel.</div>
                        </div>
                        <div className='updateOptions mTB10 dflx flexC '>
                            <div className='info_icon '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                </svg>
                            </div>
                            <div className='opt-dropdown '>
                                <div>
                                    <FormControl sx={{ m: 1, minWidth: 200, fontFamily: "zoho-puvi-regular", fontSize: 1, color: "red" }} size="small">
                                        <Select
                                            value={replyType}
                                            onChange={handleReplyTypeChange}
                                            displayEmpty
                                            inputProps={{ "aria-label": "Without label" }}
                                            sx={{ fontFamily: "zoho-puvi-regular" }}
                                        >
                                            {/* <MenuItem value="">
                                                <em><span className="menu-text" style={{ fontFamily: "zoho-puvi-regular" }} >{`${chatInfo.reply_mode === "NORMAL" ? "Normal Reply" : "Thread"}`}</span></em>
                                            </MenuItem> */}
                                            <MenuItem value="NORMAL"><span className="menu-text" >Normal Reply</span></MenuItem>
                                            <MenuItem value="THREAD"><span className="menu-text" >Thread</span></MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='ContList dflx justifySB'>
                        <div className='ContDes mTB10'>
                            <div>Notify when users join or leave</div>
                            <div className='clr-S'> Post an info message and notify when a user joins or leaves the channel.</div>
                        </div>
                        <div className='updateOptions mTB10 dflx flexC '>
                            <Toggle></Toggle>
                        </div>
                    </div>
                    <div className='ContList dflx justifySB'>
                        <div className='ContDes mTB10'>
                            <div> Meeting discussions in chat</div>
                            <div className='clr-S'> Configure whether to create a thread or continue meeting chat in this channel</div>
                        </div>
                        <div className='updateOptions mTB10 dflx flexC '>
                            <div className='info_icon '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                </svg>
                            </div>
                            <div className='opt-dropdown '>
                                <div>
                                    <FormControl sx={{ m: 1, minWidth: 200, fontFamily: "zoho-puvi-regular", fontSize: 1, color: "red" }} size="small">
                                        <Select
                                            value={discussionType}
                                            onChange={handleDiscussionTypeChange}
                                            displayEmpty
                                            inputProps={{ "aria-label": "Without label" }}
                                            sx={{ fontFamily: "zoho-puvi-regular" }}
                                        >
                                            <MenuItem value="">
                                                <em><span className="menu-text" style={{ fontFamily: "zoho-puvi-regular" }} >Let the host decide</span></em>
                                            </MenuItem>
                                            <MenuItem value="Create new Thread"><span className="menu-text" >Create new Thread</span></MenuItem>
                                            <MenuItem value="Continue in the chat"><span className="menu-text" >Continue in the chat</span></MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='ContList dflx justifySB'>
                        <div className='ContDes mTB10'>
                            <div>Notify when a user is added or removed</div>
                            <div className='clr-S'>Post an info message and notify all members when a user is added to or removed from a channel.</div>
                        </div>
                        <div className='updateOptions mTB10 dflx flexC '>
                            <Toggle></Toggle>
                        </div>
                    </div>
                    {/* <div className=''>
                        <PermissionTable></PermissionTable>
                    </div> */}
                </div>
                <div className='subcategry'>Permissions</div>
                <div className='channelConfigCont'>
                    <div className=''>
                        <PermissionTable socket={socket} permissions={chatInfo.permissions} chatInfo={chatInfo}  ></PermissionTable>
                    </div>
                </div>
            </div>
        </div>
    </>
};
