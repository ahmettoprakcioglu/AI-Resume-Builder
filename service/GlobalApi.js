import { default as axios } from 'axios';

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;

const requestManager = axios.create({
  baseURL: 'http://localhost:1337/api',
  headers: {
    "Content-Type": 'application/json',
    'Authorization': `Bearer ${API_KEY}`
  }
});

export const createNewResume = data => requestManager.post('/user-resumes', data);

export const getUserResumes = userEmail => requestManager.get(`/user-resumes?filters[userEmail][$eq]=${userEmail}`);