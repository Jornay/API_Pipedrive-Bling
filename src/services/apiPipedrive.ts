import axios from "axios";
import { pipedrive_api_url } from '../config/pipedriveUrlConnection'
const dotenv = require('dotenv');

dotenv.config()

const api = axios.create({
    baseURL: pipedrive_api_url,
    headers: { "Content-Type": "application/json" },
    params: {
        "status": "won",
        "api_token": process.env.PIPEDRIVE_API_TOKEN
    }
})
console.log({ "baseURL": pipedrive_api_url })

export { api };