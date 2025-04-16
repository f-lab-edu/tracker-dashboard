import { useToken } from '@/hooks/useToken';
import { useNavigate } from '@tanstack/react-router';
import { FaDiagramProject, FaPerson } from 'react-icons/fa6';
import { ImStatsDots } from 'react-icons/im';
import { MdLogout } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import { toast } from 'react-toastify';
import { SidebarNavItem } from './SidebarNavItem';

export const Sidebar = () => {
  const navigate = useNavigate();
  const { clientInfo } = useToken()
  const handleLogout = () => {
    try {
      sessionStorage.removeItem('accessToken')
      sessionStorage.removeItem('clientInfo')
      toast.success('로그아웃 되었습니다.')
      navigate({ to: '/login' });
    } catch (err) {
      toast.error('로그아웃 오류')
      console.error('로그아웃 오류', err);
    }
  };
  const moveToHome = () => {
    navigate({ to: '/' });
  };

  return (
    <aside className=" text-text-200 min-w-48 flex flex-col justify-between  lg:h-screen lg:p-8">
      <div className=" flex flex-row gap-8 items-center justify-between h-20 bg-background-200 lg:flex-col lg:items-start lg:bg-transparent">
        <h1>
          <button onClick={moveToHome} className="lg:text-2xl text-primary-100">
            Tracker Dashboard
          </button>
        </h1>
        <div className='flex flex-row lg:flex-col'>
          <p>{clientInfo?.domain}님</p>
          <p className='hidden lg:block'>{clientInfo?.email}</p>
        </div>
        <div className='lg:hidden'>
          <button
            onClick={handleLogout}
            className="flex items-center gap-4 text-text-200"
          >
            <div className="flex items-center">
              <MdLogout size={30} />
            </div>
            <p>Logout</p>
          </button>
        </div>
      </div>
      <nav className="mt-8 flex flex-col gap-8 mx-8 lg:mt-0 lg:p-4 lg:mx-0">
        <SidebarNavItem icon={ImStatsDots} label="메인 통계" linkUrl="/" />
        <SidebarNavItem
          icon={FaDiagramProject}
          label="서브 통계"
          linkUrl="/subStat"
        />
        <SidebarNavItem
          icon={SlCalender}
          label="날짜 통계"
          linkUrl="/dateStat"
        />
        <SidebarNavItem icon={FaPerson} label="나의 정보" linkUrl="/myPage" />
      </nav>
      <div className='hidden lg:block'>
        <button
          onClick={handleLogout}
          className="flex items-center gap-4 text-text-200"
        >
          <div className="flex items-center">
            <MdLogout size={30} />
          </div>
          <p>Logout</p>
        </button>
      </div>
    </aside>
  );
};
