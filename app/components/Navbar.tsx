"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    // Animate navigation bar on mount
    gsap.fromTo(navRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <nav ref={navRef} className="absolute top-0 left-0 z-20 p-6">
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-4">
          <Image 
            src="/HackUTD Fire Logo.svg" 
            alt="HackUTD Logo" 
            width={40} 
            height={40}
            className="drop-shadow-lg"
          />
        </div>
        <div className="flex items-center space-x-8 ml-8">
          <a 
            href="#" 
            className="text-white font-medium relative group transition-colors duration-300 hover:text-white/80 font-inter"
          >
            <span>Link One</span>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </a>
          <a 
            href="#" 
            className="text-white font-medium relative group transition-colors duration-300 hover:text-white/80 font-inter"
          >
            <span>Link Two</span>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </a>
          <a 
            href="#" 
            className="text-white font-medium relative group transition-colors duration-300 hover:text-white/80 font-inter"
          >
            <span>Link Three</span>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </a>
        </div>
      </div>
    </nav>
  );
}
