import React, { useState, useEffect } from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from 'react-router-dom';
import { emailOtp, ResetPassword, verifyOtp, checkEmail } from '../../api/authentication/user';
import ResendOtp from '../../components/SignIn/resendOtp';

export default function PasswordReset({ userData, setResetPswrd }) {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [pswrd, setPswrd] = useState('');
    const [confirmPswrd, setConfirmPswrd] = useState('');
    const [showEmailField, setEmailField] = useState(false);
    const [showOtpField, setOtpField] = useState(false);
    const [showBtn, setSendOtpBtn] = useState(true);
    const [showPswrdField, setPswrdField] = useState(false);
    const [pswrdMisMatch, setPswrdMisMatch] = useState(false);
    const [invalidOtp, setOtpStatus] = useState(false)
    const [invalidEmail, setEmailStatus] = useState(false);

    const navigate = useNavigate();



    useEffect(() => {
        if (!userData.email || userData.email.length <= 0) {
            setEmailField(true);
            setSendOtpBtn(false);
        }
        else {
            setEmail(userData.email);
        }
    }, [email])

    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
        }
    }

    const handleChange = (e) => {
        e.preventDefault();

        if (e.target.name === "email") {
            setEmail(e.target.value);
        }
        if (e.target.name === "otp") {
            setOtp(e.target.value);
        }
        if (e.target.name === "newpass") {
            setPswrd(e.target.value);
        }
        if (e.target.name === "confirmpass") {
            setConfirmPswrd(e.target.value);
        }
    }

    const enableFields = () => {
        setLoading(false);
        setEmailField(true);
        setSendOtpBtn(false);
        setOtpField(false)
    }
    const handleClick = async () => {
        setLoading(() => !loading);
        await emailOtp({ email });
        setOtpField(true);
        setSendOtpBtn(false);
        setLoading(false);
    }

    const handleVerification = async () => {
        setLoading(() => !loading);
        const verified = await verifyOtp({ email, otp });
        if (!otp.length <= 0 && verified) {
            setOtpField(false);
            setSendOtpBtn(false);
            setLoading(false);
            setPswrdField(true);
        }
        else {
            setOtpStatus(true);
        }

        setLoading(false);
    }

    const verifyEmail = async () => {
        setLoading(() => !loading);
        const verified = await checkEmail({ email });
        if (email.length <= 0 || verified) {
            setEmailStatus(true)
        }
        else {
            setEmailField(false);
            setSendOtpBtn(true);
        }
        setLoading(false);


    }
    const updatePassword = async () => {
        setLoading(() => !loading);
        setPswrdMisMatch(false);
        setTimeout(() => setLoading(false), 1000);
        if (!pswrd.length <= 0 && pswrd === confirmPswrd) {
            await ResetPassword({ email, otp, password: pswrd });
            setResetPswrd(false);
        }
        else {
            setPswrdMisMatch(true);
        }
    }
    return <>
        <div className="recovery_box">
            <div className="zoho_logo ZohoChat"></div>
            <div id="username_div" className="recover_sections">
                {
                    showEmailField && <>
                        <div className='info_head'>
                            <span id="headtitle">Forgot Password</span>
                            <div className="head_info">Enter your registered email address to change your Zoho account password.</div>
                        </div>
                        <div className="textbox_div">
                            <span style={{ marginBottom: "25px" }}>
                                <input id="email" placeholder="Enter Email" name="email" type="email" className={`textbox ${invalidEmail && "errorborder"}`} required value={email} onChange={handleChange} onKeyDown={handleKeyDown} />
                                {invalidEmail && <div className="fielderror errorlabel">Invalid Email address. Please try again. <a href="#" onClick={() => navigate("/")}>Sign up</a></div>}

                            </span>
                            <LoadingButton className="btn"
                                onClick={verifyEmail}
                                loading={loading}
                                variant="contained"

                            >
                                Next
                            </LoadingButton>
                        </div>
                    </>
                }
                {!showEmailField && !showPswrdField && <div className="info_head">

                    <div className="user_info_space user_info" id="recovery_user_info"  >
                        <span className="menutext">{email}</span>
                        <span className="change_user" onClick={enableFields}>Change</span>
                    </div>

                    <span id="headtitle">Forgot Password</span>
                    <div className="head_info">A one-time password (OTP) will be sent to your registered email address for verification.</div>
                </div>}
                {showBtn && <div className="fieldcontainer">
                    {/* <button className="btn blue" id="username_select_action" onclick="call_recusernameScreen()" tabIndex="2"><span>Send OTP</span></button> */}
                    <LoadingButton className="btn"
                        onClick={handleClick}
                        loading={loading}
                        variant="contained"

                    >
                        Send Otp
                    </LoadingButton>
                </div>}
                {showOtpField && <div className="textbox_div">
                    <span>
                        <input id="otp" placeholder="Enter Otp" name="otp" type="number" className="textbox" required="" value={otp} onChange={handleChange} onKeyDown={handleKeyDown} />
                        {invalidOtp && <div className="fielderror errorlabel">Incorrect OTP. Please try again.</div>}

                    </span>
                    <div className="textbox_actions" id="enableotpoption" style={{ display: "block" }}>
                        {/* <span className="bluetext_action" id="signinwithotp" >Sign in using password</span> */}
                        <ResendOtp email={email}></ResendOtp>
                        {/* <span className="bluetext_action   nonclickelem" id="blueforgotpassword"  style={{color:"#626262"}}>Resend in 32s</span> */}
                    </div>

                    <LoadingButton className="btn"
                        size="small"
                        onClick={handleVerification}
                        loading={loading}
                        variant="contained"
                    >
                        Verify
                    </LoadingButton>
                </div>}

                {showPswrdField && <div className="textbox_div">


                    <div className='info_head'>
                        <span id="headtitle">Create New Password</span>
                        <div className="head_info">Enter a unique and strong password that is easy to remember so that you won't forget it the next time.</div>
                    </div>
                    <span>
                        <input id="pswrd" placeholder="New Password" name="newpass" type="text" className="textbox" required="" value={pswrd} onChange={handleChange} onKeyDown={handleKeyDown} />
                        <input id="confirm_pswrd" placeholder="Confirm New Password" name="confirmpass" type="text" className={`textbox ${pswrdMisMatch && "errorborder"}`} style={{ marginTop: "30px" }} required="" value={confirmPswrd} onChange={handleChange} onKeyDown={handleKeyDown} />
                        {pswrdMisMatch && <div className="fielderror errorlabel">Passwords don't match</div>}
                    </span>


                    <LoadingButton className="btn"
                        size="small"
                        onClick={updatePassword}
                        loading={loading}
                        variant="contained"
                        style={{ marginTop: "30px" }}
                    >
                        Change Password
                    </LoadingButton>
                </div>}

                <div className="bottom_line_opt"><div className="bottom_option "  >Contact Support</div></div>

            </div>

        </div>
    </>;
}