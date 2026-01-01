import { useEffect, useState } from 'react';

const CursorTrail = () => {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    let frameId;
    const maxTrails = 20;

    const handleMouseMove = (e) => {
      const newTrail = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setTrails((prev) => {
        const updated = [newTrail, ...prev].slice(0, maxTrails);
        return updated;
      });
    };

    // Cleanup old trails
    const cleanup = setInterval(() => {
      setTrails((prev) => prev.slice(0, maxTrails - 5));
    }, 100);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(cleanup);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
          style={{
            left: trail.x,
            top: trail.y,
            opacity: 1 - index / trails.length,
            transform: `scale(${1 - index / trails.length}) translate(-50%, -50%)`,
            transition: 'all 0.3s ease-out',
          }}
        />
      ))}
    </div>
  );
};

export default CursorTrail;
