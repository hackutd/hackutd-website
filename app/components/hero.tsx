"use client";
import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import Stars from "./stars";
import { gsap } from "gsap";

export default function Hero() {
  const comp = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const preTitleRef = useRef<HTMLParagraphElement>(null);
  const subTitleRef = useRef<HTMLParagraphElement>(null);
  const skylineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      const isMobile = window.innerWidth < 768;

      if (!isMobile) {
        // Spin Logo with fade
        tl.to(logoRef.current, { scale: 1, rotation: 360, opacity: 1, duration: 1.2, ease: "back.out(1.7)", delay: 1 });

        // Slide from left, fade in, scale up
        tl.fromTo(titleRef.current,
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=1.2");
        
      } else {
        // Comet flies in
        tl.fromTo(logoRef.current,
          { x: 100, y: -100, opacity: 0, scale: 0.8 },
          { x:0, y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out", delay: 1 },
        );
        tl.fromTo(titleRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=1.0");
      }

      // Slide up and fade in
      tl.to(skylineRef.current, {
        y: 10,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      }, "-=0.8");

      // Pre-title and subtitle fade ins (and slide ups)
      tl.fromTo(preTitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.6");
      tl.fromTo(subTitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.6");

      // Continuous floating effect starting after a delay
      gsap.to(logoRef.current, {
        y: -10,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        delay: 5 
      });
    }, comp); // scope the selector to this component

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <section
      ref={comp}
      className="relative min-h-screen bg-gradient-to-b from-[#050014] via-[#04002A] to-[#050032] text-white overflow-x-hidden overflow-y-visible"
      style={{
        background: ``,
      }}
    >
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[120vw] h-[50vh] z-0">
        <div
          className="absolute inset-0 blur-3xl scale-150 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse 50% 110% at center bottom, rgba(255, 177, 94, 1) 40%, rgba(242, 88, 204, 0.9) 70%, rgba(231, 105, 199, 0.4) 85%, transparent 100%)",
            pointerEvents: "none",
          }}
        />
      </div>
      <Stars speed={1000} />
      <div className="absolute top-1/3 left-0 right-0 transform -translate-y-1/2 z-10">
        <div className="flex flex-col md:flex-row items-center justify-center space-x-4 px-4">
          <Image 
            ref={logoRef}
            src="/logo.svg" 
            alt="HackUTD Logo" 
            width={120} 
            height={120} 
            className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 mb-2 md:mb-0 opacity-0" // initial opacity 0 for animation
          />

          <div ref={titleRef} className="font-['CeraPro'] opacity-0"> {/* initial opacity 0 for animation */}
            <p ref={preTitleRef} className="text-base md:text-md font-medium text-white ml-1">We are</p>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[6rem] font-bold leading-none">
              <span className="text-white">Hack</span>
              <span className="bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
                UTD
              </span>
            </h1>
            <p ref={subTitleRef} className="text-sm sm:text-base md:text-sm font-medium text-white mr-1 text-right">
              North America&apos;s Largest 24-hour Hackathon
            </p>
          </div>
        </div>
      </div>
      <div className="absolute left-0 right-0 z-10" style={{ lineHeight: 0, fontSize: 0, bottom: 0, marginBottom: 0 }}>
        <div className="relative w-full" style={{ lineHeight: 0, fontSize: 0, marginBottom: 0 }}>
          <div 
            ref={skylineRef}
            className="w-full scale-[2.2] md:scale-100 origin-bottom opacity-0 translate-y-10" // initial opacity 0 for animation
            style={{ 
              lineHeight: 0, 
              margin: 0, 
              padding: 0,
              display: 'block',
              transformOrigin: 'bottom center',
              fontSize: 0,
              marginBottom: 0
            }}
          >
            <img
              src="/dallas_skyline.svg"
              alt="Dallas Skyline"
              className="w-full h-auto object-cover block"
              style={{ 
                display: 'block', 
                margin: 0, 
                padding: 0, 
                lineHeight: 0, 
                verticalAlign: 'bottom', 
                fontSize: 0,
                marginBottom: 0
              }}
            />
          </div>
        </div>
        <div className="bg-black h-20 w-full -mt-12 md:-mt-16 relative z-10"></div>
      </div>
    </section>
  );
}