import { Link, useMatchRoute } from '@tanstack/react-router';

interface SidebarNavItemProps {
  icon: React.ComponentType<{ className?: string; size: number }>;
  label: string;
  linkUrl: string;
}

export const SidebarNavItem = ({
  icon: Icon,
  label,
  linkUrl,
}: SidebarNavItemProps) => {
  const matchRoute = useMatchRoute();
  const isActive = matchRoute({ to: linkUrl });

  return (
    <Link to={linkUrl}>
      <article className="flex items-center gap-4 cursor-pointer text-text-200">
        <div
          className={`flex justify-center items-center bg-bg-20 bg-background-200 size-10 rounded-lg ${isActive ? 'bg-primary-100' : ''}`}
        >
          <Icon size={20} className={isActive ? 'text-accent-200' : ''} />
        </div>
        <p className={isActive ? 'text-text-100 font-bold' : ''}>{label}</p>
      </article>
    </Link>
  );
};
