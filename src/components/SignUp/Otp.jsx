import React,{useState} from 'react'
import ResendPswrd from './ResendPswrd';
import { useNavigate } from "react-router-dom";
import { createUser } from '../../api/authentication/user';

export default function Otp({userInfo,changeValidity}) {
    const [isValid,setValidity] = useState(true);
    const [otp,setOtp] = useState();
    const [btnText,setBtnText] = useState("VERIFY");
    
    const navigate = useNavigate()

    const createAccount = async() => {
        setBtnText("VERIFY...");
        setValidity(true);
        const msg=await createUser({...userInfo, otp, phone:userInfo.mobileNumber});
        if(!msg){
            setBtnText("VERIFY");
            setValidity(false);
        }
        else{
            // history.push('/main')
            console.log("shdshdh")
            navigate('/main');
        }

    }

    return <>
        <span className="signupotpcontainer">
            <div className="verifytitle">Verify your sign-up</div>
            <div className="verifyheader">Enter the one-time password sent to your Email Id.</div>
            <div className="otpemail">
                <span id="emailotp">{userInfo.email.slice(0,2)}***{userInfo.email.slice(userInfo.email.indexOf('@')-2,userInfo.email.indexOf('@')+1)}***{userInfo.email.slice(userInfo.email.lastIndexOf('.'))}</span>
                <span className="change" onClick={()=>changeValidity()} >Change</span>
            </div>
            <span className="za-otp-container field-error">
                <input type="text" className="form-input" tabindex="1" name="otp" id="otpfield" placeholder="Enter OTP" value={otp} onChange={(e)=>{setOtp(e.target.value)}} />
                
                <ResendPswrd setValidity={setValidity} isValid={isValid}></ResendPswrd>
            </span>
            {!isValid && <div className="field-msg" style={{marginTop:"5px"}}>
                <span className="error" style={{ color: "red", fontSize: "13px",fontFamily:"zoho-puvi-regular" }}>Please enter a valid OTP</span>
            </div>}
            <span className="za-submitbtn-otp">
                <input type="button" tabindex="1" className="signupbtn changeloadbtn" value={btnText}  name="otpfield" placeholder="" onClick={createAccount}/>
                <div className="loadingImg"></div>
            </span>
        </span>
    </>;
}