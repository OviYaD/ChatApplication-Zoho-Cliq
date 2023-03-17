import React, { useState } from 'react'
import ResendOtp from './ResendOtp';
import { useNavigate } from "react-router-dom";
import { createUser, getProfile } from '../../api/authentication/user';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/userSlice';

export default function Otp({ userInfo, changeValidity }) {
    const searchParams = new URLSearchParams(document.location.search);
    const [isValid, setValidity] = useState(true);
    const [otp, setOtp] = useState();
    const [btnText, setBtnText] = useState("VERIFY");
    const dispatch = useDispatch();

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            createAccount();
        }
    }

    const createAccount = async () => {

        setBtnText("VERIFY...");
        setValidity(true);
        // const data={...userInfo, otp, phone:userInfo.mobileNumber};
        console.log({ email: userInfo.email, password: userInfo.password, otp, phone: userInfo.mobileNumber });
        const msg = await createUser({ email: userInfo.email, password: userInfo.password, otp, phone: userInfo.mobileNumber });
        if (!msg) {
            setBtnText("VERIFY");
            setValidity(false);
        }
        else {
            const userInfo = await getProfile();
            dispatch(setUser(userInfo));
            localStorage.setItem("!@#$%^&*(user_id)*&^%$#@!", userInfo.data.profile.user_id);
            if (searchParams.get('id')) {
                setTimeout(() => navigate({ pathname: '/join-organization', search: `?id=${searchParams.get('id')}` }), 3000);
            }
            else {
                setTimeout(() => navigate('/getstarted'), 3000);
            }
        }

    }

    return <>
        <span className="signupotpcontainer">
            <div className="verifytitle">Verify your sign-up</div>
            <div className="verifyheader">Enter the one-time password sent to your Email Id.</div>
            <div className="otpemail">
                <span id="emailotp">{userInfo.email.slice(0, 2)}***{userInfo.email.slice(userInfo.email.indexOf('@') - 2, userInfo.email.indexOf('@') + 1)}***{userInfo.email.slice(userInfo.email.lastIndexOf('.'))}</span>
                <span className="change" onClick={() => changeValidity()} >Change</span>
            </div>
            <span className="za-otp-container field-error">
                <input type="text" className="form-input" tabIndex="1" name="otp" id="otpfield" placeholder="Enter OTP" value={otp} onChange={(e) => { setOtp(e.target.value) }} onKeyDown={handleSubmit} />

                <ResendOtp setValidity={setValidity} email={userInfo.email} isValid={isValid}></ResendOtp>
            </span>
            {!isValid && <div className="field-msg" style={{ marginTop: "5px" }}>
                <span className="error" style={{ color: "red", fontSize: "13px", fontFamily: "zoho-puvi-regular" }}>Please enter a valid OTP</span>
            </div>}
            <span className="za-submitbtn-otp">
                <input type="button" tabIndex="1" className="signupbtn changeloadbtn" value={btnText} name="otpfield" placeholder="" onClick={createAccount} disabled={btnText === "VERIFY..."} />
                <div className="loadingImg"></div>
            </span>
        </span>
    </>;
}