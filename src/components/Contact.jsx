import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  // ====== DISPONIBILITÉ ======
  // Changer cette valeur pour basculer entre "disponible" et "indisponible"
  const isAvailable = true;
  // ============================

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez intégrer un service d'envoi d'email (EmailJS, Formspree, etc.)
    console.log('Form submitted:', formData);
    alert('Message envoyé avec succès!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: faEnvelope,
      label: 'Email',
      value: 'mansour.adel@outlook.fr',
      link: 'mailto:mansour.adel@outlook.fr'
    },
    {
      icon: faPhone,
      label: 'Téléphone',
      value: '+33 7 69 87 87 18',
      link: 'tel:+33769878718'
    },
    {
      icon: faMapMarkerAlt,
      label: 'Localisation',
      value: 'Île-de-France, France',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: faLinkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/adel-mansour-3a0362164',
      color: 'hover:text-blue-400'
    },
    {
      icon: faGithub,
      name: 'GitHub',
      url: 'https://github.com/adeldjazagro',
      color: 'hover:text-gray-400'
    }
  ];

  return (
    <section id="contact" className="section-container bg-gradient-to-b from-gray-100 to-white">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Restons en <span className="gradient-text">contact</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Vous avez un projet, une opportunité ou simplement envie d'échanger ?
            N'hésitez pas à me contacter
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <div className="glass-effect rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Informations de contact
              </h3>

              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center
                                  group-hover:bg-primary-500/20 transition-colors duration-300">
                      <FontAwesomeIcon
                        icon={info.icon}
                        className="text-xl text-primary-400"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm mb-1">{info.label}</div>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-800 hover:text-primary-700 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-gray-800">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Retrouvez-moi sur
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`glass-effect w-14 h-14 rounded-lg flex items-center justify-center
                             transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    <FontAwesomeIcon icon={social.icon} className="text-2xl" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className={`glass-effect rounded-2xl p-8 bg-gradient-to-br border ${
              isAvailable
                ? 'from-green-50 to-green-100/50 border-green-300'
                : 'from-orange-50 to-orange-100/50 border-orange-300'
            }`}>
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-3 h-3 rounded-full animate-pulse ${
                  isAvailable ? 'bg-green-500' : 'bg-orange-600'
                }`}></div>
                <span className="text-gray-900 font-semibold">
                  {isAvailable ? 'Disponible' : 'Indisponible'}
                </span>
              </div>
              <p className="text-gray-600 text-sm">
                {isAvailable
                  ? 'Ouvert aux nouvelles missions et projets innovants'
                  : 'Actuellement en mission — revenez bientôt'
                }
              </p>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Envoyez-moi un message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg glass-effect text-gray-900
                           focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg glass-effect text-gray-900
                           focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 text-sm font-medium mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg glass-effect text-gray-900
                           focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg glass-effect text-gray-900
                           focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                  placeholder="Votre message..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
