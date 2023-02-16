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

export const getUserContacts = async() =>{
    const res = await axios.get();
    
}