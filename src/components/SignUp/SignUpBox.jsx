import React, { useState } from 'react'

export default function SignUpBox(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target)
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
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email,password,mobileNumber);
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
                                    </div>
                                </div>
                                <div className="password sgfrm">
                                    <div className="wrap-elm">
                                        {/* <span className="placeholder">Email *</span> */}
                                        <input className="placeholder" id="password" name="password" placeholder="Password" type="password" value={password} onChange={handleChange}/>
                                    </div>
                                </div>
                                <div className="za-rmobile-container sgfrm rmobiledisabled">
                                    <div align="left" className="za-country_code-container "> 
                                        <input className="phone_countrycode" name="x_phone_countrycode" type="hidden" value="+91" placeholder="" mandate="false"/>
                                        <div className="ccodelabel" id="countryCodeDiv">
                                            <div className="ccodediv" id="ccodediv" style={{paddingTop:"3px"}}>+91</div>
                                        </div>
                                        {/* <span className="dialphonenum placeholder">Phone Number *</span> */}
                                        <input id="rmobile" className="dialphone" name="rmobile" placeholder="Mobile Number" style={{paddingLeft:"90px",width:"84%"}} spellcheck="false" type="text" value={mobileNumber} onChange={handleChange}/>
                                    </div>
                                </div>
                                <p className="zcountry-info zshow">It looks like you‘re in<span id="zip-countryname"> india </span><span>based on your IP</span>.<span id="zip-countryname-change">Change Country</span></p>

                                <div className="sgnbtnmn" style={{width:"104%"}}>
                                    {/* <div className="za-newsletter-container snews-letter" style={{display: "block"}}>
                                        <label for="newsletter" className="news-signup sign_agree"> 
                                            <input tabindex="1" className="za-newsletter" type="checkbox" id="newsletter" name="newsletter" value="true" onclick="toggleNewsletterField()" placeholder=""/> 
                                            <span className="icon-medium checked" id="signup-newsletter"></span> 
                                            <span>I would like to receive marketing communication from Zoho and Zoho’s regional partners regarding Zoho’s products, services, and events.</span> 
                                        </label>
                                    </div> */}
                                    <div className="za-tos-container">
                                        <label className="sign_agree" for="tos">
                                            <span className="unchecked" id="signup-termservice">&nbsp;</span>
                                            I agree to the 
                                            <a href="/cliq/terms.html" target="_blank" rel="noopener">Terms of Service </a> 
                                            and 
                                            <a className="zrlink" href="/privacy.html" target="_blank" rel="noopener"> Privacy Policy</a>.
                                            {/* <input className="za-tos signup-termservice" id="tos" name="tos" onclick="toggleTosField()" tabindex="1" type="checkbox" value="false" placeholder=""/> */}
                                        </label>
                                    </div>
                                    <div className="sgnbtn">
                                        <input className="signupbtn" onClick={handleSubmit} id="signupbtn" type="submit" value="Start your Free Trial" style={{opacity: "1"}} placeholder=""/>
                                    </div>
                                </div>
                                <div className="socl-signup"> 
                                    <p><b>or sign in using  </b>
                                        <span className="vi-google" onclick="FederatedSignIn.GO('GOOGLE');zohoFedClickEvent('Google');" title="Google">Google</span>
                                        <span className="vi-facebook" onclick="FederatedSignIn.GO('FACEBOOK');zohoFedClickEvent('Facebook');" title="Facebook" >Facebook</span>
                                        <span className="vi-linkedin" onclick="FederatedSignIn.GO('LINKEDIN');zohoFedClickEvent('Linkedin');" title="Linkedin">Linkedin</span>
                                        <span className="vi-twitter" onclick="FederatedSignIn.GO('TWITTER');zohoFedClickEvent('Twitter');" title="Twitter" >Twitter</span>
                                        <span className="vi-office365" onclick="FederatedSignIn.GO('AZURE');zohoFedClickEvent('office365');" title="Office365">Office365</span>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
    
    </>;
}