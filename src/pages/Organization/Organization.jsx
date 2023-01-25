import React, { useState, useEffect } from 'react';
import UserOrganizations from '../../components/Organization/UserOrganizations';
import Header from '../../components/Organization/Header';
import "./Organization.scss"
import ExistingOrg from '../../components/Organization/ExistingOrganization/ExistingOrg';
import CancelRequest from '../../components/Organization/ExistingOrganization/cancelRequest';
import NewOrg from '../../components/Organization/CreateNewOrg/NewOrg';
import InviteColleague from '../../components/Organization/CreateNewOrg/inviteColleague';
import JoinRequest from '../../components/Organization/ExistingOrganization/JoinRequest';
import Confirmation from '../../components/Organization/ExistingOrganization/Confirmation';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProfile } from '../../api/authentication/user';
import { setUser } from '../../redux/slices/userSlice';
import { getOrganization } from '../../api/Organization/Organization';
import { setOrgList } from '../../redux/slices/organizationSlice';

export default function Organization() {
    const [orgList, setOrgs] = useState();
    const user = useSelector((state) => state.user);
    const organization = useSelector((state) => state.organization);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userDetails, setUserDetails] = useState();

    useEffect(() => {
        const getOrgs = async () => {
            const orgs = await getOrganization();
            setOrgs(orgs);
            if (orgs.length > 0) {
                dispatch(setOrgList(orgs));
            }
        }
        setUserDetails(user);
        // if (organization.length === 0) {
        getOrgs();
        // }
        // else {
        // setOrgs(organization);
        // }

    }, [])

    useEffect(() => {
        const fetchUser = async () => {
            const userInfo = await getProfile();
            console.log(userInfo);
            if (userInfo.status) {
                dispatch(setUser(userInfo.data.profile));
            } else {
                localStorage.removeItem("token");
                navigate("/signin");
            }
        }
        fetchUser();
    }, [])

    if (orgList)
        return <>
            <div className='organization' style={{ height: "100%", overflowY: "hidden" }}>
                <Header></Header>
                <div className="main_container" >
                    <UserOrganizations></UserOrganizations>
                </div>


            </div>
        </>;
}