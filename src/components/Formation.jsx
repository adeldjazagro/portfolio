import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCalendar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Formation = () => {
  return (
    <section id="formation" className="section-container bg-gradient-to-b from-white to-gray-100">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Ma <span className="gradient-text">formation</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-effect rounded-2xl p-8 card-hover group">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-300 to-accent-400
                              flex items-center justify-center shadow-lg shadow-accent-300/50">
                  <FontAwesomeIcon icon={faGraduationCap} className="text-2xl text-white" />
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                  Master 2 MIASHS
                </h3>
                <p className="text-lg text-gray-700">
                  Mathématiques et Informatique Appliquées aux Sciences Humaines et Sociales
                </p>
                <p className="text-primary-600 font-semibold">
                  Université Paris 8 Vincennes-Saint-Denis
                </p>
                <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCalendar} className="text-primary-600" />
                    <span>2019 - 2021</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary-600" />
                    <span>Saint-Denis</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Data Engineering', 'Machine Learning', 'Statistiques', 'Python', 'R', 'SQL'].map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium
                               border border-primary-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formation;
