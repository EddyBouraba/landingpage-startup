import { useState, useEffect, useRef } from 'react';
import ChapterNav from './ChapterNav';
import { RocketIcon, SparklesIcon, BoltIcon, DiamondIcon, TargetIcon, LockIcon, ZapIcon, LayersIcon, ChartIcon, UsersIcon, CodeIcon, TrendingUpIcon } from './Icons';
import Hero from './Hero';
import Features from './Features';
import Benefits from './Benefits';
import Testimonials from './Testimonials';
import Pricing from './Pricing';

const ScrollStory = () => {
  const [currentChapter, setCurrentChapter] = useState(0);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = sectionsRef.current.indexOf(entry.target);
          if (index !== -1) {
            setCurrentChapter(index);
          }
        }
      });
    }, options);

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const navigateToChapter = (chapterIndex) => {
    sectionsRef.current[chapterIndex]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
      <ChapterNav
        currentChapter={currentChapter}
        totalChapters={5}
        onNavigate={navigateToChapter}
      />

      <div className="scroll-smooth">
        <section ref={el => sectionsRef.current[0] = el}>
          <Hero />
        </section>
        <section ref={el => sectionsRef.current[1] = el}>
          <Features />
        </section>
        <section ref={el => sectionsRef.current[2] = el}>
          <Benefits />
        </section>
        <section ref={el => sectionsRef.current[3] = el}>
          <Testimonials />
        </section>
        <section ref={el => sectionsRef.current[4] = el}>
          <Pricing />
        </section>
      </div>
    </>
  );
};

export default ScrollStory;
