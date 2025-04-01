import { CommonLayout } from '@/components/common/layout/CommonLayout';
import { WithBoundarySuspense } from '@/components/common/WithBoundarySuspense';
import { PerPageAverageScrollDepth } from '@/components/stats/PerPageAverageScrollDepth';
import { UserBounce } from '@/components/stats/UserBounce';
import { UserBrowsers } from '@/components/stats/UserBrowsers';
import { UserReferrer } from '@/components/stats/UserReferrer';
import { VisitorsPageByPeriodCount } from '@/components/stats/VisitorsPageByPeriodCount';
import { VisitorsPeriodCount } from '@/components/stats/VisitorsPeriodCount';

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
      <WithBoundarySuspense>
        <VisitorsPeriodCount />
      </WithBoundarySuspense>
      <WithBoundarySuspense>
        <UserReferrer />
      </WithBoundarySuspense>
      <WithBoundarySuspense>
        <PerPageAverageScrollDepth />
      </WithBoundarySuspense>
    </CommonLayout>
  );
};
