import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import OutsideClickHandler from 'react-outside-click-handler';
import FrequentChats from './FrequentChats';
import ChatDisplay from './ChatDisplay';
import SearchList from './SearchList';
import "./MenuBar.scss"
export default function Search({ setChatDetails, setWindow, setActId }) {

    const [selectedItem, setSelectedItem] = useState("all");
    const [showList, setShowList] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [query, setQuery] = useState();
    const [showInfo, setShowInfo] = useState("");
    const searchParams = new URLSearchParams(document.location.search);
    const url = new URL(window.location);

    const listItems = [
        { label: "All", value: "All" },
        { label: "User", value: "User" },
        { label: "Channel", value: "Channel" }
    ]

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    const changeFilter = (tag) => {
        setSelectedItem(tag);
        setShowResults(true);
        setShowList(false)

    }

    const openChat = (chat_id, type, act_id = "", message = "") => {
        if (type !== "CHANNEL") {
            if (searchParams.get("channel")) {
                url.searchParams.delete('channel');
                window.history.pushState({}, '', url);
            }
            url.searchParams.set('chat', chat_id);
            setWindow("chat");
            window.history.pushState({}, '', url);
            setActId(act_id);
            setChatDetails(chat_id, true, message)
            localStorage.setItem("*&^%$#!@#$%^&Channel#$&^%$id*&^%^&*(", chat_id)
        }
        else {
            if (searchParams.get("chat")) {
                url.searchParams.delete('chat');
                window.history.pushState({}, '', url);
            }
            url.searchParams.set('channel', chat_id);
            setWindow("chat");
            window.history.pushState({}, '', url);
            setActId(chat_id);
            setChatDetails(chat_id, false, message)
            localStorage.setItem("*&^%$#!@#$%^&Channel#$&^%$id*&^%^&*(", chat_id)
        }
        setShowResults(false);
        setQuery("");
    }


    return <>
        {(showResults || showList) && <div className="bg-focus"></div>}
        <div id="GSContainer" className="smsrchwin zcmultsrch scale-anim">

            <div className="spotlight">
                <div id="GSinputcontainer " className={`zcgsincnt ${showResults ? "search-active" : ""}`}>
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
                                            <input className="bornone" tab-index="0" data-auto-input="" placeholder="Search" type="text" value="" style={{ color: "black" }} />
                                        </div>
                                    </div>
                                    <div className="option-list ps-container ps-theme-default" data-auto-result="" id="autodest1" data-ps-id="502549a0-963a-7d4a-edb2-72d0624959eb">
                                        <div className={`option-item flexC  sel ${selectedItem === "all" && "sel_status"}`} onClick={() => { changeFilter("all") }} >
                                            <div className="option-desc ellips"><div className="opt-title ellips" data-title="">All</div></div>
                                        </div>
                                        <div className={`option-item flexC  sel ${selectedItem === "users" && "sel_status"}`} onClick={() => changeFilter("users")}>
                                            <div className="option-desc ellips"><div className="opt-title ellips" data-title="">Users</div></div>
                                        </div>
                                        <div className={`option-item flexC  sel ${selectedItem === "channels" && "sel_status"}`} onClick={() => changeFilter("channels")}>
                                            <div className="option-desc ellips"><div className="opt-title ellips" data-title="">Channels</div></div>
                                        </div>
                                        <div className={`option-item flexC  sel ${selectedItem === "chats" && "sel_status"}`} onClick={() => changeFilter("chats")}>
                                            <div className="option-desc ellips"><div className="opt-title ellips" data-title="">Chats</div></div>
                                        </div>
                                        <div className={`option-item flexC  sel ${selectedItem === "bots" && "sel_status"}`} onClick={() => changeFilter("bots")}>
                                            <div className="option-desc ellips"><div className="opt-title ellips" data-title="">Bots</div></div>
                                        </div>
                                        <div className={`option-item flexC  sel ${selectedItem === "department" && "sel_status"}`} onClick={() => changeFilter("deprtment")}>
                                            <div className="option-desc ellips"><div className="opt-title ellips" data-title="">Department</div></div>
                                        </div>
                                        <div className={`option-item flexC  sel ${selectedItem === "threads" && "sel_status"}`} onClick={() => changeFilter("threads")}>
                                            <div className="option-desc ellips"><div className="opt-title ellips" data-title="">Threads</div></div>
                                        </div>
                                        <div className={`option-item flexC  sel ${selectedItem === "messages" && "sel_status"}`} onClick={() => changeFilter("messages")}>
                                            <div className="option-desc ellips"><div className="opt-title ellips" data-title="">Messages</div></div>
                                        </div>
                                    </div>
                                </div>
                            </OutsideClickHandler>
                        }


                    </div>
                    <div className="zcgs-input-con">
                        <div id="zcsearchacross" className="zc-saz dN ellips" purpose="searchacross" >
                            Search across Prezz
                            <span className="msi-searchacross font12"></span>
                        </div>
                        <div id="GS-mockdiv" className="zcssauto flexC">
                            <SearchIcon className="zcf-search2 zcgs-search-icon fontB"></SearchIcon>
                            <input id="GS-search-field" className="ellips zcsstinfo" autoComplete="off" placeholder="Search in All" value={query} onChange={handleChange} onClick={() => setShowResults(true)} style={{ color: "black" }} />
                        </div>
                    </div>

                </div>

                {/* <div id="createchatcontainer" quickaction="" purpose="showQuickActions" className="zctop-crtcht">
                    <span className="zcf-plusB wh100 flexM font13 cur zcquick-action tooltip-right" tooltip-title="Quick Action"><AddOutlinedIcon></AddOutlinedIcon></span>
                </div> */}
            </div>
            <OutsideClickHandler onOutsideClick={() => setShowResults(false)}>
                {showResults && <div className="searchResult">
                    {!query ? <FrequentChats setChatDetails={setChatDetails} openChat={openChat}></FrequentChats> :
                        <div className='srp flexC' style={{ width: "100%" }}>
                            <div className={` ${(selectedItem !== "users" ? "w100" : !showInfo) ? "w100" : "w45"}`} >
                                <span className='frqt-contact-head mT50'>Results</span>
                                <SearchList showInfo={showInfo} openChat={openChat} setShowInfo={setShowInfo} query={query} selectedItem={selectedItem}></SearchList>
                            </div>
                            {selectedItem === "users" && showInfo && <ChatDisplay openChat={openChat} showInfo={showInfo} setShowInfo={setShowInfo} selectedItem={selectedItem}></ChatDisplay>}

                        </div>}
                </div>}
            </OutsideClickHandler>
        </div>
    </>;
}