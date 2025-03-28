import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '../ErrorFallback';
import { LoadingFallback } from '../LoadingFallback';
import { Sidebar } from '../Sidebar';

export const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full flex p-8">
      <Sidebar />
      <ErrorBoundary
        fallbackRender={({ error, resetErrorBoundary }) => (
          <ErrorFallback
            error={error}
            resetErrorBoundary={resetErrorBoundary}
          />
        )}
      >
        <Suspense fallback={<LoadingFallback />}>
          <div className="flex-1 mx-8">{children}</div>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
