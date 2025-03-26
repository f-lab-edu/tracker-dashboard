import { Sidebar } from '../Sidebar';

export const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full flex p-8">
      <Sidebar />
      <div className="flex-1 mx-8">{children}</div>
    </div>
  );
};
