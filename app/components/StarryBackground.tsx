"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

interface Star {
  id: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
  color: string;
  opacity: number;
  shadowSize: number;
  shadowSizeMedium: number;
  shadowSizeLarge: number;
  points: number;
}

interface StarryBackgroundProps {
  className?: string;
}

export default function StarryBackground({ className = "" }: StarryBackgroundProps) {
  const [stars, setStars] = useState<{
    smallStars: Star[];
    mediumStars: Star[];
    largeStars: Star[];
    shootingStars: Star[];
  }>({
    smallStars: [],
    mediumStars: [],
    largeStars: [],
    shootingStars: []
  });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Generate stars only on client side to avoid hydration issues
    const generateStars = (count: number, layer: number): Star[] => {
      return Array.from({ length: count }, (_, i) => ({
        id: i + layer * 100,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 2 + Math.random() * 4,
        color: Math.random() > 0.95 ? '#87CEEB' : '#FFFFFF',
        opacity: 0.2 + Math.random() * 0.6,
        shadowSize: 1 + Math.random() * 2,
        shadowSizeMedium: 2 + Math.random() * 3,
        shadowSizeLarge: 3 + Math.random() * 4,
        points: Math.random() > 0.5 ? 5 : 6, // 5 or 6 pointed stars
      }));
    };

    setStars({
      smallStars: generateStars(15, 1),
      mediumStars: generateStars(8, 2),
      largeStars: generateStars(4, 3),
      shootingStars: generateStars(1, 4)
    });
  }, []);

  useEffect(() => {
    if (containerRef.current && stars.smallStars.length > 0) {
      // GSAP animations for stars
      const starElements = containerRef.current.querySelectorAll('.star-element');
      
      // Initial animation - stars fade in with stagger
      gsap.fromTo(starElements,
        { 
          scale: 0, 
          opacity: 0,
          rotation: Math.random() * 360
        },
        { 
          scale: 1, 
          opacity: 1,
          rotation: 0,
          duration: 2,
          stagger: 0.05,
          ease: "back.out(1.7)"
        }
      );

      // Continuous twinkling animation
      starElements.forEach((star, index) => {
        gsap.to(star, {
          scale: 1.2,
          opacity: 0.8,
          duration: 2 + Math.random() * 2,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1,
          delay: Math.random() * 2
        });
      });

      // Shooting star animation
      const shootingStar = containerRef.current.querySelector('.shooting-star');
      if (shootingStar) {
        gsap.to(shootingStar, {
          x: "100vw",
          y: "100vh",
          rotation: 45,
          duration: 3,
          ease: "power2.in",
          repeat: -1,
          repeatDelay: 5
        });
      }
    }
  }, [stars]);

  const StarShape = ({ star, size }: { star: Star; size: number }) => {
    const isFivePointed = star.points === 5;
    
    // Create star shape using CSS clip-path
    const starClipPath = isFivePointed 
      ? 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
      : 'polygon(50% 0%, 60% 40%, 100% 40%, 70% 60%, 80% 100%, 50% 80%, 20% 100%, 30% 60%, 0% 40%, 40% 40%)';
    
    return (
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: star.color,
          boxShadow: `0 0 ${size * 0.5}px ${star.color}`,
          filter: 'blur(0.2px)',
          clipPath: starClipPath,
        }}
      />
    );
  };

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Stars Layer 1 - Small stars */}
      <div className="absolute inset-0">
        {stars.smallStars.map((star) => (
          <div
            key={star.id}
            className="absolute star-element"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              opacity: star.opacity
            }}
          >
            <StarShape star={star} size={4} />
          </div>
        ))}
      </div>
      
      {/* Stars Layer 2 - Medium stars */}
      <div className="absolute inset-0">
        {stars.mediumStars.map((star) => (
          <div
            key={star.id}
            className="absolute star-element"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              opacity: star.opacity
            }}
          >
            <StarShape star={star} size={6} />
          </div>
        ))}
      </div>
      
      {/* Stars Layer 3 - Large stars */}
      <div className="absolute inset-0">
        {stars.largeStars.map((star) => (
          <div
            key={star.id}
            className="absolute star-element"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              opacity: star.opacity
            }}
          >
            <StarShape star={star} size={8} />
          </div>
        ))}
      </div>
      
      {/* Shooting stars */}
      <div className="absolute inset-0">
        {stars.shootingStars.map((star) => (
          <div
            key={star.id}
            className="absolute shooting-star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
            }}
          >
            <div 
              className="w-0.5 h-0.5 bg-white rounded-full"
              style={{
                boxShadow: '0 0 3px 1px rgba(255, 255, 255, 0.6)'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
