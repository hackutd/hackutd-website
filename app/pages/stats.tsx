"use client";

import { useEffect, useRef, useState } from "react";
import StatCard from "../components/StatCard";
import { initStatsAnimations } from "../animations/statsAnimations";

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [isHovered, setIsHovered] = useState<number | null>(null);

  useEffect(() => {
    const cleanup = initStatsAnimations(sectionRef, cardsRef, setIsHovered);
    return cleanup;
  }, []);

  const addCardRef = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-black text-white overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => {
          
          const left = ((i * 137.5) % 100);
          const top = ((i * 73.3) % 100);
          const delay = ((i * 0.7) % 3);
          const duration = 3 + ((i * 0.4) % 2);
          
          return (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-[#FF56D6] to-[#FF9167] rounded-full opacity-30"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            />
          );
        })}
      </div>

      <div className="z-10 relative flex flex-col items-center justify-center text-center h-[150vh] px-4 md:px-8">
        <div ref={addCardRef} className="transform md:-translate-x-[12vw] mb-8 md:mb-0">
          <StatCard
            title="1000+"
            subtitle="Participants"
            body="Over 1000 students from across the country"
            align="center"
          />
        </div>
        <div ref={addCardRef} className="transform md:translate-x-[12vw] md:-translate-y-[7vh] mb-8 md:mb-0">
          <StatCard
            title="500+"
            subtitle="so the thing is there's a lot of stuff"
            body="And this stuff"
            align="center"
          />
        </div>
        <div ref={addCardRef} className="transform md:-translate-x-[12vw] md:-translate-y-[14vh]">
          <StatCard
            title="$10K+"
            subtitle="so there's even more stuff"
            body="wow monies"
            align="center"
          />
        </div>
      </div>

      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .particle-container > div {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
