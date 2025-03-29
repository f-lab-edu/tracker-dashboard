import { ErrorFallback } from '@/components/common/ErrorFallback';
import { getAxiosData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute, Navigate, Outlet } from '@tanstack/react-router';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

interface SessionDataType {
  email: string;
  domain: string;
  apiKey: string;
}

const Authenticated = () => {
  const { data } = useSuspenseQuery<SessionDataType>({
    queryKey: ['userSession'],
    queryFn: () => getAxiosData('/dashboard/sessionClient'),
    staleTime: 1000 * 60 * 5,
  });

  if (!data) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export const Route = createFileRoute('/_authenticated')({
  component: () => (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }) => (
        <ErrorFallback error={error} resetErrorBoundary={resetErrorBoundary} />
      )}
    >
      <Suspense fallback={<p>로딩중입니다</p>}>
        <Authenticated />,
      </Suspense>
    </ErrorBoundary>
  ),
});
