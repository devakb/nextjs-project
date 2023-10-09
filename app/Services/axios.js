import axios from "axios";


const URL = process.env.APP_URL.trimEnd("/");

const APIURL = (URL ?? "http://localhost:3000") + "/api";

const  instance = axios.create({
    baseURL: APIURL,
});

export default instance;