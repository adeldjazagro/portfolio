import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClipboardCheck,
  faDiagramProject,
  faDatabase,
  faCode,
  faCloudArrowUp
} from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('ba-po');

  const skillCategories = [
    {
      id: 'ba-po',
      name: 'BA / Product Owner',
      icon: faClipboardCheck,
      color: 'primary',
      skills: [
        'Product Vision & Roadmap',
        'User Stories & Backlog',
        'Priorisation (WSJF, MoSCoW)',
        'Business Cases & ROI',
        'Ateliers Métiers',
        'Recueil de Besoins',
        'KPIs & Métriques Produit',
        'Gestion Stakeholders',
        'Spécifications Fonctionnelles',
        'Critères d\'Acceptation',
        'Design Thinking',
        'Event Storming'
      ]
    },
    {
      id: 'agile',
      name: 'Méthodologies Agiles',
      icon: faDiagramProject,
      color: 'primary',
      skills: [
        'Scrum',
        'SAFe (PI Planning)',
        'Kanban',
        'JIRA',
        'Confluence',
        'Miro',
        'Figma',
        'Sprint Planning',
        'Daily Stand-ups',
        'Retrospectives',
        'CI/CD',
        'DevOps'
      ]
    },
    {
      id: 'data',
      name: 'Data & Analytics',
      icon: faDatabase,
      color: 'primary',
      skills: [
        'Snowflake',
        'SQL Avancé',
        'Python',
        'PySpark',
        'Apache Spark',
        'Kafka & Kafka Streams',
        'KSQL',
        'BigQuery',
        'MongoDB',
        'Oracle',
        'Data Modeling',
        'ETL / ELT',
        'Data Quality',
        'Gouvernance Data',
        'Snowflake Cortex',
        'LLM & AI'
      ]
    },
    {
      id: 'integration',
      name: 'Intégration & APIs',
      icon: faCode,
      color: 'primary',
      skills: [
        'Java / Spring Boot',
        'Angular',
        'REST APIs',
        'SOAP',
        'Apache Camel',
        'Microservices',
        'Event-Driven Architecture',
        'Messaging (Kafka)',
        'ESB',
        'OpenAPI Specification',
        'Postman',
        'EIP Patterns'
      ]
    },
    {
      id: 'cloud',
      name: 'Cloud & DevOps',
      icon: faCloudArrowUp,
      color: 'primary',
      skills: [
        'GCP',
        'Azure (en cours)',
        'Docker',
        'Git / GitLab',
        'CI/CD Pipelines',
        'Jenkins',
        'Airflow',
        'Datadog',
        'Monitoring',
        'Cloud Architecture',
        'Infrastructure as Code'
      ]
    }
  ];

  const activeSkills = skillCategories.find(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="section-container bg-gradient-to-b from-white to-gray-100">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Mes <span className="gradient-text">compétences</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Un ensemble de compétences fonctionnelles, méthodologiques et techniques
            pour piloter des projets complexes de bout en bout
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-3
                ${activeCategory === category.id
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/50 scale-105'
                  : 'glass-effect text-gray-700 hover:bg-white/10 hover:scale-105'
                }`}
            >
              <FontAwesomeIcon icon={category.icon} />
              <span className="hidden sm:inline">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="min-h-[400px]">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 animate-fade-in">
            {activeSkills?.skills.map((skill, index) => (
              <div
                key={index}
                className="skill-badge text-center"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Key Differentiator */}
        <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600
                            flex items-center justify-center shadow-lg shadow-primary-500/50">
                <FontAwesomeIcon icon={faClipboardCheck} className="text-3xl text-white" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Mon différenciateur
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Une <strong className="text-primary-400">synergie entre vision fonctionnelle et expertise technique</strong> qui
                me permet de challenger les architectures, d'arbitrer efficacement entre solutions concurrentes,
                et d'accélérer les décisions produit tout en garantissant la faisabilité technique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
