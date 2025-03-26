import { DashboardSlogan } from '@/components/common/DashboardSlogan';
import { CommonLayout } from '@/components/common/layout/CommonLayout';
import { TotalVisitors } from '@/components/stats/TotalVisitors';
import { UserDevices } from '@/components/stats/UserDevices';

export const MainPage = () => {
  return (
    <CommonLayout>
      <DashboardSlogan />
      <TotalVisitors />
      <UserDevices />
    </CommonLayout>
  );
};
