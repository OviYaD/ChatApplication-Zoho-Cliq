import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Header from '../Header';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Checkbox from '@mui/material/Checkbox';
import { createOrganization } from '../../../api/Organization/Organization';
import { useNavigate } from 'react-router-dom';
import { addOrg } from '../../../redux/slices/organizationSlice';
import { useDispatch } from 'react-redux';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



export default function NewOrg() {

    const [orgname, setName] = useState("");
    const [isPublic, setStatus] = useState(false);
    const [enable, setEnable] = useState(false);
    const [email, setEmail] = useState("");
    const [btnName, setBtnName] = useState("Create");

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const checkBoxStatus = (e) => {
        setStatus(e.target.checked);
    }

    const handleChange = (e) => {
        setName(e.target.value);
        if (e.target.value.length > 4) {
            setEnable(true)
        }
        else {
            setEnable(false)
        }
    }
    const createOrg = async () => {
        setBtnName("Creating...");
        const res = await createOrganization({ name: orgname, is_discoverable: isPublic });
        console.log(res.status);

        if (res.status) {
            console.log(res.status)
            // alert("Already have one Organization");
            toast.error(res.status.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            setTimeout(() => navigate({ pathname: "/getstarted", search: "?from=1" }), 2000)
        }
        else {
            toast.success("Organization Created", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            dispatch(addOrg(res));
            setTimeout(() => navigate({ pathname: "/getstarted", search: "?from=1" }), 2000)
        }

    }
    return <>
        <div className='organization' style={{ height: "100%", overflowY: "hidden" }}>
            <Header></Header>
        </div>
        <div className="wh100" style={{ position: "fixed" }}>

            <div id="errorbanner"></div>
            <div id="page" className="main-container">
                <div id="bodycontent" className="wrapper">
                    <div className="flex wh100" style={{ width: "100%", height: "100%" }}>
                        <div className="left-panel flexM" style={{ height: "100% !important", paddingTop: "200px", paddingBottom: "190px", paddingLeft: "10px", paddingRight: "10px" }}>
                            <img src="https://static.zohocdn.com/chat/source/officechat/images/companyonboarding/002.svg" width="450" />
                            {/* <nav>
                                <em className={`nav_sel ${email && "nav_disable"}`}>1. Create a Company </em>
                                <em className={`${!email && "nav_disable"} `}>2. Invite a Colleague</em>
                            </nav> */}
                        </div>
                        <div className="right-panel flexM">
                            <div className="createcmpny">
                                <div className="font24 clr-hdr fontB mB35">Create your own company</div>
                                <div id="createnamefield_holder" className="mB30">
                                    <div className="label-txt-hdr">Your company name</div>
                                    <input id="companynamefield" type="text" className="zcl-input" value={orgname} onChange={handleChange} inputpurpose="companyname" listen="keyup" placeholder="Eg: Zylker Corp" />
                                    <div className="label-txt-hint">Min. 5 - Max. 30 characters</div>
                                </div>
                                <div className="createcompanycheckboxes" style={{ marginBottom: "30px" }}>
                                    <div className="textL fontB clrText font15 line22 mB12">when a verified user tries joining Prezz,</div>

                                    <label htmlFor="request_join" id="requestjoin_cb" className="curP flex mL5" style={{ display: "flex" }}>
                                        <div className="zcl-checkbox"><Checkbox {...label} size="small" onChange={checkBoxStatus} /><span className="msi-checkbox-tick flexM"></span></div>
                                        <div className="font14 clr0 curP line20 textL">Allow the user to discover and send request to join your company.</div>
                                    </label>
                                </div>
                                <div id="createcompany_errtext" className="err_txt"></div>
                                <button id="createcompanybtn" purpose="create" className={`btn-large ${!enable && "disabled"} fontB posrel text-transU mT40`} onClick={createOrg}>{btnName}</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* <footer id="footer"><em>NEED HELP ? LET US KNOW</em><span className="msi-mail clrdark"></span><a className="clrdark" href="mailto:support@zohocliq.com">support@zohocliq.com</a></footer> */}
        </div>

    </>;
}