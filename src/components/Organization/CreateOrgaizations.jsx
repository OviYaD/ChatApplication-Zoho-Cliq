import React, { useState, useEffect } from 'react';
import Header from './Header';
import NewOrg from './CreateNewOrg/NewOrg';
import { useSelector } from 'react-redux';

export default function CreateOrgaizations(params) {
    const user = useSelector((state) => state.user);
    useEffect(() => {
        console.log("craete organization", user);
    }, [])
    return <>
        <div className='organization' style={{ height: "100%", overflowY: "hidden" }}>
            <Header></Header>
            <div className="main_container" >
                <NewOrg></NewOrg>
            </div>


        </div>
    </>;
};
