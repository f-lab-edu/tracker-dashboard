import { Sidebar } from './components/Sidebar';

export const CommonLayout = () => {
  return (
    <div className="min-h-screen w-full flex p-8">
      <Sidebar />
    </div>
  );
};
