import { useState } from 'react';

const CustomerStories = () => {
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      customerName: 'Marie Lefebvre',
      company: 'BakeryLove',
      industry: 'Boulangerie artisanale',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=600&fit=crop',
      customerPhoto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces',
      location: 'Lyon, France',
      challenge: 'Gérer 3 boutiques avec une équipe de 15 personnes était devenu un cauchemar logistique.',
      solution: 'Grâce à StartupLab, j\'ai automatisé la gestion des stocks et des plannings. Je dors mieux la nuit !',
      result: '+40% de productivité',
      testimonial: 'Je peux enfin me concentrer sur ce que j\'aime : créer de nouvelles recettes et passer du temps avec mes clients.',
      stats: [
        { value: '3x', label: 'Temps gagné' },
        { value: '40%', label: 'Économies réalisées' },
        { value: '100%', label: 'Satisfaction équipe' }
      ]
    },
    {
      customerName: 'Thomas Bernard',
      company: 'GreenTech Solutions',
      industry: 'Énergie renouvelable',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop',
      customerPhoto: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=faces',
      location: 'Nantes, France',
      challenge: 'Coordonner 50+ installateurs sur le terrain sans outil adapté ralentissait notre croissance.',
      solution: 'Avec StartupLab, chaque technicien a accès en temps réel aux informations dont il a besoin.',
      result: '2x plus de projets livrés',
      testimonial: 'Notre équipe est plus autonome et nos clients sont ravis. C\'est un vrai game-changer pour notre business.',
      stats: [
        { value: '200%', label: 'Croissance' },
        { value: '50+', label: 'Techniciens connectés' },
        { value: '4.9/5', label: 'Note client' }
      ]
    },
    {
      customerName: 'Léa Martinez',
      company: 'YogaFlow Studio',
      industry: 'Bien-être & Santé',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
      customerPhoto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=faces',
      location: 'Bordeaux, France',
      challenge: 'Gérer les réservations, les paiements et communiquer avec 300+ membres prenait tout mon temps.',
      solution: 'Tout est maintenant centralisé et automatisé. Mes élèves adorent la simplicité de la plateforme.',
      result: '+300 nouveaux membres en 6 mois',
      testimonial: 'J\'ai retrouvé ma passion pour l\'enseignement. Plus de paperasse, juste du yoga et des sourires.',
      stats: [
        { value: '300+', label: 'Nouveaux membres' },
        { value: '95%', label: 'Taux de rétention' },
        { value: '10h', label: 'Gagnées par semaine' }
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Histoires
            <span className="text-gradient from-indigo-600 to-purple-600"> Inspirantes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des entrepreneurs comme vous qui ont transformé leur business.
            Voici leur parcours, leurs défis et leurs victoires.
          </p>
        </div>

        {/* Story Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {stories.map((story, index) => (
            <button
              key={index}
              onClick={() => setActiveStory(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeStory === index
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {story.company}
            </button>
          ))}
        </div>

        {/* Active Story */}
        <div className="relative">
          {stories.map((story, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                activeStory === index
                  ? 'opacity-100 relative'
                  : 'opacity-0 absolute inset-0 pointer-events-none'
              }`}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                {/* Image Side */}
                <div className="relative">
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={story.image}
                      alt={story.company}
                      className="w-full h-96 object-cover"
                    />
                  </div>
                  {/* Customer Photo Overlay */}
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full overflow-hidden ring-8 ring-white shadow-xl">
                    <img
                      src={story.customerPhoto}
                      alt={story.customerName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div>
                  <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold mb-4">
                    {story.industry}
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{story.company}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-6">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{story.location}</span>
                  </div>

                  {/* Journey Sections */}
                  <div className="space-y-6">
                    {/* Challenge */}
                    <div className="p-6 bg-red-50 rounded-2xl border-l-4 border-red-500">
                      <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                        <span className="text-2xl">😓</span>
                        Le Défi
                      </h4>
                      <p className="text-gray-700">{story.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div className="p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-500">
                      <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                        <span className="text-2xl">💡</span>
                        La Solution
                      </h4>
                      <p className="text-gray-700">{story.solution}</p>
                    </div>

                    {/* Result */}
                    <div className="p-6 bg-green-50 rounded-2xl border-l-4 border-green-500">
                      <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                        <span className="text-2xl">🎉</span>
                        Le Résultat
                      </h4>
                      <p className="text-gray-700 mb-3">{story.result}</p>
                      <blockquote className="italic text-gray-600 border-l-2 border-green-500 pl-4">
                        "{story.testimonial}"
                      </blockquote>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="font-semibold text-gray-900">- {story.customerName}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {story.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="text-4xl font-bold text-gradient from-indigo-600 to-purple-600 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 mb-6">
            Prêt à écrire votre propre histoire de succès ?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Commencer Gratuitement
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerStories;
