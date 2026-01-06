import { Briefcase, Building, Code2, Mail, User2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { NavigationItem } from '../types/portfolio';

const iconMap = {
  User2,
  Code2,
  Briefcase,
  Building,
  Mail,
};

const Navbar = () => {
  const [menuItems, setMenuItems] = useState<NavigationItem[]>([]);

  useEffect(() => {
    fetch('/data/navigation.json')
      .then(res => res.json())
      .then(data => setMenuItems(data.items || []))
      .catch(err => console.error('Failed to load navigation:', err));
  }, []);

  if (!menuItems.length) {
    return (
      <div className="fixed bottom-0 left-0 right-0 flex justify-center pb-6 z-50">
        <nav className="bg-white/90 backdrop-blur-md rounded-full shadow-lg px-4 py-2 mx-4">
          <div className="flex items-center justify-around space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
            ))}
          </div>
        </nav>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center pb-6 z-50">
      <nav className="bg-white/90 backdrop-blur-md rounded-full shadow-lg px-4 py-2 mx-4">
        <div className="flex items-center justify-around space-x-2">
          {menuItems.map((item) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap] || User2;
            return (
              <a
                key={item.label}
                href={item.href}
                className="flex flex-col items-center p-2 px-4 text-gray-600 hover:text-black transition-all duration-200 ease-in-out hover:bg-gray-100/50 rounded-full group"
              >
                <IconComponent className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-200" />
                <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">{item.label}</span>
              </a>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;