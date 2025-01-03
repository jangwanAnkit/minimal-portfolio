import { Briefcase, Building, Code2, Mail, User2 } from 'lucide-react';

const Navbar = () => {
  const menuItems = [
    { label: 'About', icon: User2, href: '#about' },
    { label: 'Skills', icon: Code2, href: '#skills' },
    { label: 'Projects', icon: Briefcase, href: '#projects' },
    { label: 'Contact', icon: Mail, href: '#contact' },
    { label: 'Experience', icon: Building, href: '#experience' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center pb-6 z-50">
      <nav className="bg-white/90 backdrop-blur-md rounded-full shadow-lg px-4 py-2 mx-4">
        <div className="flex items-center justify-around space-x-2">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex flex-col items-center p-2 px-4 text-gray-600 hover:text-black transition-all duration-200 ease-in-out hover:bg-gray-100/50 rounded-full group"
            >
              <item.icon className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-200" />
              <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">{item.label}</span>
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;