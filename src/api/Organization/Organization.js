// import { async } from "@firebase/util";
import axios from "axios";
import config from "../../config";

export const createOrganization = async (data) => {
  try{
    const msg = await axios.post(`${config.END_POINT}/organization/create`, data,{
    headers : {
      'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
    }
  })
  return msg.data.organizations[0]
  }
  catch(error){
      if (error.response) {
        return { status: error.response.data };
      }
  };
 
};

export const createInvite = async (data) => {
  console.log("sjhdjshdihfjd",data);
  const msg = await axios.post(`${config.END_POINT}/organization/invite`, {organization_id:JSON.parse(localStorage.getItem('!@#$%^org)(*&^%$')).id,invitations:[...data]}, {
    headers: {
      'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
    }
  });
  console.log(msg);
  return msg;
};

export const checkOrganization = async (data) => {
  const msg = await axios.post(`${config.END_POINT}/organization/check`, data);
  console.log(msg);
  return { status: msg.data.exists, id: msg.data.organization_id };
};

export const getOrganization = async () => {
  const res = await axios.get(`${config.END_POINT}/organization/user-organizations`,{
    headers: {
      'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
    }
  });
  console.log(res);
  return res.data.organizations;
}

export const setDefaultOrg = async (data) => {
  const res = await axios.post(`${config.END_POINT}/organization/set-default`,data,{
    headers: {
      'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
    }
  });
}

export const getMember = async(data=null) => {
  console.log(data);
  const res = await axios.post(`${config.END_POINT}/organization/members`,{organization_id:JSON.parse(localStorage.getItem('!@#$%^org)(*&^%$')).id,...data}, {
    headers: {
      'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
    }
  });
  console.log(res);
  return res.data.members;
}

export const getMemberDetails = async(data) => {
  const res = await axios.post(`${config.END_POINT}/organization/member`,data,{
    headers: {
      'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
    }
  });
  // console.log(res);
  return res.data.profile;
}

export const getInvitation = async (data) => {
  const res = await axios.get(`${config.END_POINT}/organization/invite/${data}`);
  // const res = await axios.get(`${config.END_POINT}/organization/invite/6c43bcec-53d6-47c4-b989-af16e46f6f2a`);
  console.log(res)
  return res.data.invite;
  
}

export const joinOrganization = async (data) => {
  const res = await axios.post(`${config.END_POINT}/organization/join`,data,{
    headers:{
      'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
    }
  });
  console.log(res);
}