import { authState } from '@/store/authState';
import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
export const PrivateRoute = () => {
  const user = useRecoilValue(authState);

  return user ? <Outlet /> : <Navigate to="/login" />;
};
