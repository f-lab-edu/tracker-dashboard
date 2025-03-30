import { API_BASE_URL } from '@/config/api';
import axios from 'axios';

export const fetchData = async (url: string) => {
  const res = await axios.get(`${API_BASE_URL}${url}`, {
    withCredentials: true,
  });
  return res.data;
};
