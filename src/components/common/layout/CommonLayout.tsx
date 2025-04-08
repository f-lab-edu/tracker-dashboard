import { Sidebar } from '../Sidebar';
import { WithBoundarySuspense } from '../WithBoundarySuspense';

export const CommonLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full flex justify-center overflow-y-auto">
      <div className="flex w-full max-w-[1440px] p-8">
        <WithBoundarySuspense>
          <Sidebar />
        </WithBoundarySuspense>
        <div className="flex-1 mx-8 flex flex-col justify-start">
          {children}
        </div>
      </div>
    </div>
  );
};
