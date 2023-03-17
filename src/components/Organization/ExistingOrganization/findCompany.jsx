import React, { useState } from 'react';
import { validateEmail } from '../../Validators/email';
import { checkOrganization } from '../../../api/Organization/Organization';
import { Navigate } from 'react-router-dom';

export default function FindCompany({ setEmailFound, setOrgDetails }) {
    const [email, setEmail] = useState("");
    const [validEmail, setvalidity] = useState(false);
    const [found, setStatus] = useState(true);

    const handleChange = (e) => {
        setEmail(e.target.value);
        if (validateEmail(e.target.value)) {
            setvalidity(true);
        }
        else {
            setvalidity(false)
        }

    }
    const cheackEmail = async () => {
        const data = await checkOrganization({ email: email });
        if (data.status) {
            setEmailFound(email);
            setOrgDetails(data.id);
        }
        else {
            setStatus(false);
        }

    }
    return <>
        <div className="find_cmpny">
            <div className="font24 clr-hdr fontB mB35">Find an existing company</div>
            <div className="font16 line26 clr-lp1 mB30">We will help you to discover a company based on any of your colleague's email address.</div>
            <div id="teammate_mailidholder">
                <div className="label-txt-hdr">Your colleague's email address</div>
                <input id="teammate_mailidfield" type="text" className="zcl-input" inputpurpose="teammate_mailid" value={email} onChange={handleChange} listen="keyup" placeholder="Eg: scott@gmail.com" />
                <div id="mailid_input" className="posabs err_txt"></div>
                {!found && <div id="finderrortxt" className="err_txt">Oops.. this email address isn't a part of Prezz.</div>}
            </div>
            <div id="finderrortxt" className="err_txt"></div>
            <button id="findcompanybtn" purpose="findCompany" className={`btn-large ${!validEmail && "disabled"}  mT40 mB10`} onClick={cheackEmail}>Find the Company</button>
        </div>
    </>;
}