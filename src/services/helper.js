import axios from "axios";

export const BASE_URL = "http://localhost:9091";

export const MYAXIOS = axios.create({
  baseURL: BASE_URL,
});
