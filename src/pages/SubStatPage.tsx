import { CommonLayout } from '@/components/common/layout/CommonLayout';
import { WithBoundarySuspense } from '@/components/common/WithBoundarySuspense';
import { UserBrowsers } from '@/components/stats/UserBrowsers';
import { VisitorsPageByPeriodCount } from '@/components/stats/VisitorsPageByPeriodCount';

export const SubStatPage = () => {
  return (
    <CommonLayout>
      <WithBoundarySuspense>
        <UserBrowsers />
      </WithBoundarySuspense>
      <WithBoundarySuspense>
        <VisitorsPageByPeriodCount />
      </WithBoundarySuspense>
    </CommonLayout>
  );
};
