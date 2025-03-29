import { DashboardSlogan } from '@/components/common/DashboardSlogan';
import { CommonLayout } from '@/components/common/layout/CommonLayout';
import { WithBoundarySuspense } from '@/components/common/withBoundarySuspense';
import { OnlineUsers } from '@/components/stats/OnlineUsers';
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
        <WithBoundarySuspense>
          <TotalVisitors />
        </WithBoundarySuspense>
        <WithBoundarySuspense>
          <ReturnVisitRate />
        </WithBoundarySuspense>
        <WithBoundarySuspense>
          <OnlineUsers />
        </WithBoundarySuspense>
      </div>
      <div className="flex gap-8">
        <WithBoundarySuspense>
          <UserDevices />
        </WithBoundarySuspense>
        <WithBoundarySuspense>
          <UserResolutions />
        </WithBoundarySuspense>
        <WithBoundarySuspense>
          <UserLanguages />
        </WithBoundarySuspense>
      </div>
    </CommonLayout>
  );
};
