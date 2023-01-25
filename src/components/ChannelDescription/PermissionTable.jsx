import React, { useState } from 'react';
import "./PermissionTable.scss";
import { green } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const permissionList = ["Edit Channel Info", "Add Participants", "Remove Participants", "Clear all messages", "Archive channel", "Delete channel", "Send messages", "Reply in thread", "Mention users", "Leave Channel", "Host Broadcast", "Delete messages posted by others", "Delete Message", "Edit Message", "Start / Schedule Meeting", "Pin Messages", "@all, @available mentions"]
export default function PermissionTable(params) {
    return <>
        <div className="wh100 channel-permission-cont flexG" style={{ width: "90%", height: "100%" }}>
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
                    {permissionList.map((ele, index) => {
                        return <>
                            <div className="tblRow" action="1">
                                <div className="tblCel">{ele}</div>
                                <div className="tblCel">
                                    <div className="flexIC">
                                        <div className="flex-col">
                                            <div>
                                                <Checkbox
                                                    {...label}
                                                    sx={{
                                                        '&.Mui-checked': {
                                                            color: green[300],
                                                        },
                                                    }}
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
                                                    {...label}
                                                    sx={{
                                                        '&.Mui-checked': {
                                                            color: green[300],
                                                        },
                                                    }}
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
                                                    {...label}
                                                    sx={{
                                                        '&.Mui-checked': {
                                                            color: green[300],
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    })}

                </div>
            </div>
        </div>
    </>
};
