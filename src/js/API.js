import axios from "axios";

export const startApi  = data => axios.post("http://127.0.0.1:5000/api/user/input", data)
export const getApi  = data => axios.post("http://127.0.0.1:5000/api/user/input", data)