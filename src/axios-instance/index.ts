import axios from "axios";
import { BASE_URL } from "./constant";

const config = { baseURL: BASE_URL };
export const axiosInstance = axios.create(config);
