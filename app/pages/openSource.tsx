// app/components/OpenSource.tsx
"use client";
import { useLayoutEffect, useRef } from "react";
import hackScreenshot from "@/public/hackScreenshot.png";
import juryScreenshot from "@/public/juryScreenshot.png";
import Image from "next/image";
import Link from "next/link";
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
      description:
        "A pre-built portal template made by HackUTD Developers, so you have one less thing to worry about. Used in HackTX, HACKUTA, HackUTD",
      image: hackScreenshot,
      url: "https://hackportal.hackutd.co/",
    },
    {
      title: "Jury",
      description:
        "A pre-built judge management tool developed by HackUTD Developers, so running judging is one less thing to worry about. Used at HackUTD, HackTX, and HACKUTA.",
      image: juryScreenshot,
      url: "https://jury.mikz.dev/",
    },
  ];

  useLayoutEffect(() => {
    const cleanup =
      initOpenSourceAnimations(
        sectionRef,
        headerRef,
        titleRef,
        subtitleRef,
        projectsRef,
        projectCardRefs,
        projectImageRefs,
        projectTitleRefs,
        projectDescRefs
      ) || (() => {});
    return cleanup;
  }, []);

  const addCardRef = (el: HTMLDivElement | null) => {
    if (el && !projectCardRefs.current.includes(el)) projectCardRefs.current.push(el);
  };
  const addImageRef = (el: HTMLDivElement | null) => {
    if (el && !projectImageRefs.current.includes(el)) projectImageRefs.current.push(el);
  };
  const addTitleRef = (el: HTMLHeadingElement | null) => {
    if (el && !projectTitleRefs.current.includes(el)) projectTitleRefs.current.push(el);
  };
  const addDescRef = (el: HTMLParagraphElement | null) => {
    if (el && !projectDescRefs.current.includes(el)) projectDescRefs.current.push(el);
  };

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-screen bg-gradient-to-br from-[#D15CD8] via-[#F75371] via-[#DDDDDD] to-[#DDDDDD] py-8 md:py-16 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div
          ref={headerRef}
          className="relative z-[999] text-center mb-8 md:mb-16 space-y-3 md:space-y-4 p-4"
        >
          <h2
            ref={titleRef}
            className="block text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 !opacity-100 !visible"
          >
            Our{" "}
            <span
              className="bg-gradient-to-r from-[#FF56D6] to-[#FF9167] bg-clip-text text-transparent"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              open source
            </span>{" "}
            projects
          </h2>

          <p
            ref={subtitleRef}
            className="block text-gray-800 text-sm md:text-base mb-4 md:mb-6 px-4 !opacity-100 !visible"
          >
            As active participants in the hackathon community, we've built open-source tools to support and empower other organizers.
            <br />
            Click on the projects below to learn more!
          </p>
        </div>

        <div
          ref={projectsRef}
          className="relative z-[1] flex flex-col lg:flex-row justify-center items-center gap-6 md:gap-8 px-2 md:px-4"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              ref={addCardRef}
              className="bg-black rounded-2xl overflow-hidden h-auto lg:h-[60vh]
                         w-full sm:w-[90vw] md:w-[70vw] lg:w-[40vw]
                         transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_25px_50px_-12px_rgba(59,130,246,0.5)]
                         flex flex-col items-center justify-center p-3 md:p-4 lg:p-2"
            >
              <Link href={project.url} target="_blank" rel="noopener noreferrer">
                <div
                  ref={addImageRef}
                  className="w-full h-[140px] sm:h-[160px] md:h-[200px] lg:h-[40vh] lg:w-[34vw] relative"
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} Screenshot`}
                    className="rounded-md w-full h-full object-cover"
                    width={800}
                    height={400}
                    priority={index === 0}
                  />
                </div>
              </Link>

              <div className="p-4 md:p-6 h-auto lg:h-[17vh]">
                <h3
                  ref={addTitleRef}
                  className="text-sm md:text-base lg:text-lg xl:text-xl font-bold text-white mb-2 text-center lg:text-left"
                >
                  {project.title}
                </h3>
                <p
                  ref={addDescRef}
                  className="text-[10px] md:text-xs lg:text-sm text-gray-300 leading-relaxed text-center lg:text-left"
                >
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
