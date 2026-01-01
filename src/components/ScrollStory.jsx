import { useState, useEffect, useRef } from 'react';
import ChapterNav from './ChapterNav';
import { RocketIcon, SparklesIcon, BoltIcon, DiamondIcon, TargetIcon, LockIcon, ZapIcon, LayersIcon, ChartIcon, UsersIcon, CodeIcon, TrendingUpIcon } from './Icons';
import Hero from './Hero';
import TrustSection from './TrustSection';
import Features from './Features';
import Benefits from './Benefits';
import CustomerStories from './CustomerStories';
import Testimonials from './Testimonials';
import Team from './Team';
import Pricing from './Pricing';
import FloatingBadge from './FloatingBadge';

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
        totalChapters={6}
        onNavigate={navigateToChapter}
      />

      <div className="scroll-smooth">
        <section ref={el => sectionsRef.current[0] = el}>
          <Hero />
          <TrustSection />
        </section>
        <section ref={el => sectionsRef.current[1] = el}>
          <Features />
        </section>
        <section ref={el => sectionsRef.current[2] = el}>
          <Benefits />
        </section>
        <section ref={el => sectionsRef.current[3] = el}>
          <CustomerStories />
        </section>
        <section ref={el => sectionsRef.current[4] = el}>
          <Testimonials />
          <Team />
        </section>
        <section ref={el => sectionsRef.current[5] = el}>
          <Pricing />
        </section>
      </div>

      <FloatingBadge />
    </>
  );
};

export default ScrollStory;
