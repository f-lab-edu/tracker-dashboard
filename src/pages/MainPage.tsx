import { DashboardSlogan } from '@/components/common/DashboardSlogan';
import { CommonLayout } from '@/components/common/layout/CommonLayout';
import { WithBoundarySuspense } from '@/components/common/WithBoundarySuspense';
import { OnlineUsers } from '@/components/stats/OnlineUsers';
import { ReturnVisitRate } from '@/components/stats/ReturnVisitRate';
import { TotalVisitors } from '@/components/stats/TotalVisitors';
import { UserBounce } from '@/components/stats/UserBounce';
import { UserDevices } from '@/components/stats/UserDevices';
import { UserReferrer } from '@/components/stats/UserReferrer';

export const MainPage = () => {
  return (
    <CommonLayout>
      <div className="flex flex-col gap-8 mx-8 lg:mx-0">
        <div className="flex gap-8 ">
          <DashboardSlogan />
        </div>
        <div className="flex gap-8 flex-col lg:flex-row">
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
        <div className="flex gap-8 flex-col lg:flex-row">
          <WithBoundarySuspense>
            <UserDevices />
          </WithBoundarySuspense>
          <WithBoundarySuspense>
            <UserReferrer />
          </WithBoundarySuspense>
        </div>
        <div>
          <WithBoundarySuspense>
            <UserBounce />
          </WithBoundarySuspense>
        </div>
      </div>
    </CommonLayout>
  );
};
