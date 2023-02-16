import axios from "axios";
import config from "../../config";

export const getChatUserInfo = async(data) => {
  console.log(data);
    const res = await axios.post(`${config.END_POINT}/chat/chat-user`,{user_id: data},{
    headers: {
        'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
      }
  });
  console.log(res);
  return res.data.profile;
} 

export const fetchPinChats = async() => {
  const res = await axios.post(`${config.END_POINT}/chat/pinned-chats`,{organization_id:JSON.parse(localStorage.getItem("!@#$%^org)(*&^%$")).id},{
    headers: {
        'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
      }
  });
  console.log(res);
  return res.data.pinned_chats;
}

export const fetchConvoChats = async() => {
  const res = await axios.post(`${config.END_POINT}/chat/conversations`,{organization_id:JSON.parse(localStorage.getItem("!@#$%^org)(*&^%$")).id},{
    headers: {
        'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
      }
  });
  console.log(res);
  return res.data.conversations;
}

export const getProfileAndLastMessage = async(data) => {
  const res = await axios.post(`${config.END_POINT}/chat/get-profile`,data,{
    headers: {
        'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
      }
  });
  console.log(res);
  return res.data;
}