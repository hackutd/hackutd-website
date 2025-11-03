"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function SponsorCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const sponsors = [
    { name: "Capital One", logo: "/Logos/CapitalOne/cap1.png", url: "https://www.capitalone.com/" },
    { name: "CBRE", logo: "/Logos/CBRE/CBRE_green.png", url: "https://www.cbre.com/" },
    { name: "Cognizant", logo: "/Logos/Cognizant/CognizantLogo.png", url: "https://www.cognizant.com/us/en" },
    { name: "EOG", logo: "/Logos/EOG/EOGLogo.png", url: "https://www.eogresources.com/" },
    { name: "Goldman", logo: "/Logos/Goldman/GS_white.svg", url: "https://www.goldmansachs.com/" },
    { name: "NMC^2", logo: "/Logos/NMC^2/NMC2 Logo from HackUTD.png", url:"https://nmc2.com/" },
    { name: "PNC", logo: "/Logos/PNC/PNC Bank_OrangeGray_650x200 1.png", url: "https://www.pnc.com/en/personal-banking.html" },
    { name: "Scale", logo: "/Logos/Scale/scalelogo.png", url: "https://scale.com/" },
    { name: "State Farm", logo: "/Logos/Statefarm/SFLogo.png", url: "https://www.statefarm.com/" },
    { name: "T-Mobile", logo: "/Logos/T-Mobile/T-Badge_Icon_Ltd-Use_RGB_K_2025-03-06.png", url: "https://www.t-mobile.com/" },
    { name: "Toyota", logo: "/Logos/Toyota/Toyota Logo 2.png", url: "https://www.toyotafinancial.com/us/en.html" },
    { name: "Nord_Protect", logo: "/Logos/Nord/Color=Orange, Type=Horizontal, On=Black.png", url: "https://nordprotect.com/" },
    { name: "Nord_Incogni", logo: "/Logos/Nord/Incogni_logo_white_better_quality.png", url: "https://nordvpn.com/incogni/?srsltid=AfmBOooyevCgYKIT5Kr1xutxSdD0_cJV4WnOFErberJRV0g4-9aZroPl" },
    { name: "Nord_Pass", logo: "/Logos/Nord/NordPass-white-horizontal (2).png", url: "https://nordpass.com/" },
    { name: "Nord_Saily", logo: "/Logos/Nord/saily-logo-white (3).png", url: "https://saily.com/" },
    { name: "Nord_VPN", logo: "/Logos/Nord/NordVPN_Logo_RGB_Primary_Blue_White (1).png", url: "https://nordvpn.com/?srsltid=AfmBOopu6SjzTP8a7CtPx1NanVbn9qjjyOS0hFM_tzDs4qTSdNlyFyoF" },
    

  ];
// Duplicate the sponsors array for seamless infinite scroll
  const duplicatedSponsors = [...sponsors, ...sponsors, ...sponsors];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 1.0; // Adjust speed here (lower = slower), og 0.5

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
                    <a
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                      >
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={160}
                        height={80}
                        className="object-contain max-h-16 md:max-h-20 opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    </a>
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

