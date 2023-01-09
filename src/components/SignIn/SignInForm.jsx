import React , { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { checkEmail, emailOtp, loginOtp, loginUser, verifyOtp } from '../../api/authentication/user';
import { useNavigate } from 'react-router-dom';
import ResendOtp from './resendOtp';


export default function SignInForm({forgetPassword}){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [otp,setOtp] = useState('');
    const [loading,setLoading] = useState(false);
    const [showEmailField, setEmailField] = useState(true);
    const [showPswdField, setPswdField] = useState(false);
    const [showOtpField, setOtpField] = useState(false);
    const [emailExists,setEmailExists] = useState();
    const [error,setError] = useState(false);
    const navigate = useNavigate();

   
    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target)
        if(e.target.name === "email"){
            setEmail(e.target.value);
        }
        else if(e.target.name === "password"){
            setPassword(e.target.value);
        }
        else if(e.target.name === "otp"){
            setOtp(e.target.value);
        }

    }

    
    const handleClick = async() => {
        setLoading(()=>!loading);
       
        const emailExists = await checkEmail({email});
        if(!emailExists){
            setEmailExists(true);
            setEmailField(false);
            setOtpField(false);
            setPswdField(true);
            setError(false);
            setPassword('');
        }
        else{
            setError(true);
        }
        setLoading(false);
    }

    const handleChangeEmail = () => {
        setError(false);
        setEmailField(true);
        setOtpField(false);
        setPswdField(false);
        setEmailExists(false);
    }

    const handleOtpSignin = async() =>{
        setError(false);
        setEmailField(false);
        setOtpField(true);
        setPswdField(false);
        await emailOtp({email})
    }

    const handlePswrdSignin = () =>{
        setError(false);
        setEmailField(false);
        setOtpField(false);
        setPswdField(true);
    }

    const handleSignin = async() => {
        setError(false)
        setLoading(true)
        const status = await loginUser({email,password});
        if(status){
            navigate('/main');
        }
        else{
            setError(true);
        }
        setLoading(false);
    }

    const loginWithOtp = async() =>{
        setLoading(()=>!loading);
        setError(false);
        const validity = await loginOtp({email,otp});
        console.log(validity);
        if(validity){
            setTimeout(()=>navigate('/main'),3000);
        }
        else{
            setError(true);
        }
        setLoading(false);
    }

    
    const passwordReset = () => {
        setTimeout(() =>forgetPassword({email}),2000);
    }

    
    return <>
        <div className="signin_box" id="signin_flow">
			<div className="zoho_logo ZohoChat"></div>
            <div className='signin_div'>
                <form method="post">
                    {/* <div className="emailcheck_head">
						<span id="backup_title"><span className="icon-backarrow backoption" onclick="hideEmailOTPInitiate()">&#8592;</span>Sign-in via email OTP</span>
						<div className="backup_desc extramargin" id="emailverify_desc">Please enter your registered email address <b>jo*******57@gm***.c**</b> to receive the OTP.</div>
					</div> */}
                    <div className="signin_head">
                        <span id="headtitle">Sign in</span>
                        <span id="trytitle"></span>
                        <div className="service_name">to access <span>Cliq</span></div>
                        <div className="fielderror"></div>
                    </div>
                    <div className="fieldcontainer">
                        <div className="searchparent">
                        {showEmailField && <>
                            <div className="textbox_div">
                                <span>
                                    <input id="login_id" placeholder="Email address or mobile number" value={email} onChange={handleChange} type="email" name="email" className="textbox" required  tabIndex="1"/>
                                    {error && <div className="fielderror errorlabel" >This account cannot be found. Please use a different account or <a href="" onClick={()=>navigate("/")}>sign up</a> for a new account.</div>}
                                </span>
                            </div>
                            <LoadingButton className="btn"
                                size="small"
                                onClick={handleClick}
                                loading={loading}
                                variant="contained"
                                >
                                Next
                            </LoadingButton></>}
                            {emailExists && <div className="hellouser">
								<div className="username">{email}</div>
								<span className="Notyou bluetext" onClick={handleChangeEmail}>Change</span>
							</div>}

                            {showPswdField && <div className="textbox_div">
                                <span>
                                    <input id="password" placeholder="Enter password" name="password" type="password" className="textbox" value={password} onChange={handleChange} required />
                                    {error && <div className="fielderror errorlabel" >Incorrect password. Please try again.</div>}
                                </span>
                                <div className="textbox_actions" id="enableotpoption" style={{display: "block"}}>
										<span className="bluetext_action" id="signinwithotp" onClick={handleOtpSignin}>Sign in using OTP</span>
										<span className="bluetext_action bluetext_action_right" id="blueforgotpassword" onClick={passwordReset}>Forgot Password?</span>
								</div>
                                <LoadingButton className="btn"
                                    size="small"
                                    onClick={handleSignin}
                                    loading={loading}
                                    variant="contained"
                                >
                                    Sign In
                                </LoadingButton>
                            </div>}


                            {showOtpField && <div className="textbox_div">
                                <span>
                                    <input id="otp" placeholder="Enter Otp" name="otp" type="number" className="textbox" required="" value={otp} onChange={handleChange} />
                                    {error && <div className="fielderror errorlabel" >Invalid otp. Please try again.</div>}
                                </span>
                                <div className="textbox_actions" id="enableotpoption" style={{display: "block"}}>
										<span className="bluetext_action" id="signinwithotp" onClick={handlePswrdSignin}>Sign in using password</span>
										<ResendOtp email={email}></ResendOtp>
                                        {/* <span className="bluetext_action bluetext_action_right  nonclickelem" id="blueforgotpassword" onclick="goToForgotPassword();" style={{color:"#626262"}}>Resend in 32s</span> */}
								</div>
                                
                                <LoadingButton className="btn"
                                    size="small"
                                    onClick={loginWithOtp}
                                    loading={loading}
                                    variant="contained"
                                >
                                    Verify
                                </LoadingButton>
                            </div>}
                        </div>
                    </div>
                    {showEmailField && <div className="text16 pointer" id="forgotpassword">
                        <a className="text16" onClick={passwordReset}>Forgot Password?</a>
                    </div>}
                </form>
                {showEmailField && <><div className="line">
                    <span className="line_con">
                        <span>Or</span>
                    </span>
                </div>
                <div className="other_options">
                    <div className="options_caption">
                        Sign in using
                    </div>
                    <span className="fed_div google_icon google_fed small_box show_fed"  style={{display: "inline-block"}}>
                        <div className="fed_center_google">
                            <span className="fed_icon googleIcon"></span>
                        </div>
                    </span>
                    <span className="fed_div MS_icon azure_fed small_box show_fed" title="Sign in using Microsoft" style={{display: "inline-block"}}>
                        <div className="fed_center">
                            <span className="fed_icon"></span>
                            <span className="fed_text" style={{display: "none"}}>Microsoft</span>
						</div>
                    </span>
                    <span className="fed_div linkedin_fed_box linkedin_fed small_box show_fed"  title="Sign in using Linkedin" style={{display: "inline-block"}}>
                        <div className="fed_center">
                            <span className="fed_icon linked_fed_icon"></span>
                        </div>
                    </span>
                    <span className="fed_div fb_fed_box facebook_fed small_box show_fed"  title="Sign in using Facebook" style={{display: "inline-block"}}>
                        <div className="fed_center">
                            <div className="fed_icon fb_fedicon"></div>
                                <span className="fed_text" style={{display: "none"}}>Facebook
                                </span>
                        </div>
                    </span>
                    <span className="fed_div twitter_fed_box twitter_fed small_box show_fed"  title="Sign in using Twitter" style={{display: "inline-block"}}>
                        <div className="fed_center">
                            <span className="fed_icon"></span>
                            <span className="fed_text" style={{display: "none"}}>Twitter</span>
                        </div>
                    </span>
                    <span className="fed_div apple_normal_icon apple_fed small_box" id="appleNormalIcon"  title="Sign in using Apple" style={{display: "inline"}}>
                        <div className="fed_center">
                            <span className="fed_icon"></span>
                            <span className="fed_text" style={{display: "none"}}>Sign in with Apple</span>
                        </div>
                    </span>
                    <span className="fed_div more small_box" id="showIDPs" title="More"  style={{display: "inline"}}> 
                        <span className="morecircle"></span> 
                        <span className="morecircle"></span> 
                        <span className="morecircle"></span>
                    </span>
                </div></>}
            </div>
        </div>
    </>;
}