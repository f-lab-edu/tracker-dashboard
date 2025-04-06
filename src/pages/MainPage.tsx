import { DashboardSlogan } from '@/components/common/DashboardSlogan';
import { CommonLayout } from '@/components/common/layout/CommonLayout';
import { WithBoundarySuspense } from '@/components/common/WithBoundarySuspense';
import { OnlineUsers } from '@/components/stats/OnlineUsers';
import { ReturnVisitRate } from '@/components/stats/ReturnVisitRate';
import { TotalVisitors } from '@/components/stats/TotalVisitors';
import { UserCountries } from '@/components/stats/UserCountries';
import { UserDevices } from '@/components/stats/UserDevices';
import { UserLanguages } from '@/components/stats/UserLanguages';
export const MainPage = () => {
  return (
    <CommonLayout>
      <DashboardSlogan />
      <div className="flex justify-between h-full mt-8">
        <div className="flex flex-col justify-around">
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
              <UserCountries />
            </WithBoundarySuspense>
            <WithBoundarySuspense>
              <UserLanguages />
            </WithBoundarySuspense>
          </div>
        </div>
      </div>
    </CommonLayout>
  );
};
