import axios from "axios";
import { pipedrive_api_url } from '../config/pipedriveUrlConnection'

const api = axios.create({
    baseURL: pipedrive_api_url,
    headers: { "Content-Type": "application/json" },
    params: {
        "status": "won",
        "api_token": "65c70bb47ceb62783123c8420c13e78cc18fb5f8"
    }
})
console.log({ "baseURL": pipedrive_api_url })

export { api };