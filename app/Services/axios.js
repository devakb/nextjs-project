import axios from "axios";

const  instance = axios.create({
    baseURL: process.env.APP_API_URL ?? "http://localhost:8000/api/",
});

export default instance;