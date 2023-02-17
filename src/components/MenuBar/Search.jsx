import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import OutsideClickHandler from 'react-outside-click-handler';

export default function Search() {

    const [selectedItem, setSelectedItem] = useState("all");
    const [showList, setShowList] = useState(false);
    const [showResults, setShowResults] = useState(false)

    const listItems = [
        { label: "All", value: "All" },
        { label: "User", value: "User" },
        { label: "Channel", value: "Channel" }
    ]
    return <>
        <div id="GSContainer" className="smsrchwin zcmultsrch">
            <div className="spotlight">
                <div id="GSinputcontainer " className={`zcgsincnt ${showResults && "search-active"}`}>
                    <div id="filter-container" className="zcgs-category">
                        <div id="autosrc1" className="drpdwn-wrp " onClick={() => setShowList(true)}>
                            <div className="drpdwn-input flexC " data-header="">
                                <em className="zcf-search2 srchin-icon"></em>
                                <div className="drpdwn-label ellips " dropdown-label="">
                                    {selectedItem}
                                </div>
                                <em className="zcf-downArrow srchin-downArrow">
                                    <ArrowDropDownIcon></ArrowDropDownIcon>
                                </em>
                            </div>
                        </div>
                        {showList &&
                            <OutsideClickHandler onOutsideClick={() => setShowList(false)}>

                                <div id="drpdwn-option" className="drpdwn-option zindex3">
                                    <div id="search-input" className="ellips drsrchholder drsrchhdn">
                                        <div className="srchin"><span className="zcf-search2 srchin-icon"></span>
                                            <input className="bornone" tab-index="0" data-auto-input="" placeholder="Search" type="text" value="" /></div>
                                    </div>
                                    <div className="option-list ps-container ps-theme-default" data-auto-result="" id="autodest1" data-ps-id="502549a0-963a-7d4a-edb2-72d0624959eb">
                                        <div className={`option-item flexC  sel ${selectedItem === "all" && "sel_status"}`} onClick={() => setSelectedItem("all")} >
                                            <div className="option-desc ellips"><div className="opt-title ellips" data-title="">All</div></div>
                                        </div>
                                        <div className={`option-item flexC  sel ${selectedItem === "users" && "sel_status"}`} onClick={() => setSelectedItem("users")}>
                                            <div className="option-desc ellips"><div className="opt-title ellips" data-title="">Users</div></div>
                                        </div>
                                        <div className={`option-item flexC  sel ${selectedItem === "channels" && "sel_status"}`} onClick={() => setSelectedItem("channels")}>
                                            <div className="option-desc ellips"><div className="opt-title ellips" data-title="">Channels</div></div>
                                        </div>
                                        <div className={`option-item flexC  sel ${selectedItem === "chats" && "sel_status"}`} onClick={() => setSelectedItem("chats")}>
                                            <div className="option-desc ellips"><div className="opt-title ellips" data-title="">Chats</div></div>
                                        </div>
                                        <div className={`option-item flexC  sel ${selectedItem === "bots" && "sel_status"}`} onClick={() => setSelectedItem("bots")}>
                                            <div className="option-desc ellips"><div className="opt-title ellips" data-title="">Bots</div></div>
                                        </div>
                                        <div className={`option-item flexC  sel ${selectedItem === "department" && "sel_status"}`} onClick={() => setSelectedItem("deprtment")}>
                                            <div className="option-desc ellips"><div className="opt-title ellips" data-title="">Department</div></div>
                                        </div>
                                        <div className={`option-item flexC  sel ${selectedItem === "threads" && "sel_status"}`} onClick={() => setSelectedItem("threads")}>
                                            <div className="option-desc ellips"><div className="opt-title ellips" data-title="">Threads</div></div>
                                        </div>
                                        <div className={`option-item flexC  sel ${selectedItem === "messages" && "sel_status"}`} onClick={() => setSelectedItem("messages")}>
                                            <div className="option-desc ellips"><div className="opt-title ellips" data-title="">Messages</div></div>
                                        </div>
                                    </div>
                                </div>
                            </OutsideClickHandler>
                        }


                    </div>
                    <div className="zcgs-input-con">
                        <div id="zcsearchacross" className="zc-saz dN ellips" purpose="searchacross" >
                            Search across Zoho
                            <span className="msi-searchacross font12"></span>
                        </div>
                        <div id="GS-mockdiv" className="zcssauto flexC">
                            <SearchIcon className="zcf-search2 zcgs-search-icon fontB"></SearchIcon>
                            <input id="GS-search-field" className="ellips zcsstinfo" autoComplete="off" placeholder="Search in All (ctrl + k)" onClick={() => setShowResults(true)} />
                        </div>
                    </div>

                </div>

                <div id="createchatcontainer" quickaction="" purpose="showQuickActions" className="zctop-crtcht">
                    <span className="zcf-plusB wh100 flexM font13 cur zcquick-action tooltip-right" tooltip-title="Quick Action"><AddOutlinedIcon></AddOutlinedIcon></span>
                </div>
            </div>
            <OutsideClickHandler onOutsideClick={() => setShowResults(false)}>
                {showResults && <div className="searchResult">
                    {/* <div className="frqt-contact">
                        <span className='frqt-contact-head'>Frequent Contact</span>
                        <div className="flexC frqt-contact-list">
                            <div className='cur frqt-contact-items'>
                                <div className='list-img-wrapper '>
                                    <img width="100%" height="100%" src='	http://www.petshop18.com/image/cache/catalog/blog/Cat%20blog/Kitten-HD-Wallpaper-250x250.jpg'></img>
                                </div>
                                <div className="contact-name block-ellipsis">
                                    Richard JoelJoelJoel
                                </div>
                            </div>
                            <div className='cur frqt-contact-items'>
                                <div className='list-img-wrapper'>
                                    <img width="100%" height="100%" src='	http://www.petshop18.com/image/cache/catalog/blog/Cat%20blog/Kitten-HD-Wallpaper-250x250.jpg'></img>
                                </div>
                                <div className="contact-name block-ellipsis">
                                    Richard JoelJoelJoel
                                </div>
                            </div>
                            <div className='cur frqt-contact-items'>
                                <div className='list-img-wrapper'>
                                    <img width="100%" height="100%" src='	http://www.petshop18.com/image/cache/catalog/blog/Cat%20blog/Kitten-HD-Wallpaper-250x250.jpg'></img>
                                </div>
                                <div className="contact-name block-ellipsis">
                                    Richard JoelJoelJoel
                                </div>
                            </div>
                            <div className='cur frqt-contact-items'>
                                <div className='list-img-wrapper'>
                                    <img width="100%" height="100%" src='	http://www.petshop18.com/image/cache/catalog/blog/Cat%20blog/Kitten-HD-Wallpaper-250x250.jpg'></img>
                                </div>
                                <div className="contact-name block-ellipsis">
                                    Richard JoelJoelJoel
                                </div>
                            </div>

                        </div>
                    </div> */}
                    <div className='srp flexC'>
                        <div style={{ width: "45%" }}>
                            <span className='frqt-contact-head'>Results</span>
                            <div className='srp-item-container'>
                                <div className='flexC srp-item cur'>
                                    <div style={{ width: "38px", height: "38px", overflow: "hidden", borderRadius: "100%" }}>
                                        <img width="100%" height="100%" src='http://www.petshop18.com/image/cache/catalog/blog/Cat%20blog/Kitten-HD-Wallpaper-250x250.jpg'></img>
                                    </div>
                                    <div className='srp-info'>
                                        <div className="srp-name">Oviya D</div>
                                        <div className='srp-email'>oviyad.19cse@kongu.edu</div>
                                    </div>
                                    {/* <div className="user-card-action-icn zcl-icon zcl-icon--default zcf-call" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                        </svg>
                                    </div>
                                    <div className="user-card-action-icn zcl-icon zcl-icon--default zcf-video" uid="60016689751" documentclick="makeGlobalVideoCall" data-peoplepreview="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera-video" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z" />
                                        </svg>
                                    </div>
                                    <div className="user-card-action-icn zcl-icon zcl-icon--default zcf-chat" uid="60016689751" documentclick="initiateChatWithUser" data-peoplepreview="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-left-text" viewBox="0 0 16 16">
                                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                            <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                                        </svg>
                                    </div> */}

                                </div>
                                <div className='flexC srp-item'>
                                    <div style={{ width: "38px", height: "38px", overflow: "hidden", borderRadius: "100%" }}>
                                        <img width="100%" height="100%" src='http://www.petshop18.com/image/cache/catalog/blog/Cat%20blog/Kitten-HD-Wallpaper-250x250.jpg'></img>
                                    </div>
                                    <div className='srp-info'>
                                        <div className="srp-name">Oviya D</div>
                                        <div className='srp-email'>oviyad.19cse@kongu.edu</div>
                                    </div>

                                </div>
                                <div className='flexC srp-item'>
                                    <div style={{ width: "38px", height: "38px", overflow: "hidden", borderRadius: "100%" }}>
                                        <img width="100%" height="100%" src='http://www.petshop18.com/image/cache/catalog/blog/Cat%20blog/Kitten-HD-Wallpaper-250x250.jpg'></img>
                                    </div>
                                    <div className='srp-info'>
                                        <div className="srp-name">Oviya D</div>
                                        <div className='srp-email'>oviyad.19cse@kongu.edu</div>
                                    </div>

                                </div>
                                <div className='flexC srp-item'>
                                    <div style={{ width: "38px", height: "38px", overflow: "hidden", borderRadius: "100%" }}>
                                        <img width="100%" height="100%" src='http://www.petshop18.com/image/cache/catalog/blog/Cat%20blog/Kitten-HD-Wallpaper-250x250.jpg'></img>
                                    </div>
                                    <div className='srp-info'>
                                        <div className="srp-name">Oviya D</div>
                                        <div className='srp-email'>oviyad.19cse@kongu.edu</div>
                                    </div>

                                </div>
                                <div className='flexC srp-item'>
                                    <div style={{ width: "38px", height: "38px", overflow: "hidden", borderRadius: "100%" }}>
                                        <img width="100%" height="100%" src='http://www.petshop18.com/image/cache/catalog/blog/Cat%20blog/Kitten-HD-Wallpaper-250x250.jpg'></img>
                                    </div>
                                    <div className='srp-info'>
                                        <div className="srp-name">Oviya D</div>
                                        <div className='srp-email'>oviyad.19cse@kongu.edu</div>
                                    </div>

                                </div>

                                <div className='flexC srp-item'>
                                    <div style={{ width: "38px", height: "38px", overflow: "hidden", borderRadius: "100%" }}>
                                        <img width="100%" height="100%" src='http://www.petshop18.com/image/cache/catalog/blog/Cat%20blog/Kitten-HD-Wallpaper-250x250.jpg'></img>
                                    </div>
                                    <div className='srp-info'>
                                        <div className="srp-name">Oviya D</div>
                                        <div className='srp-email'>oviyad.19cse@kongu.edu</div>
                                    </div>

                                </div>
                                <div className='flexC srp-item'>
                                    <div style={{ width: "38px", height: "38px", overflow: "hidden", borderRadius: "100%" }}>
                                        <img width="100%" height="100%" src='http://www.petshop18.com/image/cache/catalog/blog/Cat%20blog/Kitten-HD-Wallpaper-250x250.jpg'></img>
                                    </div>
                                    <div className='srp-info'>
                                        <div className="srp-name">Oviya D</div>
                                        <div className='srp-email'>oviyad.19cse@kongu.edu</div>
                                    </div>

                                </div>
                                <div className='flexC srp-item'>
                                    <div style={{ width: "38px", height: "38px", overflow: "hidden", borderRadius: "100%" }}>
                                        <img width="100%" height="100%" src='http://www.petshop18.com/image/cache/catalog/blog/Cat%20blog/Kitten-HD-Wallpaper-250x250.jpg'></img>
                                    </div>
                                    <div className='srp-info'>
                                        <div className="srp-name">Oviya D</div>
                                        <div className='srp-email'>oviyad.19cse@kongu.edu</div>
                                    </div>

                                </div>
                                <div className='flexC srp-item'>
                                    <div style={{ width: "38px", height: "38px", overflow: "hidden", borderRadius: "100%" }}>
                                        <img width="100%" height="100%" src='http://www.petshop18.com/image/cache/catalog/blog/Cat%20blog/Kitten-HD-Wallpaper-250x250.jpg'></img>
                                    </div>
                                    <div className='srp-info'>
                                        <div className="srp-name">Oviya D</div>
                                        <div className='srp-email'>oviyad.19cse@kongu.edu</div>
                                    </div>

                                </div>
                                <div className='flexC srp-item'>
                                    <div style={{ width: "38px", height: "38px", overflow: "hidden", borderRadius: "100%" }}>
                                        <img width="100%" height="100%" src='http://www.petshop18.com/image/cache/catalog/blog/Cat%20blog/Kitten-HD-Wallpaper-250x250.jpg'></img>
                                    </div>
                                    <div className='srp-info'>
                                        <div className="srp-name">Oviya D</div>
                                        <div className='srp-email'>oviyad.19cse@kongu.edu</div>
                                    </div>

                                </div>
                                <div className='flexC srp-item'>
                                    <div style={{ width: "38px", height: "38px", overflow: "hidden", borderRadius: "100%" }}>
                                        <img width="100%" height="100%" src='http://www.petshop18.com/image/cache/catalog/blog/Cat%20blog/Kitten-HD-Wallpaper-250x250.jpg'></img>
                                    </div>
                                    <div className='srp-info'>
                                        <div className="srp-name">Oviya D</div>
                                        <div className='srp-email'>oviyad.19cse@kongu.edu</div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div style={{ width: "55%", boxShadow: "-2px 0 4px var(--box-shadow-color)", minHeight: "592px", position: "absolute", marginLeft: "45%" }}>
                            <div className="profilecon">
                                <div className='profile-section flexC' style={{ position: "relative" }}>

                                    <div style={{ width: "48px", height: "48px", overflow: "hidden", borderRadius: "100%" }}>
                                        <img width="100%" height="100%" src='http://www.petshop18.com/image/cache/catalog/blog/Cat%20blog/Kitten-HD-Wallpaper-250x250.jpg'></img>
                                    </div>
                                    <div className="user-card-action-icn zcl-icon zcl-icon--default zcf-call" uid="60016689751" documentclick="makeGlobalAudioCall" data-peoplepreview="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                        </svg>
                                    </div>
                                    <div className="user-card-action-icn zcl-icon zcl-icon--default zcf-video" uid="60016689751" documentclick="makeGlobalVideoCall" data-peoplepreview="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera-video" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z" />
                                        </svg>
                                    </div>
                                    <div className="user-card-action-icn zcl-icon zcl-icon--default zcf-chat" uid="60016689751" documentclick="initiateChatWithUser" data-peoplepreview="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-left-text" viewBox="0 0 16 16">
                                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                            <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                                        </svg>
                                    </div>
                                    <div className='flexC' style={{ position: "absolute", top: "0", right: "0", width: "30px", height: "30px", backgroundColor: "rgb(241,244,247)", borderRadius: "100%", textAlign: "center", verticalAlign: "middle" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16" style={{ margin: "auto" }}>
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='personal-det'>
                                    <div style={{ fontFamily: "zoho-puvi-semi-bold", fontSize: "15px" }}>Oviya D</div>
                                    <div style={{ fontSize: "13px", color: "var(--color-lp1)" }}>oviyad.19cse@kongu.edu</div>
                                </div>

                                <div className="show-opt flexC">
                                    <div className="opt-item active"> Profile</div>
                                    <div className="opt-item"> Chats in Common</div>
                                </div>
                            </div>
                            <div className='opt-content'>
                                <div className="prf-ifo-contact">
                                    <div style={{ paddingTop: "15px", fontSize: "14px", fontFamily: "zoho-puvi-semi-bold" }}>
                                        Contact
                                    </div>
                                    <div className="posrel pair">
                                        <div className="prf-adinfo" >Oviya D</div>
                                        <div className="prf-cat ellips">Display Name</div>
                                    </div>
                                    <div className="posrel pair">
                                        <div className="prf-adinfo" >raveeneh@gmail.com</div>
                                        <div className="prf-cat ellips">Email</div>
                                    </div>
                                    <div className="posrel pair">
                                        <div className="prf-adinfo" >-</div>
                                        <div className="prf-cat ellips">Work Phone</div>
                                    </div>
                                    <div className="posrel pair">
                                        <div className="prf-adinfo" >9876543210</div>
                                        <div className="prf-cat ellips">Personal Mobile</div>
                                    </div>
                                </div>

                                <div style={{ position: "relative" }}>
                                    <div className="float zcl-btn zcl-btn--secondary ">
                                        Chat with user
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>}
            </OutsideClickHandler>
        </div>
    </>;
}