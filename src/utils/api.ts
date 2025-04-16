import { API_BASE_URL } from '@/config/api';
import axios from 'axios';

export const fetchData = async <T>(
  url: string,
  params?: Record<string, string>
): Promise<T> => {
  const token = sessionStorage.getItem('accessToken');
  const res = await axios.get(`${API_BASE_URL}${url}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params,
  });
  return res.data;
};
