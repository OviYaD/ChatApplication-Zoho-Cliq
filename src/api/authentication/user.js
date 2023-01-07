import axios from "axios";
import config from "../../config";

export const createUser = async (data) => {
  const msg = await axios.post(`${config.END_POINT}/auth/register`, data);
  console.log(msg);
  if (msg.status === 200) {
    localStorage.setItem("token", msg.data.token);
    return true;
  } else if (msg.status === 400) {
    return false;
  }
  return false;
};

export const emailOtp = async (data) => {
  console.log(data);
  const msg = await axios.post(`${config.END_POINT}/auth/email-otp`, data);
  console.log(msg);
};

export const loginUser = () => {};

export const ResetPassword = () => {};

export const getProfile = () => {};

export const updateProfile = () => {};

export const checkEmail = async (data) => {
  const msg = await axios.post(`${config.END_POINT}/auth/check-email`, data);
  console.log(msg);
  if (!msg.data.exists) {
    return false;
  } else {
    return false;
  }
};
