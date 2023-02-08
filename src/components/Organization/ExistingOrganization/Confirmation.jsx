import React from 'react'

export default function Confirmation() {
	return <>
		<div className="responseui w75">
			<svg width="129px" height="54px" viewBox="0 0 129 54" version="1.1">
				<defs></defs>
				<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<g id="Artboard" transform="translate(-123.000000, -263.000000)">
						<g id="request-sent" transform="translate(124.000000, 263.000000)">
							<path d="M104.236842,5.5 L112.763158,5.5" id="Line" stroke="#C2C2C2" strokeWidth="1.46999995" strokeLinecap="square"></path>
							<path d="M18.2333333,50.5 L24.7666667,50.5" id="Line-Copy-2" stroke="#C2C2C2" strokeWidth="1.46999995" strokeLinecap="square"></path>
							<path d="M110.25,14.5 L126.75,14.5" id="Line-Copy" stroke="#C2C2C2" strokeWidth="1.46999995" strokeLinecap="square"></path>
							<path d="M0.243902439,42.5 L19.7560976,42.5" id="Line-Copy-3" stroke="#C2C2C2" strokeWidth="1.46999995" strokeLinecap="square"></path>
							<circle id="Oval-2" stroke="#C2C2C2" strokeWidth="0.979999967" cx="103.5" cy="45.5" r="1.01000002"></circle>
							<circle id="Oval-2-Copy" stroke="#C2C2C2" strokeWidth="0.979999967" cx="25.5" cy="11.5" r="1.01000002"></circle>
							<g id="check-(2)" transform="translate(38.000000, 0.000000)" fillRule="nonzero">
								<g id="Layer_1">
									<ellipse id="Oval" fill="#61C2AB" cx="27" cy="27" rx="27" ry="26.9822812"></ellipse>
									<polygon id="Shape" fill="#FFFFFF" points="24.8349375 41.3521875 12.069 31.4069063 15.6988125 26.7485625 23.5380937 32.855625 36.4761562 14.1859688 41.3310937 17.5491563"></polygon>
								</g>
							</g>
						</g>
					</g>
				</g>
			</svg>
			<div className="font24 clr-hdr fontB mT50 mB10">Awesome!</div>
			<div className="font16 line26 mB30">Your request is successfully sent. </div>
			<div className="mT50"><div className="font14 line22 clr-lp1 mB10" style={{ marginTop: "50px", marginBottom: "15px" }}>Note: You will be notified via email once your request is approved.</div><span id="cancelrequesttext" purpose="cancelRequest" className="cancel" >Cancel Request</span></div>
		</div>
	</>
}