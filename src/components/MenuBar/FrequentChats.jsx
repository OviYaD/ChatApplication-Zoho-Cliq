import React, { useState, useEffect } from 'react';
import { getFrequentContacts } from '../../api/search/search';
import { useSelector } from 'react-redux';

export default function FrequentChats({ setChatDetails, openChat }) {
    const [freqChats, setFreqChats] = useState([]);
    const profile = useSelector((state) => state.user);
    useEffect(() => {
        fetchFrequentContact();
        console.log("search result")
    }, [])

    const fetchFrequentContact = async () => {
        const res = await getFrequentContacts();
        setFreqChats(res);
    }


    return <>
        {freqChats.length > 0 && <div className="frqt-contact">
            <span className='frqt-contact-head'>Frequent Contact</span>
            <div className="flexC frqt-contact-list">

                {freqChats.length > 0 && freqChats.map((user, index) => {
                    return <div key={user.user_id} className='cur frqt-contact-items' onClick={() => openChat(user.user_id, "CHAT", [profile.user_id, user.user_id].sort().join(":"))}>
                        <div className='list-img-wrapper '>
                            <img width="100%" height="100%" src={process.env.REACT_APP_BUCKET_END_POINT + user?.image_url}></img>
                        </div>
                        <div className="contact-name block-ellipsis">
                            {user.first_name + " " + user.last_name ?? ""}
                        </div>
                    </div>
                })}

                {/* <div className='cur frqt-contact-items'>
                    <div className='list-img-wrapper'>
                        <img width="100%" height="100%" src='	http://www.petshop18.com/image/cache/catalog/blog/Cat%20blog/Kitten-HD-Wallpaper-250x250.jpg'></img>
                    </div>
                    <div className="contact-name block-ellipsis">
                        Richard JoelJoelJoel
                    </div>
                </div>
                <div className='cur frqt-contact-items'>
                    <div className='list-img-wrapper'>
                        <img width="100%" height="100%" src='	http://www.petshop18.com/image/cache/catalog/blog/Cat%20blog/Kitten-HD-Wallpaper-250x250.jpg'></img>
                    </div>
                    <div className="contact-name block-ellipsis">
                        Richard JoelJoelJoel
                    </div>
                </div>
                <div className='cur frqt-contact-items'>
                    <div className='list-img-wrapper'>
                        <img width="100%" height="100%" src='	http://www.petshop18.com/image/cache/catalog/blog/Cat%20blog/Kitten-HD-Wallpaper-250x250.jpg'></img>
                    </div>
                    <div className="contact-name block-ellipsis">
                        Richard JoelJoelJoel
                    </div>
                </div> */}

            </div>
        </div>}
    </>;
};
