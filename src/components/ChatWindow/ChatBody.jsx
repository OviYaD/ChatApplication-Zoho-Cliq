import React, { useState, useEffect, useRef } from 'react';
import { ReactDOM } from 'react-dom/client';
import CircleLoader from '../loaders/CircleLoader';
import Message from './Message';
import LoadingPage from '../loaders/LoadingPage';

export default function ChatBody({ newMsg, socket, messages }) {


    const handleScroll = event => {
        console.log("ksjksjdksj")
        const height = event.currentTarget.scrollTop + 1298;
        console.log("skdjskjsd", height)

    };

    return <>
        {messages ? <div style={{ margin: "3px" }} >
            <div className='chatBody' onScroll={handleScroll}>
                <div className='chat-content' >
                    {/* <CircleLoader></CircleLoader> */}
                    {/* <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p>
                    <p>shhdjshdjbsxjbuiashdjnoasofhofeso</p> */}
                    <Message newMsg={newMsg} socket={socket} messages={messages}></Message>

                    {/* <div className='msgtxt' style={{ display: "flex" }}>
                        <div className='zcnew-strtng flexC'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16" style={{ color: "grey" }}>
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                            <div className="sent-time">2.40am</div>
                        </div>
                        <div className='message flexC'>sshdhshdjshdjhsjdsjhdjhdsdjhsjbnxbh iuwikwds</div>

                    </div>
                    <div className='msgtxt' style={{ display: "flex" }}>
                        <div className='zcnew-strtng flexC'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16" style={{ color: "grey" }}>
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                            <div className="sent-time">2.40am</div>
                        </div>
                        <div className='message flexC'>sshdhshdjshdjhsjdsjhdjhdsdjhsjbnxbh iuwikwds</div>

                    </div>
                    <div className='msgtxt' style={{ display: "flex" }}>
                        <div className='zcnew-strtng flexC'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16" style={{ color: "grey" }}>
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                            <div className="sent-time">2.40am</div>
                        </div>
                        <div className='message flexC'>sshdhshdjshdjhsjdsjhdjhdsdjhsjbnxbh iuwikwds</div>

                    </div>
                    <div className='msgtxt' style={{ display: "flex" }}>
                        <div className='zcnew-strtng flexC'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16" style={{ color: "grey" }}>
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                            <div className="sent-time">2.40am</div>
                        </div>
                        <div className='message flexC'>sshdhshdjshdjhsjdsjhdjhdsdjhsjbnxbh iuwikwds</div>

                    </div>
                    <div className='msgtxt' style={{ display: "flex" }}>
                        <div className='zcnew-strtng flexC'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16" style={{ color: "grey" }}>
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                            <div className="sent-time">2.40am</div>
                        </div>
                        <div className='message flexC'>sshdhshdjshdjhsjdsjhdjhdsdjhsjbnxbh iuwikwds</div>

                    </div>
                    <div className='msgtxt' style={{ display: "flex" }}>
                        <div className='zcnew-strtng flexC'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16" style={{ color: "grey" }}>
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                            <div className="sent-time">2.40am</div>
                        </div>
                        <div className='message flexC'>sshdhshdjshdjhsjdsjhdjhdsdjhsjbnxbh iuwikwds</div>

                    </div>
                    <div className='msgtxt' style={{ display: "flex" }}>
                        <div className='zcnew-strtng flexC'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16" style={{ color: "grey" }}>
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                            <div className="sent-time">2.40am</div>
                        </div>
                        <div className='message flexC'>sshdhshdjshdjhsjdsjhdjhdsdjhsjbnxbh iuwikwds</div>

                    </div>
                    <div className='msgtxt' style={{ display: "flex" }}>
                        <div className='zcnew-strtng flexC'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16" style={{ color: "grey" }}>
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                            <div className="sent-time">2.40am</div>
                        </div>
                        <div className='message flexC'>sshdhshdjshdjhsjdsjhdjhdsdjhsjbnxbh iuwikwds</div>

                    </div>
                    <div className='msgtxt' style={{ display: "flex" }}>
                        <div className='zcnew-strtng flexC'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16" style={{ color: "grey" }}>
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                            <div className="sent-time">2.40am</div>
                        </div>
                        <div className='message flexC'>sshdhshdjshdjhsjdsjhdjhdsdjhsjbnxbh iuwikwds</div>

                    </div>
                    <div className='msgtxt' style={{ display: "flex" }}>
                        <div className='zcnew-strtng flexC'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16" style={{ color: "grey" }}>
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                            <div className="sent-time">2.40am</div>
                        </div>
                        <div className='message flexC'>sshdhshdjshdjhsjdsjhdjhdsdjhsjbnxbh iuwikwds</div>

                    </div>
                    <div className='msgtxt' style={{ display: "flex" }}>
                        <div className='zcnew-strtng flexC'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16" style={{ color: "grey" }}>
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                            <div className="sent-time">2.40am</div>
                        </div>
                        <div className='message flexC'>sshdhshdjshdjhsjdsjhdjhdsdjhsjbnxbh iuwikwds</div>

                    </div>
                    <div className='msgtxt' style={{ display: "flex" }}>
                        <div className='zcnew-strtng flexC'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16" style={{ color: "grey" }}>
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                            <div className="sent-time">2.40am</div>
                        </div>
                        <div className='message flexC'>sshdhshdjshdjhsjdsjhdjhdsdjhsjbnxbh iuwikwds</div>

                    </div>
                    <div className='msgtxt' style={{ display: "flex" }}>
                        <div className='zcnew-strtng flexC'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16" style={{ color: "grey" }}>
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                            <div className="sent-time">2.40am</div>
                        </div>
                        <div className='message flexC'>sshdhshdjshdjhsjdsjhdjhdsdjhsjbnxbh iuwikwds</div>

                    </div>
                    <div className='msgtxt' style={{ display: "flex" }}>
                        <div className='zcnew-strtng flexC'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16" style={{ color: "grey" }}>
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                            <div className="sent-time">2.40am</div>
                        </div>
                        <div className='message flexC'>sshdhshdjshdjhsjdsjhdjhdsdjhsjbnxbh iuwikwds</div>

                    </div>
                    <div className='msgtxt' style={{ display: "flex" }}>
                        <div className='zcnew-strtng flexC'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16" style={{ color: "grey" }}>
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                            <div className="sent-time">2.40am</div>
                        </div>
                        <div className='message flexC'>sshdhshdjshdjhsjdsjhdjhdsdjhsjbnxbh iuwikwds</div>

                    </div>
                    <div className='msgtxt' style={{ display: "flex" }}>
                        <div className='zcnew-strtng flexC'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16" style={{ color: "grey" }}>
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                            <div className="sent-time">2.40am</div>
                        </div>
                        <div className='message flexC'>sshdhshdjshdjhsjdsjhdjhdsdjhsjbnxbh iuwikwds</div>

                    </div>
                    <div className='msgtxt' style={{ display: "flex" }}>
                        <div className='zcnew-strtng flexC'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16" style={{ color: "grey" }}>
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                            <div className="sent-time">2.40am</div>
                        </div>
                        <div className='message flexC'>sshdhshdjshdjhsjdsjhdjhdsdjhsjbnxbh iuwikwds</div>

                    </div>
                    <div className='msgtxt' style={{ display: "flex" }}>
                        <div className='zcnew-strtng flexC'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16" style={{ color: "grey" }}>
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                            <div className="sent-time">2.40am</div>
                        </div>
                        <div className='message flexC'>sshdhshdjshdjhsjdsjhdjhdsdjhsjbnxbh iuwikwds</div>

                    </div>
                    <div className='msgtxt' style={{ display: "flex" }}>
                        <div className='zcnew-strtng flexC'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16" style={{ color: "grey" }}>
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                            <div className="sent-time">2.40am</div>
                        </div>
                        <div className='message flexC'>sshdhshdjshdjhsjdsjhdjhdsdjhsjbnxbh iuwikwds</div>

                    </div>
                    <div className='msgtxt' style={{ display: "flex" }}>
                        <div className='zcnew-strtng flexC'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16" style={{ color: "grey" }}>
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                            <div className="sent-time">2.40am</div>
                        </div>
                        <div className='message flexC'>sshdhshdjshdjhsjdsjhdjhdsdjhsjbnxbh iuwikwds</div>

                    </div>
                    <div className='msgtxt' style={{ display: "flex" }}>
                        <div className='zcnew-strtng flexC'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16" style={{ color: "grey" }}>
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                            <div className="sent-time">2.40am</div>
                        </div>
                        <div className='message flexC'>sshdhshdjshdjhsjdsjhdjhdsdjhsjbnxbh iuwikwds</div>

                    </div>
                    <div className='msgtxt' style={{ display: "flex" }}>
                        <div className='zcnew-strtng flexC'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16" style={{ color: "grey" }}>
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg>
                            <div className="sent-time">2.40am</div>
                        </div>
                        <div className='message flexC'>sshdhshdjshdjhsjdsjhdjhdsdjhsjbnxbh iuwikwds</div>

                    </div> */}


                </div>
                {/* <p>jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br /> */}
                {/* jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br /></p> */}
                {/* <p>jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br />jabjhsjhsjshdjshdjshdjsdhjs <br /></p> */}
            </div>
        </div> : <LoadingPage></LoadingPage>}
    </>
};
