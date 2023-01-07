import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

export default function Search(){

    const listItems = [
        {label:"All",value:"All"},
        {label:"User",value:"User"},
        {label:"Channel",value:"Channel"}
    ]
    return <>
            <div id="GSContainer" className="smsrchwin zcmultsrch">
                <div className="spotlight">
                    <div id="GSinputcontainer" className="zcgsincnt">
                        <div id="filter-container" className="zcgs-category">
                            <div id="autosrc1" className="drpdwn-wrp" data-val="All" data-key="ALL">
                                <div className="drpdwn-input flexC " data-header="">
                                    <em className="zcf-search2 srchin-icon"></em>
                                    <div className="drpdwn-label ellips " dropdown-label="">
                                        All
                                    </div>
                                    <em className="zcf-downArrow srchin-downArrow">
                                        {" "}
                                        <ArrowDropDownIcon></ArrowDropDownIcon>
                                    </em>
                                </div>
                            </div>
                        </div>
                        <div className="zcgs-input-con">
                            <div id="zcsearchacross" className="zc-saz dN ellips" purpose="searchacross" style={{ display: "none" }}>
                                Search across Zoho
                                <span className="msi-searchacross font12"></span>
                            </div>
                            <div id="GS-mockdiv" className="zcssauto"></div>
                            <SearchIcon className="zcf-search2 zcgs-search-icon fontB"></SearchIcon>
                            <input id="GS-search-field" className="ellips zcsstinfo" autocomplete="off" placeholder="Search in All (ctrl + k)" />
                        </div>
                        
                    </div>
                    <div id="createchatcontainer" quickaction="" purpose="showQuickActions" className="zctop-crtcht">
                        <span className="zcf-plusB wh100 flexM font13 cur zcquick-action tooltip-right" tooltip-title="Quick Action"><AddOutlinedIcon></AddOutlinedIcon></span>
                    </div>
                </div>
            </div>
    </>;
}