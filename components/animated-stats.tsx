'use client';

import { useEffect, useState } from 'react';

interface AnimatedStatsProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export function AnimatedStats({ value, suffix = '', duration = 2000 }: AnimatedStatsProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * value));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [value, duration]);

  return (
    <span className="text-3xl font-bold text-gray-900">
      {count.toLocaleString()}{suffix}
    </span>
  );
}