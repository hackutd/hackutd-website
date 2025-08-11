"use client";
import { useEffect, useRef } from "react";
import hackScreenshot from '@/public/hackScreenshot.png';
import juryScreenshot from '@/public/juryScreenshot.png';
import Image from 'next/image';
import Link from 'next/link';
import { initOpenSourceAnimations } from "../animations/openSourceAnimations";

export default function OpenSource() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const projectCardRefs = useRef<HTMLDivElement[]>([]);
  const projectImageRefs = useRef<HTMLDivElement[]>([]);
  const projectTitleRefs = useRef<HTMLHeadingElement[]>([]);
  const projectDescRefs = useRef<HTMLParagraphElement[]>([]);

  const projects = [
    {
      title: "Hackportal",
      description: "A pre-built portal template made by HackUTD Developers, so you have one less thing to worry about. Used in HackTX, HACKUTA, HackUTD",
      image: hackScreenshot,
      url: "https://hackportal.hackutd.co/"
    },
    {
      title: "Jury",
      description: "A pre-built judge management tool developed by HackUTD Developers, so running judging is one less thing to worry about. Used at HackUTD, HackTX, and HACKUTA.",
      image: juryScreenshot,
      url: "https://jury.mikz.dev/"
    }
  ];

  useEffect(() => {
    const cleanup = initOpenSourceAnimations(
      sectionRef,
      headerRef,
      titleRef,
      subtitleRef,
      projectsRef,
      projectCardRefs,
      projectImageRefs,
      projectTitleRefs,
      projectDescRefs
    );

    return cleanup;
  }, []);

  const addCardRef = (el: HTMLDivElement | null) => {
    if (el && !projectCardRefs.current.includes(el)) {
      projectCardRefs.current.push(el);
    }
  };

  const addImageRef = (el: HTMLDivElement | null) => {
    if (el && !projectImageRefs.current.includes(el)) {
      projectImageRefs.current.push(el);
    }
  };

  const addTitleRef = (el: HTMLHeadingElement | null) => {
    if (el && !projectTitleRefs.current.includes(el)) {
      projectTitleRefs.current.push(el);
    }
  };

  const addDescRef = (el: HTMLParagraphElement | null) => {
    if (el && !projectDescRefs.current.includes(el)) {
      projectDescRefs.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-gradient-to-br from-[#D15CD8] via-[#F75371] via-[#DDDDDD] to-[#DDDDDD] py-16 px-8">
      <div className="max-w-7xl mx-auto">
        
        <div ref={headerRef} className="text-center mb-16 space-y-4">
          <h2 ref={titleRef} className="text-5xl font-bold text-gray-800">
            Our <span className="bg-gradient-to-r from-[#FF56D6] to-[#FF9167] bg-clip-text text-transparent">open source</span> projects
          </h2>
          <p ref={subtitleRef} className="text-gray-800 text-lg mb-6">
            As active participants in the hackathon community, we've built open-source tools to support and empower other organizers.
            <br/>
             Click on the projects below to learn more!
          </p>
        </div>

        
        <div ref={projectsRef} className="flex flex-col lg:flex-row justify-center items-center gap-8 px-4">
          {projects.map((project, index) => (
            
            <div 
              key={index}
              ref={addCardRef}
              className="
                bg-black rounded-2xl overflow-hidden
                h-auto lg:h-[60vh]
                w-full sm:w-[90vw] md:w-[70vw] lg:w-[40vw]
                transition-all duration-300 hover:scale-102 hover:shadow-[0_25px_50px_-12px_rgba(59,130,246,0.5)]
                flex flex-col items-center justify-center
                p-4 lg:p-2"
            >
             
              <Link href={project.url} target="_blank" rel="noopener noreferrer">
                <div 
                  ref={addImageRef}
                  className="
                    w-full
                    h-[140px] 
                    sm:h-[160px] 
                    md:h-[200px] 
                    lg:h-[40vh] lg:w-[34vw] 
                    relative"
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} Screenshot`}
                    className="rounded-md w-full h-full object-cover"
                    width={800}
                    height={400}
                  />
                </div>
              </Link>

              <div className="p-6 h-auto lg:h-[17vh]">
                <h3 ref={addTitleRef} className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 text-center lg:text-left">
                  {project.title}
                </h3>
                <p ref={addDescRef} className="text-sm md:text-base text-gray-300 leading-relaxed text-center lg:text-left">
                  {project.description}
                </p>
              </div>
            </div>            
          ))}
        </div>
      </div>
    </section>
  );
}
