import { LoginPage } from '@/pages/LoginPage';
import { createFileRoute } from '@tanstack/react-router';
export const Route = createFileRoute('/login')({
  component: RouteComponent,
});

function RouteComponent() {
  return <LoginPage />;
}
