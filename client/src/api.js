import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Update with your backend URL

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerUser = (userData) => api.post('/auth/register', userData);
export const loginUser = (userData) => api.post('/auth/login', userData);
export const getServices = () => api.get('/services');
export const createRepair = (repairData, token) => api.post('/repairs', repairData, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});