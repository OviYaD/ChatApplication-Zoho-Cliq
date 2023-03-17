import React, { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { emailOtp, checkEmail } from '../../api/authentication/user';
import { validateEmail } from '../Validators/email';
import { validatePassword } from '../Validators/password';
import { validateMobileNumber } from '../Validators/mobileNumber';
import { useNavigate } from 'react-router-dom';
// import { signInWithGoogle } from '../../firebase';
import { googleAuth } from '../../api/authentication/user';
import { toast } from 'react-toastify';


export default function SignUpBox({ changeValidity }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [checked, setChecked] = useState(false);
    const [btnText, setBtnText] = useState("Start your Free Trial")
    const [loading, setLoading] = useState(true);
    const [emailExists, setEmailExists] = useState(false);
    const [errorMsg, setErrorMsg] = useState({ email: true, pswrd: true, mobileNo: true, isChecked: true });
    const [showPswrd, setShowPswrd] = useState(false);
    const navigate = useNavigate();

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSubmit(event);
        }
    }

    // const handleSignupWithGoogle = async () => {
    //     const idToken = await signInWithGoogle();
    //     const res = await googleAuth(idToken);
    //     if (res) {
    //         navigate("/getstarted")
    //     }
    //     else {
    //         toast.error("Temporary Error", {
    //             position: "top-right",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "dark",
    //         })
    //     }
    // }

    const validateOnBlur = (field) => {
        const error = {}
        if (field === "email") {
            !validateEmail(email) ? error.email = false : error.email = true;
        }
        else if (field === "password") {
            !validatePassword(password) ? error.pswrd = false : error.pswrd = true;
        }
        else if (field === "mobile") {
            mobileNumber.length > 10 || mobileNumber.length < 10 ? error.mobileNo = false : error.mobileNo = true;
        }
        setErrorMsg((err) => { return { ...err, ...error } })
        // return error;
    }

    const checkValidity = () => {
        const error = {}
        !validateEmail(email) ? error.email = false : error.email = true;

        !validatePassword(password) ? error.pswrd = false : error.pswrd = true;

        mobileNumber.length > 10 || mobileNumber.length < 10 ? error.mobileNo = false : error.mobileNo = true;
        console.log(!validateMobileNumber(mobileNumber));
        !checked ? error.isChecked = false : error.isChecked = true;
        console.log(error)

        setErrorMsg(() => { return { ...error } })
        return error;
    }
    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.name === "email") {
            setEmail(e.target.value);
        }
        else if (e.target.name === "password") {
            setPassword(e.target.value);
        }
        else if (e.target.name === "rmobile") {
            setMobileNumber(e.target.value);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, password, mobileNumber);
        const error = checkValidity();
        if (error.email && error.pswrd && error.mobileNo && error.isChecked) {
            setBtnText("Creating Your Account...")
            let emailExists = await checkEmail({ email })
            if (emailExists) {
                console.log(emailExists);
                emailOtp({ email });
                setTimeout(() => changeValidity({ email, password, mobileNumber }), 2000);
            }
            else {
                setBtnText("Start Your Free Trail")
                setEmailExists(true);
            }
        }
    }
    return <>
        <div className="signup-box">
            <div className="signup-frm">
                <form method="post">
                    <div className="signup-container">
                        <div className="email sgfrm">
                            <div className="wrap-elm">
                                {/* <span className="placeholder">Email *</span> */}
                                <input className="placeholder" id="email" name="email" placeholder="Email" type="text" value={email} onChange={handleChange} onKeyDown={handleKeyDown} onBlur={() => validateOnBlur("email")} />
                                {!errorMsg.email && <div className="field-msg">
                                    <span id="email-error" className="error jqval-error">Please enter a valid email address</span>
                                </div>}
                                {emailExists && <span id="email-error" className="error jqval-error">An account already exists for this email address. <a href="#" onClick={() => navigate('/signin')} tabIndex="-1">Sign in</a> or use a different email address to sign up.</span>}
                            </div>
                        </div>
                        <div className="password sgfrm">
                            <div className="wrap-elm" style={{ position: "relative" }}>
                                {/* <span className="placeholder">Email *</span> */}
                                <input className="placeholder" id="password" name="password" placeholder="Password" type={`${showPswrd ? "text" : "password"}`} value={password} onChange={handleChange} onKeyDown={handleKeyDown} onBlur={() => validateOnBlur("password")} />
                                <div className='cur' style={{ position: "absolute", top: "17px", right: "0", color: "#000" }} onClick={() => setShowPswrd((showPswrd) => !showPswrd)}>
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
                                {!errorMsg.pswrd && <div className="field-msg"><span id="password-error" className="error jqval-error">Password cannot be less than 8 characters, should contains special character, one uppercase letter, one number</span></div>}
                            </div>
                        </div>
                        <div className="za-rmobile-container sgfrm rmobiledisabled" style={{ width: "100%" }}>
                            <div align="left" className="za-country_code-container ">
                                <input className="phone_countrycode" name="x_phone_countrycode" type="hidden" value="+91" placeholder="" mandate="false" />
                                <div className="ccodelabel" id="countryCodeDiv">
                                    <div className="ccodediv" id="ccodediv" style={{ paddingTop: "3px" }}>+91</div>
                                </div>
                                {/* <span className="dialphonenum placeholder">Phone Number *</span> */}
                                <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" min="6000000000" max="9000000000" id="rmobile" className="dialphone" name="rmobile" placeholder="Mobile Number" style={{ paddingLeft: "18%", width: "84%" }} spellCheck="false" value={mobileNumber} onKeyDown={handleKeyDown} onChange={handleChange} required={true} onBlur={() => validateOnBlur("mobile")} />
                            </div>
                            {!errorMsg.mobileNo && <div className="field-msg"><span id="rmobile-error" className="error jqval-error">Please enter a valid mobile number.</span></div>}
                        </div>
                        {/* <p className="zcountry-info zshow">It looks like you‘re in<span id="zip-countryname"> india </span><span>based on your IP</span>.<span id="zip-countryname-change">Change Country</span></p> */}

                        <div className="sgnbtnmn" style={{ width: "104%" }}>

                            <div className="za-tos-container flex justifySB dflxcent" >
                                <Checkbox
                                    checked={checked}
                                    onChange={() => setChecked((checked) => !checked)}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                                <label className="sign_agree" htmlFor="tos" onClick={() => setChecked((checked) => !checked)}>
                                    I agree to the
                                    <a href="https://www.zoho.com/cliq/terms.html" target="_blank" rel="noopener">Terms of Service </a>
                                    and
                                    <a className="zrlink" href="https://www.zoho.com/privacy.html" target="_blank" rel="noopener"> Privacy Policy</a>.
                                    {/* <input className="za-tos signup-termservice" id="tos" name="tos" onClick="toggleTosField()" tabIndex="1" type="checkbox" value="false" placeholder=""/> */}
                                </label>
                            </div>
                            {!errorMsg.isChecked && <div className="field-msg"><span id="tos-error" className="error jqval-error">Please read and accept the Terms of Service and Privacy Policy</span></div>}
                            <div className={`sgnbtn curP ${btnText !== "Creating Your Account..." ? "cur" : ""}`}>
                                <input className="signupbtn" onClick={handleSubmit} id="signupbtn" type="submit" value={btnText} style={{ opacity: "1" }} placeholder="" disabled={btnText === "Creating Your Account..."} />
                            </div>
                        </div>
                        <div className="socl-signup">
                            <p><b>or sign in using  </b>
                                <span className="vi-google" title="Google"
                                // onClick={handleSignupWithGoogle}
                                >Google</span>
                                {/* <span className="vi-facebook" title="Facebook" >Facebook</span> */}
                                {/* <span className="vi-linkedin" title="Linkedin">Linkedin</span> */}
                                {/* <span className="vi-twitter" title="Twitter" >Twitter</span> */}
                                {/* <span className="vi-office365" title="Office365">Office365</span> */}
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div >

    </>;
}