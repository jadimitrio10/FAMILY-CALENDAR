import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Confetti() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.2,
      duration: 2 + Math.random() * 1,
      size: 8 + Math.random() * 12,
      color: ['bg-blue-400', 'bg-pink-400', 'bg-yellow-400', 'bg-green-400', 'bg-purple-400'][
        Math.floor(Math.random() * 5)
      ],
    }));
    setParticles(newParticles);

    const timer = setTimeout(() => setParticles([]), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ y: 0, opacity: 1, rotate: 0 }}
          animate={{ y: window.innerHeight, opacity: 0, rotate: 720 }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            ease: 'easeOut',
          }}
          className={`
            fixed rounded-full ${particle.color}
          `}
          style={{
            left: `${particle.left}%`,
            width: particle.size,
            height: particle.size,
            top: 0,
          }}
        />
      ))}
    </div>
  );
}
