import { DashboardSlogan } from '@/components/common/DashboardSlogan';
import { CommonLayout } from '@/components/common/layout/CommonLayout';
import { ReturnVisitRate } from '@/components/stats/ReturnVisitRate';
import { TotalVisitors } from '@/components/stats/TotalVisitors';
import { UserDevices } from '@/components/stats/UserDevices';
import { UserLanguages } from '@/components/stats/UserLanguages';
import { UserResolutions } from '@/components/stats/UserResolutions';

export const MainPage = () => {
  return (
    <CommonLayout>
      <DashboardSlogan />
      <div className="flex gap-8">
        <TotalVisitors />
        <ReturnVisitRate />
      </div>
      <div className="flex gap-8">
        <UserDevices />
        <UserResolutions />
        <UserLanguages />
      </div>
    </CommonLayout>
  );
};
