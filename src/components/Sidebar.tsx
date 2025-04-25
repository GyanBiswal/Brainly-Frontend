// components/Sidebar.tsx
import { useLocation } from 'react-router-dom';
import BrainIcon from '../icons/BrainIcon';
import DocIcon from '../icons/DocIcon';
import LinkIcon from '../icons/LinkIcon';
import TagIcon from '../icons/TagIcon';
import TwitterIcon from '../icons/TwitterIcon';
import VideoIcon from '../icons/VideoIcon';
import SidebarItem from './SidebarItems';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-72 h-screen bg-[#202123] text-white p-8 flex flex-col items-center">
      {/* Header */}
      <div className="flex items-center mb-16 whitespace-nowrap">
        <BrainIcon/>
        <span className="text-2xl font-bold">Second Brain</span>
      </div>

      {/* Nav Items */}
      <nav className="flex flex-col gap-4 w-full">
        <SidebarItem
          to="/tweets"
          text="Tweets"
          icon={<TwitterIcon />}
          isActive={location.pathname === '/tweets'}
        />
        <SidebarItem
          to="/videos"
          text="Videos"
          icon={<VideoIcon />}
          isActive={location.pathname === '/videos'}
        />
        <SidebarItem
          to="/documents"
          text="Documents"
          icon={<DocIcon />}
          isActive={location.pathname === '/documents'}
        />
        <SidebarItem
          to="/links"
          text="Links"
          icon={<LinkIcon />}
          isActive={location.pathname === '/links'}
        />
        <SidebarItem
          to="/tags"
          text="Tags"
          icon={<TagIcon />}
          isActive={location.pathname === '/tags'}
        />
      </nav>
    </div>
  );
};

export default Sidebar;
