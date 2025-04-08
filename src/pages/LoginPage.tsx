import { EnrollForm } from '@/components/auth/forms/EnrollForm';
import { LoginForm } from '@/components/auth/forms/LoginForm';
import { AuthLayout } from '@/components/auth/layout/AuthLayout';
import { useRouterState } from '@tanstack/react-router';

export const LoginPage = () => {
  const { location } = useRouterState();
  const isLogin = location.pathname === '/login';

  return <AuthLayout>{isLogin ? <LoginForm /> : <EnrollForm />}</AuthLayout>;
};
