"use client";

import Image from "next/image";

export default function Intro() {
  return (
    <section
      className="relative min-h-screen p-8 md:p-16 pb-20 md:pb-24 bg-black text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-stretch">

          <div className="flex flex-col space-y-6 h-full">
            <h2 className="text-3xl md:text-5xl font-bold font-gilroy">
              <span className="bg-gradient-to-r from-[#FF56D6] to-[#FF9167] bg-clip-text text-transparent">
                Who we are
              </span>
            </h2>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg flex-1 font-DM-Sans">
              We host HackUTD, North America's largest hackathon. We also assist with other hackathons at UTD, and host helpful workshops that anyone can attend. Regardless of what we're working on, we aim to make our hackathons accessible and open to everyone. We inspire students to innovate and learn new technologies through hackathons, 24-hour events with challenges, free food & merch, and fun games & activities.
            </p>

            <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-800 rounded-lg flex-shrink-0 relative overflow-hidden">
              <Image
                src="/Team.png"
                alt="HackUTD Team"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                priority
              />
            </div>
          </div>

 
          <div className="flex flex-col space-y-6 h-full">

            <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-800 rounded-lg flex-shrink-0 relative overflow-hidden">
              <Image
                src="/assets/team/group/Directors.jpg"
                alt="HackUTD Directors"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                priority
              />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-right md:text-right font-gilroy">
              <span className="bg-gradient-to-r from-[#FF56D6] to-[#FF9167] bg-clip-text text-transparent">
                Meet the Team
              </span>
            </h2>
            <div className="text-right flex-1 space-y-4">
              <p className="text-gray-300 leading-relaxed text-base md:text-lg font-DM-Sans">
              We're the directors of HackUTD this year and are very excited for the next iteration of our event. Our team works hard all year round to make our events possible, and we can't wait to put on one more successful hackathon!
              </p>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg font-DM-Sans">
              – Kelly Zhou & Adelaide Dunning, Co-Directors HackUTD 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
