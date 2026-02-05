import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faDownload, faFileAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6 animate-slide-up">
            <div className="space-y-2">
              <p className="text-primary-400 text-lg font-medium">Bonjour, je suis</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900">
                Adel Mansour
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold gradient-text">
                Business Analyst / Product Owner
              </h2>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-green-600 font-medium text-sm">Disponible pour de nouvelles missions</span>
              </div>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              <span className="text-primary-600 font-semibold">Double compétence fonctionnelle et technique</span> avec 5 ans
              d'expérience dans des environnements complexes (secteur public, énergie, banque, conseil).
              Expert en <span className="text-primary-600 font-semibold">cadrage métier</span>, <span className="text-primary-600 font-semibold">data</span> et <span className="text-primary-600 font-semibold">intégration IT</span>.
            </p>

            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollToSection('#contact')} className="btn-primary">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                Me contacter
              </button>
              <a href="/CV_BA_PO_ADEL_MANSOUR.pdf" download="CV_BA_PO_ADEL_MANSOUR.pdf" className="btn-secondary">
                <FontAwesomeIcon icon={faDownload} className="mr-2" />
                Télécharger CV
              </a>
              <a href="/DOSSIER_COMPETENCES_ADEL_MANSOUR.pdf" download="DOSSIER_COMPETENCES_ADEL_MANSOUR.pdf" className="btn-secondary">
                <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
                Dossier de compétences
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/adel-mansour-3a0362164"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect w-12 h-12 rounded-full flex items-center justify-center
                         hover:bg-primary-500/20 transition-all duration-300 hover:scale-110 group"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-xl text-primary-400 group-hover:text-primary-600"
                />
              </a>
              <a
                href="https://github.com/adeldjazagro"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect w-12 h-12 rounded-full flex items-center justify-center
                         hover:bg-primary-500/20 transition-all duration-300 hover:scale-110 group"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-xl text-primary-400 group-hover:text-primary-600"
                />
              </a>
              <a
                href="mailto:mansour.adel@outlook.fr"
                className="glass-effect w-12 h-12 rounded-full flex items-center justify-center
                         hover:bg-primary-500/20 transition-all duration-300 hover:scale-110 group"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-xl text-primary-400 group-hover:text-primary-600"
                />
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl blur-2xl opacity-30 animate-pulse-slow"></div>
              <div className="relative glass-effect rounded-2xl p-2 glow">
                <img
                  src="/adel_portfolio_bib.png"
                  alt="Adel Mansour - Business Analyst / Product Owner"
                  className="rounded-xl w-full h-auto max-w-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('#about')}
            className="text-primary-400 hover:text-primary-600 transition-colors"
          >
            <FontAwesomeIcon icon={faChevronDown} className="text-3xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
