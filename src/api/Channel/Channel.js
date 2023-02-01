import axios from "axios";
import config from "../../config";

export const createChannel = async (data) => {
  console.log(data);
  const msg = await axios.post(`${config.END_POINT}/channel/create-channel`, data,{
    headers : {
      'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
    }
  });
  return msg;
};

export const getChannels = async() => {
  console.log("get channels")
  const res = await axios.post(`${config.END_POINT}/channel/get-channels`,{organization_id:JSON.parse(localStorage.getItem("!@#$%^org)(*&^%$")).id},{
    headers : {
      'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
    }
  });
  console.log(res);
  return res.data.channels;
}


export const getChannelInfo = async(id) => {
  console.log(id);
  const res = await axios.get(`${config.END_POINT}/channel/get-channel/${id}`,{
    headers : {
      'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
    }
  });
  console.log(res);
  return res.data;
}