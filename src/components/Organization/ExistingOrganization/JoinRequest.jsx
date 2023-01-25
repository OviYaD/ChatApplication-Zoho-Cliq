import React from 'react';
import ApartmentIcon from '@mui/icons-material/Apartment';

export default function JoinRequest({ orgId }) {

    const sendRequest = () => {

    }
    return <>
        <div className="got_cmpny">
            <ApartmentIcon style={{ color: "#c4c4c4", margin: "auto", width: "60px", height: "60px" }}></ApartmentIcon>

            <div className="font24 clr-hdr fontB mT20 mB30">Hurray!</div>
            <div className="font16 line26 mB30">We've found the company you're looking for in Cliq.</div>
            <button id="requesttojoinbtn" purpose="requestToJoin" className="btn-large mT40 mB10" onClick={sendRequest}>Request to join company</button>
        </div>
    </>
}