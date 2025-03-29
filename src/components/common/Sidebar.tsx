import { API_BASE_URL } from '@/config/api';
import { useNavigate } from '@tanstack/react-router';
import axios from 'axios';
import { FaDiagramProject, FaPerson } from 'react-icons/fa6';
import { ImStatsDots } from 'react-icons/im';
import { MdLogout } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import { useSession } from '../hook/useSession';
import { SidebarNavItem } from './SidebarNavItem';

export const Sidebar = () => {
  const navigate = useNavigate();
  const { data: { user } = {} } = useSession();
  const handleLogout = () => {
    try {
      axios.post(
        `${API_BASE_URL}/dashboard/logoutClient`,
        {},
        {
          withCredentials: true,
        }
      );
      navigate({ to: '/login' });
    } catch (err) {
      console.error('로그아웃 오류', err);
      toast.error('로그아웃 오류입니다');
    }
  };
  const moveToHome = () => {
    navigate({ to: '/' });
  };

  return (
    <aside className="border-r text-text-200 border-text-200 min-w-48 flex flex-col justify-between pr-16">
      <div className="flex flex-col gap-8">
        <h1>
          <button onClick={moveToHome} className="text-2xl text-primary-100">
            Tracker Dashboard
          </button>
        </h1>
        <div>
          <p>{user?.domain}님</p>
          <p>{user?.email}</p>
        </div>
      </div>
      <nav className="flex flex-col gap-8">
        <SidebarNavItem icon={ImStatsDots} label="메인 통계" linkUrl="/" />
        <SidebarNavItem
          icon={FaDiagramProject}
          label="서브 통계"
          linkUrl="/subStat"
        />
        <SidebarNavItem icon={FaPerson} label="나의 정보" linkUrl="/myPage" />
      </nav>
      <div>
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
      <ToastContainer />
    </aside>
  );
};
