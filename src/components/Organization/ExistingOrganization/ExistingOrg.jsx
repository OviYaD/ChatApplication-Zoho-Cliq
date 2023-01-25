import React, { useState } from 'react';
import Header from '../Header';
import ApartmentIcon from '@mui/icons-material/Apartment';
import FindCompany from './findCompany';
import JoinRequest from './JoinRequest';
import Confirmation from './Confirmation';
import '../../../pages/Organization/Organization.scss'

export default function ExistingOrg() {
    const [email, setEmailFound] = useState("");
    const [orgId, setOrgDetails] = useState("");
    const [sentReq, setSentReq] = useState(false);

    return <>
        <div className='organization' style={{ height: "100%", overflowY: "hidden" }}>
            <Header></Header>
        </div>
        <div className="wh100">

            <div id="errorbanner"></div>
            <div id="page" className="main-container">
                <div id="bodycontent" className="wrapper">
                    <div className="flex wh100" style={{ width: "100%", height: "100%" }}>
                        <div className="left-panel flexM" style={{ height: "100% !important", paddingTop: "150px" }}>
                            {!email && <img src="https://static.zohocdn.com/chat/source/officechat/images/companyonboarding/007.svg" width="380" />}
                            {email && <img src='https://static.zohocdn.com/chat/source/officechat/images/companyonboarding/004.svg' width="380"></img>}
                            {!sentReq && <nav>
                                <em className={`nav_sel ${email && "nav_disable"}`}>1. Find a Company </em>
                                <em className={`${!email && "nav_disable"} `}>2. Request to join</em>
                            </nav>}
                        </div>
                        <div className="right-panel flexM">
                            {sentReq ? <Confirmation></Confirmation> :
                                <div>
                                    {!email && <FindCompany setEmailFound={setEmailFound} setOrgDetails={setOrgDetails}></FindCompany>}
                                    {email && <JoinRequest orgId={orgId}></JoinRequest>}
                                </div>}

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>;
}