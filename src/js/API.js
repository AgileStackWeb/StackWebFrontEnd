import axios from "axios";
const url = "http://127.0.0.1:5000";

export const startApi = (data) => axios.post(`${url}/api/user/input`, data);
export const getModelApi = (data) =>
  axios.post(`${url}/api/user/show/pretrain_model`, data);
