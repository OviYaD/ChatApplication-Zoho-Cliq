import React, { Component } from 'react';
import Creation from '../../components/Organization/Creation';
import Header from '../../components/Organization/Header';
import "./Organization.scss"
import ExistingOrg from '../../components/Organization/ExistingOrganization/ExistingOrg';
import CancelRequest from '../../components/Organization/ExistingOrganization/cancelRequest';
import NewOrg from '../../components/Organization/CreateNewOrg/NewOrg';
import InviteColleague from '../../components/Organization/CreateNewOrg/inviteColleague';

export default function Organization(){

    return <>
    <div className='organization'>
    <Header></Header>
    <div className="main_container">
        <ExistingOrg></ExistingOrg>
        <CancelRequest></CancelRequest>
        <NewOrg></NewOrg>
        <InviteColleague></InviteColleague>
        <Creation></Creation>
    </div>


    </div>
    </>;
}