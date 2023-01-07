import React from 'react'

export default function Description(){
    return <>
        <div className="rightside_box">
            <div className="overlapBanner" style={{width:"300px",display:"block"}}>
                <div id="banner_0" class="rightbanner rightbannerTransition slideright">    
                    <div class="container">
                        <img src="https://accounts.zoho.in/v2/components/images/passwordless_illustration2x.png" style={{display:"block", width: "300px" ,height: "240px", margin: "auto"}}/>
                        <div style={{display: "block",lineHeight: "20px", fontSize: "16px",fontWeight: "600", marginTop: "20px" ,textAlign: "center"}}>Passwordless sign-in</div>
                        <div style={{display: "block",lineHeight: "20px", fontSize: "14px",fontWeight: "400",marginTop: "10px", textAlign: "center"}}>
                            Move away from risky passwords and experience one-tap access to Zoho. Download and Install OneAuth.
                        </div>
                        <a style={{display: "block", height: "36px", width: "fit-content", maxWidth: "160px", textAlign: "center", margin: "auto", marginTop: "20px", backgroundColor: "#ECF7FE", color: "#0091FF", fontWeight: "600", borderRadius: "18px", padding: "8px 20px", border: "none", cursor: "pointer", textDecoration: "none", boxSizing: "border-box", fontSize: "14px", lineHeight: "20px"}} href="https://zoho.to/za_signin_oa_rp" target="_blank"> Learn More </a>
                    </div>          
                </div>
            </div>
        </div>
    </>;
}