import { useState, useEffect, useRef } from 'react';

const Benefits = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const benefits = [
    {
      title: 'Boost Productivity',
      description: 'Automate repetitive tasks and focus on what matters most. Our intelligent workflows save teams an average of 15 hours per week.',
      image: '📈',
      stats: [
        { value: '10x', label: 'Faster deployment' },
        { value: '50%', label: 'Time saved' },
        { value: '99.9%', label: 'Uptime SLA' },
      ],
    },
    {
      title: 'Scale Effortlessly',
      description: 'Grow from 10 to 10 million users without breaking a sweat. Our infrastructure scales automatically with your success.',
      image: '🚀',
      stats: [
        { value: 'Auto', label: 'Scaling' },
        { value: '24/7', label: 'Monitoring' },
        { value: '∞', label: 'Capacity' },
      ],
    },
    {
      title: 'Save Money',
      description: 'Reduce operational costs by up to 60% with our optimized infrastructure and intelligent resource management.',
      image: '💰',
      stats: [
        { value: '60%', label: 'Cost reduction' },
        { value: '$0', label: 'Setup fee' },
        { value: '14d', label: 'Free trial' },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % benefits.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose
            <span className="text-gradient from-indigo-600 to-purple-600"> StartupLab</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of successful startups that trust us to power their growth.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12 space-x-4">
          {benefits.map((benefit, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === index
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {benefit.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image/Emoji */}
          <div
            className={`flex justify-center items-center transform transition-all duration-700 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            <div className="relative">
              <div className="text-[200px] animate-float">
                {benefits[activeTab].image}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>

          {/* Right side - Content */}
          <div
            className={`transform transition-all duration-700 delay-200 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {benefits[activeTab].title}
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {benefits[activeTab].description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {benefits[activeTab].stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-3xl font-bold text-gradient from-indigo-600 to-purple-600">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>

            <button className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Explore This Benefit
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center mt-12 space-x-3">
          {benefits.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeTab === index ? 'w-12 bg-gradient-to-r from-indigo-600 to-purple-600' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
