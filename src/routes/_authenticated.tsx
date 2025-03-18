import { useAuth } from '@/hooks/useAuth';
import { createFileRoute, Navigate, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated')({
  component: () => {
    const isAuthenticated = useAuth();
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
    return <Outlet />;
  },
});
