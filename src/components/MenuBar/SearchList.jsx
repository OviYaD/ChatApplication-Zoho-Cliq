import React, { useState, useEffect, useRef, useCallback } from 'react';
import { getChannels, getUsers, getMessages, multiSearch } from '../../api/search/search';
import CircleLoader from '../loaders/CircleLoader';
import moment from 'moment/moment';
import { useSelector } from 'react-redux';

export default function SearchList({ openChat, showInfo, setShowInfo, query, selectedItem }) {

    const [searchResult, setSearchResult] = useState();
    const user = useSelector((state) => state.user);
    const observer = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = React.useState(true);
    const [pages, setPages] = React.useState(0);


    useEffect(() => {

        fetchUser();
    }, [query])

    const fetchUser = async () => {
        console.log("query and selectedItems", query, selectedItem);
        if (selectedItem === "channels") {
            const res = await getChannels(query);
            setSearchResult(res);
        }
        else if (selectedItem === "users") {
            const res = await getUsers(query);
            setSearchResult(res);
            setShowInfo(res[0])
        }
        else if (selectedItem === "messages") {
            const res = await getMessages(query);
            setSearchResult(res);
            // setShowInfo(res[0])
        }
        else if (selectedItem === "all") {
            const res = await multiSearch(query);
            setSearchResult(res)
        }
    }

    const updateItems = async () => {
        // console.log("updating.........", searchResult)
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));


        const res = await getMessages(query, 15 * pages);
        if (res.length !== 0) {
            setSearchResult((result) => [...result, ...res]);
        }
        else {
            setHasMore(true);
        }
        setIsLoading(false);
    };

    const selectChat = (chat, filterType) => {
        if (selectedItem === "all") {
            if (filterType === "users") {
                openChat(chat.receiver.user_id, "CHAT", chat.chat_id, chat)
            }
            else {
                if (filterType === "messages")
                    chat.is_private ? openChat(chat.receiver.user_id, "CHAT", chat.chat_id, chat) : openChat(chat.chat_id, "CHANNEL", "", chat);
                else
                    openChat(chat.id, "CHANNEL")
            }
        }
        else if (selectedItem === "users")
            setShowInfo(chat);
        else {
            if (selectedItem === "messages")
                chat.is_private ? openChat(chat.receiver.user_id, "CHAT", chat.chat_id, chat) : openChat(chat.chat_id, "CHANNEL", "", chat);
            else
                openChat(chat.id, "CHANNEL")
        }
    }

    const lastItemRef = useCallback(
        (node) => {
            if (isLoading) return;
            if (observer.current) observer.current.disconnect();

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    if (pages < 15) {
                        updateItems();
                        setPages((pages) => pages + 1);
                    } else {
                        setHasMore(false);
                    }
                }
            });

            if (node) observer.current.observe(node);
        },
        [isLoading, hasMore]
    );

    return <>
        {searchResult && <div className='srp-item-container'>
            {(searchResult.users || searchResult.channels || searchResult.messages) ? <>

                {
                    searchResult.users ? searchResult.users.map((chat, index) => {
                        return <div className={`flexC cur srp-item ${showInfo === chat && "activeItem"}`} key={chat.id} onClick={() => selectChat(chat, "users")}>
                            <div style={{ width: "38px", height: "38px", overflow: "hidden", borderRadius: "100%" }}>
                                <img width="100%" height="100%" src={process.env.REACT_APP_BUCKET_END_POINT + chat.image_url}></img>
                            </div>
                            <div className='srp-info'>

                                <div className="srp-name">{chat.first_name + " " + chat.last_name ?? ""}</div>
                                <div className='srp-email'>{chat.email}</div>
                            </div>

                        </div>
                    }) : <CircleLoader></CircleLoader>
                }
                {
                    searchResult.channels ? searchResult.channels.map((chat, index) => {
                        return <div className={`flexC cur srp-item ${showInfo === chat && "activeItem"}`} key={chat.id} onClick={() => selectChat(chat, "channels")}>
                            <div style={{ width: "38px", height: "38px", overflow: "hidden", borderRadius: "100%" }}>
                                <img width="100%" height="100%" src={process.env.REACT_APP_BUCKET_END_POINT + chat.image_url}></img>
                            </div>
                            <div className='srp-info'>
                                <div className="srp-name"> # {chat.name}</div>
                                <div className='srp-email'>{chat.description}</div>
                            </div>

                        </div>
                    }) : <CircleLoader></CircleLoader>
                }





                {
                    searchResult.messages ? searchResult.messages.map((msg, index) => {
                        return (index + 1 === searchResult.length ?
                            <div ref={lastItemRef}>
                                <div className={`zcl-list-item large sel ${showInfo === msg.id && "activeItem"}`} key={msg.id} onClick={() => selectChat(msg, "messages")}>
                                    <div id="textnode" class="flexG ellips">
                                        <div class="flexC">
                                            <div class="ellips flexG fontB clr-lp1 font14">
                                                {msg.is_private ? msg.receiver.first_name + " " + msg.receiver.last_name ?? "" : "#" + msg.channel.name}
                                            </div>
                                            <div class="fshrink mL10 gslist-time">
                                                <span title="Yesterday, February 25">
                                                    {moment(msg.created_at).isSame(moment(), 'day') ? "Today," + moment(msg.created_at).format("hh:mm A") : moment(msg.created_at).isSame(moment().subtract(1, 'days'), 'day') ? "Yesterday," + moment(msg.created_at).format("hh:mm A") : moment(msg.created_at).format("MMM. DD,  hh:mm A")} </span>
                                            </div>
                                        </div>
                                        <div id="msgsender" uid="60016689068" class="flexC mT5 font14">
                                            <span class="fshrink mR5">{user.user_id === msg.sender.user_id ? "You" : msg.sender.first_name + " " + msg.sender.last_name ?? ""}:&nbsp;</span>
                                            <span class="flexG ellips lastMsg">{msg.content}</span>
                                        </div>
                                    </div>


                                </div>
                            </div> :
                            <div className={`zcl-list-item large sel ${showInfo === msg.id && "activeItem"}`} key={msg.id} onClick={() => selectChat(msg)}>
                                <div id="textnode" class="flexG ellips">
                                    <div class="flexC">
                                        <div class="ellips flexG fontB clr-lp1 font14">
                                            {msg.is_private ? msg.receiver.first_name + " " + msg.receiver.last_name ?? "" : "#" + msg.channel.name}
                                        </div>
                                        <div class="fshrink mL10 gslist-time">
                                            <span title="Yesterday, February 25">
                                                {moment(msg.created_at).isSame(moment(), 'day') ? "Today," + moment(msg.created_at).format("hh:mm A") : moment(msg.created_at).isSame(moment().subtract(1, 'days'), 'day') ? "Yesterday," + moment(msg.created_at).format("hh:mm A") : moment(msg.created_at).format("MMM. DD,  hh:mm A")} </span>
                                        </div>
                                    </div>
                                    <div id="msgsender" uid="60016689068" class="flexC mT5 font14">
                                        <span class="fshrink mR5">{user.user_id === msg.sender.user_id ? "You" : msg.sender.first_name + " " + msg.sender.last_name ?? ""}:&nbsp;</span>
                                        <span class="flexG ellips lastMsg">{msg.content}</span>
                                    </div>
                                </div>


                            </div>
                        )


                    }) : <CircleLoader></CircleLoader>
                }

            </> :

                <>
                    {selectedItem !== "messages" &&
                        <>{
                            searchResult ? searchResult.map((chat, index) => {
                                return <div className={`flexC cur srp-item ${showInfo === chat && "activeItem"}`} key={chat.id} onClick={() => selectChat(chat)}>
                                    <div style={{ width: "38px", height: "38px", overflow: "hidden", borderRadius: "100%" }}>
                                        <img width="100%" height="100%" src={process.env.REACT_APP_BUCKET_END_POINT + chat.image_url}></img>
                                    </div>
                                    <div className='srp-info'>

                                        {selectedItem === "channels" ? <><div className="srp-name"> # {chat.name}</div>
                                            <div className='srp-email'>{chat.description}</div> </> :
                                            <><div className="srp-name">{chat.first_name + " " + chat.last_name ?? ""}</div>
                                                <div className='srp-email'>{chat.email}</div></>}
                                    </div>

                                </div>
                            }) : <CircleLoader></CircleLoader>
                        }</>}


                    {selectedItem === "messages" &&
                        <>{
                            searchResult ? searchResult.map((msg, index) => {
                                return (index + 1 === searchResult.length ?
                                    <div ref={lastItemRef}>
                                        <div className={`zcl-list-item large sel ${showInfo === msg.id && "activeItem"}`} key={msg.id} onClick={() => selectChat(msg)}>
                                            <div id="textnode" class="flexG ellips">
                                                <div class="flexC">
                                                    <div class="ellips flexG fontB clr-lp1 font14">
                                                        {msg.is_private ? msg.receiver.first_name + " " + msg.receiver.last_name ?? "" : "#" + msg.channel.name}
                                                    </div>
                                                    <div class="fshrink mL10 gslist-time">
                                                        <span title="Yesterday, February 25">
                                                            {moment(msg.created_at).isSame(moment(), 'day') ? "Today," + moment(msg.created_at).format("hh:mm A") : moment(msg.created_at).isSame(moment().subtract(1, 'days'), 'day') ? "Yesterday," + moment(msg.created_at).format("hh:mm A") : moment(msg.created_at).format("MMM. DD,  hh:mm A")} </span>
                                                    </div>
                                                </div>
                                                <div id="msgsender" uid="60016689068" class="flexC mT5 font14">
                                                    <span class="fshrink mR5">{user.user_id === msg.sender.user_id ? "You" : msg.sender.first_name + " " + msg.sender.last_name ?? ""}:&nbsp;</span>
                                                    <span class="flexG ellips lastMsg">{msg.content}</span>
                                                </div>
                                            </div>


                                        </div>
                                    </div> :
                                    <div className={`zcl-list-item large sel ${showInfo === msg.id && "activeItem"}`} key={msg.id} onClick={() => selectChat(msg)}>
                                        <div id="textnode" class="flexG ellips">
                                            <div class="flexC">
                                                <div class="ellips flexG fontB clr-lp1 font14">
                                                    {msg.is_private ? msg.receiver.first_name + " " + msg.receiver.last_name ?? "" : "#" + msg.channel.name}
                                                </div>
                                                <div class="fshrink mL10 gslist-time">
                                                    <span title="Yesterday, February 25">
                                                        {moment(msg.created_at).isSame(moment(), 'day') ? "Today," + moment(msg.created_at).format("hh:mm A") : moment(msg.created_at).isSame(moment().subtract(1, 'days'), 'day') ? "Yesterday," + moment(msg.created_at).format("hh:mm A") : moment(msg.created_at).format("MMM. DD,  hh:mm A")} </span>
                                                </div>
                                            </div>
                                            <div id="msgsender" uid="60016689068" class="flexC mT5 font14">
                                                <span class="fshrink mR5">{user.user_id === msg.sender.user_id ? "You" : msg.sender.first_name + " " + msg.sender.last_name ?? ""}:&nbsp;</span>
                                                <span class="flexG ellips lastMsg">{msg.content}</span>
                                            </div>
                                        </div>


                                    </div>
                                )


                            }) : <CircleLoader></CircleLoader>
                        }</>}

                </>}



            {/* <div className='flexC srp-item'>
                <div style={{ width: "38px", height: "38px", overflow: "hidden", borderRadius: "100%" }}>
                    <img width="100%" height="100%" src='http://www.petshop18.com/image/cache/catalog/blog/Cat%20blog/Kitten-HD-Wallpaper-250x250.jpg'></img>
                </div>
                <div className='srp-info'>
                    <div className="srp-name">Oviya D</div>
                    <div className='srp-email'>oviyad.19cse@kongu.edu</div>
                </div>

            </div>
            <div className='flexC srp-item'>
                <div style={{ width: "38px", height: "38px", overflow: "hidden", borderRadius: "100%" }}>
                    <img width="100%" height="100%" src='http://www.petshop18.com/image/cache/catalog/blog/Cat%20blog/Kitten-HD-Wallpaper-250x250.jpg'></img>
                </div>
                <div className='srp-info'>
                    <div className="srp-name">Oviya D</div>
                    <div className='srp-email'>oviyad.19cse@kongu.edu</div>
                </div>

            </div>
            <div className='flexC srp-item'>
                <div style={{ width: "38px", height: "38px", overflow: "hidden", borderRadius: "100%" }}>
                    <img width="100%" height="100%" src='http://www.petshop18.com/image/cache/catalog/blog/Cat%20blog/Kitten-HD-Wallpaper-250x250.jpg'></img>
                </div>
                <div className='srp-info'>
                    <div className="srp-name">Oviya D</div>
                    <div className='srp-email'>oviyad.19cse@kongu.edu</div>
                </div>

            </div>

            <div className='flexC srp-item'>
                <div style={{ width: "38px", height: "38px", overflow: "hidden", borderRadius: "100%" }}>
                    <img width="100%" height="100%" src='http://www.petshop18.com/image/cache/catalog/blog/Cat%20blog/Kitten-HD-Wallpaper-250x250.jpg'></img>
                </div>
                <div className='srp-info'>
                    <div className="srp-name">Oviya D</div>
                    <div className='srp-email'>oviyad.19cse@kongu.edu</div>
                </div>

            </div>
            <div className='flexC srp-item'>
                <div style={{ width: "38px", height: "38px", overflow: "hidden", borderRadius: "100%" }}>
                    <img width="100%" height="100%" src='http://www.petshop18.com/image/cache/catalog/blog/Cat%20blog/Kitten-HD-Wallpaper-250x250.jpg'></img>
                </div>
                <div className='srp-info'>
                    <div className="srp-name">Oviya D</div>
                    <div className='srp-email'>oviyad.19cse@kongu.edu</div>
                </div>

            </div>
            <div className='flexC srp-item'>
                <div style={{ width: "38px", height: "38px", overflow: "hidden", borderRadius: "100%" }}>
                    <img width="100%" height="100%" src='http://www.petshop18.com/image/cache/catalog/blog/Cat%20blog/Kitten-HD-Wallpaper-250x250.jpg'></img>
                </div>
                <div className='srp-info'>
                    <div className="srp-name">Oviya D</div>
                    <div className='srp-email'>oviyad.19cse@kongu.edu</div>
                </div>

            </div>
            <div className='flexC srp-item'>
                <div style={{ width: "38px", height: "38px", overflow: "hidden", borderRadius: "100%" }}>
                    <img width="100%" height="100%" src='http://www.petshop18.com/image/cache/catalog/blog/Cat%20blog/Kitten-HD-Wallpaper-250x250.jpg'></img>
                </div>
                <div className='srp-info'>
                    <div className="srp-name">Oviya D</div>
                    <div className='srp-email'>oviyad.19cse@kongu.edu</div>
                </div>

            </div>
            <div className='flexC srp-item'>
                <div style={{ width: "38px", height: "38px", overflow: "hidden", borderRadius: "100%" }}>
                    <img width="100%" height="100%" src='http://www.petshop18.com/image/cache/catalog/blog/Cat%20blog/Kitten-HD-Wallpaper-250x250.jpg'></img>
                </div>
                <div className='srp-info'>
                    <div className="srp-name">Oviya D</div>
                    <div className='srp-email'>oviyad.19cse@kongu.edu</div>
                </div>

            </div>
            <div className='flexC srp-item'>
                <div style={{ width: "38px", height: "38px", overflow: "hidden", borderRadius: "100%" }}>
                    <img width="100%" height="100%" src='http://www.petshop18.com/image/cache/catalog/blog/Cat%20blog/Kitten-HD-Wallpaper-250x250.jpg'></img>
                </div>
                <div className='srp-info'>
                    <div className="srp-name">Oviya D</div>
                    <div className='srp-email'>oviyad.19cse@kongu.edu</div>
                </div>

            </div> */}

        </div>}
    </>
};
