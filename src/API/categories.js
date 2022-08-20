import axios from "axios";
import { server } from "../Constants/server";

export const api_getAllCategories = async () => {
  return await axios.get(`${server}/api/categories/list`);
};
