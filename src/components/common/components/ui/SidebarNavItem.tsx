import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface SidebarNavItemProps {
  icon: ReactNode;
  label: string;
  linkUrl: string;
}

export const SidebarNavItem = ({
  icon,
  label,
  linkUrl,
}: SidebarNavItemProps) => {
  return (
    <Link to={linkUrl}>
      <article className="flex items-center gap-4 cursor-pointer">
        <div className="flex justify-center items-center bg-bg-20 bg-background-200 size-10 rounded-lg group-focus:bg-primary-100">
          {icon}
        </div>
        <p>{label}</p>
      </article>
    </Link>
  );
};
