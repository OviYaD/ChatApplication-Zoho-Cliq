import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom';


export default function SignUpNav() {

    const navigate = useNavigate();

    return <>
        <div className="header">
            <a href="#" className="logo">zoho</a>
            <span className="login-text">
                Have a Zoho Account?
                <a href="" className="login-link" onClick={() => navigate('/signin')}>SIGN IN</a>
            </span>
        </div>
    </>;
}