import React from 'react';
import { Routes, Route } from "react-router-dom";
import AppContainer from '../pages/AppContainer/AppContainer';
import SignIn from '../pages/SignIn/SignIn';
import { SignUp } from '../pages/SignUp/SignUp';
import Organization from '../pages/Organization/Organization';
import ChannelDescription from '../components/ChannelComponents/ChannelDescription/ChannelDescription';
import CreateChannelModal from '../components/CreateChannel/CreateChannelModal';
import ExistingOrg from '../components/Organization/ExistingOrganization/ExistingOrg';
import CancelRequest from '../components/Organization/ExistingOrganization/cancelRequest';
import InviteColleague from '../components/Organization/CreateNewOrg/inviteColleague';
import ContactListPopup from '../components/CreateChannel/ContactListPopup';
import InvitationModal from '../components/Organization/InvitationModal';
import CreateOrgaizations from '../components/Organization/CreateOrgaizations';
import AddMemberPopUp from '../components/ChannelComponents/AddMemberPopUp/AddMemberPopUp';
import GoogleSignUp from '../components/GoogleSignUp/GoogleSignUp';
import LoadingPage from '../components/loaders/LoadingPage';
import MessageOptions from '../components/ChatWindow/MessageOptions/MessageOptions';
import EditHistory from '../components/ChatWindow/EditHistory/EditHistory';
import FilePreview from '../components/ChatWindow/FilePreview/FilePreview';
import DeleteConfirmation from '../components/ChatWindow/MessageAssets/DeleteConfirmation';
import StarMessages from '../components/StarMessages/StarMessages';
import ProfileInfoPopUp from '../components/PersonalChats/ProfileInfoPopUp';
import MenuBar from '../components/MenuBar/MenuBar';
import EditChannel from '../components/CreateChannel/EditChannel';
import ContactList from '../components/ContactList/ContactList';
import MediaFiles from '../components/ChatWindow/MessageAssets/MediaFiles';
import LandingPage from '../components/LandingPage/LandingPage';
import Search from '../components/MenuBar/Search';
import JoinChannelModal from '../components/CreateChannel/JoinChannelModal';
import InputBox from '../components/InputBox/InputBox';

export default function Router() {



    return <>
        <Routes>
            <Route path='/' element={<SignUp></SignUp>} />
            <Route path='/signin' element={<SignIn></SignIn>} />
            <Route path='/main' element={<AppContainer></AppContainer>} />
            <Route path='/getstarted' element={<Organization></Organization>} />
            <Route path='/existing' element={<ExistingOrg></ExistingOrg>} />
            <Route path="/join-organization" element={<CancelRequest></CancelRequest>} />
            <Route path="/createOrg" element={<CreateOrgaizations></CreateOrgaizations>} />
            <Route path="/invite" element={<InviteColleague></InviteColleague>} />
            <Route path='/des' element={<ChannelDescription></ChannelDescription>} />
            <Route path="/list" element={<ContactListPopup></ContactListPopup>} />
            {/* <Route path='/' element={<Organization></Organization>} /> */}
            <Route path="/test" element={<Search></Search>} />
            <Route path='/create' element={<CreateChannelModal></CreateChannelModal>} />
            <Route path='/loader' element={<LoadingPage></LoadingPage>} />
            <Route path="/star" element={<StarMessages></StarMessages>} />
        </Routes>
    </>;
}