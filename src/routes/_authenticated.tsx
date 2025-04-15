import { useToken } from '@/hooks/useToken';
import { createFileRoute, Navigate, Outlet } from '@tanstack/react-router';

const Authenticated = () => {
  const { isAuthenticated } = useToken();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export const Route = createFileRoute('/_authenticated')({
  component: () => <Authenticated />,
});
