import { useState, useEffect } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.5s ease-out',
            animationDelay: '2s'
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{
            transform: `translate(${mousePosition.y}px, ${mousePosition.x}px)`,
            transition: 'transform 0.5s ease-out',
            animationDelay: '4s'
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-down">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your Ideas
            <br />
            <span className="text-gradient from-indigo-600 via-purple-600 to-pink-600">
              Into Reality
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            The ultimate platform for startups to build, scale, and succeed.
            Join thousands of innovators already making an impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Start Free Trial
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            <button className="group px-8 py-4 bg-white text-gray-800 text-lg font-semibold rounded-full border-2 border-gray-300 hover:border-indigo-600 hover:shadow-lg transition-all duration-300 flex items-center gap-2">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in">
            {[
              { number: '50K+', label: 'Active Users' },
              { number: '200+', label: 'Countries' },
              { number: '99.9%', label: 'Uptime' },
              { number: '4.9/5', label: 'Rating' },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl hover:bg-white/80 transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient from-indigo-600 to-purple-600">
                  {stat.number}
                </div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
