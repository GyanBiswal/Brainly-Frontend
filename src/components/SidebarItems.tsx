// components/SidebarItems.tsx
import { Link } from 'react-router-dom';

interface SidebarItemProps {
  to: string;
  text: string;
  icon: React.ReactNode;
  isActive?: boolean;
}

const SidebarItem = ({ to, text, icon, isActive }: SidebarItemProps) => {
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-4 py-2 rounded-md transition-colors ${
        isActive
          ? 'bg-[#343541] text-white'
          : 'text-gray-300 hover:bg-[#2A2B2E] hover:text-white'
      }`}
    >
      <span className="text-xl">{icon}</span>
      <span className="text-base font-medium">{text}</span>
    </Link>
  );
};

export default SidebarItem;
