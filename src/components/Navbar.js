import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navBg = scrolled || !isHome
    ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-stone-100'
    : 'bg-transparent';

  const textColor = scrolled || !isHome ? 'text-stone-800' : 'text-white';
  const logoColor = scrolled || !isHome ? 'text-accent' : 'text-white';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`w-8 h-8 border-2 transition-colors duration-300 ${scrolled || !isHome ? 'border-accent' : 'border-white'} flex items-center justify-center`}>
              <div className={`w-3 h-3 transition-colors duration-300 ${scrolled || !isHome ? 'bg-accent' : 'bg-white'}`} />
            </div>
            <span className={`font-display font-medium text-xl tracking-wide transition-colors duration-300 ${logoColor}`}>
              Studio Axis
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`text-sm tracking-widest uppercase font-medium transition-all duration-300 relative group ${textColor} ${location.pathname === to ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
              >
                {label}
                {location.pathname === to && (
                  <span className={`absolute -bottom-1 left-0 w-full h-px ${scrolled || !isHome ? 'bg-accent' : 'bg-white'}`} />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className={`ml-4 px-5 py-2 text-sm tracking-widest uppercase font-medium border transition-all duration-300 ${
                scrolled || !isHome
                  ? 'border-accent text-accent hover:bg-accent hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-accent'
              }`}
            >
              Enquire
            </Link>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className={`md:hidden flex flex-col gap-1.5 p-1 ${textColor}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled || !isHome ? 'bg-stone-800' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled || !isHome ? 'bg-stone-800' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled || !isHome ? 'bg-stone-800' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-white border-t border-stone-100 transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm tracking-widest uppercase font-medium py-2 border-b border-stone-100 ${location.pathname === to ? 'text-accent' : 'text-stone-600'}`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
