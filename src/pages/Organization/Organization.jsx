import React, { useState, useEffect } from 'react';
import UserOrganizations from '../../components/Organization/UserOrganizations';
import Header from '../../components/Organization/Header';
import "./Organization.scss"
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProfile } from '../../api/authentication/user';
import { setUser } from '../../redux/slices/userSlice';
import { getOrganization } from '../../api/Organization/Organization';
import { setOrgList } from '../../redux/slices/organizationSlice';
import LoadingPage from '../../components/loaders/LoadingPage';

export default function Organization() {
    const [orgList, setOrgs] = useState();
    const user = useSelector((state) => state.user);
    const organization = useSelector((state) => state.organization);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userDetails, setUserDetails] = useState();

    useEffect(() => {
        const fetchUser = async () => {
            const userInfo = await getProfile();
            console.log(userInfo);
            if (userInfo.status) {
                dispatch(setUser(userInfo.data.profile));
                localStorage.setItem("!@#$%^&*(user_id)*&^%$#@!", userInfo.data.profile.user_id);

            } else {
                localStorage.removeItem("token");
                navigate("/signin");
            }
        }
        fetchUser();
    }, [])

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



    if (orgList)
        return <>
            <div className='organization' style={{ height: "100%", overflowY: "hidden" }}>
                <Header></Header>
                <div className="main_container" >
                    <UserOrganizations></UserOrganizations>
                </div>


            </div>
        </>;
    else
        return <LoadingPage></LoadingPage>
}