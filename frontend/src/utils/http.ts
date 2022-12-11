import axios from 'axios';

export const http = axios.create({
  baseURL: import.meta.env.API_URL
})

export const httpAuth = axios.create({
  baseURL: 'http://localhost:8080/auth/'
})