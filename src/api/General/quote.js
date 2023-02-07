import axios from "axios";
import config from "../../config";

export const getQuote = async () => {
    const res = await axios.get(`${config.END_POINT}/quote`);
    return res.data;
}