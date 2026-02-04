import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCode } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faReact } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Expériences', href: '#experience' },
    { name: 'Formation', href: '#formation' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: faLinkedin, url: 'https://www.linkedin.com/in/adel-mansour-3a0362164', name: 'LinkedIn' },
    { icon: faGithub, url: 'https://github.com/adeldjazagro', name: 'GitHub' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left - Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Adel</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Business Analyst / Product Owner spécialisé en Data & IT.
              Passionné par la création de valeur à travers les nouvelles technologies.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="glass-effect w-10 h-10 rounded-lg flex items-center justify-center
                           hover:bg-primary-500/20 transition-all duration-300 hover:scale-110"
                >
                  <FontAwesomeIcon icon={social.icon} className="text-primary-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Center - Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-primary-700 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Tech Stack */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">Construit avec</h4>
            <div className="flex flex-wrap gap-2">
              <span className="glass-effect px-3 py-1 rounded-full text-xs text-primary-400 flex items-center gap-2">
                <FontAwesomeIcon icon={faReact} />
                React
              </span>
              <span className="glass-effect px-3 py-1 rounded-full text-xs text-primary-400">
                Vite
              </span>
              <span className="glass-effect px-3 py-1 rounded-full text-xs text-primary-400">
                Tailwind CSS
              </span>
              <span className="glass-effect px-3 py-1 rounded-full text-xs text-primary-400">
                Font Awesome
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              {currentYear} Adel. Tous droits réservés.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-2">
              Fait avec <FontAwesomeIcon icon={faHeart} className="text-red-500 animate-pulse" /> et{' '}
              <FontAwesomeIcon icon={faCode} className="text-primary-400" />
            </p>
            <button
              onClick={scrollToTop}
              className="glass-effect px-4 py-2 rounded-lg text-sm hover:bg-white/10 transition-all duration-300"
            >
              Retour en haut
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
