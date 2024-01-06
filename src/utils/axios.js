import axios from "axios";
import { SERVER_URL } from "../constraint";

const globalAxios = axios.create({
    baseURL: SERVER_URL,
    timeout: 5000,
})

export default globalAxios;