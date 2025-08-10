"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import StarryBackground from "../components/StarryBackground";
import Navbar from "../components/Navbar";
import { initHeroAnimations } from "../animations/heroAnimations";

export default function Hero() {
  const [skylineVisible, setSkylineVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const skylineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initHeroAnimations(logoRef, titleRef, skylineRef, setSkylineVisible);
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen bg-gradient-to-b from-[#0f0029] via-[#1f0140] to-[#fd9453] text-white overflow-hidden">
      <StarryBackground />

      <Navbar />

      <div className="z-10 relative flex flex-row items-center justify-center h-full">
        <div ref={logoRef} className="p-2">
          <Image src="HackUTD Fire Logo.svg" alt="logo" width={130} height={130} />
        </div>
        <div className="z-10 relative flex flex-col items-start justify-center h-full px-4">
          <div className="flex items-center gap-4">
          </div>
          <div ref={titleRef} className="mt-2">
            <img src="/Title.svg" alt="HackUTD" className="w-auto h-24 sm:h-32" />
          </div>
        </div>
      </div>

      <div 
        ref={skylineRef}
        className="absolute bottom-0 left-0 right-0 z-5 opacity-0 translate-y-8"
      >
        <img src="/Skyline.svg" alt="Skyline" className="w-full h-auto" />
      </div>
    </section>
  );
}
