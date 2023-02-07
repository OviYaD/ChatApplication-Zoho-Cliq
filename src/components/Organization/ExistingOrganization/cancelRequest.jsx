import React, { useEffect, useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Header from '../Header';
import FindCompany from './findCompany';
import { useNavigate } from 'react-router-dom';
import { getInvitation, joinOrganization } from '../../../api/Organization/Organization';
import { checkEmail } from '../../../api/authentication/user';
import SendIcon from '@mui/icons-material/Send';
import LoadingPage from '../../loaders/LoadingPage';

export default function CancelRequest() {
	const searchParams = new URLSearchParams(document.location.search);
	const [queryId, setQueryId] = useState("");
	const [invitationDetails, setInvitationDetails] = useState();
	const [userExists, setUserExists] = useState();
	const [loggedIn, setLoggedIn] = useState(false);
	const [loading, setLoading] = useState(false);

	const addMember = async () => {
		await joinOrganization({ invitation_id: searchParams.get('id') })
	}
	async function handleClick() {
		setLoading(true);
		await addMember();
		setTimeout(() => navigate({ pathname: "/getstarted", search: "?from=1" }), 2000)

	}

	// return (
	// 	<div>Tutorial: {searchParams.get('id')}</div>
	// )
	const navigate = useNavigate();
	useEffect(() => {
		console.log("shdsjhdjsh");
		const getInvitationDetails = async () => {
			const inviDetails = await getInvitation(searchParams.get('id'));
			setInvitationDetails(inviDetails);
			const exists = await checkEmail({ email: inviDetails.email });
			console.log("exists", exists);
			if (!exists) {
				if (localStorage.getItem('token')) {
					setLoggedIn(true);
					setUserExists(!exists);
				}
				else {
					setLoggedIn(false);
					setUserExists(exists);
				}
			}
			else {
				setUserExists(!exists);
			}

		}
		setQueryId(searchParams.get('id'));
		getInvitationDetails();
	}, [])


	if (userExists !== undefined) {
		return <>
			<div className='organization' style={{ height: "100%", overflowY: "hidden" }}>
				<header className="flexC justifySB w100">
					<a className="logo"><img src="https://static.zohocdn.com/chat/source/officechat/images/newlogodark.png" /></a>

				</header>
			</div>
			<div className="wh100" style={{ position: "fixed" }}>
				<div id="errorbanner"></div>
				<div id="page" className="main-container">
					<div id="bodycontent" className="wrapper">
						<div className="flex wh100" style={{ width: "100%", height: "100%" }}>
							<div className="left-panel flexM" style={{ height: "100% !important", paddingTop: "200px", paddingBottom: "190px " }}>
								<img src="https://static.zohocdn.com/chat/source/officechat/images/companyonboarding/006.svg" width="380" />

							</div>
							<div className="right-panel flexM">
								<div className="waitingui">
									<svg width="129px" height="61px" viewBox="0 0 129 61" version="1.1">
										<defs></defs>
										<g id="Page-1" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
											<g id="Artboard" transform="translate(-123.000000, -401.000000)">
												<g id="failed" transform="translate(124.000000, 401.000000)">
													<g id="cancel-(2)" transform="translate(34.000000, 0.000000)" fillRule="nonzero">
														<g id="Layer_1">
															<path d="M30.5002383,60.0076777 C46.7968887,60.0076777 60.007916,46.7966504 60.007916,30.4998809 C60.007916,14.2031113 46.7967695,0.992322266 30.5002383,0.992322266 C14.203707,0.992322266 0.992441406,14.2033496 0.992441406,30.5001191 C0.992441406,46.7968887 14.2034688,60.0076777 30.5002383,60.0076777 Z" id="Shape" fill="#FB7272"></path>
															<path d="M8.93101953,30.5001191 C8.93101953,15.5497578 20.0500566,3.1980918 34.4694082,1.25895898 C33.1708945,1.08429883 31.8464082,0.992322266 30.5001191,0.992322266 C14.2034688,0.992322266 0.992441406,14.2033496 0.992441406,30.5001191 C0.992441406,46.7968887 14.2034688,60.007916 30.5001191,60.007916 C31.8464082,60.007916 33.1708945,59.9159395 34.4694082,59.7412793 C20.0500566,57.8021465 8.93101953,45.4504805 8.93101953,30.5001191 Z" id="Shape" fill="#000000" opacity="0.1"></path>
															<path d="M50.5037109,8.78733594 C50.1190059,9.17764063 50.1235332,9.80598828 50.513957,10.1905742 C55.996332,15.5934824 59.0155938,22.806375 59.0155938,30.5 C59.0155938,38.1167793 56.0494688,45.2776074 50.6635977,50.6634785 C45.2777266,56.0493496 38.1168984,59.0154746 30.5001191,59.0154746 C26.2843281,59.0154746 22.2233008,58.1153672 18.4298633,56.3401719 C17.9335234,56.1078477 17.3428242,56.3219434 17.1105,56.8182832 C16.8781758,57.314623 17.0922715,57.9053223 17.5886113,58.1376465 C21.6472559,60.0369863 25.9912422,61 30.4998809,61 C38.6468359,61 46.3060293,57.8274043 52.0665977,52.0665977 C57.8272852,46.3059102 60.9997617,38.6465977 60.9997617,30.4998809 C60.9997617,22.2705996 57.7703359,14.5558867 51.9065918,8.77685156 C51.5165254,8.39226563 50.8882969,8.39679297 50.5037109,8.78733594 Z" id="Shape" fill="#000000"></path>
															<path d="M13.8608203,56.0631699 C14.0282129,56.1723027 14.2160977,56.2244863 14.401957,56.2244863 C14.7260195,56.2244863 15.0437676,56.065791 15.2340352,55.7741348 C15.5334355,55.3152051 15.4040488,54.7003203 14.945,54.4009199 C6.82973633,49.1082168 1.98488281,40.1732656 1.98488281,30.5 C1.98488281,22.8832207 4.95100781,15.7223926 10.3368789,10.3366406 C15.72275,4.95076953 22.8835781,1.98464453 30.5003574,1.98464453 C36.7235488,1.98464453 42.636498,3.95380078 47.6000156,7.67908984 C48.038334,8.00803711 48.6603672,7.91939648 48.9891953,7.48107812 C49.3181426,7.04275977 49.229502,6.42072656 48.7911836,6.0917793 C43.4813242,2.10652539 37.1563867,0 30.5002383,0 C22.3534023,0 14.6940898,3.1725957 8.93352148,8.93316406 C3.17271484,14.6939707 0.000119140625,22.3531641 0.000119140625,30.4998809 C0.000119140625,40.846291 5.1817832,50.4025605 13.8608203,56.0631699 Z" id="Shape" fill="#000000"></path>
														</g>
													</g>
													<g id="Group" transform="translate(54.894737, 21.415205)" fillRule="nonzero" fill="#000000">
														<circle id="Oval" cx="3.12302924" cy="3.15683041" r="3.10602924"></circle>
														<circle id="Oval" cx="20.6108596" cy="3.15683041" r="3.10602924"></circle>
													</g>
													<path d="M76.9217661,42.710538 L58.2371754,42.710538 C57.6652398,42.710538 57.2018655,42.2469649 57.2018655,41.6752281 C57.2018655,41.1034912 57.6653392,40.6399181 58.2371754,40.6399181 L76.9217661,40.6399181 C77.4937018,40.6399181 77.957076,41.1034912 77.957076,41.6752281 C77.957076,42.2469649 77.4937018,42.710538 76.9217661,42.710538 Z" id="Shape" fill="#000000" fillRule="nonzero"></path>
													<path d="M104.236842,8.5 L112.763158,8.5" id="Line" stroke="#C2C2C2" stroke-width="1.46999995" stroke-linecap="square"></path>
													<path d="M18.2333333,53.5 L24.7666667,53.5" id="Line-Copy-2" stroke="#C2C2C2" stroke-width="1.46999995" stroke-linecap="square"></path>
													<path d="M110.25,17.5 L126.75,17.5" id="Line-Copy" stroke="#C2C2C2" stroke-width="1.46999995" stroke-linecap="square"></path>
													<path d="M0.243902439,45.5 L19.7560976,45.5" id="Line-Copy-3" stroke="#C2C2C2" stroke-width="1.46999995" stroke-linecap="square"></path>
													<circle id="Oval-2" stroke="#C2C2C2" stroke-width="0.979999967" cx="103.5" cy="48.5" r="1.01000002"></circle>
													<circle id="Oval-2-Copy" stroke="#C2C2C2" stroke-width="0.979999967" cx="25.5" cy="14.5" r="1.01000002"></circle>
												</g>
											</g>
										</g>
									</svg>

									{!userExists && <><div className="font24 clr-hdr fontB mT20 mB30">We can't found you!</div>
										<div className="w75 mgA">
											<div className="line24">We've searched your account to join the company wherein your colleague/friend whose email address
												<span className="fontB font16">{invitationDetails.owner_email}</span> is an owner of the organization and your account was missing.
											</div>
											<div className="mT30 font14 clrS">You can go ahead  and
												<div className="flexM mT5">
													<div purpose="showCreateCompany" className="CB-link mR5" onClick={() => navigate({ pathname: "/", search: `?id=${queryId}` })}>Sign Up
													</div>
												</div>
											</div>
										</div></>
									}
									{userExists && loggedIn && <>
										<div className="font24 clr-hdr fontB mT20 mB30">We found you!</div>
										<div className="w75 mgA">
											<div className="line24">Waiting for Your. Go ahead and accept our invitation.
											</div>
											<LoadingButton
												style={{ width: "210px", height: "40px", marginTop: "30px" }}
												size="small"
												onClick={handleClick}
												loading={loading}
												loadingPosition="end"
												variant="contained"
												color="success"
											>
												<span style={{ marginRight: "20px" }}>Accept Invitation</span>
											</LoadingButton>
										</div>
									</>}
									{userExists && !loggedIn && <><div className="font24 clr-hdr fontB mT20 mB30">We can't found you!</div>
										<div className="w75 mgA">
											<div className="line24">We've searched your account to join the company wherein your colleague/friend whose email address
												<span className="fontB font16">oviya.d@codingmart.com</span> is an owner of the organization and your account was found.
											</div>
											<div className="mT30 font14 clrS">You can go ahead  and
												<div className="flexM mT5">
													<div purpose="showCreateCompany" className="CB-link mR5" onClick={() => navigate({ pathname: "/signin", search: `?id=${queryId}` })}>Sign In
													</div>
												</div>
											</div>
										</div></>}

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	}
	else {
		return <LoadingPage></LoadingPage>
	}
}