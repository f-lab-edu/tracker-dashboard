import { MyPage } from '@/pages/MyPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/myPage')({
  component: RouteComponent,
});

function RouteComponent() {
  return <MyPage />;
}
