import { useState, useEffect } from 'react';
import { RocketIcon, SparklesIcon, BoltIcon, DiamondIcon, TargetIcon } from './Icons';

const ChapterNav = ({ currentChapter, totalChapters, onNavigate }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((currentChapter / (totalChapters - 1)) * 100);
  }, [currentChapter, totalChapters]);

  const chapters = [
    { id: 0, title: 'Welcome', Icon: RocketIcon, color: 'from-blue-500 to-cyan-500' },
    { id: 1, title: 'Vision', Icon: SparklesIcon, color: 'from-purple-500 to-pink-500' },
    { id: 2, title: 'Power', Icon: BoltIcon, color: 'from-yellow-500 to-orange-500' },
    { id: 3, title: 'Impact', Icon: DiamondIcon, color: 'from-green-500 to-emerald-500' },
    { id: 4, title: 'Join Us', Icon: TargetIcon, color: 'from-indigo-500 to-purple-500' },
  ];

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="relative">
        {/* Chapter dots */}
        <div className="relative space-y-16">
          {/* Progress line - height calculated to reach last dot */}
          <div className="absolute left-1/2 top-2 w-0.5 bg-gray-200 -translate-x-1/2 h-[calc(100%-1rem)]">
            <div
              className="w-full bg-gradient-to-b from-indigo-600 to-purple-600 transition-all duration-500"
              style={{ height: `${progress}%` }}
            />
          </div>

          {chapters.map((chapter) => (
            <button
              key={chapter.id}
              onClick={() => onNavigate(chapter.id)}
              className="group relative flex flex-col items-center"
            >
              {/* Dot */}
              <div
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  currentChapter === chapter.id
                    ? `bg-gradient-to-r ${chapter.color} scale-150`
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />

              {/* Label */}
              <div
                className={`absolute right-8 px-4 py-2 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap ${
                  currentChapter === chapter.id ? 'opacity-100' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${chapter.color}`}>
                    <chapter.Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold text-gray-800">{chapter.title}</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Chapter counter */}
        <div className="mt-20 text-center bg-white rounded-full px-4 py-2 shadow-lg">
          <div className="text-xs text-gray-500">Chapter</div>
          <div className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {currentChapter + 1}/{totalChapters}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterNav;
