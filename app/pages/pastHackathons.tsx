'use client';

import React, { useEffect, useRef } from 'react';
import Hack2020 from '@/public/Hack2020.svg';
import Hack2021 from '@/public/Hack2021.svg';
import Hack2022 from '@/public/Hack2022.svg';
import Hack2023 from '@/public/Hack2023.svg';
import Hack2024 from '@/public/Hack2024.svg';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initPastHackathonsAnimations } from '../animations/pastHackathonsAnimations';

export default function PastHackathons() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const hackathons = [
    { 
      href: 'https://ripple.hackutd.co/', 
      src: Hack2024, 
      alt: 'Hack Badge 2024', 
      label: 'HackUTD 2024',
      backgroundImage: '/hack2024-event-photo.jpg' 
    },
    { 
      href: 'https://x.hackutd.co/', 
      src: Hack2023, 
      alt: 'Hack Badge 2023', 
      label: 'HackUTD 2023',
      backgroundImage: '/hack2023-event-photo.jpg' 
    },
    { 
      href: 'https://ix.hackutd.co/', 
      src: Hack2022, 
      alt: 'Hack Badge 2022', 
      label: 'HackUTD 2022',
      backgroundImage: '/hack2022-event-photo.jpg' 
    },
    { 
      href: 'https://prod.hackutd.co/', 
      src: Hack2021, 
      alt: 'Hack Badge 2021', 
      label: 'HackUTD 2021',
      backgroundImage: '/hack2021-event-photo.jpg' 
    },
    { 
      href: 'https://vii.hackutd.co/', 
      src: Hack2020, 
      alt: 'Hack Badge 2020', 
      label: 'HackUTD 2020',
      backgroundImage: '/hack2020-event-photo.jpg' 
    },
  ];

  useEffect(() => {
    const cleanup = initPastHackathonsAnimations(sectionRef, trackRef);
    return cleanup;
  }, []);

  return (
    <div>
      <h1
        className="font-inter text-3xl md:text-5xl lg:text-[67px] text-center font-bold bg-clip-text text-transparent px-4"
        style={{ backgroundImage: 'linear-gradient(to bottom right, #FF56D6 0%, #FF7AA2 35%, #FF9167 70%)' }}
      >
        Oh how far we&apos;ve come...
      </h1>
      <h3 className="text-center mb-4 text-sm md:text-base px-4">Scroll to see our past hackathons!</h3>

      <section
        ref={sectionRef}
        className="hidden lg:block h-screen overflow-hidden overscroll-none"
        style={{ touchAction: 'pan-y' }} 
      >
        <div ref={trackRef} className="flex h-full will-change-transform">
          {hackathons.map((hackathon, index) => (
            <article 
              key={index} 
              className="min-w-[100vw] h-full grid place-items-center text-center relative overflow-hidden"
              style={{
                backgroundImage: `url(${hackathon.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="absolute inset-0 bg-black/50 z-0"></div>
              
              {/* Floating decorative images - only on first slide */}
              {index === 0 && (
                <>
                  <div className="absolute top-20 left-10 md:left-20 z-10 animate-float-slow">
                    <Image
                      src="/assets/horizontalScroll/duck.png"
                      alt="Floating duck"
                      width={224}
                      height={224}
                      className="w-32 md:w-40 lg:w-56 h-auto opacity-90"
                    />
                  </div>
                  
                  <div className="absolute top-40 right-10 md:right-20 z-10 animate-float-medium">
                    <Image
                      src="/assets/horizontalScroll/frog.png"
                      alt="Floating frog"
                      width={224}
                      height={224}
                      className="w-32 md:w-40 lg:w-56 h-auto opacity-90"
                    />
                  </div>
                  
                  <div className="absolute bottom-32 left-16 md:left-32 z-10 animate-float-fast">
                    <Image
                      src="/assets/horizontalScroll/mascot.gif"
                      alt="Floating mascot"
                      width={256}
                      height={256}
                      className="w-36 md:w-48 lg:w-64 h-auto opacity-90"
                    />
                  </div>
                </>
              )}
              
              {/* Floating decorative images - only on second slide */}
              {index === 1 && (
                <>
                  <div className="absolute top-16 left-12 md:left-24 z-10 animate-float-medium">
                    <Image
                      src="/assets/horizontalScroll/Title-Gold.svg"
                      alt="Title Gold"
                      width={288}
                      height={100}
                      className="w-40 md:w-56 lg:w-72 h-auto opacity-90"
                    />
                  </div>
                  
                  <div className="absolute top-1/3 right-12 md:right-24 z-10 animate-float-slow">
                    <Image
                      src="/assets/horizontalScroll/Mascot.svg"
                      alt="Mascot"
                      width={224}
                      height={224}
                      className="w-32 md:w-44 lg:w-56 h-auto opacity-90"
                    />
                  </div>
                  
                  <div className="absolute bottom-24 left-20 md:left-36 z-10 animate-float-fast">
                    <Image
                      src="/assets/horizontalScroll/hero-ecsw.svg"
                      alt="Hero ECSW"
                      width={320}
                      height={120}
                      className="w-48 md:w-64 lg:w-80 h-auto opacity-90"
                    />
                  </div>
                </>
              )}
              
              {/* Floating decorative images - only on third slide */}
              {index === 2 && (
                <>
                  <div className="absolute top-16 left-12 md:left-24 z-10 animate-float-slow">
                    <Image
                      src="/assets/horizontalScroll/Rocket.webp"
                      alt="Rocket"
                      width={80}
                      height={80}
                      className="w-12 md:w-16 lg:w-20 h-auto opacity-90"
                    />
                  </div>
                  
                  <div className="absolute top-1/3 right-12 md:right-24 z-10 animate-float-medium">
                    <Image
                      src="/assets/horizontalScroll/Pluwuto.png"
                      alt="Pluwuto"
                      width={224}
                      height={224}
                      className="w-32 md:w-44 lg:w-56 h-auto opacity-90"
                    />
                  </div>
                  
                  <div className="absolute bottom-24 left-16 md:left-32 z-10 animate-float-fast">
                    <Image
                      src="/assets/horizontalScroll/hackutdix-nosponsortitle.png"
                      alt="HackUTD IX No Sponsor Title"
                      width={288}
                      height={100}
                      className="w-40 md:w-56 lg:w-72 h-auto opacity-90"
                    />
                  </div>
                </>
              )}
              
              {/* Floating decorative images - only on fourth slide */}
              {index === 3 && (
                <>
                  <div className="absolute top-16 left-12 md:left-24 z-10 animate-float-medium">
                    <Image
                      src="/assets/horizontalScroll/WhiteAstro.svg"
                      alt="White Astro"
                      width={224}
                      height={224}
                      className="w-32 md:w-40 lg:w-48 h-auto opacity-90"
                    />
                  </div>
                  
                  <div className="absolute top-1/3 right-12 md:right-24 z-10 animate-float-slow">
                    <Image
                      src="/assets/horizontalScroll/Coaster Design.png"
                      alt="Coaster Design"
                      width={200}
                      height={200}
                      className="w-28 md:w-36 lg:w-44 h-auto opacity-90"
                    />
                  </div>
                  
                  <div className="absolute bottom-24 left-16 md:left-32 z-10 animate-float-fast">
                    <Image
                      src="/assets/horizontalScroll/T Shirt.png"
                      alt="T Shirt"
                      width={280}
                      height={280}
                      className="w-36 md:w-48 lg:w-60 h-auto opacity-90"
                    />
                  </div>
                </>
              )}
              
              {/* Floating decorative images - only on fifth slide */}
              {index === 4 && (
                <>
                  <div className="absolute top-16 left-12 md:left-24 z-10 animate-float-slow">
                    <Image
                      src="/assets/horizontalScroll/Bobo.svg"
                      alt="Bobo"
                      width={200}
                      height={200}
                      className="w-28 md:w-36 lg:w-44 h-auto opacity-90"
                    />
                  </div>
                  
                  <div className="absolute top-1/3 right-12 md:right-24 z-10 animate-float-medium">
                    <Image
                      src="/assets/horizontalScroll/ship.svg"
                      alt="Ship"
                      width={360}
                      height={180}
                      className="w-48 md:w-60 lg:w-72 h-auto opacity-90"
                    />
                  </div>
                  
                  <div className="absolute bottom-24 left-16 md:left-32 z-10 animate-float-fast">
                    <Image
                      src="/assets/horizontalScroll/submarine.svg"
                      alt="Submarine"
                      width={330}
                      height={165}
                      className="w-44 md:w-56 lg:w-68 h-auto opacity-90"
                    />
                  </div>
                </>
              )}
              
              <div className="flex flex-col items-center relative z-10">
                <Link href={hackathon.href} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={hackathon.src}
                    alt={hackathon.alt}
                    priority={index === 0}
                    className="w-48 md:w-64 lg:w-[18rem] h-auto transition-transform duration-300 hover:scale-110 hover:drop-shadow-xl cursor-pointer"
                    onLoadingComplete={() => {
                      try { ScrollTrigger.refresh(); } catch {}
                    }}
                  />
                </Link>
                <p className="mt-4 md:mt-6 text-base md:text-lg text-white font-semibold drop-shadow-lg">{hackathon.label}</p>
              </div>
            </article>
          ))}

          <article 
            className="min-w-[100vw] h-full grid place-items-center px-8 relative overflow-hidden"
            style={{
              backgroundImage: 'url(/hackutd-collage-photo.jpg)', 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            
            <div className="absolute inset-0 bg-black/60 z-0"></div>
            
            <div className="w-full max-w-7xl mx-auto relative z-10 px-4">
              <h4 className="text-center text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-white drop-shadow-lg">All HackUTD Badges</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 place-items-center">
                {hackathons.map((hackathon, i) => (
                  <div key={`all-${i}`} className="text-center">
                    <Link href={hackathon.href} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={hackathon.src}
                        alt={hackathon.alt}
                        className="w-20 md:w-28 h-auto transition-transform duration-300 hover:scale-110 hover:drop-shadow-xl cursor-pointer"
                      />
                    </Link>
                    <p className="mt-2 md:mt-3 text-xs md:text-sm text-white font-medium drop-shadow-md">{hackathon.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Mobile: simple list (no GSAP) */}
      <div className="lg:hidden w-full max-w-7xl mx-auto px-4 md:px-8 py-4 mb-28">
        <h4 className="text-center text-xl md:text-2xl font-semibold mb-6 md:mb-8">All HackUTD Badges</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 place-items-center">
          {hackathons.map((hackathon, index) => (
            <div key={index} className="font-DM-Sans text-center items-center flex flex-col">
              <Link href={hackathon.href} target="_blank" rel="noopener noreferrer">
                <Image
                  src={hackathon.src}
                  alt={hackathon.alt}
                  className="w-20 md:w-28 h-auto transition-transform duration-300 hover:scale-110 hover:drop-shadow-xl cursor-pointer"
                />
              </Link>
              <p className="mt-3 md:mt-4 text-xs md:text-sm">{hackathon.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
