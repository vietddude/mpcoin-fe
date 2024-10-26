import axios from "axios";

const BASE_URL = process.env.API_BASE_URL;

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // You can add authentication headers here if needed
    // const token = getToken();
    // if (token) {
    //   config.headers['Authorization'] = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle global error responses here
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default apiClient;
