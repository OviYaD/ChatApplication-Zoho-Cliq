import React, { useState, useEffect } from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from 'react-router-dom';
import { emailOtp, ResetPassword, verifyOtp, checkEmail } from '../../api/authentication/user';
import ResendOtp from '../../components/SignIn/resendOtp';
import { validateEmail } from '../../components/Validators/email';
import { toast } from 'react-toastify';

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
    const [inputError, setInputError] = useState(false);
    const [showPswrd, setShowPswrd] = useState(false)
    const [showCPswrd, setShowCPswrd] = useState(false)


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

    const handleKeyDown = (event, field) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            if (field === "email")
                verifyEmail();
            else if (field === "otp")
                handleVerification();
            else if (field === "pswd") {
                var $this = (event.target);
                var index = parseFloat($this.attr('data-index'));
                ('[data-index="' + (index + 1).toString() + '"]').focus();
            }
            else if (field === "cpswd") {
                updatePassword();
            }
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
        let error = {};
        !validateEmail(email) ? error.email = false : error.email = true;
        setInputError(!error.email);

        if (error.email) {
            const verified = await checkEmail({ email });
            if (email.length <= 0 || verified) {
                setEmailStatus(true)
            }
            else {
                setEmailField(false);
                setSendOtpBtn(true);
            }
        }
        setLoading(false);


    }
    const updatePassword = async () => {
        setLoading(() => !loading);
        setPswrdMisMatch(false);
        setTimeout(() => setLoading(false), 1000);
        if (!pswrd.length <= 0 && pswrd === confirmPswrd) {
            const res = await ResetPassword({ email, otp, password: pswrd });
            if (res) {
                toast.success("Password updated Successfully", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                })
                setResetPswrd(false);
            }
            else {
                toast.error("Old Password Can't be used", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                })
            }
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
                            <div className="head_info">Enter your registered email address to change your Prezz account password.</div>
                        </div>
                        <div className="textbox_div">
                            <span style={{ marginBottom: "25px" }}>
                                <input id="email" placeholder="Enter Email" name="email" type="email" className={`textbox ${invalidEmail && "errorborder"}`} required value={email} onChange={handleChange} onKeyDown={(e) => handleKeyDown(e, "email")} />
                                {invalidEmail && <div className="fielderror errorlabel">Invalid Email address. Please try again. <a href="#" onClick={() => navigate("/")}>Sign up</a></div>}
                                {inputError && <div className="fielderror errorlabel" >Enter Valid Email</div>}

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
                        <input id="otp" placeholder="Enter Otp" name="otp" type="number" className="textbox" required="" value={otp} onChange={handleChange} onKeyDown={(e) => handleKeyDown(e, "otp")} />
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
                        <div style={{ position: "relative" }}>

                            <input id="pswrd" placeholder="New Password" name="newpass" type={`${showPswrd ? "text" : "password"}`} className="textbox" required="" value={pswrd} onChange={handleChange} onKeyDown={(e) => handleKeyDown(e, "pswd")} data-index="1" />
                            <div className='cur' style={{ position: "absolute", top: "12.5px", right: "10px", color: "#000" }} onClick={() => setShowPswrd((showPswrd) => !showPswrd)}>
                                {!showPswrd ? <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                </svg> :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
                                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                                        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                                    </svg>
                                }
                            </div>
                        </div>
                        <div style={{ position: "relative" }}>
                            <input id="confirm_pswrd" placeholder="Confirm New Password" name="confirmpass" type={`${showCPswrd ? "text" : "password"}`} className={`textbox ${pswrdMisMatch && "errorborder"}`} style={{ marginTop: "30px" }} required="" value={confirmPswrd} onChange={handleChange} onKeyDown={(e) => handleKeyDown(e, "cpswd")} data-index="2" />
                            <div className='cur' style={{ position: "absolute", top: "12.5px", right: "10px", color: "#000" }} onClick={() => setShowCPswrd((showCPswrd) => !showCPswrd)}>
                                {!showCPswrd ? <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                </svg> :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
                                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                                        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                                    </svg>
                                }
                            </div>
                        </div>
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