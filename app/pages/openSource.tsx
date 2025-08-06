"use client";
import hackScreenshot from '@/public/hackScreenshot.png';
import juryScreenshot from '@/public/juryScreenshot.png';
import Image from 'next/image';
import Link from 'next/link';

export default function OpenSource() {
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

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-200 via-gray-100 to-pink-200 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-bold text-gray-800">
            Our <span className="bg-gradient-to-r from-[#FF56D6] to-[#FF9167] bg-clip-text text-transparent">open source</span> projects
          </h2>
          <p className="text-gray-800 text-lg mb-6">
            As active participants in the hackathon community, we’ve built open-source tools to support and empower other organizers.
            <br/>
             Click on the projects below to learn more!
          </p>
        </div>

        {/* Projects */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 px-4">
          {projects.map((project, index) => (
            
            <div 
              key={index}
              className="
                bg-black rounded-2xl overflow-hidden
                h-auto lg:h-[60vh]
                w-full sm:w-[90vw] md:w-[70vw] lg:w-[40vw]
                hover:shadow-2xl transition-shadow duration-300
                flex flex-col items-center justify-center
                p-4 lg:p-2"
            >
              {/* Project Image */}
              <Link href={project.url} target="_blank" rel="noopener noreferrer">
                <div className="
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

              {/* Project Description */}
              <div className="p-6 h-auto lg:h-[17vh]">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 text-center lg:text-left">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed text-center lg:text-left">
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
