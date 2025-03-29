import { createFileRoute, Navigate, Outlet } from '@tanstack/react-router';

import { useSession } from '@/components/hook/useSession';

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
