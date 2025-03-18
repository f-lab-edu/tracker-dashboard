import { API_BASE_URL } from '@/config/api';
import { authState } from '@/store/authState';
import { useNavigate } from '@tanstack/react-router';
import axios from 'axios';
import { FaDiagramProject, FaPerson } from 'react-icons/fa6';
import { ImStatsDots } from 'react-icons/im';
import { MdLogout } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import { useRecoilState } from 'recoil';
import { SidebarNavItem } from './ui/SidebarNavItem';

export const Sidebar = () => {
  const [user, setUser] = useRecoilState(authState);
  const navigate = useNavigate();
  const handleMoveToHome = () => {
    navigate({ to: '/' });
  };
  const handleLogout = () => {
    try {
      axios.get(`${API_BASE_URL}/dashboard/logoutClient`, {
        withCredentials: true,
      });
      setUser(null);
      navigate({ to: '/login' });
    } catch (err) {
      console.error('로그아웃 오류', err);
      toast.error('로그아웃 오류입니다');
    }
  };

  return (
    <aside className="border-r text-text-200 border-text-200 min-w-48 flex flex-col justify-between pr-16">
      <section className="flex flex-col gap-8">
        <h1
          onClick={handleMoveToHome}
          className="text-2xl text-primary-100 cursor-pointer"
        >
          Tracker Dashboard
        </h1>
        <div>
          <p>{user?.domain}님</p>
          <p>{user?.email}</p>
        </div>
      </section>
      <nav className="flex flex-col gap-8">
        <SidebarNavItem
          icon={ImStatsDots}
          label="메인 통계"
          linkUrl="/mainStat"
        />
        <SidebarNavItem
          icon={FaDiagramProject}
          label="서브 통계"
          linkUrl="/subStat"
        />
        <SidebarNavItem icon={FaPerson} label="나의 정보" linkUrl="/myPage" />
      </nav>
      <section>
        <article
          onClick={handleLogout}
          className="flex items-center gap-4 cursor-pointer"
        >
          <div className="flex items-center">
            <MdLogout size={30} />
          </div>
          <p>Logout</p>
        </article>
      </section>
      <ToastContainer />
    </aside>
  );
};
