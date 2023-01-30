/* eslint-disable default-case */
import React, { useState } from 'react';
import "./MainContainer.scss";
import RemoteworkToggle from './RemoteworkToggle';
import ContactList from '../ContactList/contactList';
import SideNav from './SideNav';
import ChatWindow from '../ChatWindow/ChatWindow';
import ChannelDescription from '../ChannelDescription/ChannelDescription';
import OrganizationList from '../OrganizationList/OrganizationList';
import CreateChannelModal from '../CreateChannel/CreateChannelModal';
import MemberList from '../Organization/MemberList/MemberList';
import Profile from '../Settings/Profile';
import ProfileInfo from '../ChatWindow/ProfileInfo';
import ChannelList from '../ChannelDescription/ChannelList';
import { useEffect } from 'react';



export default function MainContainer() {
    const [showCreateModal, setStatus] = useState(false);
    const [choice, setChoice] = useState("Org");
    const [activeMenu, setActiveMenu] = useState("channels");
    
    return <>
        <div className="zccontent flexG main_container " >
            <article>
                <div className="zcleftsidebar">
                    <RemoteworkToggle></RemoteworkToggle>

                    <div className="left-wrapper flexG mT2 ps-container ">
                        <SideNav activeMenu={activeMenu} setActiveMenu={setActiveMenu}></SideNav>
                        {(() => {
                            switch (activeMenu) {
                                case "chats": return <ContactList></ContactList>
                                case "channels": return <ChannelList setStatus={setStatus}></ChannelList>
                                case "Org": return <OrganizationList></OrganizationList>
                            }
                        })()}
                        {/* <ContactList></ContactList> */}
                        {/* <ChannelList setStatus={setStatus}></ChannelList> */}
                        {/* <OrganizationList setStatus={setStatus}></OrganizationList> */}
                    </div>
                </div>
                {(() => {
                    switch (activeMenu) {
                        case "Org": return <MemberList></MemberList>
                        case "channels": return <ChatWindow></ChatWindow>

                    }
                })()}

                {/* <ChatWindow></ChatWindow> */}
                {/* <MemberList></MemberList> */}
                {/* <ChannelDescription></ChannelDescription> */}
                {/* <ProfileInfo></ProfileInfo> */}

            </article>
            {showCreateModal && <CreateChannelModal setStatus={setStatus}></CreateChannelModal>}
        </div>


    </>;
}