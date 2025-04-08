import { useSession } from '@/hooks/useSession';
import { createFileRoute, Navigate, Outlet } from '@tanstack/react-router';

const Authenticated = () => {
  const { data } = useSession();

  if (!data) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export const Route = createFileRoute('/_authenticated')({
  component: () => <Authenticated />,
});
