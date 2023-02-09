import React, { useState, useEffect } from 'react';
import "./PermissionTable.scss";
import { green } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { useSelector } from 'react-redux';
import { permissionUpdate } from '../../SocketEvents/events';
import { toast } from 'react-toastify';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const permissionInfo = [
    { label: "Edit Channel Info", key: "edit_channel_info" },
    { label: "Add Participants", key: "add_participants" },
    { label: "Remove Participants", key: "remove_participants" },
    { label: "Clear all messages", key: "clear_all_messages" },
    { label: "Archive channel", key: "archive_channel" },
    { label: "Delete channel", key: "delete_channel" },
    { label: "Send messages", key: "send_messages" },
    { label: "Reply in thread", key: "reply_in_thread" },
    { label: "Mention users", key: "mention_users" },
    { label: "Leave Channel", key: "leave_channel" },
    { label: "Host Broadcast", key: "host_broadcast" },
    { label: "Delete messages posted by others", key: "delete_others_messages" },
    { label: "Delete Message", key: "delete_message" },
    { label: "Edit Message", key: "edit_message" },
    { label: "Start / Schedule Meeting", key: "start_stop_meeting" },
    { label: "Pin Messages", key: "pin_messages" },
    { label: "@all, @available mentions", key: "all_available_mentions" }
]


export default function PermissionTable({ socket, permissions, chatInfo }) {

    const [role, setRole] = useState();
    const user = useSelector((state) => state.user);
    const [permissionList, setPermissionList] = useState([]);
    useEffect(() => {
        const getUserRole = () => {
            setRole(chatInfo.members.filter((member) => {
                return member.user.user_id === user.user_id;
            })[0].role)
        }
        getUserRole();
        setPermissionList(structuredClone(permissions))

    }, [chatInfo])


    const handlePermissions = async (curRole, permissionKey) => {
        const updatedPermissions = permissionList.map((per, i) => {
            let copyPer = { ...per };
            if (per.role === curRole) {
                copyPer.permissions[permissionKey] = !copyPer.permissions[permissionKey]
            }
            return copyPer;
        })
        setPermissionList(updatedPermissions);
        permissionUpdate(socket, chatInfo._id, updatedPermissions);
        toast('Permission Updated ', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const isPermitted = (editPermissions) => {

        if (role === "SUPERUSER") {
            return false;
        }
        if (role === "ADMIN" && editPermissions === "ADMIN") {
            return true;
        }
        if (role === "MODERATOR" && (editPermissions === "ADMIN" || editPermissions === "MODERATOR")) {
            return true;
        }
        if (role === "MEMBER") {
            return true;
        }

        return false;
    }

    return <>
        {console.log("permisiions...", permissions, role)}
        {role && <div className="wh100 channel-permission-cont flexG" style={{ width: "90%", height: "100%" }}>
            <div className="tbl tblHead fshrink">
                <div className="tblRow">
                    <div className="tblCel">Action</div>
                    <div className="tblCel">Channel Admin</div>
                    <div className="tblCel">Moderator</div>
                    <div className="tblCel" >Members</div>
                </div>
            </div>
            <div id="permissioncontainer" className="flexG">
                <div className="tbl tblMain">
                    {permissionInfo.map((ele, index) => {
                        return <div className="tblRow" action="1" key={index}>
                            <div className="tblCel">{ele.label}</div>
                            <div className="tblCel">
                                <div className="flexIC">
                                    <div className="flex-col">
                                        <div>
                                            <Checkbox
                                                checked={permissionList[1].permissions[ele.key]}
                                                {...label}
                                                onChange={() => handlePermissions("ADMIN", ele.key)}
                                                sx={{
                                                    '&.Mui-checked': {
                                                        color: green[300],
                                                    },
                                                }}
                                                disabled={isPermitted("ADMIN")}
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="tblCel">
                                <div className="flexIC">
                                    <div className="flex-col">
                                        <div>
                                            <Checkbox
                                                onChange={() => handlePermissions("MODERATOR", ele.key)}
                                                checked={permissionList[2].permissions[ele.key]}
                                                {...label}
                                                sx={{
                                                    '&.Mui-checked': {
                                                        color: green[300],
                                                    },
                                                }}
                                                disabled={isPermitted("MODERATOR")}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tblCel">
                                <div className="flexIC">
                                    <div className="flex-col">
                                        <div>
                                            <Checkbox
                                                onChange={() => handlePermissions("MEMBER", ele.key)}
                                                checked={permissionList[3].permissions[ele.key]}
                                                {...label}
                                                sx={{
                                                    '&.Mui-checked': {
                                                        color: green[300],
                                                    },
                                                }}
                                                disabled={isPermitted("MEMBER")}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}

                </div>
            </div>
        </div>}
    </>
};
