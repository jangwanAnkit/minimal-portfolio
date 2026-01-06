import { Briefcase, Building, Code2, Mail, User2, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { NavigationItem } from '../types/portfolio';

const iconMap = {
    User2,
    Code2,
    Briefcase,
    Building,
    Mail,
};

const NavbarEnhanced = () => {
    const [menuItems, setMenuItems] = useState<NavigationItem[]>([]);
    const [activeSection, setActiveSection] = useState('about');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        fetch('/data/navigation.json')
            .then(res => res.json())
            .then(data => setMenuItems(data.items || []))
            .catch(err => console.error('Failed to load navigation:', err));
    }, []);

    // Track active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = () => {
        setMobileMenuOpen(false);
        // Smooth scroll handled by CSS scroll-behavior
    };

    if (!menuItems.length) {
        return (
            <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 hidden sm:flex">
                <div className="glass-card px-4 py-3 rounded-full">
                    <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="w-10 h-10 bg-navy-100 rounded-full animate-shimmer"></div>
                        ))}
                    </div>
                </div>
            </nav>
        );
    }

    return (
        <>
            {/* Desktop Floating Bottom Navbar */}
            <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 hidden sm:flex">
                <div className="glass-card px-2 py-2 rounded-full shadow-card-lg">
                    <div className="flex items-center gap-1">
                        {menuItems.map((item) => {
                            const IconComponent = iconMap[item.icon as keyof typeof iconMap] || User2;
                            const isActive = activeSection === item.href.replace('#', '');

                            return (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={handleNavClick}
                                    className={`
                    relative flex items-center gap-2 px-4 py-2.5 rounded-full font-medium text-sm
                    transition-all duration-300 ease-out
                    ${isActive
                                            ? 'bg-gradient-primary text-white shadow-glow-cyan'
                                            : 'text-navy-600 hover:text-cyan-600 hover:bg-navy-50'
                                        }
                  `}
                                >
                                    <IconComponent className="w-4 h-4" />
                                    <span className={`${isActive ? 'inline' : 'hidden md:inline'}`}>
                                        {item.label}
                                    </span>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </nav>

            {/* Mobile Hamburger Button */}
            <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="fixed bottom-6 right-6 z-50 sm:hidden w-14 h-14 rounded-full bg-gradient-primary text-white shadow-card-lg flex items-center justify-center"
                aria-label="Toggle menu"
            >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-navy-900/50 backdrop-blur-sm z-40 sm:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Slide-up Menu */}
            <div
                className={`
          fixed bottom-0 left-0 right-0 z-40 sm:hidden
          transform transition-transform duration-300 ease-out
          ${mobileMenuOpen ? 'translate-y-0' : 'translate-y-full'}
        `}
            >
                <div className="bg-white rounded-t-3xl shadow-card-xl p-6 pb-24">
                    <div className="grid grid-cols-3 gap-4">
                        {menuItems.map((item) => {
                            const IconComponent = iconMap[item.icon as keyof typeof iconMap] || User2;
                            const isActive = activeSection === item.href.replace('#', '');

                            return (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={handleNavClick}
                                    className={`
                    flex flex-col items-center gap-2 p-4 rounded-2xl
                    transition-all duration-300
                    ${isActive
                                            ? 'bg-gradient-primary text-white shadow-card-md'
                                            : 'bg-navy-50 text-navy-600 hover:bg-navy-100'
                                        }
                  `}
                                >
                                    <IconComponent className="w-6 h-6" />
                                    <span className="text-xs font-medium">{item.label}</span>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavbarEnhanced;
