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
    <div className="bg-black">
      <div className="pt-12 md:pt-16 pb-8 md:pb-12 bg-black">
      <h1
        className="font-inter text-3xl md:text-5xl lg:text-[67px] text-center font-bold bg-clip-text text-transparent px-4"
        style={{ backgroundImage: 'linear-gradient(to bottom right, #FF56D6 0%, #FF7AA2 35%, #FF9167 70%)' }}
      >
        Oh how far we&apos;ve come...
      </h1>
        <h3 className="text-center mb-4 text-sm md:text-base px-4 hidden md:block text-white/80">Scroll to see our past hackathons!</h3>
        <h3 className="text-center mb-4 text-sm md:text-base px-4 block md:hidden text-white/80">See our past hackathons!</h3>
      </div>

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
              
             
              {index === 0 && (
                <>
                  <div className="absolute top-[10%] left-[8%] z-10">
                    <div className="animate-float-slow">
                      <Image
                        src="/assets/horizontalScroll/duck.png"
                        alt="Floating duck"
                        width={224}
                        height={224}
                        className="w-32 md:w-40 lg:w-56 h-auto opacity-90"
                      />
                    </div>
                  </div>
                  
                  <div className="absolute top-[15%] right-[12%] z-10">
                    <div className="animate-float-medium">
                      <Image
                        src="/assets/horizontalScroll/frog.png"
                        alt="Floating frog"
                        width={224}
                        height={224}
                        className="w-32 md:w-40 lg:w-56 h-auto opacity-90"
                      />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-[20%] left-[15%] z-10">
                    <div className="animate-float-fast">
                      <Image
                        src="/assets/horizontalScroll/mascot.gif"
                        alt="Floating mascot"
                        width={256}
                        height={256}
                        className="w-36 md:w-48 lg:w-64 h-auto opacity-90"
                      />
                    </div>
                  </div>
                  
                  <div className="absolute top-[8%] left-[5%] opacity-60" style={{ zIndex: 0 }}>
                    <Image
                      src="/assets/horizontalScroll/eventPhotos/P1099017.jpg"
                      alt="Event photo"
                      width={400}
                      height={300}
                      className="w-32 md:w-48 lg:w-64 h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                  
                  <div className="absolute top-[25%] right-[8%] opacity-55" style={{ zIndex: 0 }}>
                    <Image
                      src="/assets/horizontalScroll/eventPhotos/SMJ01071.jpg"
                      alt="Event photo"
                      width={400}
                      height={300}
                      className="w-28 md:w-40 lg:w-52 h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                  
                  <div className="absolute top-[35%] left-[45%] opacity-50" style={{ zIndex: 0 }}>
                    <Image
                      src="/assets/horizontalScroll/eventPhotos/P1099392.jpg"
                      alt="Event photo"
                      width={400}
                      height={300}
                      className="w-24 md:w-36 lg:w-48 h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                  
                  <div className="absolute top-[55%] right-[35%] opacity-65" style={{ zIndex: 0 }}>
                    <Image
                      src="/assets/horizontalScroll/eventPhotos/SMJ01448.jpg"
                      alt="Event photo"
                      width={400}
                      height={300}
                      className="w-20 md:w-32 lg:w-44 h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                  
                  <div className="absolute bottom-[18%] left-[8%] opacity-55" style={{ zIndex: 0 }}>
                    <Image
                      src="/assets/horizontalScroll/eventPhotos/SK-DSC01976.jpg"
                      alt="Event photo"
                      width={400}
                      height={300}
                      className="w-28 md:w-40 lg:w-52 h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                  
                  <div className="absolute bottom-[25%] right-[6%] opacity-60" style={{ zIndex: 0 }}>
                    <Image
                      src="/assets/horizontalScroll/eventPhotos/P1099516.jpg"
                      alt="Event photo"
                      width={400}
                      height={300}
                      className="w-20 md:w-32 lg:w-44 h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                  
                  <div className="absolute top-[60%] left-[25%] opacity-50" style={{ zIndex: 0 }}>
                    <Image
                      src="/assets/horizontalScroll/eventPhotos/SMJ01583.jpg"
                      alt="Event photo"
                      width={400}
                      height={300}
                      className="w-22 md:w-32 lg:w-40 h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                </>
              )}
              
             
              {index === 1 && (
                <>
                  
                  <div className="absolute top-[12%] left-[10%] z-10">
                    <div className="animate-float-medium">
                      <Image
                        src="/assets/horizontalScroll/Title-Gold.svg"
                        alt="Title Gold"
                        width={288}
                        height={100}
                        className="w-40 md:w-56 lg:w-72 h-auto opacity-90"
                      />
                    </div>
                  </div>
                  
                  <div className="absolute top-[20%] right-[15%] z-10">
                    <div className="animate-float-slow">
                      <Image
                        src="/assets/horizontalScroll/Mascot.svg"
                        alt="Mascot"
                        width={224}
                        height={224}
                        className="w-32 md:w-44 lg:w-56 h-auto opacity-90"
                      />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-[22%] left-[12%] z-10">
                    <div className="animate-float-fast">
                      <Image
                        src="/assets/horizontalScroll/hero-ecsw.svg"
                        alt="Hero ECSW"
                        width={320}
                        height={120}
                        className="w-48 md:w-64 lg:w-80 h-auto opacity-90"
                      />
                    </div>
                  </div>
                  
                  
                  <div className="absolute top-[10%] left-[6%] opacity-60" style={{ zIndex: 0 }}>
                    <Image
                      src="/assets/horizontalScroll/eventPhotos/SK-DSC01986.jpg"
                      alt="Event photo"
                      width={400}
                      height={300}
                      className="w-32 md:w-48 lg:w-64 h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                  
                  <div className="absolute top-[28%] right-[7%] opacity-55" style={{ zIndex: 0 }}>
                    <Image
                      src="/assets/horizontalScroll/eventPhotos/P1099193.jpg"
                      alt="Event photo"
                      width={400}
                      height={300}
                      className="w-28 md:w-40 lg:w-52 h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                  
                  <div className="absolute top-[40%] left-[42%] opacity-50" style={{ zIndex: 0 }}>
                    <Image
                      src="/assets/horizontalScroll/eventPhotos/P1099017.jpg"
                      alt="Event photo"
                      width={400}
                      height={300}
                      className="w-24 md:w-36 lg:w-48 h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                  
                  <div className="absolute top-[58%] right-[30%] opacity-65" style={{ zIndex: 0 }}>
                    <Image
                      src="/assets/horizontalScroll/eventPhotos/SMJ01448.jpg"
                      alt="Event photo"
                      width={400}
                      height={300}
                      className="w-20 md:w-32 lg:w-44 h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                  
                  <div className="absolute bottom-[20%] left-[9%] opacity-55" style={{ zIndex: 0 }}>
                    <Image
                      src="/assets/horizontalScroll/eventPhotos/P1099392.jpg"
                      alt="Event photo"
                      width={400}
                      height={300}
                      className="w-28 md:w-40 lg:w-52 h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                  
                  <div className="absolute bottom-[28%] right-[5%] opacity-60" style={{ zIndex: 0 }}>
                    <Image
                      src="/assets/horizontalScroll/eventPhotos/P1099516.jpg"
                      alt="Event photo"
                      width={400}
                      height={300}
                      className="w-24 md:w-36 lg:w-48 h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                  
                  <div className="absolute top-[65%] left-[28%] opacity-50" style={{ zIndex: 0 }}>
                    <Image
                      src="/assets/horizontalScroll/eventPhotos/SMJ01583.jpg"
                      alt="Event photo"
                      width={400}
                      height={300}
                      className="w-22 md:w-32 lg:w-40 h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                </>
              )}
              
             
              {index === 2 && (
                <>
                  
                  <div className="absolute top-[8%] left-[12%] z-10">
                    <div className="animate-float-slow">
                      <Image
                        src="/assets/horizontalScroll/Rocket.webp"
                        alt="Rocket"
                        width={80}
                        height={80}
                        className="w-12 md:w-16 lg:w-20 h-auto opacity-90"
                      />
                    </div>
                  </div>
                  
                  <div className="absolute top-[18%] right-[10%] z-10">
                    <div className="animate-float-medium">
                      <Image
                        src="/assets/horizontalScroll/Pluwuto.png"
                        alt="Pluwuto"
                        width={224}
                        height={224}
                        className="w-32 md:w-44 lg:w-56 h-auto opacity-90"
                      />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-[18%] left-[18%] z-10">
                    <div className="animate-float-fast">
                      <Image
                        src="/assets/horizontalScroll/hackutdix-nosponsortitle.png"
                        alt="HackUTD IX No Sponsor Title"
                        width={288}
                        height={100}
                        className="w-40 md:w-56 lg:w-72 h-auto opacity-90"
                      />
                    </div>
                  </div>
                  
                  
                  <div className="absolute top-[12%] left-[5%] opacity-60" style={{ zIndex: 0 }}>
                    <Image
                      src="/assets/horizontalScroll/eventPhotos/SMJ01202.jpg"
                      alt="Event photo"
                      width={400}
                      height={300}
                      className="w-32 md:w-48 lg:w-64 h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                  
                  <div className="absolute top-[30%] right-[6%] opacity-55" style={{ zIndex: 0 }}>
                    <Image
                      src="/assets/horizontalScroll/eventPhotos/P1099017.jpg"
                      alt="Event photo"
                      width={400}
                      height={300}
                      className="w-28 md:w-40 lg:w-52 h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                  
                  <div className="absolute top-[45%] left-[38%] opacity-50" style={{ zIndex: 0 }}>
                    <Image
                      src="/assets/horizontalScroll/eventPhotos/P1099392.jpg"
                      alt="Event photo"
                      width={400}
                      height={300}
                      className="w-24 md:w-36 lg:w-48 h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                  
                  <div className="absolute top-[62%] right-[28%] opacity-65" style={{ zIndex: 0 }}>
                    <Image
                      src="/assets/horizontalScroll/eventPhotos/SMJ01448.jpg"
                      alt="Event photo"
                      width={400}
                      height={300}
                      className="w-20 md:w-32 lg:w-44 h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                  
                  <div className="absolute bottom-[22%] left-[7%] opacity-55" style={{ zIndex: 0 }}>
                    <Image
                      src="/assets/horizontalScroll/eventPhotos/SK-DSC01976.jpg"
                      alt="Event photo"
                      width={400}
                      height={300}
                      className="w-28 md:w-40 lg:w-52 h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                  
                  <div className="absolute bottom-[30%] right-[4%] opacity-60" style={{ zIndex: 0 }}>
                    <Image
                      src="/assets/horizontalScroll/eventPhotos/P1099516.jpg"
                      alt="Event photo"
                      width={400}
                      height={300}
                      className="w-24 md:w-36 lg:w-48 h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                  
                  <div className="absolute top-[70%] left-[22%] opacity-50" style={{ zIndex: 0 }}>
                    <Image
                      src="/assets/horizontalScroll/eventPhotos/SMJ01583.jpg"
                      alt="Event photo"
                      width={400}
                      height={300}
                      className="w-22 md:w-32 lg:w-40 h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                </>
              )}
              
              {index === 3 && (
                <>
                  <div className="absolute top-[14%] left-[9%] z-10">
                    <div className="animate-float-medium">
                      <Image
                        src="/assets/horizontalScroll/WhiteAstro.svg"
                        alt="White Astro"
                        width={224}
                        height={224}
                        className="w-32 md:w-40 lg:w-48 h-auto opacity-90"
                      />
                    </div>
                  </div>
                  
                  <div className="absolute top-[22%] right-[11%] z-10">
                    <div className="animate-float-slow">
                      <Image
                        src="/assets/horizontalScroll/Coaster Design.png"
                        alt="Coaster Design"
                        width={200}
                        height={200}
                        className="w-28 md:w-36 lg:w-44 h-auto opacity-90"
                      />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-[24%] left-[14%] z-10">
                    <div className="animate-float-fast">
                      <Image
                        src="/assets/horizontalScroll/T Shirt.png"
                        alt="T Shirt"
                        width={280}
                        height={280}
                        className="w-36 md:w-48 lg:w-60 h-auto opacity-90"
                      />
                    </div>
                  </div>
            
                  <div className="absolute top-[9%] left-[4%] opacity-60" style={{ zIndex: 0 }}>
                    <Image
                      src="/assets/horizontalScroll/eventPhotos/SK-DSC01976.jpg"
                      alt="Event photo"
                      width={400}
                      height={300}
                      className="w-32 md:w-48 lg:w-64 h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                  
                  <div className="absolute top-[32%] right-[5%] opacity-55" style={{ zIndex: 0 }}>
                    <Image
                      src="/assets/horizontalScroll/eventPhotos/P1099017.jpg"
                      alt="Event photo"
                      width={400}
                      height={300}
                      className="w-28 md:w-40 lg:w-52 h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                  
                  <div className="absolute top-[48%] left-[40%] opacity-50" style={{ zIndex: 0 }}>
                    <Image
                      src="/assets/horizontalScroll/eventPhotos/P1099392.jpg"
                      alt="Event photo"
                      width={400}
                      height={300}
                      className="w-24 md:w-36 lg:w-48 h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                  
                  <div className="absolute top-[65%] right-[32%] opacity-65" style={{ zIndex: 0 }}>
                    <Image
                      src="/assets/horizontalScroll/eventPhotos/SMJ01448.jpg"
                      alt="Event photo"
                      width={400}
                      height={300}
                      className="w-20 md:w-32 lg:w-44 h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                  
                  <div className="absolute bottom-[19%] left-[6%] opacity-55" style={{ zIndex: 0 }}>
                    <Image
                      src="/assets/horizontalScroll/eventPhotos/SK-DSC01986.jpg"
                      alt="Event photo"
                      width={400}
                      height={300}
                      className="w-28 md:w-40 lg:w-52 h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                  
                  <div className="absolute bottom-[32%] right-[3%] opacity-60" style={{ zIndex: 0 }}>
                    <Image
                      src="/assets/horizontalScroll/eventPhotos/P1099516.jpg"
                      alt="Event photo"
                      width={400}
                      height={300}
                      className="w-24 md:w-36 lg:w-48 h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                  
                  <div className="absolute top-[72%] left-[26%] opacity-50" style={{ zIndex: 0 }}>
                    <Image
                      src="/assets/horizontalScroll/eventPhotos/SMJ01583.jpg"
                      alt="Event photo"
                      width={400}
                      height={300}
                      className="w-22 md:w-32 lg:w-40 h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                </>
              )}
              
              {index === 4 && (
                <>
                  
                  <div className="absolute top-[11%] left-[11%] z-10">
                    <div className="animate-float-slow">
                      <Image
                        src="/assets/horizontalScroll/Bobo.svg"
                        alt="Bobo"
                        width={200}
                        height={200}
                        className="w-28 md:w-36 lg:w-44 h-auto opacity-90"
                      />
                    </div>
                  </div>
                  
                  <div className="absolute top-[19%] right-[13%] z-10">
                    <div className="animate-float-medium">
                      <Image
                        src="/assets/horizontalScroll/ship.svg"
                        alt="Ship"
                        width={360}
                        height={180}
                        className="w-48 md:w-60 lg:w-72 h-auto opacity-90"
                      />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-[21%] left-[16%] z-10">
                    <div className="animate-float-fast">
                      <Image
                        src="/assets/horizontalScroll/submarine.svg"
                        alt="Submarine"
                        width={330}
                        height={165}
                        className="w-44 md:w-56 lg:w-68 h-auto opacity-90"
                      />
                    </div>
                  </div>
                
                  <div className="absolute top-[7%] left-[3%] opacity-60" style={{ zIndex: 0 }}>
                    <Image
                      src="/assets/horizontalScroll/eventPhotos/SMJ01071.jpg"
                      alt="Event photo"
                      width={400}
                      height={300}
                      className="w-32 md:w-48 lg:w-64 h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                  
                  <div className="absolute top-[26%] right-[4%] opacity-55" style={{ zIndex: 0 }}>
                    <Image
                      src="/assets/horizontalScroll/eventPhotos/P1099017.jpg"
                      alt="Event photo"
                      width={400}
                      height={300}
                      className="w-28 md:w-40 lg:w-52 h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                  
                  <div className="absolute top-[43%] left-[44%] opacity-50" style={{ zIndex: 0 }}>
                    <Image
                      src="/assets/horizontalScroll/eventPhotos/P1099392.jpg"
                      alt="Event photo"
                      width={400}
                      height={300}
                      className="w-24 md:w-36 lg:w-48 h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                  
                  <div className="absolute top-[60%] right-[34%] opacity-65" style={{ zIndex: 0 }}>
                    <Image
                      src="/assets/horizontalScroll/eventPhotos/SMJ01448.jpg"
                      alt="Event photo"
                      width={400}
                      height={300}
                      className="w-20 md:w-32 lg:w-44 h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                  
                  <div className="absolute bottom-[17%] left-[5%] opacity-55" style={{ zIndex: 0 }}>
                    <Image
                      src="/assets/horizontalScroll/eventPhotos/SK-DSC01986.jpg"
                      alt="Event photo"
                      width={400}
                      height={300}
                      className="w-28 md:w-40 lg:w-52 h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                  
                  <div className="absolute bottom-[34%] right-[2%] opacity-60" style={{ zIndex: 0 }}>
                    <Image
                      src="/assets/horizontalScroll/eventPhotos/P1099516.jpg"
                      alt="Event photo"
                      width={400}
                      height={300}
                      className="w-24 md:w-36 lg:w-48 h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                  
                  <div className="absolute top-[68%] left-[24%] opacity-50" style={{ zIndex: 0 }}>
                    <Image
                      src="/assets/horizontalScroll/eventPhotos/SMJ01583.jpg"
                      alt="Event photo"
                      width={400}
                      height={300}
                      className="w-22 md:w-32 lg:w-40 h-auto rounded-lg shadow-2xl"
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
          >
            <div className="w-full max-w-7xl mx-auto relative z-10 px-4 py-12 md:py-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">

                <div className="text-center">
                  <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3 bg-gradient-to-r from-[#FF56D6] to-[#FF9167] bg-clip-text text-transparent">
                    10,000+
                  </div>
                  <div className="text-xl md:text-2xl text-white font-medium">Total Hackers</div>
                  <div className="text-sm md:text-base text-white/60 mt-2">Hosted across 5 years</div>
                </div>
                

                <div className="text-center">
                  <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3 bg-gradient-to-r from-[#FF56D6] to-[#FF9167] bg-clip-text text-transparent">
                    $500K+
                  </div>
                  <div className="text-xl md:text-2xl text-white font-medium">In Prizes</div>
                  <div className="text-sm md:text-base text-white/60 mt-2">Awarded to winners</div>
                </div>
                
     
                <div className="text-center">
                  <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3 bg-gradient-to-r from-[#FF56D6] to-[#FF9167] bg-clip-text text-transparent">
                    5
                  </div>
                  <div className="text-xl md:text-2xl text-white font-medium">Past 5 Years</div>
                  <div className="text-sm md:text-base text-white/60 mt-2">2020 - 2024</div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <div className="lg:hidden w-full bg-black">
        {hackathons.map((hackathon, index) => (
          <div
            key={index}
            className="min-h-[70vh] flex items-center justify-center relative overflow-hidden py-12"
            style={{
              backgroundImage: `url(${hackathon.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 bg-black/50 z-0"></div>
            
            {index === 0 && (
              <>
               
                <div className="absolute top-[10%] left-[8%] z-10">
                  <div className="animate-float-slow">
                    <Image
                      src="/assets/horizontalScroll/duck.png"
                      alt="Floating duck"
                      width={224}
                      height={224}
                      className="w-32 md:w-40 h-auto opacity-90"
                    />
                  </div>
                </div>
                
                <div className="absolute top-[15%] right-[12%] z-10">
                  <div className="animate-float-medium">
                      <Image
                      src="/assets/horizontalScroll/frog.png"
                      alt="Floating frog"
                      width={224}
                      height={224}
                      className="w-32 md:w-40 h-auto opacity-90"
                    />
                  </div>
              </div>
                
                <div className="absolute bottom-[20%] left-[15%] z-10">
                  <div className="animate-float-fast">
                    <Image
                      src="/assets/horizontalScroll/mascot.gif"
                      alt="Floating mascot"
                      width={256}
                      height={256}
                      className="w-36 md:w-44 h-auto opacity-90"
                    />
            </div>
        </div>
                
                <div className="absolute top-[8%] left-[5%] opacity-60" style={{ zIndex: 0 }}>
                  <Image
                    src="/assets/horizontalScroll/eventPhotos/P1099017.jpg"
                    alt="Event photo"
                    width={400}
                    height={300}
                    className="w-24 md:w-32 h-auto rounded-lg shadow-2xl"
                  />
                </div>
                
                <div className="absolute top-[25%] right-[8%] opacity-55" style={{ zIndex: 0 }}>
                  <Image
                    src="/assets/horizontalScroll/eventPhotos/SMJ01071.jpg"
                    alt="Event photo"
                    width={400}
                    height={300}
                    className="w-20 md:w-28 h-auto rounded-lg shadow-2xl"
                  />
                </div>
                
                <div className="absolute top-[35%] left-[45%] opacity-50" style={{ zIndex: 0 }}>
                  <Image
                    src="/assets/horizontalScroll/eventPhotos/P1099392.jpg"
                    alt="Event photo"
                    width={400}
                    height={300}
                    className="w-16 md:w-24 h-auto rounded-lg shadow-2xl"
                  />
                </div>
                
                <div className="absolute top-[55%] right-[35%] opacity-65" style={{ zIndex: 0 }}>
                  <Image
                    src="/assets/horizontalScroll/eventPhotos/SMJ01448.jpg"
                    alt="Event photo"
                    width={400}
                    height={300}
                    className="w-16 md:w-20 h-auto rounded-lg shadow-2xl"
                  />
                </div>
                
                <div className="absolute bottom-[18%] left-[8%] opacity-55" style={{ zIndex: 0 }}>
                  <Image
                    src="/assets/horizontalScroll/eventPhotos/SK-DSC01976.jpg"
                    alt="Event photo"
                    width={400}
                    height={300}
                    className="w-20 md:w-28 h-auto rounded-lg shadow-2xl"
                  />
                </div>
                
                <div className="absolute bottom-[25%] right-[6%] opacity-60" style={{ zIndex: 0 }}>
                  <Image
                    src="/assets/horizontalScroll/eventPhotos/P1099516.jpg"
                    alt="Event photo"
                    width={400}
                    height={300}
                    className="w-18 md:w-24 h-auto rounded-lg shadow-2xl"
                  />
                </div>
                
                <div className="absolute top-[60%] left-[25%] opacity-50" style={{ zIndex: 0 }}>
                  <Image
                    src="/assets/horizontalScroll/eventPhotos/SMJ01583.jpg"
                    alt="Event photo"
                    width={400}
                    height={300}
                    className="w-18 md:w-24 h-auto rounded-lg shadow-2xl"
                  />
                </div>
              </>
            )}
            
            {index === 1 && (
              <>
                <div className="absolute top-4 left-4 z-10">
                  <div className="animate-float-medium">
                    <Image
                      src="/assets/horizontalScroll/Title-Gold.svg"
                      alt="Title Gold"
                      width={288}
                      height={100}
                      className="w-40 md:w-48 h-auto opacity-90"
                    />
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 z-10">
                  <div className="animate-float-slow">
                    <Image
                      src="/assets/horizontalScroll/Mascot.svg"
                      alt="Mascot"
                      width={224}
                      height={224}
                      className="w-32 md:w-40 h-auto opacity-90"
                    />
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 z-10">
                  <div className="animate-float-fast">
                    <Image
                      src="/assets/horizontalScroll/hero-ecsw.svg"
                      alt="Hero ECSW"
                      width={320}
                      height={120}
                      className="w-44 md:w-56 h-auto opacity-90"
                    />
                  </div>
                </div>
                
                <div className="absolute top-[15%] left-[2%] opacity-60" style={{ zIndex: 0 }}>
                  <Image
                    src="/assets/horizontalScroll/eventPhotos/SK-DSC01986.jpg"
                    alt="Event photo"
                    width={400}
                    height={300}
                    className="w-24 md:w-32 h-auto rounded-lg shadow-2xl"
                  />
                </div>
                
                <div className="absolute top-[12%] right-[2%] opacity-55" style={{ zIndex: 0 }}>
                  <Image
                    src="/assets/horizontalScroll/eventPhotos/P1099193.jpg"
                    alt="Event photo"
                    width={400}
                    height={300}
                    className="w-20 md:w-28 h-auto rounded-lg shadow-2xl"
                  />
                </div>
                
                <div className="absolute top-[50%] left-[1%] opacity-50" style={{ zIndex: 0 }}>
                  <Image
                    src="/assets/horizontalScroll/eventPhotos/P1099017.jpg"
                    alt="Event photo"
                    width={400}
                    height={300}
                    className="w-16 md:w-24 h-auto rounded-lg shadow-2xl"
                  />
                </div>
                
                <div className="absolute top-[45%] right-[1%] opacity-65" style={{ zIndex: 0 }}>
                  <Image
                    src="/assets/horizontalScroll/eventPhotos/SMJ01448.jpg"
                    alt="Event photo"
                    width={400}
                    height={300}
                    className="w-16 md:w-20 h-auto rounded-lg shadow-2xl"
                  />
                </div>
                
                <div className="absolute bottom-[15%] left-[3%] opacity-55" style={{ zIndex: 0 }}>
                  <Image
                    src="/assets/horizontalScroll/eventPhotos/P1099392.jpg"
                    alt="Event photo"
                    width={400}
                    height={300}
                    className="w-20 md:w-28 h-auto rounded-lg shadow-2xl"
                  />
                </div>
                
                <div className="absolute bottom-[12%] right-[3%] opacity-60" style={{ zIndex: 0 }}>
                  <Image
                    src="/assets/horizontalScroll/eventPhotos/P1099516.jpg"
                    alt="Event photo"
                    width={400}
                    height={300}
                    className="w-18 md:w-24 h-auto rounded-lg shadow-2xl"
                  />
                </div>
                
                <div className="absolute top-[65%] left-[28%] opacity-50" style={{ zIndex: 0 }}>
                  <Image
                    src="/assets/horizontalScroll/eventPhotos/SMJ01583.jpg"
                    alt="Event photo"
                    width={400}
                    height={300}
                    className="w-18 md:w-24 h-auto rounded-lg shadow-2xl"
                  />
                </div>
              </>
            )}
            
            {index === 2 && (
              <>
                <div className="absolute top-4 left-4 z-10">
                  <div className="animate-float-slow">
                    <Image
                      src="/assets/horizontalScroll/Rocket.webp"
                      alt="Rocket"
                      width={80}
                      height={80}
                      className="w-12 md:w-16 h-auto opacity-90"
                    />
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 z-10">
                  <div className="animate-float-medium">
                    <Image
                      src="/assets/horizontalScroll/Pluwuto.png"
                      alt="Pluwuto"
                      width={224}
                      height={224}
                      className="w-32 md:w-40 h-auto opacity-90"
                    />
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 z-10">
                  <div className="animate-float-fast">
                    <Image
                      src="/assets/horizontalScroll/hackutdix-nosponsortitle.png"
                      alt="HackUTD IX No Sponsor Title"
                      width={288}
                      height={100}
                      className="w-40 md:w-48 h-auto opacity-90"
                    />
                  </div>
                </div>
                
                <div className="absolute top-[15%] left-[2%] opacity-60" style={{ zIndex: 0 }}>
                  <Image
                    src="/assets/horizontalScroll/eventPhotos/SMJ01202.jpg"
                    alt="Event photo"
                    width={400}
                    height={300}
                    className="w-24 md:w-32 h-auto rounded-lg shadow-2xl"
                  />
                </div>
                
                <div className="absolute top-[12%] right-[2%] opacity-55" style={{ zIndex: 0 }}>
                  <Image
                    src="/assets/horizontalScroll/eventPhotos/P1099017.jpg"
                    alt="Event photo"
                    width={400}
                    height={300}
                    className="w-20 md:w-28 h-auto rounded-lg shadow-2xl"
                  />
                </div>
                
                <div className="absolute top-[50%] left-[1%] opacity-50" style={{ zIndex: 0 }}>
                  <Image
                    src="/assets/horizontalScroll/eventPhotos/P1099392.jpg"
                    alt="Event photo"
                    width={400}
                    height={300}
                    className="w-16 md:w-24 h-auto rounded-lg shadow-2xl"
                  />
                </div>
                
                <div className="absolute top-[45%] right-[1%] opacity-65" style={{ zIndex: 0 }}>
                  <Image
                    src="/assets/horizontalScroll/eventPhotos/SMJ01448.jpg"
                    alt="Event photo"
                    width={400}
                    height={300}
                    className="w-16 md:w-20 h-auto rounded-lg shadow-2xl"
                  />
                </div>
                
                <div className="absolute bottom-[15%] left-[3%] opacity-55" style={{ zIndex: 0 }}>
                  <Image
                    src="/assets/horizontalScroll/eventPhotos/SK-DSC01976.jpg"
                    alt="Event photo"
                    width={400}
                    height={300}
                    className="w-20 md:w-28 h-auto rounded-lg shadow-2xl"
                  />
                </div>
                
                <div className="absolute bottom-[12%] right-[3%] opacity-60" style={{ zIndex: 0 }}>
                  <Image
                    src="/assets/horizontalScroll/eventPhotos/P1099516.jpg"
                    alt="Event photo"
                    width={400}
                    height={300}
                    className="w-18 md:w-24 h-auto rounded-lg shadow-2xl"
                  />
                </div>
                
                <div className="absolute top-[70%] left-[22%] opacity-50" style={{ zIndex: 0 }}>
                  <Image
                    src="/assets/horizontalScroll/eventPhotos/SMJ01583.jpg"
                    alt="Event photo"
                    width={400}
                    height={300}
                    className="w-18 md:w-24 h-auto rounded-lg shadow-2xl"
                  />
                </div>
              </>
            )}
            
            {index === 3 && (
              <>
                <div className="absolute top-4 left-4 z-10">
                  <div className="animate-float-medium">
                    <Image
                      src="/assets/horizontalScroll/WhiteAstro.svg"
                      alt="White Astro"
                      width={224}
                      height={224}
                      className="w-32 md:w-40 h-auto opacity-90"
                    />
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 z-10">
                  <div className="animate-float-slow">
                    <Image
                      src="/assets/horizontalScroll/Coaster Design.png"
                      alt="Coaster Design"
                      width={200}
                      height={200}
                      className="w-28 md:w-36 h-auto opacity-90"
                    />
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 z-10">
                  <div className="animate-float-fast">
                    <Image
                      src="/assets/horizontalScroll/T Shirt.png"
                      alt="T Shirt"
                      width={280}
                      height={280}
                      className="w-36 md:w-44 h-auto opacity-90"
                    />
                  </div>
                </div>
                
                <div className="absolute top-[15%] left-[2%] opacity-60" style={{ zIndex: 0 }}>
                  <Image
                    src="/assets/horizontalScroll/eventPhotos/SK-DSC01976.jpg"
                    alt="Event photo"
                    width={400}
                    height={300}
                    className="w-24 md:w-32 h-auto rounded-lg shadow-2xl"
                  />
                </div>
                
                <div className="absolute top-[12%] right-[2%] opacity-55" style={{ zIndex: 0 }}>
                  <Image
                    src="/assets/horizontalScroll/eventPhotos/P1099017.jpg"
                    alt="Event photo"
                    width={400}
                    height={300}
                    className="w-20 md:w-28 h-auto rounded-lg shadow-2xl"
                  />
                </div>
                
                <div className="absolute top-[50%] left-[1%] opacity-50" style={{ zIndex: 0 }}>
                  <Image
                    src="/assets/horizontalScroll/eventPhotos/P1099392.jpg"
                    alt="Event photo"
                    width={400}
                    height={300}
                    className="w-16 md:w-24 h-auto rounded-lg shadow-2xl"
                  />
                </div>
                
                <div className="absolute top-[45%] right-[1%] opacity-65" style={{ zIndex: 0 }}>
                  <Image
                    src="/assets/horizontalScroll/eventPhotos/SMJ01448.jpg"
                    alt="Event photo"
                    width={400}
                    height={300}
                    className="w-16 md:w-20 h-auto rounded-lg shadow-2xl"
                  />
                </div>
                
                <div className="absolute bottom-[15%] left-[3%] opacity-55" style={{ zIndex: 0 }}>
                  <Image
                    src="/assets/horizontalScroll/eventPhotos/SK-DSC01986.jpg"
                    alt="Event photo"
                    width={400}
                    height={300}
                    className="w-20 md:w-28 h-auto rounded-lg shadow-2xl"
                  />
                </div>
                
                <div className="absolute bottom-[12%] right-[3%] opacity-60" style={{ zIndex: 0 }}>
                  <Image
                    src="/assets/horizontalScroll/eventPhotos/P1099516.jpg"
                    alt="Event photo"
                    width={400}
                    height={300}
                    className="w-18 md:w-24 h-auto rounded-lg shadow-2xl"
                  />
                </div>
                
                <div className="absolute top-[72%] left-[26%] opacity-50" style={{ zIndex: 0 }}>
                  <Image
                    src="/assets/horizontalScroll/eventPhotos/SMJ01583.jpg"
                    alt="Event photo"
                    width={400}
                    height={300}
                    className="w-18 md:w-24 h-auto rounded-lg shadow-2xl"
                  />
                </div>
              </>
            )}
            
            {index === 4 && (
              <>
                <div className="absolute top-16 left-4 z-10">
                  <div className="animate-float-slow">
                    <Image
                      src="/assets/horizontalScroll/Bobo.svg"
                      alt="Bobo"
                      width={200}
                      height={200}
                      className="w-28 md:w-36 h-auto opacity-90"
                    />
                  </div>
                </div>
                
                <div className="absolute top-1/3 right-4 z-10">
                  <div className="animate-float-medium">
                      <Image
                      src="/assets/horizontalScroll/ship.svg"
                      alt="Ship"
                      width={360}
                      height={180}
                      className="w-44 md:w-56 h-auto opacity-90"
                    />
                  </div>
                </div>
                
                <div className="absolute bottom-24 left-8 z-10">
                  <div className="animate-float-fast">
                    <Image
                      src="/assets/horizontalScroll/submarine.svg"
                      alt="Submarine"
                      width={330}
                      height={165}
                      className="w-40 md:w-52 h-auto opacity-90"
                    />
              </div>
            </div>
                
                <div className="absolute top-[12%] left-[7%] opacity-60" style={{ zIndex: 0 }}>
                  <Image
                    src="/assets/horizontalScroll/eventPhotos/SMJ01071.jpg"
                    alt="Event photo"
                    width={400}
                    height={300}
                    className="w-24 md:w-32 h-auto rounded-lg shadow-2xl"
                  />
                </div>
                
                <div className="absolute top-[22%] right-[8%] opacity-55" style={{ zIndex: 0 }}>
                  <Image
                    src="/assets/horizontalScroll/eventPhotos/P1099017.jpg"
                    alt="Event photo"
                    width={400}
                    height={300}
                    className="w-20 md:w-28 h-auto rounded-lg shadow-2xl"
                  />
                </div>
                
                <div className="absolute top-[43%] left-[44%] opacity-50" style={{ zIndex: 0 }}>
                  <Image
                    src="/assets/horizontalScroll/eventPhotos/P1099392.jpg"
                    alt="Event photo"
                    width={400}
                    height={300}
                    className="w-16 md:w-24 h-auto rounded-lg shadow-2xl"
                  />
                </div>
                
                <div className="absolute top-[60%] right-[34%] opacity-65" style={{ zIndex: 0 }}>
                  <Image
                    src="/assets/horizontalScroll/eventPhotos/SMJ01448.jpg"
                    alt="Event photo"
                    width={400}
                    height={300}
                    className="w-16 md:w-20 h-auto rounded-lg shadow-2xl"
                  />
                </div>
                
                <div className="absolute bottom-[24%] left-[6%] opacity-50" style={{ zIndex: 0 }}>
                  <Image
                    src="/assets/horizontalScroll/eventPhotos/SK-DSC01986.jpg"
                    alt="Event photo"
                    width={400}
                    height={300}
                    className="w-16 md:w-24 h-auto rounded-lg shadow-2xl"
                  />
                </div>
                
                <div className="absolute bottom-[16%] right-[11%] opacity-65" style={{ zIndex: 0 }}>
                  <Image
                    src="/assets/horizontalScroll/eventPhotos/P1099516.jpg"
                    alt="Event photo"
                    width={400}
                    height={300}
                    className="w-16 md:w-20 h-auto rounded-lg shadow-2xl"
                  />
                </div>
                
                <div className="absolute top-[68%] left-[24%] opacity-50" style={{ zIndex: 0 }}>
                  <Image
                    src="/assets/horizontalScroll/eventPhotos/SMJ01583.jpg"
                    alt="Event photo"
                    width={400}
                    height={300}
                    className="w-18 md:w-24 h-auto rounded-lg shadow-2xl"
                  />
                </div>
              </>
            )}
            
            <div className="flex flex-col items-center relative z-10 px-4 py-8">
              <Link href={hackathon.href} target="_blank" rel="noopener noreferrer">
                <Image
                  src={hackathon.src}
                  alt={hackathon.alt}
                  className="w-36 md:w-48 h-auto transition-transform duration-300 hover:scale-110 hover:drop-shadow-xl cursor-pointer"
                />
              </Link>
              <p className="mt-4 text-base text-white font-semibold drop-shadow-lg">{hackathon.label}</p>
            </div>
            </div>
          ))}
        
        <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-12">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-[#FF56D6] to-[#FF9167] bg-clip-text text-transparent">
                  10,000+
        </div>
                <div className="text-xl md:text-2xl text-white font-medium">Total Hackers</div>
                <div className="text-sm md:text-base text-white/60 mt-2">Hosted across 5 years</div>
      </div>
              
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-[#FF56D6] to-[#FF9167] bg-clip-text text-transparent">
                  $500K+
                </div>
                <div className="text-xl md:text-2xl text-white font-medium">In Prizes</div>
                <div className="text-sm md:text-base text-white/60 mt-2">Awarded to winners</div>
              </div>
              
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-[#FF56D6] to-[#FF9167] bg-clip-text text-transparent">
                  5
                </div>
                <div className="text-xl md:text-2xl text-white font-medium">Past 5 Years</div>
                <div className="text-sm md:text-base text-white/60 mt-2">2020 - 2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
