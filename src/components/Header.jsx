import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faUser, faCode, faBriefcase, faGraduationCap, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#home', icon: faHome },
    { name: 'À propos', href: '#about', icon: faUser },
    { name: 'Compétences', href: '#skills', icon: faCode },
    { name: 'Expériences', href: '#experience', icon: faBriefcase },
    { name: 'Formation', href: '#formation', icon: faGraduationCap },
    { name: 'Contact', href: '#contact', icon: faEnvelope },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-2xl font-bold gradient-text">
            Adel
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2 rounded-lg text-gray-800 hover:bg-white/10 transition-all duration-300
                         hover:text-primary-700 flex items-center gap-2 group"
              >
                <FontAwesomeIcon
                  icon={link.icon}
                  className="text-primary-400 group-hover:scale-110 transition-transform"
                />
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-gray-800 hover:text-primary-700 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-4 py-3 rounded-lg glass-effect hover:bg-white/10
                         transition-all duration-300 hover:text-primary-700 flex items-center gap-3"
              >
                <FontAwesomeIcon icon={link.icon} className="text-primary-400" />
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
