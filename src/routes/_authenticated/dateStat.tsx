import { DateStatPage } from '@/pages/DateStatPage';
import { createFileRoute } from '@tanstack/react-router';
export const Route = createFileRoute('/_authenticated/dateStat')({
  component: RouteComponent,
});

function RouteComponent() {
  return <DateStatPage />;
}
