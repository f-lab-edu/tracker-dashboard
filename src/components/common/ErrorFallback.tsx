import { useEffect } from 'react';
import { FallbackProps } from 'react-error-boundary';
import { toast } from 'react-toastify';
export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  useEffect(() => {
    toast.error(`에러 발생: ${error.message}`);
  }, [error]);
  return (
    <div className="flex flex-col flex-1 justify-center items-center text-red-500">
      <h2 className="text-3xl mb-8">에러 입니다 주의하세요.</h2>
      <button
        className="mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded-md shadow hover:bg-red-600 transition"
        onClick={resetErrorBoundary}
      >
        새로고침
      </button>
    </div>
  );
};
