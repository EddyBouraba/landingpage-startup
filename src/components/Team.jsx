import { useState } from 'react';

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      name: 'Alex Rivera',
      role: 'Co-Founder & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces',
      bio: 'Passionné par l\'innovation, Alex a fondé 3 startups avant de créer celle-ci. Il aime le café et le code.',
      linkedin: '#',
      twitter: '#',
      quote: 'Chaque jour est une nouvelle opportunité d\'innover'
    },
    {
      name: 'Sophie Chen',
      role: 'Co-Founder & CTO',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces',
      bio: 'Ancienne ingénieure chez Google, Sophie construit des systèmes qui évoluent. Fan de yoga et de randonnée.',
      linkedin: '#',
      twitter: '#',
      quote: 'La technologie doit servir l\'humain, pas l\'inverse'
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=faces',
      bio: 'Marcus transforme les idées complexes en expériences simples. Illustrateur à ses heures perdues.',
      linkedin: '#',
      twitter: '#',
      quote: 'Le design, c\'est résoudre des problèmes avec élégance'
    },
    {
      name: 'Priya Patel',
      role: 'VP of Growth',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces',
      bio: 'Priya a fait grandir plusieurs startups de 0 à 10M d\'utilisateurs. Amatrice de cuisine indienne.',
      linkedin: '#',
      twitter: '#',
      quote: 'La croissance vient de l\'écoute authentique'
    },
    {
      name: 'Thomas Dubois',
      role: 'Head of Customer Success',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces',
      bio: 'Thomas s\'assure que chaque client réussit. Musicien de jazz et père de deux enfants.',
      linkedin: '#',
      twitter: '#',
      quote: 'Le succès de nos clients est notre seule mesure'
    },
    {
      name: 'Yuki Tanaka',
      role: 'Lead Engineer',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=faces',
      bio: 'Yuki code depuis l\'âge de 12 ans. Championne de Go et passionnée d\'intelligence artificielle.',
      linkedin: '#',
      twitter: '#',
      quote: 'Le code propre est un code qui raconte une histoire'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Rencontrez
            <span className="text-gradient from-indigo-600 to-purple-600"> l'Équipe</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des personnes réelles, avec des histoires réelles, qui construisent quelque chose
            d'extraordinaire ensemble. Nous sommes plus qu'une équipe, nous sommes une famille.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Quote on Hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm italic font-light">
                    "{member.quote}"
                  </p>
                </div>
              </div>

              {/* Info Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-gradient from-indigo-600 to-purple-600 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex gap-3">
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-indigo-600 flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href={member.twitter}
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-indigo-600 flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Culture Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Notre Culture</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nous croyons que le meilleur travail vient de personnes heureuses et épanouies.
                C'est pourquoi nous avons créé un environnement où chacun peut être authentique,
                grandir et s'amuser.
              </p>
              <div className="space-y-4">
                {[
                  { icon: '🏠', text: 'Travail flexible (remote ou bureau)' },
                  { icon: '🌴', text: 'Congés illimités' },
                  { icon: '📚', text: 'Budget formation de 5000€/an' },
                  { icon: '🧘', text: 'Bien-être mental prioritaire' },
                  { icon: '🎉', text: 'Team buildings mensuels' },
                  { icon: '💚', text: 'Impact social et environnemental' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-600 p-1">
                <div className="w-full h-full rounded-3xl bg-white flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🚀</div>
                    <h4 className="text-2xl font-bold mb-2">On recrute !</h4>
                    <p className="text-gray-600 mb-6">
                      Rejoignez une équipe passionnée et contribuez à notre mission
                    </p>
                    <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                      Voir les Postes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
