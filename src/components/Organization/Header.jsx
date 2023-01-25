import React, { Component } from 'react'

export default function Header() {
    return <>
        <header className="flexC justifySB w100">
            <a className="logo"><img src="https://static.zohocdn.com/chat/source/officechat/images/newlogodark.png" /></a>
            {/* <div className="flex fdirC textR" style={{ marginRight: "20px" }}>
                <div className="clrS">(oviiguna@gmail.com)</div>
                <a purpose="logout" id="logout" className="logout cur font17">Sign out</a>
            </div> */}
        </header>
    </>;
}