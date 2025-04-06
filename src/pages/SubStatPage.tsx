import { CommonLayout } from '@/components/common/layout/CommonLayout';
import { WithBoundarySuspense } from '@/components/common/WithBoundarySuspense';
import { PerPageAverageScrollDepth } from '@/components/stats/PerPageAverageScrollDepth';
import { UserBounce } from '@/components/stats/UserBounce';
import { UserBrowsers } from '@/components/stats/UserBrowsers';
import { UserOses } from '@/components/stats/UserOses';
import { UserReferrer } from '@/components/stats/UserReferrer';
import { UserResolutions } from '@/components/stats/UserResolutions';
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
        <UserReferrer />
      </WithBoundarySuspense>
      <WithBoundarySuspense>
        <UserOses />
      </WithBoundarySuspense>
      <WithBoundarySuspense>
        <PerPageAverageScrollDepth />
      </WithBoundarySuspense>
      <WithBoundarySuspense>
        <UserResolutions />
      </WithBoundarySuspense>
    </CommonLayout>
  );
};
