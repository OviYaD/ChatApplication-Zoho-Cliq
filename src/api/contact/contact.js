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
    const res = await axios.post(`${config.END_POINT}/contact/get`,{organization_id:JSON.parse(localStorage.getItem("!@#$%^org)(*&^%$")).id},{
    headers: {
        'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
      }
  });
  console.log("user contacts",res);
  return res.data;
}

export const sendInvitation  = async (receiver_id) => {
  try{
    const res = await axios.post(`${config.END_POINT}/contact/create`,{organization_id:JSON.parse(localStorage.getItem("!@#$%^org)(*&^%$")).id,receiver_id},{
    headers: {
        'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
      }
  });
  return true;
  }
  catch(e){
    return false;
  }
  
}

export const declineInvite = async(id) => {
  try{
    const res = await axios.post(`${config.END_POINT}/contact/decline`,{id},{
    headers: {
        'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
      }
  });
  return true;
  }
  catch(e){
    return false;
  }
}

export const acceptInvite = async(id) => {
  try{
    const res = await axios.post(`${config.END_POINT}/contact/accept`,{id},{
    headers: {
        'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
      }
  });
  return true;
  }
  catch(e){
    return false;
  }
}

export const removeContact = async(user_id) => {
  try{
    const res = await axios.post(`${config.END_POINT}/contact/remove`,{organization_id:JSON.parse(localStorage.getItem("!@#$%^org)(*&^%$")).id,user_id},{
    headers: {
        'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
      }
  });
  return true;
  }
  catch(e){
    return false;
  }
}

