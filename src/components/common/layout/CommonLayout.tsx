import { Sidebar } from '../Sidebar';
import { WithBoundarySuspense } from '../withBoundarySuspense';

export const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full flex p-8">
      <WithBoundarySuspense>
        <Sidebar />
      </WithBoundarySuspense>
      <div className="flex-1 mx-8">{children}</div>
    </div>
  );
};
