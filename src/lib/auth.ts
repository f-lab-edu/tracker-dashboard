import { API_BASE_URL } from '@/config/api';
import axios from 'axios';

export async function getUserSession() {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/dashboard/sessionClient`,
      {
        withCredentials: true,
      }
    );
    return response.data.user;
  } catch (err) {
    console.error('세션 없음', err);
    return null;
  }
}
