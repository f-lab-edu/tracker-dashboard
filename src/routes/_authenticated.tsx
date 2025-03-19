import { getUserSession } from '@/lib/auth';
import { createFileRoute, Navigate, Outlet } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

const Authenticated = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const userSession = await getUserSession();
      setUser(userSession);
      setLoading(false);
    })();
  }, []);

  if (isLoading === true) {
    return <p>로딩중...</p>;
  }
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export const Route = createFileRoute('/_authenticated')({
  component: () => <Authenticated />,
});
