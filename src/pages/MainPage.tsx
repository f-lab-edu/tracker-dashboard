import { DashboardSlogan } from '@/components/common/DashboardSlogan';
import { CommonLayout } from '@/components/common/layout/CommonLayout';
import { TotalVisitors } from '@/components/stats/TotalVisitors';

export const MainPage = () => {
  return (
    <CommonLayout>
      <DashboardSlogan />
      <TotalVisitors />
    </CommonLayout>
  );
};
