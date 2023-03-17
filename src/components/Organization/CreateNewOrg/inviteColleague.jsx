import React, { useState } from 'react';
import "../../../pages/Organization/Organization.scss";
import { createOrganization } from '../../../api/Organization/Organization';
import { validateEmail } from '../../Validators/email';
import { useNavigate } from "react-router-dom"

export default function InviteColleague() {
    const [enable, setStatus] = useState(false);
    const [inpName1, setName1] = useState("");
    const [inpName2, setName2] = useState("");
    const [inpName3, setName3] = useState("");
    const [email1, setEmail1] = useState("");
    const [email2, setEmail2] = useState("");
    const [email3, setEmail3] = useState("");

    const navigate = useNavigate();
    const handleChange = (e) => {
        if (e.target.name === 'nameInp1') {
            setName1(e.target.value);
        }
        else if (e.target.name === 'nameInp2') {
            setName2(e.target.value);
        }
        else if (e.target.name === 'nameInp3') {
            setName3(e.target.value);
        }
        else if (e.target.name === 'emailInp1') {
            setEmail1(e.target.value);
        }
        else if (e.target.name === 'emailInp2') {
            setEmail2(e.target.value);
        }
        else if (e.target.name === 'emailInp3') {
            setEmail3(e.target.value);
        }
        if (inpName1 && email1) {
            console.log(inpName1, email1);
            (email1 && validateEmail(email1)) && (!email2 || (email2 && validateEmail(email2))) && (!email3 || (email3 && validateEmail(email3))) ? setStatus(true) : setStatus(false);
        }
        else {
            setStatus(false);
        }
    }

    const handleAdd = async () => {
        const per1 = { email: email1, first_name: inpName1 }
        const per2 = { email: email2, first_name: inpName2 }
        const per3 = { email: email3, first_name: inpName3 }
        await createOrganization([per1, per2, per3]);
        navigate('/main');
    }

    return <>
        <div className="wh100">

            <div id="errorbanner"></div>
            <div id="page" className="main-container">
                <div id="bodycontent" className="wrapper">
                    <div className="flex wh100" style={{ width: "100%", height: "100%" }}>
                        <div className="left-panel flexM" style={{ height: "100% !important", paddingTop: "200px", paddingBottom: "165px", paddingLeft: "10px", paddingRight: "10px" }}>
                            <img src="https://static.zohocdn.com/chat/source/officechat/images/companyonboarding/003.svg" width="380" />
                            <nav>
                                <em className="nav_sel nav_disable">1. Create a Company </em>
                                <em className="nav_sel">2. Invite a Colleague</em>
                            </nav>
                        </div>
                        <div className="right-panel flexM">
                            <div className="">
                                <div className="font24 clr-hdr fontB">Invite your Colleagues</div>
                                <div className="font16 line24 clr-lp1 invite-desc">You can invite at least a user at your convenience and get started with Prezz! Invite your folks and start collaborating right away.<em className="smile_pos smly"></em></div>
                                <div id="inputbox_textbox " style={{ marginLeft: "6rem" }}>
                                    <table id="invite_inputbox" >
                                        <tbody>
                                            <tr>
                                                <td className='name'><input content="fname" name="nameInp1" placeholder="Scott" onChange={handleChange} /></td>
                                                <td className="posrel emailInput"><input listenevent="blur" name="emailInp1" content="email" inputpurpose="invite_table" listen="keyup" placeholder="scott@example.com" onChange={handleChange} /></td>
                                            </tr>
                                            <tr>
                                                <td className='name'><input content="fname" name="nameInp2" placeholder="John" onChange={handleChange} /></td>
                                                <td className="posrel emailInput"><input listenevent="blur" name="emailInp2" content="email" inputpurpose="invite_table" listen="keyup" placeholder="john@example.com" onChange={handleChange} /></td>
                                            </tr>
                                            <tr>
                                                <td className='name'><input content="fname" name="nameInp3" placeholder="Smith" onChange={handleChange} /></td>
                                                <td className="posrel emailInput"><input listenevent="blur" name='emailInp3' content="email" inputpurpose="invite_table" listen="keyup" placeholder="smith@example.com" onChange={handleChange} /></td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>

                                <div className="inviteoptns">
                                    <span id="multipleusersbtn">+ Add <em className="cur" purpose="showtexteditor" style={{ color: "#1189e6", }}>Multiple Users</em> </span>
                                    <span className="posrel">
                                        {/* <input inputpurpose="inviteupload" listen="file" type="file" /> */}
                                        (or) <em className="cur">Upload</em> (.csv file)</span>
                                </div>
                                <div id="invitemember_errorfield" className="email_check err_txt"></div>
                                <button purpose="inviteMember" id="invitememberbtn" className={`btn-large fontB mT40 mB10 ${!enable && "disabled"}`} onClick={handleAdd}>Done, invite them all!</button>
                                <div style={{ display: "none" }} purpose="inviteMayBeLater" className="maybe">Uh, may be later</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <footer id="footer"><em>NEED HELP ? LET US KNOW</em><span className="msi-mail clrdark"></span><a className="clrdark" href="mailto:support@zohocliq.com">support@zohocliq.com</a></footer> */}
        </div>

    </>;
}