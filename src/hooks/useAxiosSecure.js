// src/hooks/useAxiosSecure.jsx
import { useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000', // তোমার backend URL
});

const useAxiosSecure = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const setAuthorization = async () => {
      if (user) {
        const token = await user.getIdToken();
        axiosSecure.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      }
    };

    setAuthorization();
  }, [user]);

  return axiosSecure;
};

export default useAxiosSecure;
