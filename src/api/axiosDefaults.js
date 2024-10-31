import axios from "axios";

axios.defaults.baseURL = "https://codestar-jo-c97d5b65380b.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
