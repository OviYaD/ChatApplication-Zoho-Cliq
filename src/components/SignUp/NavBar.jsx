import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom';


export default function SignUpNav() {

    const searchParam = new URLSearchParams(document.location.search);

    const navigate = useNavigate();

    const handleSingin = () => {
        if (searchParam.get('id')) {
            navigate({
                pathname: "/signin", search: `?id=${searchParam.get('id')}`
            })
        }
        else {
            navigate("/signin")
        }
    }
    return <>
        <div className="header">
            <a href="#" className="logo">zoho</a>
            <span className="login-text">
                Have a Prezz Account?
                <a href="" className="login-link" onClick={handleSingin}>SIGN IN</a>
            </span>
        </div>
    </>;
}