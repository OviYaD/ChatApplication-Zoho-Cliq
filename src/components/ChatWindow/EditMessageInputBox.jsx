import React, { useState, useEffect } from 'react';
import { editMessage } from '../../SocketEvents/events';
import "./EditMessage.scss"

export default function EditMessageInputBox({ setMsgId, socket, msgContent }) {
    const [editMsg, setEditMsg] = useState("");
    useEffect(() => {
        setEditMsg(msgContent.content);
    }, []);
    return <>
        <div id="editcontainer1264013913143657497" class="zcmsg-edtbx message-edit in-view" msguid="1675701772363%20833888181155">
            <div class="zcmsg-edt-inptbx-cont posrel" style={{ padding: "10px" }}>
                <textarea
                    id="editor1264013913143657497"
                    class="zcmsg-edt-inptbx"
                    style={{ width: "94%" }}
                    // onChange={(e) => console.log(e.target.value)}
                    value={editMsg}
                    onChange={(e) => setEditMsg(e.target.value)}
                >

                    {/* <textarea className='zcmsg-edt-inptbx'></textarea> */}
                </textarea>
                <div id="editor_smileytrigger1264013913143657497" purpose="smileytrigger" data-trigger="source" class="zc-edt-smily"><em class="msi-zcsmly smiley-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                    </svg>
                </em></div>
                <div id="editor_smileys1264013913143657497" data-trigger="destination" class="smileydivmn" data-target="1" ignore_sticker="true" ignore_giphy="true"></div>
            </div>
            <div class="zcmsg-edtbx-bts flexC">
                <div class="edit-notify-wrp dflxcent flexG ellips">
                    <label for="editnotify1264013913143657497" class="curP flexC pL5 ellips">
                        <div class="zcl-checkbox"><input id="editnotify1264013913143657497" type="checkbox" /><span class="zcf-tick flexM"></span></div>
                        <div class="font13 clr-S curP ellips">Notify</div>
                    </label>
                </div>
                <div class="fshrink mL12 flexC">
                    <div id="canceledit" purpose="canceledit" class="zcl-btn-xs zcl-btn--secondary msg-edit-cancel_btn"><span class="msg-edit-cancel_label" onClick={() => setMsgId("")} >Cancel</span></div>
                    <div id="saveedit" purpose="saveedit" class="zcl-btn-xs zcl-btn--primary" style={{ marginLeft: "10px" }} onClick={() => { editMessage(socket, msgContent._id, editMsg); setMsgId("") }}>Save</div>
                </div>
            </div>
        </div>

    </>
}