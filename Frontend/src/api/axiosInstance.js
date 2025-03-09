import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://tomato-gyct.onrender.com",  // ✅ Ensure this is correct
  withCredentials: true,  // ✅ This applies globally to all requests
  headers: {
    "Content-Type": "application/json"
  }
});

export default axiosInstance;
