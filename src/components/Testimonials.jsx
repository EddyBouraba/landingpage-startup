import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO at TechVision',
      avatar: '👩‍💼',
      content: 'StartupLab transformed how we work. We scaled from 5 to 50 employees in just 6 months without any infrastructure headaches.',
      rating: 5,
      company: 'TechVision',
    },
    {
      name: 'Michael Chen',
      role: 'CTO at DataFlow',
      avatar: '👨‍💻',
      content: 'The best investment we made for our startup. The automation features alone saved us countless hours every week.',
      rating: 5,
      company: 'DataFlow',
    },
    {
      name: 'Emma Williams',
      role: 'Founder at GrowthHub',
      avatar: '👩‍🚀',
      content: 'Incredible platform! The analytics and insights helped us make data-driven decisions that doubled our revenue.',
      rating: 5,
      company: 'GrowthHub',
    },
    {
      name: 'David Martinez',
      role: 'Product Manager at InnovateCo',
      avatar: '👨‍🔬',
      content: 'Game-changing solution for modern startups. The collaboration tools keep our remote team perfectly synchronized.',
      rating: 5,
      company: 'InnovateCo',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved by
            <span className="text-gradient from-indigo-600 to-purple-600"> Thousands</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our customers have to say about their experience with StartupLab.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-5xl shadow-lg">
                  {testimonials[currentIndex].avatar}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Stars */}
                <div className="flex justify-center md:justify-start gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-gray-800 mb-6 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Author info */}
                <div>
                  <div className="font-bold text-lg text-gray-900">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-sm text-gradient from-indigo-600 to-purple-600 font-semibold mt-1">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center text-gray-600 hover:text-indigo-600"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center text-gray-600 hover:text-indigo-600"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'w-8 bg-gradient-to-r from-indigo-600 to-purple-600'
                  : 'w-3 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Small testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => setCurrentIndex(index)}
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4 line-clamp-3">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-xs text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
