"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { FaEnvelope } from "react-icons/fa";

export default function SponsorCarousel() {
  const scrollRefTop = useRef<HTMLDivElement>(null);
  const scrollRefBottom = useRef<HTMLDivElement>(null);
  const intervalRefTop = useRef<NodeJS.Timeout | null>(null);
  const intervalRefBottom = useRef<NodeJS.Timeout | null>(null);

  const sponsors = [
    { name: "Capital One", logo: "/Logos/CapitalOne/cap1.png", url: "https://www.capitalone.com/" },
    { name: "NVIDIA", logo: "/Logos/NVIDIA/nvidia.png", url: "https://www.nvidia.com/en-us/" },
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

  // Split sponsors into two groups
  const topRowSponsors = sponsors.slice(0, Math.ceil(sponsors.length / 2));
  const bottomRowSponsors = sponsors.slice(Math.ceil(sponsors.length / 2));

  // Duplicate for seamless infinite scroll
  const duplicatedTopSponsors = [...topRowSponsors, ...topRowSponsors, ...topRowSponsors];
  const duplicatedBottomSponsors = [...bottomRowSponsors, ...bottomRowSponsors, ...bottomRowSponsors];

  // Top row - scrolls left (normal direction)
  useEffect(() => {
    const scrollContainer = scrollRefTop.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1.0;

    intervalRefTop.current = setInterval(() => {
      scrollPosition += scrollSpeed;
      
      const maxScroll = scrollContainer.scrollWidth / 3;
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
    }, 16);

    return () => {
      if (intervalRefTop.current !== null) {
        clearInterval(intervalRefTop.current);
      }
    };
  }, []);

  // Bottom row - scrolls right (opposite direction)
  useEffect(() => {
    const scrollContainer = scrollRefBottom.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1.0;

    intervalRefBottom.current = setInterval(() => {
      scrollPosition += scrollSpeed;
      
      const maxScroll = scrollContainer.scrollWidth / 3;
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }
      
      // With scaleX(-1), increasing scrollLeft will make it appear to scroll right
      scrollContainer.scrollLeft = scrollPosition;
    }, 16);

    return () => {
      if (intervalRefBottom.current !== null) {
        clearInterval(intervalRefBottom.current);
      }
    };
  }, []);

  return (
    <section 
      className="relative py-8 md:py-12 pb-20 md:pb-24 mb-0 bg-black overflow-hidden"
      style={{
        backgroundColor: '#000000',
        zIndex: 10,
        position: 'relative',
        marginTop: 0,
        marginBottom: 0,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20" style={{ backgroundColor: '#000000' }}>
        <div className="flex justify-center mb-6 md:mb-8">
          <h2
            className="font-inter text-xl md:text-2xl text-center font-medium text-white/60 px-4 tracking-wider uppercase"
          >
            Past Sponsors
          </h2>
        </div>

        <div className="relative mb-4 md:mb-6">
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-black via-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-black via-black to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRefTop}
            className="flex gap-12 md:gap-20 overflow-x-hidden scrollbar-hide py-6 md:py-8"
            style={{ scrollBehavior: "auto", willChange: "scroll-position" }}
          >
            {duplicatedTopSponsors.map((sponsor, index) => (
              <div
                key={`top-${sponsor.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center group"
              >
                <div className="relative w-56 md:w-72 h-32 md:h-40 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <div className="w-[180px] md:w-full h-full flex items-center justify-center">
                    <a
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                      >
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={240}
                        height={120}
                        className="object-contain max-h-24 md:max-h-32 opacity-70 group-hover:opacity-100 transition-opacity duration-300 sponsor-logo"
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-4 md:mt-6">
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-black via-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-black via-black to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRefBottom}
            className="flex gap-12 md:gap-20 overflow-x-hidden scrollbar-hide py-6 md:py-8"
            style={{ scrollBehavior: "auto", willChange: "scroll-position" }}
          >
            {duplicatedBottomSponsors.map((sponsor, index) => (
              <div
                key={`bottom-${sponsor.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center group"
              >
                <div className="relative w-56 md:w-72 h-32 md:h-40 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <div className="w-[180px] md:w-full h-full flex items-center justify-center">
                    <a
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                      >
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={240}
                        height={120}
                        className="object-contain max-h-24 md:max-h-32 opacity-70 group-hover:opacity-100 transition-opacity duration-300 sponsor-logo"
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-16 flex flex-col items-center relative z-40">
          <div className="max-w-2xl text-center px-4">
            <h3
              className="font-inter text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(to bottom right, #FF56D6 0%, #FF7AA2 35%, #FF9167 70%)' }}
            >
              Sponsor
            </h3>
            <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
              Interested in sponsoring HackUTD for our next hackathon and beyond? Get in touch with our Industry Team and learn how supporting HackUTD will benefit you!
            </p>
            <a
              href="mailto:hello@hackutd.co?subject=HackUTD Sponsorship Inquiry&body="
              className="inline-block px-6 py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 hover:scale-105 relative z-50"
              style={{
                background: 'linear-gradient(to right, #FF56D6, #FF9167)',
                color: '#FFFFFF',
                boxShadow: '0 4px 15px rgba(255, 86, 214, 0.3)',
                filter: 'brightness(1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(255, 86, 214, 0.8), 0 0 40px rgba(255, 86, 214, 0.5)';
                e.currentTarget.style.filter = 'brightness(1.2)';
                e.currentTarget.style.background = 'linear-gradient(to right, #FF6FE5, #FFA67F)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 86, 214, 0.3)';
                e.currentTarget.style.filter = 'brightness(1)';
                e.currentTarget.style.background = 'linear-gradient(to right, #FF56D6, #FF9167)';
              }}
            >
              <span className="flex items-center justify-center gap-2">
                Get in Touch
                <FaEnvelope className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-48 md:h-64 bg-gradient-to-b from-transparent via-black/40 to-black pointer-events-none z-30" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-pink-500/70 to-transparent pointer-events-none z-30 shadow-[0_0_20px_rgba(255,86,214,0.5)]" />

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .sponsor-logo {
          filter: brightness(0) invert(1);
          transition: opacity 0.3s ease;
        }
      `}</style>
    </section>
  );
}

