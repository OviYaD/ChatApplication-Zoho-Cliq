import React, { Component } from 'react';
import SignUpNav from '../../components/SignUp/NavBar';
import TestimonialWrapper from '../../components/SignUp/TestimonialWrapper';
import SignUpForm from '../../components/SignUp/SignUpForm';
import "./SignUp.scss";

export function SignUp(){
    return <>
        <SignUpNav></SignUpNav>
        <TestimonialWrapper></TestimonialWrapper>
        <SignUpForm></SignUpForm>
    </>;
}