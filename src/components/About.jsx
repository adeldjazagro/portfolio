import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faLightbulb,
  faUsers,
  faRocket
} from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const highlights = [
    {
      icon: faChartLine,
      title: 'Orientation Business',
      description: 'Traduction des enjeux métiers en solutions actionnables avec un focus constant sur la valeur et le ROI',
    },
    {
      icon: faLightbulb,
      title: 'Profil Hybride',
      description: 'Capacité à naviguer entre vision métier et réalités techniques pour des décisions produit éclairées',
    },
    {
      icon: faUsers,
      title: 'Pilotage Agile',
      description: 'Animation d\'équipes cross-fonctionnelles et delivery incrémentale avec méthodes Agile/SAFe',
    },
    {
      icon: faRocket,
      title: 'Impact Mesurable',
      description: 'Track record de réductions de 30-40% des délais et automatisation de processus critiques',
    },
  ];

  return (
    <section id="about" className="section-container">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            À propos de <span className="gradient-text">moi</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Business Analyst / Product Owner passionné par la transformation digitale
            et la création de valeur à travers la data et les nouvelles technologies
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Description */}
          <div className="space-y-6">
            <div className="glass-effect rounded-2xl p-8 space-y-4">
              <h3 className="text-2xl font-semibold text-primary-400">Mon parcours</h3>
              <p className="text-gray-700 leading-relaxed">
                Business Analyst / Product Owner alliant <strong className="text-primary-600">maîtrise des enjeux métiers
                et compréhension technique approfondie</strong>, totalisant <strong className="text-primary-600">5 ans d'expérience</strong> dans
                des environnements complexes (secteur public, énergie, banque, assurance, conseil).
              </p>
              <p className="text-gray-700 leading-relaxed">
                Capable de <strong className="text-primary-600">traduire les besoins métiers en solutions IT et data robustes</strong>,
                de prioriser par la valeur et de piloter la livraison incrémentale. Mon <strong className="text-primary-600">positionnement
                hybride BA/PO & ingénierie</strong> me permet d'intervenir sur le cadrage métier, la rédaction des user stories et
                critères d'acceptation, ainsi que l'analyse technique (data, intégration, backend).
              </p>
              <p className="text-gray-700 leading-relaxed">
                Spécialisé dans les <strong className="text-primary-600">produits data et d'intégration</strong>,
                j'ai piloté la livraison de solutions ayant généré des gains opérationnels significatifs :
                <strong> réduction de 30% des délais</strong>, automatisation de processus critiques, et 0 incident majeur
                sur des plateformes stratégiques.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-effect rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl font-bold text-accent-300">5+</div>
                <div className="text-gray-600 text-sm mt-2">Années d'expérience</div>
              </div>
              <div className="glass-effect rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl font-bold text-accent-300">5+</div>
                <div className="text-gray-600 text-sm mt-2">Secteurs d'activité</div>
              </div>
            </div>
          </div>

          {/* Right - Highlights */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="glass-effect rounded-xl p-6 card-hover group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-lg bg-primary-500/10 flex items-center justify-center
                                  group-hover:bg-primary-500/20 transition-colors duration-300">
                      <FontAwesomeIcon
                        icon={highlight.icon}
                        className="text-2xl text-primary-400"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
