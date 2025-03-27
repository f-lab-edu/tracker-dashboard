import { DashboardSlogan } from '@/components/common/DashboardSlogan';
import { CommonLayout } from '@/components/common/layout/CommonLayout';
import { TotalVisitors } from '@/components/stats/TotalVisitors';
import { UserDevices } from '@/components/stats/UserDevices';
import { UserLanguages } from '@/components/stats/UserLanguages';
import { UserResolutions } from '@/components/stats/UserResolutions';

export const MainPage = () => {
  return (
    <CommonLayout>
      <DashboardSlogan />
      <TotalVisitors />
      <div className="flex gap-8">
        <UserDevices />
        <UserResolutions />
        <UserLanguages />
      </div>
    </CommonLayout>
  );
};
