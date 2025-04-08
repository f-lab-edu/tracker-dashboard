import { ClientInfo } from '@/components/auth/ClientInfo';
import { DashboardSlogan } from '@/components/common/DashboardSlogan';
import { CommonLayout } from '@/components/common/layout/CommonLayout';

export const MyPage = () => {
  return (
    <CommonLayout>
      <div className="flex flex-col gap-8">
        <div className="flex gap-8">
          <DashboardSlogan />
        </div>
        <div className="flex gap-8">
          <ClientInfo />
        </div>
      </div>
    </CommonLayout>
  );
};
