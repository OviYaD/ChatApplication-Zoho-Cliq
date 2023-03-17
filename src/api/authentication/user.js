import axios from "axios";
import config from "../../config";

export const createUser = async (data) => {
  try {
    const msg = await axios
      .post(`${config.END_POINT}/auth/register`, data)
      .catch((error) => {
        if (error.response) {
          return { status: error.response.data };
        }
      });
    console.log(msg);
    if (msg.status === 200) {
      localStorage.setItem("token", msg.data.token);
      return true;
    } else if (msg.status === 400) {
      return false;
    }
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const emailOtp = async (data) => {
  console.log(data);
  const msg = await axios.post(`${config.END_POINT}/auth/email-otp`, data);
  console.log(msg);
};

export const loginUser = async (data) => {
  const options = { credentials: "include" };
  const msg = await axios
    .post(`${config.END_POINT}/auth/login`, data, options)
    .catch((error) => {
      if (error.response) {
        return { status: error.response.data };
      }
    });
  console.log(msg);
  if (msg.status === 200) {
    localStorage.setItem("token", msg.data.token);
    return true;
  } else {
    return false;
  }
};

export const verifyOtp = async (data) => {
  console.log(data)
  const msg = await axios.post(`${config.END_POINT}/auth/check-otp`, data);
  console.log(msg);
  return msg.data.isValid;
};

export const ResetPassword = async (data) => {
  try{
    await axios.post(`${config.END_POINT}/auth/reset-password`, data,{
      headers: {
          'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
        }
    });
    return true;
  }
  catch(e){
    console.log(e);
    return false;
  }
};

export const getProfile = async () => {
  const token = localStorage.getItem("token");
  
  const userData = await axios
    .get(`${config.END_POINT}/auth/profile`, {
      headers: {
        'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
      }
    })
    .catch((error) => {
      if (error.response) {
        return { status: false , errorCode: error.response.status };
      }
    });
  if (!userData.status) {
    return userData;
  }
  return { ...userData, status: true };
  // return false;
};

export const updateProfile = async (data) => {
  console.log("profile....",data);
  const res = await axios.post(`${config.END_POINT}/auth/update-profile`, data,{
    headers : {
      'Authorization': 'Bearer ' + (localStorage.getItem('token')) || ''
    }
  });
  console.log(res);
  return res.data.profile;
};


export const checkEmail = async (data) => {
  try{
    console.log(config.END_POINT);
  const msg = await axios.post(`${config.END_POINT}/auth/check-email`, data);
  console.log(msg);
  return false;
  }
  catch(e){
    return true;
  }
};

export const loginOtp = async (data) => {
  const msg = await axios
    .post(`${config.END_POINT}/auth/login-otp`, data)
    .catch((error) => {
      if (error.response) {
        return { status: error.response.data };
      }
    });
  if (msg.status === 200) {
    localStorage.setItem("token", msg.data.token);
    return true;
  }
  return false;
};


export const googleAuth = async(idToken) =>{
  try{
  const msg = await axios.post(`${config.END_POINT}/auth/google-signin`,{idToken});
  if (msg.status === 200) {
      localStorage.setItem("token", msg.data.token);
  }
  return true;
  }
  catch(err){
    return false;
  }
}