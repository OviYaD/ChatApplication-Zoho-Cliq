import React , { useState } from 'react';
import Description from '../../components/SignIn/Description';
import SignInForm from '../../components/SignIn/SignInForm';
import "./SignIn.scss";


export default function SignIn(){
    return <>
        <div className="bg_one"></div>
            <div className="container">
                <div className="signin_container">
                    <SignInForm></SignInForm>
                    <Description></Description>
                </div>
                <div id="signuplink">Don't have a Zoho account? <a href="javascript:register()">Sign Up Now</a></div>
            </div>
    </>;

}