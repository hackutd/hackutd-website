"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
    const titles = titleRefs.current;
    const texts = textRefs.current;
    const images = imageRefs.current;
    const magneticElements = magneticRefs.current;

    console.log('Elements found:', {
      titles: titles.length,
      texts: texts.length,
      images: images.length,
      magneticElements: magneticElements.length
    });

    gsap.set([titles, texts, images], {
      opacity: 0,
      y: 50,
    });

    
    const textElements = document.querySelectorAll('[id*="-text-"], [id*="-title"]');
    textElements.forEach((element) => {
      const actualText = element.textContent || '';
      const randomText = actualText.split('').map(() => '!@#$%^&*()_+-=[]{}|;:,.<>?~`'[Math.floor(Math.random() * 30)]).join('');
      element.textContent = randomText;
    });


    const topRowTl = gsap.timeline({
      scrollTrigger: {
        trigger: topRowRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    topRowTl
      .to(titles[0], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      })
      .to(texts.slice(0, 2), {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
      }, "-=0.4")
      .to(images[0], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.6");

    
    const bottomRowTl = gsap.timeline({
      scrollTrigger: {
        trigger: bottomRowRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    bottomRowTl
      .to(images[1], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      })
      .to(titles[1], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.4")
      .to(texts.slice(2, 4), {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
      }, "-=0.4");



    
    titles.forEach((title) => {
      const chars = title.textContent?.split('') || [];
      title.innerHTML = chars.map(char => 
        char === ' ' ? ' ' : `<span class="char">${char}</span>`
      ).join('');
      
      const charSpans = title.querySelectorAll('.char');
      gsap.set(charSpans, { opacity: 0, y: 20 });
      
      gsap.to(charSpans, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.03,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: title,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });

    
    magneticElements.forEach((element) => {
     
      const hasTextContent = element.textContent && element.textContent.trim().length > 0;
      const isTextContainer = element.classList.contains('text-left') || element.classList.contains('text-right');
      
      if (!hasTextContent && !isTextContainer) {
        return; 
      }
      
      const handleMouseMove = (e: MouseEvent) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        const distance = Math.sqrt(x * x + y * y);
        const maxDistance = Math.sqrt(rect.width * rect.width + rect.height * rect.height) / 2;
        const strength = Math.max(0, 1 - distance / maxDistance);
        
        const moveX = x * strength * 0.3;
        const moveY = y * strength * 0.3;
        
        gsap.to(element, {
          x: moveX,
          y: moveY,
          scale: 1 + strength * 0.05,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(element, {
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)",
        });
      };

      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
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

  // Text scramble effect
  const scrambleText = (randomText: string, actualText: string, element: HTMLElement) => {
    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?~`';
    let iterations = 0;
    
    const interval = setInterval(() => {
      element.textContent = actualText
        .split('')
        .map((char, index) => {
          if (index < iterations) {
            return actualText[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');
      
      if (iterations >= actualText.length) {
        clearInterval(interval);
        element.textContent = actualText;
      }
      
      iterations += 2;
    }, 30);
  };

  const handleScramble = (elementId: string, actualText: string) => {
    const element = document.getElementById(elementId);
    if (element) {
     
      if (revealedTexts.has(elementId)) {
        return;
      }
      
      if (isHovered === elementId) {
        
        setIsHovered(null);
      } else {
        
        scrambleText('', actualText, element);
        setIsHovered(elementId);
        
        
        setTimeout(() => {
          setRevealedTexts(new Set([...revealedTexts, elementId]));
        }, actualText.length * 15); 
      }
    }
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
          <div ref={addImageRef} className="relative rounded-lg h-[40vh] w-full shadow-2xl overflow-hidden">
            <Image
              src="/Team.png"
              alt="HackUTD Team"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div ref={bottomRowRef} className="grid grid-cols-2 gap-16">
        
        <div className="flex items-center order-1">
          <div ref={addImageRef} className="bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg h-[40vh] w-full shadow-2xl"></div>
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
