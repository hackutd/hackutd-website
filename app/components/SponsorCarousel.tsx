"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function SponsorCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const sponsors = [
    { name: "Capital One", logo: "/Logos/CapitalOne/CapitalOne Logo.png" },
    { name: "CBRE", logo: "/Logos/CBRE/CBRE_green.png" },
    { name: "Cognizant", logo: "/Logos/Cognizant/Cognizant Logo.png" },
    { name: "EOG", logo: "/Logos/EOG/EOG Logo.png" },
    { name: "Goldman", logo: "/Logos/Goldman/GS slide 1 (1).png" },
    { name: "NMC^2", logo: "/Logos/NMC^2/NMC2 Logo from HackUTD.png" },
    { name: "PNC", logo: "/Logos/PNC/PNC Bank_OrangeGray_650x200 1.png" },
    { name: "Scale", logo: "/Logos/Scale/scale logo.png" },
    { name: "State Farm", logo: "/Logos/Statefarm/SF Logo Horizontal.png" },
    { name: "T-Mobile", logo: "/Logos/T-Mobile/T-Badge_Icon_Ltd-Use_RGB_K_2025-03-06.png" },
    { name: "Toyota", logo: "/Logos/Toyota/Toyota Logo 2.png" },
    { name: "Nord_Protect", logo: "/Logos/Nord/Color=Orange, Type=Horizontal, On=Black.png" },
    { name: "Nord_Incogni", logo: "/Logos/Nord/Incogni_logo_white_better_quality.png" },
    { name: "Nord_Pass", logo: "/Logos/Nord/NordPass-white-horizontal (2).png" },
    { name: "Nord_Saily", logo: "/Logos/Nord/saily-logo-white (3).png" },
    { name: "Nord_VPN", logo: "/Logos/Nord/NordVPN_Logo_RGB_Primary_Blue_White (1).png" },
    

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

