import { useState } from 'react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small teams getting started',
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        'Up to 10 team members',
        '100GB storage',
        'Basic analytics',
        'Email support',
        'Core integrations',
        '99.5% uptime SLA',
      ],
      cta: 'Start Free Trial',
      popular: false,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Professional',
      description: 'For growing teams that need more',
      monthlyPrice: 79,
      annualPrice: 790,
      features: [
        'Up to 50 team members',
        '500GB storage',
        'Advanced analytics',
        'Priority support',
        'All integrations',
        '99.9% uptime SLA',
        'Custom branding',
        'API access',
      ],
      cta: 'Get Started',
      popular: true,
      gradient: 'from-indigo-600 to-purple-600',
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with custom needs',
      monthlyPrice: 199,
      annualPrice: 1990,
      features: [
        'Unlimited team members',
        'Unlimited storage',
        'Enterprise analytics',
        '24/7 phone support',
        'Custom integrations',
        '99.99% uptime SLA',
        'Advanced security',
        'Dedicated account manager',
        'Custom training',
      ],
      cta: 'Contact Sales',
      popular: false,
      gradient: 'from-purple-600 to-pink-600',
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent
            <span className="text-gradient from-indigo-600 to-purple-600"> Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your team. No hidden fees, cancel anytime.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center bg-white rounded-full p-1 shadow-md">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                !isAnnual
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                  : 'text-gray-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                isAnnual
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                  : 'text-gray-600'
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl bg-white shadow-xl transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'ring-4 ring-indigo-600 scale-105' : ''
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan name */}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-gray-900">
                      ${isAnnual ? Math.floor(plan.annualPrice / 12) : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-600 ml-2">/month</span>
                  </div>
                  {isAnnual && (
                    <p className="text-sm text-gray-500 mt-2">
                      Billed annually (${plan.annualPrice}/year)
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 rounded-full font-semibold transition-all duration-300 mb-8 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-2xl hover:scale-105'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Features */}
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <svg
                        className={`w-6 h-6 flex-shrink-0 ${
                          plan.popular ? 'text-indigo-600' : 'text-gray-400'
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Gradient border decoration */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${plan.gradient} opacity-0 hover:opacity-10 transition-opacity duration-300 -z-10`}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Need a custom plan? We'll work with you to create the perfect solution.
          </p>
          <button className="group px-8 py-4 bg-white text-gray-800 font-semibold rounded-full border-2 border-gray-300 hover:border-indigo-600 hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2">
            Contact Sales Team
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
    </section>
  );
};

export default Pricing;
