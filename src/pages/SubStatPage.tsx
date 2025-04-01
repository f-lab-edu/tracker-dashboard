import { CommonLayout } from '@/components/common/layout/CommonLayout';
import { WithBoundarySuspense } from '@/components/common/WithBoundarySuspense';
import { UserBounce } from '@/components/stats/UserBounce';
import { UserBrowsers } from '@/components/stats/UserBrowsers';
import { VisitorsPageByPeriodCount } from '@/components/stats/VisitorsPageByPeriodCount';

export const SubStatPage = () => {
  return (
    <CommonLayout>
      <div className="flex">
        <WithBoundarySuspense>
          <UserBrowsers />
        </WithBoundarySuspense>
        <WithBoundarySuspense>
          <UserBounce />
        </WithBoundarySuspense>
      </div>
      <WithBoundarySuspense>
        <VisitorsPageByPeriodCount />
      </WithBoundarySuspense>
    </CommonLayout>
  );
};
