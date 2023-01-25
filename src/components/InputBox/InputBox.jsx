import React from 'react';
import './InputBox.scss';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';

export default function InputBox(params) {
    return <>
        <div className="chatarea">
            <div className='actions dflx justifySB'>
                <div></div>
                <div className='dflx'>
                    <div className=''>Actions</div>
                    <div className='arrow'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-chevron-down " viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className='chateditrmn'>
                <div className='linkTag'> <AttachFileOutlinedIcon className='flexC attachment'></AttachFileOutlinedIcon></div>
                <div className="textArea dflx">
                    <div id="" contentEditable="true" data-type="composer" rule="msg" className="textarea" data-trigger="smiley" data-purpose="zcslash" dir="auto" tabIndex="0"></div>
                </div>
                <div className='dflx' style={{ position: "absolute", right: "0px", top: "35%", bottom: "65%" }}>
                    <div className="chatOption">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-mic" viewBox="0 0 16 16">
                            <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                            <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
                        </svg>

                    </div>
                    <div className='chatOption'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-emoji-smile" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                        </svg>

                    </div>
                </div>
            </div>
            <div id="helptip" className="zcedtrinfo posl dflxcent" style={{ visibility: "visible" }}>
                <div className="flexC composrhelp posrel">
                    <div className="flexG textC font14 ellips">Type "/" for quick commands</div>
                    <div className="zcqustnmn posl fshrink">
                        <div className="markdwnHlp curP flexM" customtooltip="" data-operation="showmarkdown">
                            <span className="zcf-markdown font20 flexC"></span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
};
