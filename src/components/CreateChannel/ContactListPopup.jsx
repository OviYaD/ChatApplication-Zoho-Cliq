import React, { useState } from 'react';
import './ContactListPopup.scss';
import { useEffect } from 'react';
import { getMember } from '../../api/Organization/Organization';
import { useSelector } from "react-redux";

// const list = [
//     { name: "Anush Kumar", email: "anush.kumar@codingmart.com", img: "https://contacts.zoho.in/file?ID=60016689751&exp=6000&t=user&fs=thumb" },
//     { name: "Srilekha.ms", email: "srilekha.ms@codingmart.com", img: "https://contacts.zoho.in/file?ID=60016689083&exp=6000&t=user&fs=thumb" },
//     { name: "Nimmi", email: "nimmi@codingmart.com", img: "https://contacts.zoho.in/file?ID=60016688888&exp=6000&t=user&fs=thumb" },
//     { name: "AJIT Verma", email: "ajit@codingmart.com", img: "	https://contacts.zoho.in/file?ID=60016688780&exp=6000&t=user&fs=thumb" },
//     { name: "Amirtha", email: "amirtha@codingmart.com", img: "	https://contacts.zoho.in/file?ID=60016688878&exp=6000&t=user&fs=thumb" },
//     { name: "Anush Kumar", email: "anush.kumar@codingmart.com", img: "https://contacts.zoho.in/file?ID=60016689751&exp=6000&t=user&fs=thumb" },
//     { name: "Srilekha.ms", email: "srilekha.ms@codingmart.com", img: "https://contacts.zoho.in/file?ID=60016689083&exp=6000&t=user&fs=thumb" },
//     { name: "Nimmi", email: "nimmi@codingmart.com", img: "https://contacts.zoho.in/file?ID=60016688888&exp=6000&t=user&fs=thumb" },
//     { name: "AJIT Verma", email: "ajit@codingmart.com", img: "	https://contacts.zoho.in/file?ID=60016688780&exp=6000&t=user&fs=thumb" },
//     { name: "Amirtha", email: "amirtha@codingmart.com", img: "	https://contacts.zoho.in/file?ID=60016688878&exp=6000&t=user&fs=thumb" }
// ]
export default function ContactListPopup({ memList, setShowListStatus, participants, addParticipants }) {

    const [list, setList] = useState([]);
    const user = useSelector((state) => state.user);

    useEffect(() => {
        const getSetPartList = async () => {
            let data = await getMember();
            console.log(data);
            console.log(user);
            data = data.filter((ele) => {
                return ele.id !== user.id;
            })
            console.log(memList)
            data = data.filter((ele) => {
                return !memList.includes(ele.id)
            })
            console.log(data);
            setList(data);
        }
        getSetPartList();

    }, [])

    const handleAddParticipants = (ele) => {
        console.log(ele)
        addParticipants(ele);
        setShowListStatus(false);
    }

    return <>
        <div id="channels-usersuggest-results" className="zcl-multiselect-list-container zc-form-fixedinp posfix" align="down" style={{ display: "block", top: "25px", left: "831.188px", width: "436.812px" }}>
            <div id="channels-usersuggest-list" className="zcl-multiselect-list">
                <div id="orgcontacts" searchcatagory="orgcontacts">
                    {list.map((ele, index) => {
                        return <div className="zcl-list-item" key={index} uid={ele.id} dname="AJIT Verma" purpose="search" onClick={() => handleAddParticipants(ele)}>
                            <div className="posrel fshrink mR10"><img src={ele.profile.mini_avatar_url ?? "	https://contacts.zoho.in/file?ID=60016689094&nocache=1674451340247&t=user&fs=thumb"} className="zcl-list-item-img36" /></div>
                            <div className="flexG ellips">
                                <div className="ellips flexC"><span className="ellips">{ele.profile.first_name} </span></div>
                                <div className="fshrink clr6 font14 w50 ellips">{ele.email}</div>
                            </div>
                        </div>
                    })}


                </div>
            </div>
        </div>


    </>;
};
