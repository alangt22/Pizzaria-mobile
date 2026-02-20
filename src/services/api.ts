import axios from "axios";

const api = axios.create({
  baseURL: "https://pizzaria-backend-rouge.vercel.app/",
});

export { api };