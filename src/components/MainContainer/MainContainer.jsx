import React from 'react';
import "./MainContainer.scss";
import { AddOutlinedIcon } from '@mui/icons-material/AddOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';

import RemoteworkToggle from './RemoteworkToggle';



export default function MainContainer() {
  return <>
    <div className="zccontent flexG main-container">
      <article>
        <div className="zcleftsidebar">
          <RemoteworkToggle></RemoteworkToggle>

          <div className="left-wrapper flexG mT2 ps-container ">
            <div className="fshrink left-nav">
              <div id="lhs_module_nav" className="flex fdirC justifySB h100 lhs-module-navigator">
                <div  className="overflow-controls">
                  <div id="lhs_module_items" className="flexG mB20 posrel ps-container ps-theme-default ps-active-y" data-ps-id="2467d49f-d46e-6e6d-32d8-d32c3528c4e1">
                    <div id="lhs_chats" className="lhs-nav-item active" purpose="showConvosTab">
                      <ChatOutlinedIcon style={{ fontSize: "20px" }}></ChatOutlinedIcon>
                      <div className="mod-name ellips">chats</div>
                      <div id="lhs_chats_counter" className="mod-counter"></div>
                    </div>
                    <div id="lhs_contacts" className="lhs-nav-item " purpose="showDMsTab" data-activetab="">
                      <PersonOutlineOutlinedIcon style={{ fontSize: "25px" }}></PersonOutlineOutlinedIcon>
                      <div className="mod-name ellips">Contacts</div>
                      <div id="lhs_contacts_counter" className="mod-counter"></div>
                    </div>
                    <div id="lhs_channels" className="lhs-nav-item  " purpose="showTeamsTab">
                      <div className="zcf-channel font13 mod-icn"></div>
                      <TagOutlinedIcon style={{ fontSize: "20px" }}></TagOutlinedIcon>
                      <div className="mod-name ellips">Channels</div>
                      <div id="lhs_channels_counter" className="mod-counter"></div>
                    </div>
                    <div id="lhs_history" className="lhs-nav-item" purpose="showHistorysTab">
                      <div className="zcf-history mod-icn"></div>
                      <HistoryOutlinedIcon style={{ fontSize: "23px" }}></HistoryOutlinedIcon>
                      <div className="mod-name ellips">History</div>
                      <div id="lhs_history_counter" className="mod-counter"></div>
                    </div>
                    <div id="lhs_files" className="lhs-nav-item  " purpose="showFilesTab">
                      <div className="zcf-fileicon mod-icn"></div>
                      <InsertDriveFileOutlinedIcon style={{ fontSize: "20px" }}></InsertDriveFileOutlinedIcon>
                      <div className="mod-name ellips">Files</div>
                      <div id="lhs_files_counter" className="mod-counter"></div>
                    </div>
                    <div id="lhs_calendar" className="lhs-nav-item  " purpose="showCalendarsTab">
                      <div className="zcf-zcalendar mod-icn"></div>
                      <DateRangeOutlinedIcon style={{ fontSize: "22px" }}></DateRangeOutlinedIcon>
                      <div className="mod-name ellips">Calendar</div>
                      <div id="lhs_calendar_counter" className="mod-counter"></div>
                    </div>
                    <div id="lhs_notebook" className="lhs-nav-item  " purpose="showNotebooksTab">
                      <div className="zcf-notes mod-icn"></div>
                      <StickyNote2OutlinedIcon style={{ fontSize: "20px" }}></StickyNote2OutlinedIcon>
                      <div className="mod-name ellips">Notes</div>
                      <div id="lhs_notebook_counter" className="mod-counter"></div>
                    </div>
                    <div id="lhs_projects" className="lhs-nav-item  " purpose="showTasksTab">
                      <div className="zcf-zohoprojects mod-icn"></div>
                      <CheckOutlinedIcon style={{ fontSize: "20px" }}></CheckOutlinedIcon>
                      <div className="mod-name ellips">Tasks</div>
                      <div id="lhs_projects_counter" className="mod-counter"></div>
                    </div>
                    <div id="lhs_widgets" className="lhs-nav-item  " purpose="showWidgetsTab">
                      <div className="zcf-applet mod-icn"></div>
                      <WidgetsOutlinedIcon style={{ fontSize: "20px" }}></WidgetsOutlinedIcon>
                      <div className="mod-name ellips">Widgets</div>
                      <div id="lhs_widgets_counter" className="mod-counter"></div>
                    </div>
                    <div id="lhs_people" className="lhs-nav-item  " purpose="showMyOrgTab">
                      <div className="zcf-org-icon mod-icn"></div>
                      <CorporateFareOutlinedIcon style={{fontSize:"20px"}}></CorporateFareOutlinedIcon>
                      <div className="mod-name ellips">Org</div>
                      <div id="lhs_people_counter" className="mod-counter"></div>
                    </div>
                    {/* <div className="ps-scrollbar-x-rail" style={{ left: "0px", bottom: "3px" }}>
                            <div className="ps-scrollbar-x" tabindex="0" style={{ left: "0px", width: "0px" }}></div>
                          </div>
                          <div className="ps-scrollbar-y-rail" style={{ top: "0px", height: "459px", right: "3px" }}>
                            <div className="ps-scrollbar-y" tabindex="-1" style={{ top: "0px", height: "382px" }}></div>
                          </div> */}
                  </div>
                </div>

              </div>
            </div>
          
          <div className="contact-list">
              <div className="pinned-chats">
                <span className=" font17 ellips">My Pins</span>
              </div>
              
          </div>
          </div>


        </div>

      </article>
    </div>
  </>;
}