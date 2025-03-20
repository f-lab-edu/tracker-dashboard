import { LoginPage } from '@/pages/LoginPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/enroll')({
  component: RouteComponent,
});

function RouteComponent() {
  return <LoginPage />;
}
