import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const login = (data) => API.post('/auth/login', data);
export const register = (data) => API.post('/auth/register', data);
export const createTrip = (data) => API.post('/trips', data);
export const getTrips = () => API.get('/trips');
