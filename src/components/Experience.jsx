import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faCalendar,
  faMapMarkerAlt,
  faCheckCircle,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
  const [expandedMissions, setExpandedMissions] = useState([0]);

  const toggleMission = (mIdx) => {
    setExpandedMissions(prev =>
      prev.includes(mIdx) ? prev.filter(i => i !== mIdx) : [...prev, mIdx]
    );
  };
  const experiences = [
    {
      company: 'Accenture France',
      role: 'Business Analyst / Product Owner Data',
      period: 'Janvier 2022 - Aujourd\'hui',
      location: 'Paris',
      type: 'CDI',
      missions: [
        {
          title: 'CNAM - Business Analyst / Product Owner IT',
          period: 'Septembre 2025 - Aujourd\'hui',
          highlights: [
            'Analyse et cadrage des besoins métiers SI',
            'Rédaction de user stories et critères d\'acceptation dans JIRA',
            'Priorisation du backlog et préparation des sprints',
            'Analyse fonctionnelle et technique (Java / Spring Boot / Angular)'
          ],
          tech: ['Java', 'Spring Boot', 'Angular', 'JIRA', 'Confluence', 'Agile Scrum']
        },
        {
          title: 'Mission interne Accenture - BA/PO Data (Snowflake)',
          period: 'Juin 2025 - Août 2025',
          highlights: [
            'Cadrage fonctionnel et formalisation des besoins métiers data',
            'Traduction des enjeux business en solutions Snowflake',
            'Développement de pipelines de données (SQL, Python)',
            'Intégration de Snowflake Cortex (Analyst & Search)',
            'Optimisation des performances et de la sécurité'
          ],
          tech: ['Snowflake', 'SQL', 'Python', 'Cortex', 'LLM', 'Git']
        },
        {
          title: 'Ministère de l\'Intérieur / DGEF - Product Owner Data & Business Analyst',
          period: 'Juin 2024 - Juin 2025',
          highlights: [
            'Cadrage et priorisation des besoins métiers data',
            'Gestion du backlog produit en méthode Agile',
            'Rédaction de 30+ user stories détaillées avec critères d\'acceptation',
            'Livraison incrémentale : réduction de 30% des délais de traitement',
            'Mise en production de 4 pipelines data majeurs'
          ],
          tech: ['PySpark', 'Python', 'SQL', 'REST', 'SOAP', 'GitLab', 'MongoDB', 'Docker']
        },
        {
          title: 'RCI Bank / Mobilize - Business Analyst IT & Intégration',
          period: 'Janvier 2024 - Juin 2024',
          highlights: [
            'Analyse des besoins métiers (finance, risque, conformité)',
            'Rédaction de 25+ user stories pour flux d\'intégration complexes',
            'Interface métier/IT entre équipes finance et techniques',
            'Déploiement de 5 intégrations critiques avec 0 rollback',
            'Automatisation de processus bancaires à fort enjeu'
          ],
          tech: ['Java', 'Apache Camel', 'Python', 'JIRA', 'Bitbucket', 'Datadog']
        },
        {
          title: 'ENEDIS - Product Owner Technique orienté Métier',
          period: 'Juin 2022 - Décembre 2023',
          highlights: [
            'Définition de la vision produit et roadmap 18 mois (15+ intégrations)',
            'Arbitrage métier/technique pour plateforme critique',
            'Architecture hybride temps réel/batch : réduction de 40% des latences',
            'Animation de 2 équipes cross-fonctionnelles dans un cadre SAFe',
            'Livraison de 8 features majeures avec 0 incident majeur sur 18 mois'
          ],
          tech: ['Java', 'Spring Boot', 'Apache Camel', 'Kafka', 'Docker', 'Jenkins', 'SAFe']
        },
        {
          title: 'Palantir France - Data Engineer',
          period: 'Janvier 2022 - Juin 2022',
          highlights: [
            'Traitement et modélisation de données à grande échelle',
            'Développement de pipelines analytiques sous Palantir Foundry',
            'Valorisation des données opérationnelles (aéroport de San Francisco)',
            'Livraison de dashboards temps réel sur KPIs opérationnels'
          ],
          tech: ['PySpark', 'SQL', 'Foundry', 'DataViz']
        }
      ]
    },
    {
      company: 'CEA',
      role: 'Data Engineer (Blockchain & Machine Learning)',
      period: 'Octobre 2020 - Décembre 2021',
      location: 'Saclay',
      type: 'Alternance (Master 2)',
      highlights: [
        'Développement de simulateurs blockchain',
        'Détection d\'anomalies et modèles de machine learning',
        'Analyse de faisabilité blockchain pour traçabilité industrielle',
        'Création de dashboards pour présentation aux sponsors'
      ],
      tech: ['Python', 'Java', 'R', 'scikit-learn', 'Linux']
    },
    {
      company: 'Projet Data Engineering - Google Cloud Platform',
      role: 'Cloud Data Engineer',
      period: 'Décembre 2020 - Avril 2021',
      location: 'Remote',
      type: 'Projet académique (Master 2)',
      highlights: [
        'Ingestion et traitement de données sur Google Cloud Platform',
        'Modèles prédictifs sur BigQuery ML',
        'Analyses et visualisations BigQuery',
        'Création de pipelines data automatisés'
      ],
      tech: ['Python', 'GCP', 'BigQuery', 'Pandas', 'DataViz']
    }
  ];

  return (
    <section id="experience" className="section-container">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Mon <span className="gradient-text">parcours</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            5 ans d'expérience BA/PO aux croisements du métier, de la data et de la technique
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-600 to-transparent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full
                              bg-primary-500 border-4 border-white shadow-lg shadow-primary-500/50 z-10"></div>

                {/* Content Card */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 ml-16 md:ml-0' : 'md:pl-12 ml-16 md:ml-0'}`}>
                  <div className="glass-effect rounded-2xl p-8 card-hover group">
                    {/* Company & Role */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                          {exp.company}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                          exp.type === 'CDI'
                            ? 'bg-accent-50 text-accent-400 border-accent-200'
                            : 'glass-effect text-primary-600 border-primary-200'
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                      <h4 className="text-xl font-semibold gradient-text">
                        {exp.role}
                      </h4>
                      <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faCalendar} className="text-primary-600" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary-600" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Missions (if multiple) */}
                    {exp.missions ? (
                      <div className="space-y-4 mb-6">
                        {exp.missions.map((mission, mIdx) => (
                          <div key={mIdx} className="border-l-2 border-primary-300 pl-4">
                            <button
                              onClick={() => toggleMission(mIdx)}
                              className="w-full text-left flex items-center justify-between gap-2 group/mission"
                            >
                              <div>
                                <div className="font-semibold text-primary-700 group-hover/mission:text-primary-500 transition-colors">
                                  {mission.title}
                                </div>
                                <div className="text-sm text-gray-500">{mission.period}</div>
                              </div>
                              <FontAwesomeIcon
                                icon={faChevronDown}
                                className={`text-primary-400 text-xs transition-transform duration-300 flex-shrink-0 ${
                                  expandedMissions.includes(mIdx) ? 'rotate-180' : ''
                                }`}
                              />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${
                              expandedMissions.includes(mIdx) ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
                            }`}>
                              <div className="space-y-2 mb-3">
                                {mission.highlights.map((highlight, hIdx) => (
                                  <div key={hIdx} className="flex gap-2">
                                    <FontAwesomeIcon
                                      icon={faCheckCircle}
                                      className="text-primary-600 mt-1 flex-shrink-0 text-sm"
                                    />
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                      {highlight}
                                    </p>
                                  </div>
                                ))}
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {mission.tech.map((tech, tIdx) => (
                                  <span
                                    key={tIdx}
                                    className="px-2 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium
                                             border border-primary-200 hover:bg-primary-100 transition-colors"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <>
                        {/* Highlights */}
                        <div className="space-y-3 mb-6">
                          {exp.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex gap-3">
                              <FontAwesomeIcon
                                icon={faCheckCircle}
                                className="text-primary-600 mt-1 flex-shrink-0"
                              />
                              <p className="text-gray-700 text-sm leading-relaxed">
                                {highlight}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium
                                       border border-primary-200 hover:bg-primary-100 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
