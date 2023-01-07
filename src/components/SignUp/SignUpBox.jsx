import React, { useState,useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import validator from 'validator';
import { emailOtp } from '../../api/authentication/user';

export default function SignUpBox({changeValidity}){
    const [email, setEmail] = useState('richardjoel835@gmail.com');
    const [password, setPassword] = useState('30-MaY-02');
    const [mobileNumber, setMobileNumber] = useState('9876543210');
    const [checked, setChecked] = useState(true);
    const [btnText,setBtnText] = useState("Start your Free Trial")
    // const [isError,setError] = useState(false)
    const [errorMsg,setErrorMsg] = useState({email:true,pswrd:true,mobileNo:true,isChecked:true});


    
    
    function validateEmail(mail) 
    {
        console.log('validateEmail');
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        {
            return (true)
        }
        // alert("You have entered an invalid email address!")
        return (false)
    }

    function validatePassword(password){
        if (validator.isStrongPassword(password, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
          })) {
            return true;
          }
            return false;
          
    }

    function validateMobileNumber(number){
        const isValidPhoneNumber = validator.isMobilePhone(number)
        return (isValidPhoneNumber)
       }

    const handleChange = (e) => {
        e.preventDefault();
        if(e.target.name == "email"){
            setEmail(e.target.value);
        }
        else if(e.target.name == "password"){
            setPassword(e.target.value);
        }
        else if(e.target.name == "rmobile"){
            setMobileNumber(e.target.value);
        }
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(email,password,mobileNumber);
        !validateEmail(email)?
            setErrorMsg((errorMsg) => {
                return {
                    ...errorMsg,
                    email:false
                }
            }):
            setErrorMsg((errorMsg) => {
                return {
                    ...errorMsg,
                    email:true
                }
            })
        !validatePassword(password)?
            setErrorMsg((errorMsg) => {
                return {
                    ...errorMsg,
                    pswrd:false
                }
            }):
            setErrorMsg((errorMsg) => {
                return {
                    ...errorMsg,
                    pswrd:true
                }
            })
        mobileNumber.length<10 || mobileNumber.length>10 || !validateMobileNumber(mobileNumber)?
            setErrorMsg((errorMsg) => {
                return {
                    ...errorMsg,
                    mobileNo:false
                }
            }):
            setErrorMsg((errorMsg) => {
                return {
                    ...errorMsg,
                    mobileNo:true
                }
            })
        !checked?
            setErrorMsg((errorMsg) => {
                return {
                    ...errorMsg,
                    isChecked:false
                }
            }):
            setErrorMsg((errorMsg) => {
                return {
                    ...errorMsg,
                    isChecked:true
                }
            })
        
        if(errorMsg.email && errorMsg.pswrd && errorMsg.mobileNo && errorMsg.isChecked){
            setBtnText("Creating Your Account...")
            await emailOtp({email});
            setTimeout(()=>changeValidity({email,password,mobileNumber}),2000);
            
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
                                        <input className="placeholder" id="email" name="email" placeholder="Email" type="text" value={email} onChange={handleChange}/>
                                        {!errorMsg.email && <div className="field-msg">
                                            <span id="email-error" className="error jqval-error">Please enter a valid email address</span>
                                        </div>}
                                    </div>
                                </div>
                                <div className="password sgfrm">
                                    <div className="wrap-elm">
                                        {/* <span className="placeholder">Email *</span> */}
                                        <input className="placeholder" id="password" name="password" placeholder="Password" type="password" value={password} onChange={handleChange}/>
                                        {!errorMsg.pswrd && <div class="field-msg"><span id="password-error" class="error jqval-error">Password cannot be less than 8 characters</span></div>}
                                    </div>
                                </div>
                                <div className="za-rmobile-container sgfrm rmobiledisabled">
                                    <div align="left" className="za-country_code-container "> 
                                        <input className="phone_countrycode" name="x_phone_countrycode" type="hidden" value="+91" placeholder="" mandate="false"/>
                                        <div className="ccodelabel" id="countryCodeDiv">
                                            <div className="ccodediv" id="ccodediv" style={{paddingTop:"3px"}}>+91</div>
                                        </div>
                                        {/* <span className="dialphonenum placeholder">Phone Number *</span> */}
                                        <input id="rmobile" className="dialphone" name="rmobile" placeholder="Mobile Number" style={{paddingLeft:"90px",width:"84%"}} spellCheck="false" type="text" value={mobileNumber} onChange={handleChange}/>
                                        {!errorMsg.mobileNo && <div class="field-msg"><span id="rmobile-error" class="error jqval-error">Please enter a valid mobile number.</span></div>}
                                    </div>
                                </div>
                                <p className="zcountry-info zshow">It looks like you‘re in<span id="zip-countryname"> india </span><span>based on your IP</span>.<span id="zip-countryname-change">Change Country</span></p>

                                <div className="sgnbtnmn" style={{width:"104%"}}>
                                    {/* <div className="za-newsletter-container snews-letter" style={{display: "block"}}>
                                        <label htmlFor="newsletter" className="news-signup sign_agree"> 
                                            <input tabindex="1" className="za-newsletter" type="checkbox" id="newsletter" name="newsletter" value="true" onClick="toggleNewsletterField()" placeholder=""/> 
                                            <span className="icon-medium checked" id="signup-newsletter"></span> 
                                            <span>I would like to receive marketing communication from Zoho and Zoho’s regional partners regarding Zoho’s products, services, and events.</span> 
                                        </label>
                                    </div> */}
                                    <div className="za-tos-container flex justifySB dflxcent" >
                                    <Checkbox
                                    checked={checked}
                                    onChange={()=>setChecked((checked)=>!checked)}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                        <label className="sign_agree" htmlFor="tos">
                                            I agree to the 
                                            <a href="https://www.zoho.com/cliq/terms.html" target="_blank" rel="noopener">Terms of Service </a> 
                                            and 
                                            <a className="zrlink" href="https://www.zoho.com/privacy.html" target="_blank" rel="noopener"> Privacy Policy</a>.
                                            {/* <input className="za-tos signup-termservice" id="tos" name="tos" onClick="toggleTosField()" tabindex="1" type="checkbox" value="false" placeholder=""/> */}
                                        </label>
                                    </div>
                                            {!errorMsg.isChecked && <div class="field-msg"><span id="tos-error" class="error jqval-error">Please read and accept the Terms of Service and Privacy Policy</span></div>}
                                    <div className="sgnbtn">
                                        <input className="signupbtn" onClick={handleSubmit} id="signupbtn" type="submit" value={btnText} style={{opacity: "1"}} placeholder=""/>
                                    </div>
                                </div>
                                <div className="socl-signup"> 
                                    <p><b>or sign in using  </b>
                                        <span className="vi-google"  title="Google">Google</span>
                                        <span className="vi-facebook"  title="Facebook" >Facebook</span>
                                        <span className="vi-linkedin"  title="Linkedin">Linkedin</span>
                                        <span className="vi-twitter"  title="Twitter" >Twitter</span>
                                        <span className="vi-office365"  title="Office365">Office365</span>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
    
    </>;
}