import React, { useState, useEffect } from 'react';
import { getMediaFiles } from '../../../api/Channel/Channel';
import moment from 'moment/moment';

export default function MediaFiles({ chatInfo }) {

    const [fileList, setFileList] = useState([]);
    const [showItem, setShowItem] = useState("image");

    useEffect(() => {
        fetchMediaFiles("image");
    }, [])

    const fetchMediaFiles = async (mimetype) => {

        const res = await getMediaFiles({ channel_id: chatInfo?._id ?? "", type: mimetype });
        setFileList(res);

    }

    const filterTag = (tag) => {
        setShowItem(tag);
        fetchMediaFiles(tag)
    }

    function formatBytes(bytes, decimals = 2) {
        if (!+bytes) return '0 Bytes'

        const k = 1024
        const dm = decimals < 0 ? 0 : decimals
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

        const i = Math.floor(Math.log(bytes) / Math.log(k))

        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
    }

    return <>
        <div className="media-files">
            <div className="flexC cwin fjustifySA">
                <div id="type_filters" className="flexC fjustifySA flexM cwin-mediatab">
                    <div data-type="image" data-action="selectCategory" className={`cwin-mediatab-item font14 fontB curP ${showItem === "image" && "sel"}`} onClick={() => filterTag("image")}>Images</div>
                    {/* <div data-type="video" data-action="selectCategory" className="cwin-mediatab-item font14 fontB curP sel" data-selected="">Videos</div> */}
                    {/* <div data-type="audio" data-action="selectCategory" className="cwin-mediatab-item font14 fontB curP">Audio</div> */}
                    <div data-type="file" data-action="selectCategory" className={`cwin-mediatab-item font14 fontB curP ${showItem !== "image" && "sel"}`} onClick={() => filterTag("application")}>Files</div>
                    {/* <div data-type="link" data-action="selectCategory" className="cwin-mediatab-item font14 fontB curP">Links</div> */}
                    {/* <div data-type="recording" data-action="selectCategory" className="cwin-mediatab-item font14 fontB curP">Recordings</div> */}
                </div>
            </div>
            {/* <div className='media-info flexC justifySB'>
                {fileList.length > 0 &&
                    <div className='rep-month'>{moment(fileList[0]._id).format("MMMM, YYYY")}</div>}
               
            </div> */}

            <div className="flexW ovrflwA ml-data-container posrel" style={{ height: "calc(100vh - 160px)" }}>

                {fileList.length > 0 && fileList.map((Item, index) => {
                    return <>
                        <div className="fshrink medialisting-sticky-title">
                            <div className="mT20 fontB w100 ml-datesep line24 mB20" >
                                {`${moment(Item._id).isSame(moment(), 'day') ? "Today," : moment(Item._id).isSame(moment().subtract(1, 'days'), 'day') ? "Yesterday," : ""}${moment(Item._id).format("MMMM DD")}`}
                            </div>
                        </div>
                        <div id="grid_layout1" className="gridlay">
                            {showItem === "image" && Item.messages.map((msg) => {
                                return <div className="ml-grid-item curP posrel">
                                    <div className="h100 w100 posrel zhshare-src">
                                        <div id="img_dom">
                                            <img src={process.env.REACT_APP_BUCKET_END_POINT + msg.files[0].key} className="ml-image-item" />
                                        </div>
                                        <div className='img_bg posabs flexC'>
                                        </div>
                                        <div className='img_option posabs flexC justifySB'>

                                            <div style={{ width: '30px', height: "30px", borderRadius: "100%", overflow: "hidden" }} title={msg.sender.first_name + msg.sender.last_name ?? ""}>
                                                <img width="100%" height="100%" src={process.env.REACT_APP_BUCKET_END_POINT + (msg.sender.image_url || msg.sender.image_url)}></img>
                                            </div>
                                            <div style={{ padding: "3px 5px 1px ", borderBottom: "1px solid var(--color-divider)", background: "#fff", borderRadius: "5px" }}>
                                                <a href=""
                                                    // {process.env.REACT_APP_BUCKET_END_POINT + msg.files[0].key} target="_blank" download={msg.files[0].name}
                                                    className="dwnld-btn ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                                                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            })}

                            {showItem !== "image" && Item.messages.map((msg) => {
                                return <div className="ml-grid-item curP posrel">
                                    <div className="h100 w100 posrel zhshare-src">
                                        <span id="empty_thumb" data-name="empty_dom" class="ml-emptygrid-item flexM p12">
                                            <div class="zc-upldfile dIB">
                                                <span class="ml-file-default posa textC ellips fontB text-transU">.{msg.files[0].mimetype.slice(msg.files[0].mimetype.indexOf("/") + 1)}</span>
                                            </div>
                                        </span>
                                        <div class="fshrink pT12 pB10 pR12 pL12 curP file-display">
                                            <div class="flexC mB5 font14">
                                                <em class="dN ml-filename mR8 font13"></em>
                                                <div class="ellips">{msg.files[0].name}</div>
                                            </div>
                                            <div class="font12 ml-filesize">{formatBytes(msg.files[0].fileSize)}</div>
                                        </div>


                                        <div className='img_bg posabs flexC'>
                                        </div>
                                        <div className='img_option posabs flexC justifySB'>

                                            <div style={{ width: '30px', height: "30px", borderRadius: "100%", overflow: "hidden" }} title={msg.sender.first_name + msg.sender.last_name ?? ""}>
                                                <img width="100%" height="100%" src={process.env.REACT_APP_BUCKET_END_POINT + (msg.sender.image_url || msg.sender.image_url)}></img>
                                            </div>
                                            <div style={{ padding: "3px 5px 1px ", borderBottom: "1px solid var(--color-divider)", background: "#fff", borderRadius: "5px" }}>
                                                <a href=""
                                                    // {process.env.REACT_APP_BUCKET_END_POINT + msg.files[0].key} target="_blank" download={msg.files[0].name}
                                                    className="dwnld-btn ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                                                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            })}

                        </div>
                    </>
                })}

                {/*  */}

            </div>


        </div>
    </>;
};
