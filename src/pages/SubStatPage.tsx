import { CommonLayout } from '@/components/common/layout/CommonLayout';
import { WithBoundarySuspense } from '@/components/common/WithBoundarySuspense';
import { UserBrowsers } from '@/components/stats/UserBrowsers';
import { UserCountries } from '@/components/stats/UserCountries';
import { UserLanguages } from '@/components/stats/UserLanguages';
import { UserOses } from '@/components/stats/UserOses';
import { UserResolutions } from '@/components/stats/UserResolutions';

export const SubStatPage = () => {
  return (
    <CommonLayout>
      <div className="flex flex-col gap-8 mx-8 lg:mx-0">
        <div className="flex gap-8 flex-col lg:flex-row">
          <WithBoundarySuspense>
            <UserLanguages />
          </WithBoundarySuspense>
          <WithBoundarySuspense>
            <UserCountries />
          </WithBoundarySuspense>
          <WithBoundarySuspense>
            <UserOses />
          </WithBoundarySuspense>
        </div>
        <div className="flex gap-8 flex-col lg:flex-row">
          <WithBoundarySuspense>
            <UserResolutions />
          </WithBoundarySuspense>
        </div>
        <div className="flex gap-8 flex-col lg:flex-row">
          <WithBoundarySuspense>
            <UserBrowsers />
          </WithBoundarySuspense>
        </div>
      </div>
    </CommonLayout>
  );
};
