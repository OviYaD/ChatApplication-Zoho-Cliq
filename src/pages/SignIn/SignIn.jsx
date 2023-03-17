import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Description from '../../components/SignIn/Description';
import SignInForm from '../../components/SignIn/SignInForm';
import PasswordReset from './PasswordReset';
import "./SignIn.scss";



export default function SignIn() {
    const [isResetPswrd, setResetPswrd] = useState(false);
    const [userData, setUserData] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate('/getstarted');
        }
    }, [])

    const forgetPassword = (userData) => {
        setUserData(userData);
        setResetPswrd(true);
    }
    return <>
        <div className="bg_one"></div>

        {isResetPswrd ? <div className='recovery_container'>
            <PasswordReset userData={userData} setResetPswrd={setResetPswrd}></PasswordReset>
        </div> : <div className="container">
            <div className="signin_container">
                <SignInForm forgetPassword={forgetPassword}></SignInForm>
                <Description></Description>

            </div>
            <div id="signuplink">Don't have a Prezz account? <a href="" style={{ textDecoration: "none", color: "#159AFF" }} onClick={() => navigate("/")}>Sign Up Now</a></div>
        </div>}
    </>;

}