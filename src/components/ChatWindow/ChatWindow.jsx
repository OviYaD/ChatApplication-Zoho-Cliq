import React, { useState } from 'react';
import ChannelDescription from '../ChannelDescription/ChannelDescription';
import InputBox from '../InputBox/InputBox';
import './ChatWindow.scss';
import Header from './Header';

export default function ChatWindow(params) {
    const [openDes, setOpenStatus] = useState(false);
    return <>
        <div className="" style={{ backgroundColor: "#fff", width: "100%", borderRadius: "10px", marginLeft: "2px", marginRight: "8px", position: "relative" }}>
            <Header setOpenStatus={setOpenStatus} ></Header>
            <div style={{ margin: "3px" }}>
                <div className='chatBody'>
                    <p>jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br /></p>
                    <p>jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br /></p>
                </div>w
            </div>
            <InputBox></InputBox>
        </div>
        {openDes && <ChannelDescription setOpenStatus={setOpenStatus} ></ChannelDescription>}
    </>;
};
