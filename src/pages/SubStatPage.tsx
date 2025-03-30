import { CommonLayout } from '@/components/common/layout/CommonLayout';
import { WithBoundarySuspense } from '@/components/common/WithBoundarySuspense';
import { UserBrowsers } from '@/components/stats/UserBrowsers';

export const SubStatPage = () => {
  return (
    <CommonLayout>
      <WithBoundarySuspense>
        <UserBrowsers />
      </WithBoundarySuspense>
    </CommonLayout>
  );
};
