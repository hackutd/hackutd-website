"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function SponsorCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Sample sponsors - replace with actual sponsor logos
  // Add your sponsor logos to /public/sponsors/ folder
  const sponsors = [
    { name: "Snowflake", logo: "/logo.svg" },
    { name: "Intel", logo: "/logo.svg" },
    { name: "AWS", logo: "/logo.svg" },
    { name: "Oracle", logo: "/logo.svg" },
    { name: "SK Telecom", logo: "/logo.svg" },
    { name: "NVIDIA", logo: "/logo.svg" },
    { name: "Meta", logo: "/logo.svg" },
    { name: "Google", logo: "/logo.svg" },
    { name: "Microsoft", logo: "/logo.svg" },
    { name: "Apple", logo: "/logo.svg" },
  ];

  // Duplicate the sponsors array for seamless infinite scroll
  const duplicatedSponsors = [...sponsors, ...sponsors, ...sponsors];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Adjust speed here (lower = slower)

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset position for infinite scroll
      const maxScroll = scrollContainer.scrollWidth / 3;
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationFrameId);
    };

    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative py-16 md:py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center mb-12">
          <span className="inline-block px-4 py-1.5 text-xs md:text-sm font-medium text-gray-400 border border-gray-700 rounded-full uppercase tracking-wider">
            Past Sponsors
          </span>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            className="flex gap-12 md:gap-16 overflow-x-hidden scrollbar-hide py-8 md:py-12"
            style={{ scrollBehavior: "auto" }}
          >
            {duplicatedSponsors.map((sponsor, index) => (
              <div
                key={`${sponsor.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center group"
              >
                <div className="relative w-40 md:w-48 h-24 md:h-32 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={160}
                      height={80}
                      className="object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

