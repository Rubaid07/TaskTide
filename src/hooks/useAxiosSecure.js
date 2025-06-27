import axios from 'axios';

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;