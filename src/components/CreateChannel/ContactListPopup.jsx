import React, { useState } from 'react';
import './ContactListPopup.scss';
import { useEffect } from 'react';

const list = [
    { name: "Anush Kumar", email: "anush.kumar@codingmart.com", img: "https://contacts.zoho.in/file?ID=60016689751&exp=6000&t=user&fs=thumb" },
    { name: "Srilekha.ms", email: "srilekha.ms@codingmart.com", img: "https://contacts.zoho.in/file?ID=60016689083&exp=6000&t=user&fs=thumb" },
    { name: "Nimmi", email: "nimmi@codingmart.com", img: "https://contacts.zoho.in/file?ID=60016688888&exp=6000&t=user&fs=thumb" },
    { name: "AJIT Verma", email: "ajit@codingmart.com", img: "	https://contacts.zoho.in/file?ID=60016688780&exp=6000&t=user&fs=thumb" },
    { name: "Amirtha", email: "amirtha@codingmart.com", img: "	https://contacts.zoho.in/file?ID=60016688878&exp=6000&t=user&fs=thumb" },
    { name: "Anush Kumar", email: "anush.kumar@codingmart.com", img: "https://contacts.zoho.in/file?ID=60016689751&exp=6000&t=user&fs=thumb" },
    { name: "Srilekha.ms", email: "srilekha.ms@codingmart.com", img: "https://contacts.zoho.in/file?ID=60016689083&exp=6000&t=user&fs=thumb" },
    { name: "Nimmi", email: "nimmi@codingmart.com", img: "https://contacts.zoho.in/file?ID=60016688888&exp=6000&t=user&fs=thumb" },
    { name: "AJIT Verma", email: "ajit@codingmart.com", img: "	https://contacts.zoho.in/file?ID=60016688780&exp=6000&t=user&fs=thumb" },
    { name: "Amirtha", email: "amirtha@codingmart.com", img: "	https://contacts.zoho.in/file?ID=60016688878&exp=6000&t=user&fs=thumb" }
]
export default function ContactListPopup({ setShowListStatus, participants, addParticipants }) {

    const [partList, setPartList] = useState([]);

    useEffect(() => {
        setPartList(participants);
    }, [])

    const handleAddParticipants = (i) => {
        console.log(list[i])
        addParticipants(list[i]);
        setShowListStatus(false)
    }

    return <>
        <div id="channels-usersuggest-results" className="zcl-multiselect-list-container zc-form-fixedinp posfix" align="down" style={{ display: "block", top: "25px", left: "831.188px", width: "436.812px" }}>
            <div id="channels-usersuggest-list" className="zcl-multiselect-list">
                <div id="orgcontacts" searchcatagory="orgcontacts">
                    {list.map((ele, index) => {
                        return <div className="zcl-list-item" key={index} uid="60016688780" dname="AJIT Verma" purpose="search" onClick={() => handleAddParticipants(index)}>
                            <div className="posrel fshrink mR10"><img src={ele.img} className="zcl-list-item-img36" /></div>
                            <div className="flexG ellips">
                                <div className="ellips flexC"><span className="ellips">{ele.name}</span></div>
                                <div className="fshrink clr6 font14 w50 ellips">{ele.email}</div>
                            </div>
                        </div>
                    })}


                </div>
            </div>
        </div>


    </>;
};
