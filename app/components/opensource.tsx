"use client";
import hackScreenshot from '@/public/hackScreenshot.png';
import Image from 'next/image';

export default function OpenSource() {
  const projects = [
    {
      title: "Hackportal",
      description: "A pre-built portal template made by HackUTD Developers, so you have one less thing to worry about. Used in HackTX, HACKUTA, HackUTD",
      image: ""
    },
    {
      title: "Jury",
      description: "A pre-built portal template made by HackUTD Developers, so you have one less thing to worry about. Used in HackTX, HACKUTA, HackUTD",
      image: ""
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
            As active participants in the hackathon community, we blababla blab alb la lal blblababla blab alb la lal blblabala blab alb la lal
          </p>
        </div>

        {/* Projects */}
        <div className="flex flex-row justify-center gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-black rounded-2xl overflow-hidden h-[60vh] w-[37vw] hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center justify-center"
            >
              {/* Project Image */}
              <div className="h-[40vh] w-[32vw] relative">
                <Image
                  src={hackScreenshot}
                  alt={`${project.title} Screenshot`}
                  className="rounded-t-2xl w-full h-full object-cover"
                  width={800}
                  height={400}
                />
              </div>

              {/* Project Description */}
              <div className="p-6 h-[17vh]">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-8">
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
