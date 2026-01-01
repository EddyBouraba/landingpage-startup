const TrustSection = () => {
  const companies = [
    { name: 'TechVision', icon: '🚀' },
    { name: 'DataFlow', icon: '📊' },
    { name: 'GrowthHub', icon: '🌱' },
    { name: 'InnovateCo', icon: '💡' },
    { name: 'CloudBase', icon: '☁️' },
    { name: 'NextGen', icon: '⚡' },
    { name: 'BrightPath', icon: '🌟' },
    { name: 'SmartScale', icon: '📈' },
  ];

  const testimonials = [
    { text: '"Meilleur outil que nous ayons utilisé"', author: 'Marie L.' },
    { text: '"A transformé notre façon de travailler"', author: 'Thomas B.' },
    { text: '"Support client incroyable"', author: 'Sophie C.' },
    { text: '"ROI positif dès le premier mois"', author: 'Alex R.' },
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-6">
            Ils nous font confiance
          </p>

          {/* Company Logos - Scrolling Animation */}
          <div className="relative overflow-hidden mb-12">
            <div className="flex gap-12 animate-scroll">
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center gap-3 px-6 py-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <span className="text-3xl">{company.icon}</span>
                  <span className="font-semibold text-gray-700 whitespace-nowrap">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl hover:shadow-md transition-shadow"
              >
                <p className="text-sm font-medium text-gray-800 mb-1">
                  {testimonial.text}
                </p>
                <p className="text-xs text-gray-600">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof Stats */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span className="text-green-500 text-lg">✓</span>
            <span>Sans engagement</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500 text-lg">✓</span>
            <span>Essai gratuit de 14 jours</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500 text-lg">✓</span>
            <span>Aucune carte bancaire requise</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500 text-lg">✓</span>
            <span>Support en français 24/7</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
