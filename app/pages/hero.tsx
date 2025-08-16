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

      <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20 flex items-center gap-2 md:gap-4">
        <a 
          href="https://www.tiktok.com/@hackutd" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-pink-400 transition-colors duration-300"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
          </svg>
        </a>
        <a 
          href="https://www.instagram.com/hackutd" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-pink-400 transition-colors duration-300"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        <a 
          href="https://www.linkedin.com/company/hackutd" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-colors duration-300"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      </div>

      <div className="z-10 relative flex flex-col md:flex-row items-center justify-center h-full px-4 md:px-8">
        <div ref={logoRef} className="p-2 mb-4 md:mb-0">
          <Image src="HackUTD Fire Logo.svg" alt="logo" width={130} height={130} className="w-20 h-20 md:w-32 md:h-32" />
        </div>
        <div className="z-10 relative flex flex-col items-center md:items-start justify-center text-center md:text-left">

          <div ref={titleRef} className="mt-2">
            <img src="/Title.svg" alt="HackUTD" className="w-auto h-16 sm:h-20 md:h-24 lg:h-32" />
          </div>
        </div>
      </div>

        <div 
          ref={skylineRef}
          className="absolute bottom-0 left-0 right-0 z-50 opacity-0 translate-y-8"
        >
          <img src="/Skyline.svg" alt="Skyline" className="w-full h-auto" />
        </div>
    </section>
  );
}