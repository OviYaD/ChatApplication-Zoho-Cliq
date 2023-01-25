import React from 'react';
import Header from './Header';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { useState } from 'react';
import { useEffect } from 'react';
import { setDefaultOrg, createOrganization } from '../../api/Organization/Organization';
import { useDispatch, useSelector } from 'react-redux';
import { setOrgList } from '../../redux/slices/organizationSlice';

const label = { inputProps: { "aria-label": "Checkbox demo" } };
export default function UserOrganizations({ orgList }) {

    const [btnName, setBtnName] = useState("Create Organization")
    const [defaultOrg, setDefault] = useState("");

    const orgs = useSelector(state => state.organization)
    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        const defOrg = orgs.find(org => org.isDefault);
        setDefault(defOrg.id);
    }, [])
    const openOrganization = (id) => {

        localStorage.setItem("!@#$%^org)(*&^%$id", id);
        navigate('/main');

    }

    const handleCreateOrganization = () => {
        setBtnName("Create Organization...");
        setTimeout(() => navigate('/createOrg'), 2000)
    }

    const handleChangeDefault = async (id) => {
        if (defaultOrg === id) {
            setDefault(null);
            await setDefaultOrg({ "organization_id": null });
            const ind = orgs.findIndex(org => org.id === id)
            const chnDef = { ...orgs[ind] };
            chnDef.isDefault = false;
            const updOrg = [...orgs]
            updOrg.splice(ind, 1, { ...chnDef })
            dispatch(setOrgList(updOrg))
        }
        else {
            setDefault(id);
            await setDefaultOrg({ "organization_id": id });
            const ind = orgs.findIndex(org => org.id === id)
            const chnDef = { ...orgs[ind] };
            chnDef.isDefault = true;
            const updOrg = [...orgs]
            updOrg.splice(ind, 1, { ...chnDef })
            dispatch(setOrgList(updOrg))
        }
    }

    return <>
        <div className="wh100">
            <Header></Header>
            <div id="errorbanner"></div>
            <div id="page" className="main-container">
                <div id="bodycontent" className="wrapper">
                    <div className="flex wh100" style={{ width: "100%", height: "100%" }}>
                        <div className="left-panel flexM" style={{ minHeight: "500px", position: "fixed", paddingTop: "100px" }}>
                            <img src="https://static.zohocdn.com/chat/source/officechat/images/companyonboarding/008.svg" width="380" />
                        </div>
                        <div className="right-panel flexM" style={{ marginLeft: "35%" }}>
                            <div className="mB50 flexC fdirC" style={{ width: "100%" }}>
                                <div className="container">
                                    <div className="clr-hdr mT50 font300 font28" style={{ marginTop: "70px" }}>Let's get you started!</div>
                                    <ul className="responsive-table">
                                        <li className="table-header">
                                            <div className="col col-1">Organization</div>
                                            <div className="col col-2">Owner</div>
                                            <div className="col col-3">Open</div>
                                            <div className="col col-4">Default</div>
                                        </li>
                                        {orgs.map((org, index) => {
                                            return <li className="table-row" key={index}>
                                                <div className="col col-1"  >{org.name}</div>
                                                <div className="col col-2"   >{org.owner}</div>
                                                <div className="col col-3" >
                                                    <Button variant="contained" color="success" onClick={() => openOrganization(org.id)}>
                                                        Go
                                                    </Button>
                                                </div>
                                                <div className="col col-4" >
                                                    <Checkbox {...label} size="small" checked={org.id === defaultOrg} onChange={() => handleChangeDefault(org.id)} />
                                                </div>
                                            </li>
                                        })}

                                    </ul>
                                </div>

                                <Button variant="contained" color="error" style={{ marginTop: "30px", fontWeight: "600" }} onClick={handleCreateOrganization}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-folder-plus" viewBox="0 0 16 16" style={{ marginRight: "10px" }}>
                                        <path d="m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z" />
                                        <path d="M13.5 10a.5.5 0 0 1 .5.5V12h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V13h-1.5a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z" />
                                    </svg>
                                    {btnName}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <footer id="footer"><em>NEED HELP ? LET US KNOW</em><span className="msi-mail clrdark"></span><a className="clrdark" href="mailto:support@zohocliq.com">support@zohocliq.com</a></footer> */}
        </div>

    </>;
}