import { useState, useEffect } from 'react';

const FloatingBadge = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Show badge after 2 seconds
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setIsVisible(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [hasInteracted]);

  const handleClose = () => {
    setIsVisible(false);
    setHasInteracted(true);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-slide-up">
      <div className="relative bg-white rounded-2xl shadow-2xl p-6 max-w-sm border-2 border-indigo-100">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Badge content */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
              <span className="text-2xl">👋</span>
            </div>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-gray-900 mb-1">
              Bienvenue !
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              Nous sommes là pour vous aider. Des questions ?
            </p>
            <button className="text-sm px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Discuter avec nous
            </button>
          </div>
        </div>

        {/* Pulse indicator */}
        <div className="absolute -top-1 -right-1 w-4 h-4">
          <span className="flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-indigo-600"></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FloatingBadge;
