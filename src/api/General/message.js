import axios from "axios";
import config from "../../config";

export const starMessage = async(data) => {
    const res = await axios.post(`${config.END_POINT}/message/star-message`, data,{
    headers : {
      'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
    }
  });
  console.log(res);
  return res.data.message;
}

export const getStarredMessage = async() => {
    const res = await axios.get(`${config.END_POINT}/message/star-message`,{
    headers : {
      'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
    }
  });
  console.log(res);
  return res.data.messages;
}