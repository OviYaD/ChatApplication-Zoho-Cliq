import React, {useState} from 'react';
import SignUpBox from "./SignUpBox.jsx";
import Otp from "./Otp.jsx";

export default function SignUpForm(){
    
    return <>
        <div className="signup-form">
            <div className="product"> 
                <a href="#">  
                    <img className="img-responsive" typeof="foaf:Image" width="44" height="44" src="https://www.zohowebstatic.com/sites/zweb/images/producticon/cliq.svg" alt="Cliq"/> 
                    <span>Cliq</span> 
                </a>
            </div>
            <h3>Get your team started.</h3>
            {/* <SignUpBox></SignUpBox> */}
            <Otp></Otp>
                
        </div>
    </>;
}