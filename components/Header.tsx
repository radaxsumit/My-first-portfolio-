
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: '#about', text: 'About' },
    { href: '#projects', text: 'Projects' },
    { href: '#contact', text: 'Contact' },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/70 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between p-4 lg:px-20">
        <a href="#home" className="text-2xl font-bold text-white tracking-wider hover:text-teal-300 transition-colors">
          Alex Doe
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-lg text-slate-300 hover:text-teal-300 transition-colors duration-300 relative group">
              {link.text}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 text-slate-300 hover:text-teal-300 focus:outline-none"
          aria-label="Toggle navigation"
        >
          <div className="w-6 h-6 flex flex-col justify-around">
             <span className={`block w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
             <span className={`block w-full h-0.5 bg-current transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></span>
             <span className={`block w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <div className={`fixed inset-0 bg-slate-900/95 backdrop-blur-sm z-40 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={handleLinkClick} className="text-3xl text-slate-300 hover:text-teal-300 transition-colors">
              {link.text}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
