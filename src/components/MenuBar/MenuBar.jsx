import React, { useState } from 'react'
import "./MenuBar.scss";

import Search from "../../components/MenuBar/Search.jsx";
import MenuItems from "../../components/MenuBar/MenuItems";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import VolumeOffOutlinedIcon from '@mui/icons-material/VolumeOffOutlined';
import Profile from '../Settings/Profile';
import PersonalizeModal from '../Settings/PersonalizeModal';

export default function MenuBar() {
    const [openProfile, setOpenStatus] = useState(false);
    const [openPersonalize, setOpenPersonalizeStatus] = useState(false)
    const [mute, setMuteState] = useState(false);
    return <>
        <div className="topbar">
            <div className="ztb-topband top-hdr-band " id="ztb-topband">
                <a id="ztb-logo" documentclick="go-to-home" className="custom_logo zcdefalut-logo">
                    <span id="ztb-logo-rebrand" className="zclogo flex">
                        <img src="https://static.zohocdn.com/chat/source/officechat/images/newlogo_white.svg" className="zclogo-img" />
                        <span className="zclogo-text">Cliq</span>
                    </span>

                    <label mute="1" className="glsound tooltip-right0 zcf-unmute-sound" id="ztb-globalmute" title="Turn on all sound" >
                        {mute ? <VolumeOffOutlinedIcon></VolumeOffOutlinedIcon> : <VolumeUpOutlinedIcon></VolumeUpOutlinedIcon>}
                    </label>
                </a>
                <div className="zctop-cht">
                    <Search></Search>
                    <MenuItems setOpenStatus={setOpenStatus}></MenuItems>
                </div>
                {openProfile && <Profile setOpenStatus={setOpenStatus} setOpenPersonalizeStatus={setOpenPersonalizeStatus}></Profile>}
                {openPersonalize && <PersonalizeModal setOpenPersonalizeStatus={setOpenPersonalizeStatus}></PersonalizeModal>}

                {/* <a id="ztb-logo" className="custom_logo zcdefalut-logo">
                    <span id="ztb-logo-rebrand" className="zclogo flex">
                        <img src="https://static.zohocdn.com/chat/source/officechat/images/newlogo_white.svg" className="zclogo-img"/>
                        <span className="zclogo-text">Cliq</span>
                    </span>
                    <label mute="1" className="glsound tooltip-right0 zcf-unmute-sound" id="ztb-globalmute" title="Turn on all sound"></label>
                </a> */}
            </div>
        </div>
    </>;
}