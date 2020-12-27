import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:58171/",
});

export default instance;
