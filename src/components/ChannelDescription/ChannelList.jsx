import React, { useState, useEffect } from 'react';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import CreateChannelModal from '../CreateChannel/CreateChannelModal';
import { getChannels } from '../../api/Channel/Channel';

export default function ChannelList({ setStatus, setChatDetails }) {
    const [channelList, setChannelList] = useState([]);
    const url = new URL(window.location);

    useEffect(() => {
        console.log("this is channel list")
        const getChannelList = async () => {
            const data = await getChannels();
            setChannelList(data);
        }
        getChannelList();
    }, []);

    const setChatId = (id) => {
        console.log("chat id changed", id);
        url.searchParams.set('channel', id);
        window.history.pushState({}, '', url);
        setChatDetails(id);
    }

    return <>
        <div className="flexG flex-col h100 ovrflwH app-submodule-nav">
            <div className="flexG h100 flex-col mychats">
                <div className="flexG ovrflwA pb5 overflow-controls">
                    <div id="pinnedChats" >
                        <div className='dflx justifySB heading ' >
                            <span className=" font17 ellips ">Channels</span>
                            <span className='more' onClick={() => setStatus(true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                </svg>
                            </span>
                        </div>
                        {channelList.map((channel, index) => {
                            return <div className="dflx list " key={channel._id} onClick={() => setChatId(channel._id)}>
                                <span className='hashTag'>#</span>
                                <span className='pL1 ellips'> {channel.name}</span>
                                <span className='options dflx'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-pin-angle-fill" viewBox="0 0 16 16">
                                        <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                    </svg>
                                </span>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    </>
};
