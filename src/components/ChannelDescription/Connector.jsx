import React from 'react';

export default function Connector(params) {
    return <>
        <div className='connectorcontainer'>
            <div className="apiendpt zcchprhdrT2 dIB font14 zcendpnt white-prewrp flex fdirC">
                <div id="channelapiparamtitle" className="dIB crtit sel mB5">API Parameters </div>
                <div className='border'></div>
                <div className="mTB10 flexC">
                    <div className="w25">Channel ID</div>
                    <div className="mLR20 fshrink">:</div>
                    <div className="flexG">P239965000000272229</div>
                </div>
                <div className="mTB10 flexC">
                    <div className="w25">Unique Name</div>
                    <div className="mLR20 fshrink">:</div>
                    <div className="flexG">prezz</div>
                </div>
                <div className="mTB10 flexC">
                    <div className="w25">Chat ID</div>
                    <div className="mLR20 fshrink">:</div>
                    <div className="flexG">CT_1282961093560040365_60016673028</div>
                </div>
            </div>
            <div className="apiendpt zcchprhdrT2 dIB font14 zcendpnt white-prewrp flex fdirC">
                <div className='dflx'>
                    <div>
                        <div id="channelapiparamtitle" className="dIB crtit sel mB5">API Endpoint </div>
                        <div className='border'></div>
                    </div>
                    <div className='info_icon '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                    </div>
                </div>

                <div className="mTB10 flexC">
                    https://cliq.zoho.in/api/v2/channelsbyname/<span style={{ fontFamily: "zoho-puvi-semi-bold" }}>prezz</span>/message
                </div>
            </div>
            <div className="apiendpt zcchprhdrT2 dIB font14 zcendpnt white-prewrp flex fdirC">
                <div className='dflx'>
                    <div>
                        <div id="channelapiparamtitle" className="dIB crtit sel mB5">Deluge Task </div>
                        <div className='border'></div>
                    </div>
                    <div className='info_icon '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                    </div>
                </div>
                <div className="mTB10 flexC">
                    Deluge Task
                    zoho.cliq.postToChannel("
                    <span style={{ fontFamily: "zoho-puvi-semi-bold" }}>prezz</span>", "Here goes your test message.");
                </div>
                <div className="" style={{ marginTop: "-10px", marginBottom: "10px", color: "#737373" }}>
                    <span style={{ fontFamily: "zoho-puvi-semi-bold", color: "black" }}>Note:</span> The person who uses this API will be shown as the message sender in this channel. Please ensure that the message sender is a part of this channel.
                </div>
            </div>
            <div className="apiendpt zcchprhdrT2 dIB font14 zcendpnt white-prewrp flex fdirC">
                <div className='dflx'>
                    <div>
                        <div id="channelapiparamtitle" className="dIB crtit sel mB5">Outgoing Webhook</div>
                        <div className='border'></div>
                    </div>
                    <div className='info_icon '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                    </div>
                </div>

                <div className="mTB10 flexC">
                    Handle messages shared in this channel by configuring an outgoing webhook
                </div>
                <div className='dflx flexC' style={{ color: "#3DC2AC", cursor: "pointer" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                    </svg>
                    <span style={{ marginLeft: "5px" }}>Edit Code</span>
                </div>
            </div>

        </div>



    </>;
};
