import React, { useState, useEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { starMessage } from '../../../api/General/message';
import { useSelector } from 'react-redux';

export default function StarWrapper({ setStarId, msgId, setMessages }) {

    const user = useSelector((state) => state.user);

    const handleStar = async (msgId, type) => {
        const res = await starMessage({ id: msgId, type });
        const isStar = res.starred_by.filter((strMsg, i) => {
            return strMsg.user.user_id === user.user_id;
        });
        setMessages(messageList => {
            const isStar = res.starred_by.filter((strMsg, i) => {
                return strMsg.user.user_id === user.user_id;
            });
            messageList[messageList.findIndex(msg => msg._id === msgId)] = { ...res, isStar: isStar[0] };
            console.log(messageList);
            return messageList
        })

        setStarId("");


    }
    return <>
        <OutsideClickHandler onOutsideClick={() => setStarId("")}>
            <div className="staroptnsbox chtwndw" style={{ zIndex: "10000", marginLeft: "1.5rem" }}>
                <span purpose="star" type="1" className="msi-starsel type1" onClick={() => handleStar(msgId, "IMPORTANT")}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-star type1" viewBox="0 0 16 16" >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg>
                    </span>
                    <span style={{ fontSize: "10px", marginTop: "-10px" }}>Important</span>
                </span>
                <span purpose="star" type="2" className="msi-starsel type2" onClick={() => handleStar(msgId, "TODO")}>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-star type2" viewBox="0 0 16 16" >
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                    </svg></span>
                    <span style={{ fontSize: "10px", marginTop: "-10px" }}>To-do</span>

                </span>
                <span purpose="star" type="3" className="msi-starsel type3" onClick={() => handleStar(msgId, "NOTE")}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-star type3" viewBox="0 0 16 16" >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg>
                    </span>
                    <span style={{ fontSize: "10px", marginTop: "-10px" }}>Note</span>

                </span>
                <span purpose="star" type="4" className="msi-starsel type4" onClick={() => handleStar(msgId, "MANAGER")}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-star type4" viewBox="0 0 16 16" >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg>
                    </span>
                    <span style={{ fontSize: "10px", marginTop: "-10px" }}>Manager</span>
                </span>
                <span purpose="star" type="5" className="msi-starsel type5" onClick={() => handleStar(msgId, "FLLOWUP")}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-star type5" viewBox="0 0 16 16">
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg>
                    </span>
                    <span style={{ fontSize: "10px", marginTop: "-10px" }}>Follow-up</span>

                </span>
            </div>
        </OutsideClickHandler>
    </>
};
