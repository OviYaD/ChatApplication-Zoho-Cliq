import React, { useEffect } from 'react';
import SignUpNav from '../../components/SignUp/NavBar';
import TestimonialWrapper from '../../components/SignUp/TestimonialWrapper';
import SignUpForm from '../../components/SignUp/SignUpForm';
import "./SignUp.scss";
import { useNavigate } from 'react-router-dom';

export function SignUp() {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate('/getstarted');
        }
    }, [])
    return <>
        <SignUpNav></SignUpNav>
        <TestimonialWrapper></TestimonialWrapper>
        <SignUpForm></SignUpForm>
    </>;
}