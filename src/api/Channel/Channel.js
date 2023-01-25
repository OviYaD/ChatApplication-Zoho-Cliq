import axios from "axios";
import config from "../../config";

export const createChannel = async (data) => {
  const msg = await axios.post(`${config.END_POINT}/organization/create`, data);
  if (msg.status === 200) {
    alert(msg.data.message);
  }
};
