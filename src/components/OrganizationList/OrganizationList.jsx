import React, { useState, useEffect } from 'react';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import CreateChannelModal from '../CreateChannel/CreateChannelModal';

export default function OrganizationList({ setStatus }) {
    return <>
        <div className="flexG flex-col h100 ovrflwH app-submodule-nav">
            <div className="flexG h100 flex-col mychats">
                <div className="flexG ovrflwA pb5 overflow-controls">
                    <div id="pinnedChats" >
                        <div className='dflx justifySB heading ' >
                            <span className=" font17 ellips ">Organization</span>
                            {/* <span className='more' onClick={() => setStatus(true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                </svg>
                            </span> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
};
