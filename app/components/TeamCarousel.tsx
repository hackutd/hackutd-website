"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { teamSlides, TeamSlide } from "../data/teamData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TeamCarouselProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

export default function TeamCarousel({ sectionRef }: TeamCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<HTMLDivElement[]>([]);
  const titleRefs = useRef<HTMLHeadingElement[]>([]);
  const textRefs = useRef<HTMLParagraphElement[]>([]);
  const imageRefs = useRef<HTMLDivElement[]>([]);
  const magneticRefs = useRef<HTMLDivElement[]>([]);

  console.log("TeamCarousel rendering, currentSlide:", currentSlide);
  console.log("teamSlides length:", teamSlides.length);

  useEffect(() => {
    const slides = slideRefs.current;
    const titles = titleRefs.current;
    const texts = textRefs.current;
    const images = imageRefs.current;
    const magneticElements = magneticRefs.current;

    gsap.set([titles, texts, images], {
      opacity: 0,
      y: 50,
    });

    const currentSlideElement = slides[currentSlide];
    if (currentSlideElement) {
      const slideTitle = currentSlideElement.querySelector('h2');
      const slideTexts = currentSlideElement.querySelectorAll('p');
      const slideImages = currentSlideElement.querySelectorAll('[data-image]');

      gsap.to([slideTitle, ...slideTexts, ...slideImages], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });
    }

    titles.forEach((title) => {
      if (title && title.textContent) {
        const chars = title.textContent.split("");
        title.innerHTML = chars
          .map((char) =>
            char === " " ? " " : `<span class="char">${char}</span>`
          )
          .join("");

        const charSpans = title.querySelectorAll(".char");
        gsap.set(charSpans, { opacity: 0, y: 20 });

        gsap.to(charSpans, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.03,
          ease: "back.out(1.7)",
        });
      }
    });

    magneticElements.forEach((element) => {
      const hasTextContent =
        element.textContent && element.textContent.trim().length > 0;
      const isTextContainer =
        element.classList.contains("text-left") ||
        element.classList.contains("text-right");

      if (!hasTextContent && !isTextContainer) {
        return;
      }

      const handleMouseMove = (e: MouseEvent) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const distance = Math.sqrt(x * x + y * y);
        const maxDistance =
          Math.sqrt(rect.width * rect.width + rect.height * rect.height) / 2;
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

      element.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + teamSlides.length) % teamSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

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

  const addSlideRef = (el: HTMLDivElement | null) => {
    if (el && !slideRefs.current.includes(el)) {
      slideRefs.current.push(el);
    }
  };

  const renderSlide = (slide: TeamSlide, index: number) => {
    const isActive = index === currentSlide;
    
    if (slide.id === "intro") {
      return (
        <div
          key={slide.id}
          ref={addSlideRef}
          className={`absolute inset-0 transition-opacity duration-500 ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-8 md:mb-16">
            <div
              ref={addMagneticRef}
              className="text-center md:text-left order-1 cursor-pointer"
            >
              <h2
                ref={addTitleRef}
                className="text-3xl md:text-5xl font-bold mb-4 md:mb-6"
              >
                <span className="bg-gradient-to-r from-[#FF56D6] to-[#FF9167] bg-clip-text text-transparent">
                  {slide.title}
                </span>
              </h2>
              <div className="space-y-3 md:space-y-4 text-gray-300 leading-relaxed text-sm md:text-base">
                <p ref={addTextRef}>{slide.description.split('. ')[0] + '. ' + slide.description.split('. ')[1] + '.'}</p>
                <p ref={addTextRef}>{slide.description.split('. ').slice(2).join('. ') + '.'}</p>
              </div>
            </div>

            <div className="flex items-center order-2">
              <div
                ref={addImageRef}
                data-image
                className="relative rounded-lg h-[30vh] md:h-[40vh] w-full shadow-2xl overflow-hidden"
              >
                <Image
                  src={slide.groupPhoto}
                  alt="HackUTD Team"
                  fill
                  className="object-cover rounded-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div
        key={slide.id}
        ref={addSlideRef}
        className={`absolute inset-0 transition-opacity duration-500 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-8 md:mb-16">
          <div
            ref={addMagneticRef}
            className="text-center md:text-left order-1 cursor-pointer"
          >
            <h2
              ref={addTitleRef}
              className="text-3xl md:text-5xl font-bold mb-4 md:mb-6"
            >
              <span className="bg-gradient-to-r from-[#FF56D6] to-[#FF9167] bg-clip-text text-transparent">
                {slide.title}
              </span>
            </h2>
            <p
              ref={addTextRef}
              className="text-gray-300 leading-relaxed text-sm md:text-base"
            >
              {slide.description}
            </p>
          </div>

          <div className="flex items-center order-2">
            <div
              ref={addImageRef}
              data-image
              className="relative rounded-lg h-[30vh] md:h-[40vh] w-full shadow-2xl overflow-hidden"
            >
              <Image
                src={slide.groupPhoto}
                alt={`${slide.title} Team`}
                fill
                className="object-cover rounded-xl"
                priority
              />
            </div>
          </div>
        </div>

        {slide.members.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {slide.members.map((member, memberIndex) => (
              <div
                key={memberIndex}
                className="text-center group cursor-pointer"
                ref={addMagneticRef}
              >
                <div
                  ref={addImageRef}
                  data-image
                  className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-3 rounded-full overflow-hidden border-2 border-transparent group-hover:border-purple-500 transition-colors duration-300"
                >
                  <Image
                    src={member.imagePath}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-white font-semibold text-sm md:text-base mb-1">
                  {member.name}
                </h3>
                <p className="text-purple-300 text-xs md:text-sm font-medium">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  if (!teamSlides || teamSlides.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-white text-xl">Loading team data...</p>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 bg-red-500 text-white p-2 text-xs z-50">
        Debug: Slide {currentSlide + 1} of {teamSlides.length}
      </div>

      <div ref={carouselRef} className="relative min-h-screen overflow-hidden">
        {teamSlides.map((slide, index) => renderSlide(slide, index))}
        
        <div className="absolute top-4 right-4 bg-black/50 rounded-full px-4 py-2 text-white text-sm font-medium z-10">
          {currentSlide + 1} / {teamSlides.length}
        </div>
      </div>

      <div className="flex items-center justify-center space-x-8 py-8 bg-gradient-to-b from-[#211824] to-[#0B070C]">
        <button
          onClick={prevSlide}
          className="w-12 h-12 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex space-x-2">
          {teamSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-gradient-to-r from-[#FF56D6] to-[#FF9167] scale-125"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-12 h-12 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
