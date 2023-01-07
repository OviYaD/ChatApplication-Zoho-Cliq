import React from 'react';

import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import EventRepeatOutlinedIcon from '@mui/icons-material/EventRepeatOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import Avatar from '@mui/material/Avatar';
import WidgetsIcon from '@mui/icons-material/Widgets';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

export default function MenuIntems(){

    return <>
        <div className="ztb-item-bx" id="ztb-menu-container" data-action-wrap="">
            <div type="button" className="ztb-button-type tpbricon dN" id="ztb-topBarScheduleMsgIcon" data-purpose="zctopBarScheduleMsgIcon" title="Scheduled Messages"><span className="zcf-schedule dN font20 pT1 ztb-icons"></span></div>
            <div type="button" className="ztb-button-type tpbricon" id="ztb-starredmessages" data-purpose="zcstarredmessages" title="Starred Messages"><span className="zcf-star ztb-icons"><StarBorderOutlinedIcon ></StarBorderOutlinedIcon></span></div>
            <div type="button" className="ztb-button-type tpbricon" id="ztb-atmention" data-purpose="zcatmention" ztooltip="Mentions" title="Mentions">
                <span className="zcf-mention ztb-icons"><AlternateEmailOutlinedIcon ></AlternateEmailOutlinedIcon></span>
                <div id="ztb-atmentioncount" className="msgnotify mT3" style={{display: "none"}}>0</div>
            </div>
            <div type="button" className="ztb-button-type tpbricon" id="ztb-reminders" data-purpose="zcreminders" title="Reminders"><span className="zcf-reminders ztb-icons"><CalendarTodayOutlinedIcon></CalendarTodayOutlinedIcon></span></div>
            <div type="button" className="ztb-button-type tpbricon" id="ztb-events" data-purpose="zcevents" title="Calendar Events"><span className="zcf-calendar ztb-icons"><EventRepeatOutlinedIcon></EventRepeatOutlinedIcon></span></div>
            <div type="button" className="ztb-button-type tpbricon" id="ztb-setintegration" data-purpose="zcsetintegration" title="Extensions"><span className="zcf-marketplace font20 ztb-icon-marketplace ztb-icons"><StorefrontOutlinedIcon></StorefrontOutlinedIcon></span></div>
            <div type="button" className="ztb-button-type tpbricon" id="ztb-notificationIcon" data-purpose="zcnotificationIcon" style={{pointerEvents: "all", opacity: "1"}} title="Announcements">
                <span className="zcf-announcement font18 announcementIcon ztb-icons"><span className="alert_icon" id="stackedNumber" ><CampaignOutlinedIcon></CampaignOutlinedIcon></span></span>
            </div>

            <Avatar alt="Remy Sharp" src="https://contacts.zoho.in/file?fs=thumb&amp;nocache=1672909825507" style={{marginLeft:"10px",width:"30px",height:"30px"}}/>
        </div>
            <WidgetsIcon style={{color:"#979797"}}></WidgetsIcon>
    </>;
}