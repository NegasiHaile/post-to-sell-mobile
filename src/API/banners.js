import axios from "axios";
import { server } from "../Constants/server";

export const api_getAllBanners = async () => {
  return await axios.get(`${server}/api/banners/list`);
};
