"use client";

import { useEffect, useRef, useState } from "react";
import { initIntroAnimations, handleTextScramble } from "../animations/introAnimations";

export default function Intro() {
  const sectionRef = useRef<HTMLElement>(null);
  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);
  const titleRefs = useRef<HTMLHeadingElement[]>([]);
  const textRefs = useRef<HTMLParagraphElement[]>([]);
  const imageRefs = useRef<HTMLDivElement[]>([]);
  const magneticRefs = useRef<HTMLDivElement[]>([]);
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const [revealedTexts, setRevealedTexts] = useState<Set<string>>(new Set());

  useEffect(() => {
    initIntroAnimations(
      topRowRef,
      bottomRowRef,
      titleRefs.current.map(() => ({ current: null })),
      textRefs.current.map(() => ({ current: null })),
      imageRefs.current.map(() => ({ current: null })),
      magneticRefs.current.map(() => ({ current: null })),
      revealedTexts,
      setRevealedTexts,
      isHovered,
      setIsHovered
    );
  }, []);

  const addTitleRef = (el: HTMLHeadingElement | null) => {
    if (el && !titleRefs.current.includes(el)) {
      titleRefs.current.push(el);
    }
  };

  const addTextRef = (el: HTMLParagraphElement | null) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  const addImageRef = (el: HTMLDivElement | null) => {
    if (el && !imageRefs.current.includes(el)) {
      imageRefs.current.push(el);
    }
  };

  const addMagneticRef = (el: HTMLDivElement | null) => {
    if (el && !magneticRefs.current.includes(el)) {
      magneticRefs.current.push(el);
    }
  };

  const handleScramble = (elementId: string, actualText: string) => {
    handleTextScramble(elementId, actualText, revealedTexts, setRevealedTexts, isHovered, setIsHovered);
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen p-16 bg-gradient-to-b from-[#0B070C] to-[#211824] text-white overflow-hidden">
      <div ref={topRowRef} className="grid grid-cols-2 gap-16 mb-16">

        <div ref={addMagneticRef} className="text-left order-1 cursor-pointer">
          <h2 
            ref={addTitleRef} 
            id="who-we-are-title"
            className="text-5xl font-bold mb-6"
            onMouseEnter={() => handleScramble('who-we-are-title', 'Who we are')}
            onMouseLeave={() => handleScramble('who-we-are-title', 'Who we are')}
          >
            <span className="bg-gradient-to-r from-[#FF56D6] to-[#FF9167] bg-clip-text text-transparent">
              Who we are
            </span>
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p 
              ref={addTextRef}
              id="who-we-are-text-1"
              onMouseEnter={() => handleScramble('who-we-are-text-1', 'We host HackUTD, Texas\' largest hackathon. We also assist with other hackathons at UTD, and host helpful workshops that anyone can attend. Regardless of what we\'re working on, we aim to make our hackathons accessible and open to everyone. Glad to see you here!')}
              onMouseLeave={() => handleScramble('who-we-are-text-1', 'We host HackUTD, Texas\' largest hackathon. We also assist with other hackathons at UTD, and host helpful workshops that anyone can attend. Regardless of what we\'re working on, we aim to make our hackathons accessible and open to everyone. Glad to see you here!')}
            >
              We host HackUTD, Texas' largest hackathon. We also assist with other 
              hackathons at UTD, and host helpful workshops that anyone can 
              attend. Regardless of what we're working on, we aim to make our 
              hackathons accessible and open to everyone. Glad to see you here!
            </p>
            <p 
              ref={addTextRef}
              id="who-we-are-text-2"
              onMouseEnter={() => handleScramble('who-we-are-text-2', 'We inspire students to innovate and learn new technologies through hackathons, 24-hour events with challenges, free food & merch, and fun games & activities.')}
              onMouseLeave={() => handleScramble('who-we-are-text-2', 'We inspire students to innovate and learn new technologies through hackathons, 24-hour events with challenges, free food & merch, and fun games & activities.')}
            >
              We inspire students to innovate and learn new technologies through 
              hackathons, 24-hour events with challenges, free food & merch, and 
              fun games & activities.
            </p>
          </div>
        </div>

        <div className="flex items-center order-2">
          <div ref={(el) => { addImageRef(el); addMagneticRef(el); }} className="bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg h-[40vh] w-full shadow-2xl cursor-pointer"></div>
        </div>
      </div>

      <div ref={bottomRowRef} className="grid grid-cols-2 gap-16">
        
        <div className="flex items-center order-1">
          <div ref={(el) => { addImageRef(el); addMagneticRef(el); }} className="bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg h-[40vh] w-full shadow-2xl cursor-pointer"></div>
        </div>

        <div ref={addMagneticRef} className="order-2 text-right cursor-pointer">
          <h2 
            ref={addTitleRef} 
            id="our-vision-title"
            className="text-5xl font-bold mb-6"
            onMouseEnter={() => handleScramble('our-vision-title', 'Our Vision')}
            onMouseLeave={() => handleScramble('our-vision-title', 'Our Vision')}
          >
            <span className="bg-gradient-to-r from-[#FF56D6] to-[#FF9167] bg-clip-text text-transparent">
              Our Vision
            </span>
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p 
              ref={addTextRef}
              id="our-vision-text-1"
              onMouseEnter={() => handleScramble('our-vision-text-1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')}
              onMouseLeave={() => handleScramble('our-vision-text-1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
              aliquip ex ea commodo consequat.
            </p> 
            <p 
              ref={addTextRef}
              id="our-vision-text-2"
              onMouseEnter={() => handleScramble('our-vision-text-2', 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')}
              onMouseLeave={() => handleScramble('our-vision-text-2', 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')}
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
