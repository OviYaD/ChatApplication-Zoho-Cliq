import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { validateEmail } from '../Validators/email';
import "../../pages/Organization/Organization.scss";
import { createInvite, createOrganization } from '../../api/Organization/Organization';
import { toast } from 'react-toastify';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #f4f4f4',
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
};


export default function InvitationModal({ open, handleClose }) {
    const [enable, setStatus] = useState(false);
    const [inpName1, setName1] = useState("");
    const [inpName2, setName2] = useState("");
    const [inpName3, setName3] = useState("");
    const [email1, setEmail1] = useState("");
    const [email2, setEmail2] = useState("");
    const [email3, setEmail3] = useState("");
    const [multipleUser, setInpOpt] = useState(false);

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
        const inviteMem = [];
        const per1 = { email: email1, first_name: inpName1 }
        inviteMem.push(per1);
        if (email2.length > 0 && inpName2.length > 0) {
            const per2 = { email: email2, first_name: inpName2 }
            inviteMem.push(per2);
        }
        if (email3.length > 0 && inpName3.length > 0) {
            const per3 = { email: email3, first_name: inpName3 }
            inviteMem.push(per3);
        }
        console.log(inviteMem)
        await createInvite([...inviteMem]);
        toast.success("Invitation sent!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
        handleClose();
    }

    return (
        <div>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <div className="" style={{ alignItem: "center", textAlign: "center" }}>
                        <div className="font24 clr-hdr fontB ">Invite your Colleagues</div>
                        <div className="font16 line24 clr-lp1 invite-desc mTB10">You can invite at least a user at your convenience and get started with Cliq! Invite your folks and start collaborating right away.<em className="smile_pos smly"></em></div>
                        <div id="inputbox_textbox " >
                            {multipleUser ? <textarea id="invite_textbox" inputpurpose="invite_textbox" listen="keyup" className="invitetxtbox font16" placeholder="Scott<scottfisher@zylker.com>,Matta<matta@zylker.com>" contentEditable="true"></textarea> :
                                <table id="invite_inputbox mTB10" >
                                    <tbody>
                                        <tr>
                                            <td className='name '><input content="fname" name="nameInp1" placeholder="Scott" style={{ color: "black" }} onChange={handleChange} /></td>
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

                            }
                        </div>
                        <div className="inviteoptns">
                            <span id="multipleusersbtn">+ Add
                                {!multipleUser && <>
                                    <em className="cur" purpose="showtexteditor" style={{ color: "#1189e6", }} onClick={() => setInpOpt(true)}>Multiple Users</em>(or)
                                </>}
                            </span>
                            <span className="posrel">
                                {/* <input inputpurpose="inviteupload" listen="file" type="file" /> */}
                                <em className="cur">Upload</em> (.csv file)</span>
                        </div>
                        <div id="invitemember_errorfield" className="email_check err_txt"></div>
                        <button purpose="inviteMember" id="invitememberbtn" className={`btn-large fontB mT40 mB10 ${!enable && "disabled"}`} onClick={handleAdd}>Done, invite them all!</button>
                        <div style={{ display: "none" }} purpose="inviteMayBeLater" className="maybe">Uh, may be later</div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
