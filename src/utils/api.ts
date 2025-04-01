import { API_BASE_URL } from '@/config/api';
import axios from 'axios';

export const fetchData = async (
  url: string,
  params?: Record<string, string>
) => {
  const res = await axios.get(`${API_BASE_URL}${url}`, {
    withCredentials: true,
    params,
  });
  return res.data;
};
