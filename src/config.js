import axios from "axios";


export const BASE_URL ="http://localhost:3005/api/"
export const SOCKET_URL = 'http://localhost:3005/ws';

export const api = axios.create({
    baseURL : BASE_URL,
})