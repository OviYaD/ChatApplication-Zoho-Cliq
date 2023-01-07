import React from 'react'

export default function Otp() {
    return <>
        <span className="signupotpcontainer">
            <div className="verifytitle">Verify your sign-up</div>
            <div className="verifyheader">Enter the one-time password sent to your mobile number.</div>
            <div className="otpmobile">
                <span id="mobileotp">6379895536</span>
                <span className="change" onClick="gobacktosignuptemp()">Change</span>
            </div>
            <span className="za-otp-container field-error">
                <input type="text" className="form-input" tabindex="1" name="otp" id="otpfield" placeholder="" />
                <span onclick="resendOTP()" className="resendotp">Resend OTP</span>
            </span>
            <div className="field-msg">
                <span className="error" style={{ color: "red", fontSize: "13px",fontFamily:"zoho-puvi-regular" }}>Please enter a valid OTP</span>
            </div>
            <span className="za-submitbtn-otp">
                <input type="button" tabindex="1" className="signupbtn changeloadbtn" value="VERIFY" onClick="validateOTP()" name="otpfield" placeholder="" />
                <div className="loadingImg"></div>
            </span>
        </span>
    </>;
}