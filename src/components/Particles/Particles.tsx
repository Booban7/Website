import { useState } from "react";

interface ParticlesProps {
  count?: number;
}

interface Particle {
  left: number;
  size: number;
  duration: number;
  delay: number;
}

function createParticles(count: number): Particle[] {
  return Array.from({ length: count }, () => ({
    left: Math.random() * 100,
    size: 3 + Math.random() * 6,
    duration: 8 + Math.random() * 12,
    delay: Math.random() * 12,
  }));
}

/** Ambient rising particles — light motes (good) or embers (evil). */
function Particles({ count = 24 }: ParticlesProps) {
  // Generated once in the initializer so values stay stable across renders.
  const [items] = useState(() => createParticles(count));

  return (
    <div className="particles" aria-hidden="true">
      {items.map((p, i) => (
        <span
          key={i}
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default Particles;
