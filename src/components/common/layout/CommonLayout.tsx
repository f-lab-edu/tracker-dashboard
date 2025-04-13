import { Sidebar } from '../Sidebar';

export const CommonLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full flex justify-center overflow-hidden">
      <div className="flex flex-col w-full max-w-[1440px] p-0 lg:flex-row">
        <Sidebar />
        <div className="mt-8 flex-1 mx-0 flex flex-col overflow-y-auto justify-start lg:mt-0 lg:py-8 lg:mx-8 lg:pl-16 lg:border-l lg:border-text-200">
          {children}
        </div>
      </div>
    </div>
  );
};
