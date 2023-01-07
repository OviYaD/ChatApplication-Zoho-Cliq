import React , { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';

export default function SignInForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isError,setError] = useState('');
    const [loading,setLoading] = useState(false);
    const [isValid,setValid] = useState(false);


    function ValidateEmail(mail) 
    {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        {
            return (true)
        }
        alert("You have entered an invalid email address!")
        return (false)
    }

    const emailIsExists = () => {

    }
    const checkEmail = (e) =>{
        e.preventDefault();
        ValidateEmail(email)?emailIsExists():setError(()=>!isError);
        
    }

    const handleChange = (e) => {
        e.preventDefault();
        const handleChange = (e) => {
            e.preventDefault();
            console.log(e.target)
            if(e.target.name == "email"){
                setEmail(e.target.value);
            }
            else if(e.target.name == "password"){
                setPassword(e.target.value);
            }
        }
    }

    
    const handleClick = (e) => {
        setLoading(()=>!loading);
        checkEmail();
    }


    return <>
        <div className="signin_box" id="signin_flow">
			<div className="zoho_logo ZohoChat"></div>
            <div className='signin_div'>
                <form method="post">
                    <div className="emailcheck_head">
						<span id="backup_title"><span className="icon-backarrow backoption" onclick="hideEmailOTPInitiate()">&#8592;</span>Sign-in via email OTP</span>
						<div className="backup_desc extramargin" id="emailverify_desc">Please enter your registered email address <b>jo*******57@gm***.c**</b> to receive the OTP.</div>
					</div>
                    {/* <div className="signin_head">
                        <span id="headtitle">Sign in</span>
                        <span id="trytitle"></span>
                        <div className="service_name">to access <span>Cliq</span></div>
                        <div className="fielderror"></div>
                    </div> */}
                    <div className="fieldcontainer">
                        <div className="searchparent">
                            <div className="textbox_div">
                                <span>
                                    <input id="login_id" placeholder="Email address or mobile number" value={email} onChange={handleChange} type="email" name="LOGIN_ID" className="textbox" required=""  autoCapitalize="off" autoComplete="webauthn username email" autoCorrect="off" tabIndex="1"/>
                                </span>
                            </div>

                            {/* <div className="textbox_div">
                                <span>
                                    <input id="password" placeholder="Enter password" name="PASSWORD" type="password" className="textbox" required="" onfocus="this.value = this.value;" onkeypress="clearCommonError('password')" autocapitalize="off" autocomplete="password" autocorrect="off" maxlength="250"/>
                                    <span className="icon-hide show_hide_password" onclick="showHidePassword();"></span>
                                </span>
                            </div> */}
                            {/* <button className="btn blue" id="nextbtn" tabIndex="2" >
                                <span>Next</span>
                            </button> */}
                            <LoadingButton className="btn"
                                size="small"
                                onClick={handleClick}
                                // endIcon={<SendIcon />}
                                loading={loading}
                                // loadingPosition="end"
                                variant="contained"
                                >
                                Next
                            </LoadingButton>
                        </div>
                    </div>
                    <div className="text16 pointer" id="forgotpassword">
                        <a className="text16" onClick="goToForgotPassword();">Forgot Password?</a>
                    </div>
                </form>
                <div className="line">
                    <span className="line_con">
                        <span>Or</span>
                    </span>
                </div>
                <div className="other_options">
                    <div className="options_caption">
                        Sign in using
                    </div>
                    <span className="fed_div google_icon google_fed small_box show_fed" onClick="createandSubmitOpenIDForm('google');" title="Sign in using Google" style={{display: "inline-block"}}>
                        <div className="fed_center_google">
                            <span className="fed_icon googleIcon"></span>
                        </div>
                    </span>
                    <span className="fed_div MS_icon azure_fed small_box show_fed" onClick="createandSubmitOpenIDForm('azure');" title="Sign in using Microsoft" style={{display: "inline-block"}}>
                        <div className="fed_center">
                            <span className="fed_icon"></span>
                            <span className="fed_text" style={{display: "none"}}>Microsoft</span>
						</div>
                    </span>
                    <span className="fed_div linkedin_fed_box linkedin_fed small_box show_fed" onClick="createandSubmitOpenIDForm('linkedin');" title="Sign in using Linkedin" style={{display: "inline-block"}}>
                        <div className="fed_center">
                            <span className="fed_icon linked_fed_icon"></span>
                        </div>
                    </span>
                    <span className="fed_div fb_fed_box facebook_fed small_box show_fed" onClick="createandSubmitOpenIDForm('facebook');" title="Sign in using Facebook" style={{display: "inline-block"}}>
                        <div className="fed_center">
                            <div className="fed_icon fb_fedicon"></div>
                                <span className="fed_text" style={{display: "none"}}>Facebook
                                </span>
                        </div>
                    </span>
                    <span className="fed_div twitter_fed_box twitter_fed small_box show_fed" onClick="createandSubmitOpenIDForm('twitter');" title="Sign in using Twitter" style={{display: "inline-block"}}>
                        <div className="fed_center">
                            <span className="fed_icon"></span>
                            <span className="fed_text" style={{display: "none"}}>Twitter</span>
                        </div>
                    </span>
                    <span className="fed_div apple_normal_icon apple_fed small_box" id="appleNormalIcon" onClick="createandSubmitOpenIDForm('apple');" title="Sign in using Apple" style={{display: "inline"}}>
                        <div className="fed_center">
                            <span className="fed_icon"></span>
                            <span className="fed_text" style={{display: "none"}}>Sign in with Apple</span>
                        </div>
                    </span>
                    <span className="fed_div more small_box" id="showIDPs" title="More" onClick="showMoreIdps();" style={{display: "inline"}}> 
                        <span className="morecircle"></span> 
                        <span className="morecircle"></span> 
                        <span className="morecircle"></span>
                    </span>
                </div>
            </div>
        </div>
    </>;
}