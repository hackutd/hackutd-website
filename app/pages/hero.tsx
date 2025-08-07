"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#0f0029] via-[#1f0140] to-[#fd9453] text-white overflow-hidden">
      <div className="z-10 relative flex flex-row items-center justify-center">
        <div className="p-2">
          <Image src="HackUTD Fire Logo.svg" alt="logo" width={130} height={130} />
        </div>
        <div className="z-10 relative flex flex-col items-start justify-center h-[70vh] px-4">
          <div className="flex items-center gap-4">
            <div className="text-md sm:text-lg font-extrabold flex items-center gap-4">
              <span>We are</span>
            </div>
          </div>
          <h1 className="text-7xl sm:text-8xl font-extrabold mt-2">
            Hack
            <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              UTD
            </span>
          </h1>
          <p className="w-full text-right pr-2 mt-4 text-md sm:text-lg font-light">
            North America's Largest 24-hour Hackathon
          </p>
        </div>
      </div>
    </section>
  );
}
