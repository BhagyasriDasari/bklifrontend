import axios from 'axios';

const API = axios.create({
  baseURL: 'https://bklibackend-1.onrender.com',
  withCredentials: true
});

export default API;
