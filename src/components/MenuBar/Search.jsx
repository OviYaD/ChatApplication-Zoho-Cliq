import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import OutsideClickHandler from 'react-outside-click-handler';

export default function Search() {

    const [selectedItem, setSelectedItem] = useState("all");
    const [showList, setShowList] = useState(false);

    const listItems = [
        { label: "All", value: "All" },
        { label: "User", value: "User" },
        { label: "Channel", value: "Channel" }
    ]
    return <>
        <div id="GSContainer" className="smsrchwin zcmultsrch">
            <div className="spotlight">
                <div id="GSinputcontainer" className="zcgsincnt">
                    <div id="filter-container" className="zcgs-category">
                        <div id="autosrc1" className="drpdwn-wrp" onClick={() => setShowList(true)}>
                            <div className="drpdwn-input flexC " data-header="">
                                <em className="zcf-search2 srchin-icon"></em>
                                <div className="drpdwn-label ellips " dropdown-label="">
                                    {selectedItem}
                                </div>
                                <em className="zcf-downArrow srchin-downArrow">
                                    {" "}
                                    <ArrowDropDownIcon></ArrowDropDownIcon>
                                </em>
                            </div>
                        </div>
                        {showList &&
                            <OutsideClickHandler onOutsideClick={() => setShowList(false)}>

                                <div id="drpdwn-option" class="drpdwn-option zindex3">
                                    <div id="search-input" class="ellips drsrchholder drsrchhdn">
                                        <div class="srchin"><span class="zcf-search2 srchin-icon"></span><input class="bornone" tab-index="0" data-auto-input="" placeholder="Search" type="text" value="" /></div>
                                    </div>
                                    <div class="option-list ps-container ps-theme-default" data-auto-result="" id="autodest1" data-ps-id="502549a0-963a-7d4a-edb2-72d0624959eb">
                                        <div class={`option-item flexC  sel ${selectedItem === "all" && "sel_status"}`} onClick={() => setSelectedItem("all")} >
                                            <div class="option-desc ellips"><div class="opt-title ellips" data-title="">All</div></div>
                                        </div>
                                        <div class={`option-item flexC  sel ${selectedItem === "users" && "sel_status"}`} onClick={() => setSelectedItem("users")}>
                                            <div class="option-desc ellips"><div class="opt-title ellips" data-title="">Users</div></div>
                                        </div>
                                        <div class={`option-item flexC  sel ${selectedItem === "channels" && "sel_status"}`} onClick={() => setSelectedItem("channels")}>
                                            <div class="option-desc ellips"><div class="opt-title ellips" data-title="">Channels</div></div>
                                        </div>
                                        <div class={`option-item flexC  sel ${selectedItem === "chats" && "sel_status"}`} onClick={() => setSelectedItem("chats")}>
                                            <div class="option-desc ellips"><div class="opt-title ellips" data-title="">Chats</div></div>
                                        </div>
                                        <div class={`option-item flexC  sel ${selectedItem === "bots" && "sel_status"}`} onClick={() => setSelectedItem("bots")}>
                                            <div class="option-desc ellips"><div class="opt-title ellips" data-title="">Bots</div></div>
                                        </div>
                                        <div class={`option-item flexC  sel ${selectedItem === "department" && "sel_status"}`} onClick={() => setSelectedItem("deprtment")}>
                                            <div class="option-desc ellips"><div class="opt-title ellips" data-title="">Department</div></div>
                                        </div>
                                        <div class={`option-item flexC  sel ${selectedItem === "threads" && "sel_status"}`} onClick={() => setSelectedItem("threads")}>
                                            <div class="option-desc ellips"><div class="opt-title ellips" data-title="">Threads</div></div>
                                        </div>
                                        <div class={`option-item flexC  sel ${selectedItem === "messages" && "sel_status"}`} onClick={() => setSelectedItem("messages")}>
                                            <div class="option-desc ellips"><div class="opt-title ellips" data-title="">Messages</div></div>
                                        </div>
                                    </div>
                                </div>
                            </OutsideClickHandler>
                        }


                    </div>
                    <div className="zcgs-input-con">
                        <div id="zcsearchacross" className="zc-saz dN ellips" purpose="searchacross" style={{ display: "none" }}>
                            Search across Zoho
                            <span className="msi-searchacross font12"></span>
                        </div>
                        <div id="GS-mockdiv" className="zcssauto"></div>
                        <SearchIcon className="zcf-search2 zcgs-search-icon fontB"></SearchIcon>
                        <input id="GS-search-field" className="ellips zcsstinfo" autoComplete="off" placeholder="Search in All (ctrl + k)" />
                    </div>

                </div>
                <div id="createchatcontainer" quickaction="" purpose="showQuickActions" className="zctop-crtcht">
                    <span className="zcf-plusB wh100 flexM font13 cur zcquick-action tooltip-right" tooltip-title="Quick Action"><AddOutlinedIcon></AddOutlinedIcon></span>
                </div>
            </div>
        </div>
    </>;
}