import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api",  // ✅ Updated for local development

  withCredentials: true,  // ✅ This applies globally to all requests
  headers: {
    "Content-Type": "application/json"
  }
});

export default axiosInstance;
