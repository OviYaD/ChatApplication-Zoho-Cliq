import axios from "axios";
import config from "../../config";
import { media } from '../../assets/mock_data';

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
  return res.data.channels;
}


export const getChannelInfo = async(id) => {
  const res = await axios.get(`${config.END_POINT}/channel/get-channel/${id}`,{
    headers : {
      'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
    }
  });
  return res.data.channel;
}

export const getMembers = async (data) =>{
  const res= await axios.post(`${config.END_POINT}/channel/members`,data,{
    headers : {
      'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
    }
  });
  console.log(res);
  return res.data.members;
}

export const addMembers = async(data) => {
  try{
    console.log(data)
  const res = await axios.post(`${config.END_POINT}/channel/add-members`,data,{
    headers : {
      'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
    }
  })
  console.log(res);
  return true;
  }
  catch(e){
    return false;
  }
}

export const getUnreadCount = async (data)=>{
  const res= await axios.post(`${config.END_POINT}/chat/unread-count`,
  {
    "organization_id":JSON.parse(localStorage.getItem("!@#$%^org)(*&^%$")).id
  },{
    headers : {
      'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
    }
  })

  console.log("unread count...",res);
  return res.data.unreadCount;
}

export const getOrganizationChannels = async(data="") => {
  const res= await axios.post(`${config.END_POINT}/channel/get-org-channels`,{
    query: data,
    "organization_id":JSON.parse(localStorage.getItem("!@#$%^org)(*&^%$")).id
  },{
    headers : {
      'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
    }
  })
  console.log("org channel list",res);
  return res.data.channels;

}

export const joinChannel = async(channel_id) => {

  try{
      const res= await axios.post(`${config.END_POINT}/channel/join-channel`,{
      channel_id
    },{
      headers : {
        'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
      }
    })
    return true;
  }
  catch(e){
    console.log(e);
    return false;
  }

}

export const editChannel = async(data,id) => {

  try{
    const msg = await axios.post(`${config.END_POINT}/channel/edit-channel/${id}`, data,{
    headers : {
      'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
    }
  });
  return true;
  }
  catch(e){
    console.log(e);
    return false;
  }
}

export const getMediaFiles = async(data) => {
  console.log("",data);
  const res =  await axios.post(`${config.END_POINT}/channel/media`,data ,{
    headers : {
      'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
    }
  });
  console.log(res);
  return res.data.messages;
  // return media.messages;
}

export const removeMember = async(data) => {
  const res =  await axios.post(`${config.END_POINT}/channel/remove-member`,data ,{
    headers : {
      'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
    }
  });
  console.log(res);
  // return res.data.messages;
}

export const leaveChannel = async(data) => {
  try{
    const res =  await axios.post(`${config.END_POINT}/channel/leave-channel`,data ,{
    headers : {
      'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
    }
  });
  console.log(res);
  return true;
  }
  catch(e){
    console.log(e);
    return false;
  }
}