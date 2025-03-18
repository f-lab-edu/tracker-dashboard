import { SubStatPage } from '@/pages/SubStatPage';
import { createFileRoute } from '@tanstack/react-router';
export const Route = createFileRoute('/subStat')({
  component: RouteComponent,
});

function RouteComponent() {
  return <SubStatPage />;
}
