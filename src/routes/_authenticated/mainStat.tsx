import { MainStatPage } from '@/pages/MainStatPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/mainStat')({
  component: RouteComponent,
});

function RouteComponent() {
  return <MainStatPage />;
}
