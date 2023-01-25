import React, { useState, useEffect } from 'react';

export default function CommonChats(params) {
    return <>
        <div id="chatsincommon_search_input_wrapper" className="zc-sticky chatsincommon-search-wrapper bgWhite">
            <div className="zcl-search2 active">
                <div className="zcl-seach-icon zcf-search2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </div>
                <div className="zcl-search-input flexC">
                    <input id="chatsincommon_search_input" purpose="search_input" type="text" placeholder="Search by conversation name" autoComplete="off" />
                    <span purpose="chatsincommon_input_clear" className="zcl-search-clear">Clear</span>
                </div>
            </div>
        </div>
        <div id="chatsinCommonDataContainer">
            <div
                id="userrecentchatCT_1280427393728492344_60016673028"
                purpose="chathistoryrow"
                threadchattitle=""
                channel="true"
                deleted="0"
                removed="0"
                chid="CT_1280427393728492344_60016673028"
                lmtime="1674223658936"
                className="floatl zcunrdmn zcchunrm"
            >
                <div className="usrimgsts floatl zc-1"><div className="msi-sc1 msci">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-diagram-2-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 5 7h2.5V6A1.5 1.5 0 0 1 6 4.5v-1zm-3 8A1.5 1.5 0 0 1 4.5 10h1A1.5 1.5 0 0 1 7 11.5v1A1.5 1.5 0 0 1 5.5 14h-1A1.5 1.5 0 0 1 3 12.5v-1zm6 0a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 9 12.5v-1z" />
                    </svg></div></div>
                <div className="zcunrd-rht">
                    <div className="zcunrdlt-txt flexC ellips">
                        <span id="userrecentchattitleCT_1280427393728492344_60016673028" className="floatl ellips bold zcunrdtit">#coimbatore-codesters-2022</span>
                        <div className="zcurdtxt">
                            <span className="zcunrd-dt ellips"><span title="Friday, January 20 ">Jan. 20, 07:37 PM</span></span>
                        </div>
                    </div>
                    <div className="zcunrdltmsg floatl ellips lastmsg-info">
                        <div className="infomsg padd0 ellips">
                            <span elemtype="user" uid="60016688845" hover="true" className="hvrinfo">Shalini M</span> added <span elemtype="user" uid="60016688782" hover="true" className="hvrinfo">Monesh Kannan R</span>
                        </div>
                    </div>
                </div>
            </div>
            <div
                id="userrecentchatCT_1280427390976451600_60016673028"
                purpose="chathistoryrow"
                threadchattitle=""
                channel="true"
                deleted="0"
                removed="0"
                chid="CT_1280427390976451600_60016673028"
                lmtime="1674216020299"
                className="floatl zcunrdmn zcchunrm"
            >
                <div className="usrimgsts floatl zc-1"><div className="msi-sc1 msci">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-diagram-2-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 5 7h2.5V6A1.5 1.5 0 0 1 6 4.5v-1zm-3 8A1.5 1.5 0 0 1 4.5 10h1A1.5 1.5 0 0 1 7 11.5v1A1.5 1.5 0 0 1 5.5 14h-1A1.5 1.5 0 0 1 3 12.5v-1zm6 0a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 9 12.5v-1z" />
                    </svg>
                </div></div>
                <div className="zcunrd-rht">
                    <div className="zcunrdlt-txt flexC ellips">
                        <span id="userrecentchattitleCT_1280427390976451600_60016673028" className="floatl ellips bold zcunrdtit">#announcements</span>
                        <div className="zcurdtxt">
                            <span className="zcunrd-dt ellips"><span title="Friday, January 20 ">Jan. 20, 05:30 PM</span></span>
                        </div>
                    </div>
                    <div className="zcunrdltmsg floatl ellips lastmsg-info">
                        <span className="zcunrdname floatl ellips bold lastmsg-sender">Karthikeyan Velumani</span><span className="zcunrdmsg">:</span>
                        <div className="floatl ellips lastMsg">kabilan <span className="zcslymsg-anim-24-grinning" title="Grinning" code=":grinning!:"></span></div>
                    </div>
                </div>
            </div>
            <div
                id="userrecentchatCT_1263978721666511061_60016673028"
                purpose="chathistoryrow"
                threadchattitle=""
                channel="true"
                deleted="0"
                removed="0"
                chid="CT_1263978721666511061_60016673028"
                lmtime="1667552474030"
                className="floatl zcunrdmn zcchunrm"
            >
                <div className="usrimgsts floatl zc-1"><div className="msi-sc1 msci">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-diagram-2-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 5 7h2.5V6A1.5 1.5 0 0 1 6 4.5v-1zm-3 8A1.5 1.5 0 0 1 4.5 10h1A1.5 1.5 0 0 1 7 11.5v1A1.5 1.5 0 0 1 5.5 14h-1A1.5 1.5 0 0 1 3 12.5v-1zm6 0a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 9 12.5v-1z" />
                    </svg>
                </div></div>
                <div className="zcunrd-rht">
                    <div className="zcunrdlt-txt flexC ellips">
                        <span id="userrecentchattitleCT_1263978721666511061_60016673028" className="floatl ellips bold zcunrdtit">#React - Interns - 2022</span>
                        <div className="zcurdtxt">
                            <span className="zcunrd-dt ellips"><span title="Friday, November 4 2022">Nov. 4 2022, 02:32 PM</span></span>
                        </div>
                    </div>
                    <div className="zcunrdltmsg floatl ellips lastmsg-info">
                        <span className="zcunrdname floatl ellips bold lastmsg-sender">Thamizharasan R</span><span className="zcunrdmsg">:</span>
                        <div className="dltinfomsg ellips">This message has been deleted</div>
                    </div>
                </div>
            </div>
            <div
                id="userrecentchatCT_1263978721989567268_60016673028"
                purpose="chathistoryrow"
                threadchattitle=""
                channel="true"
                deleted="0"
                removed="0"
                chid="CT_1263978721989567268_60016673028"
                lmtime="1663581498319"
                className="floatl zcunrdmn zcchunrm"
            >
                <div className="usrimgsts floatl zc-1"><div className="msi-sc1 msci">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-diagram-2-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 5 7h2.5V6A1.5 1.5 0 0 1 6 4.5v-1zm-3 8A1.5 1.5 0 0 1 4.5 10h1A1.5 1.5 0 0 1 7 11.5v1A1.5 1.5 0 0 1 5.5 14h-1A1.5 1.5 0 0 1 3 12.5v-1zm6 0a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 9 12.5v-1z" />
                    </svg>
                </div></div>
                <div className="zcunrd-rht">
                    <div className="zcunrdlt-txt flexC ellips">
                        <span id="userrecentchattitleCT_1263978721989567268_60016673028" className="floatl ellips bold zcunrdtit">#interns-node-react</span>
                        <div className="zcurdtxt">
                            <span className="zcunrd-dt ellips"><span title="Monday, September 19 2022">Sept. 19 2022, 03:28 PM</span></span>
                        </div>
                    </div>
                    <div className="zcunrdltmsg floatl ellips lastmsg-info">
                        <div className="infomsg padd0 ellips">
                            <span elemtype="user" uid="60016689751" hover="true" className="hvrinfo">Anush Kumar</span> added <span elemtype="user" uid="60016688888" hover="true" className="hvrinfo">Nimmi Mohan</span>,
                            <span elemtype="user" uid="60016688710" hover="true" className="hvrinfo">Ranjitha Y</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
};
