"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#0f0029] via-[#1f0140] to-[#fd9453] text-white overflow-hidden">
      <div className="z-10 relative flex flex-col items-center justify-center text-center h-[70vh] px-4">
        <div className="flex items-center gap-4">
          <div className="text-4xl sm:text-5xl font-extrabold flex items-center gap-4">
            <div className="bg-white rounded-full p-2">
              {/* Replace with actual logo SVG or Image */}
              {/* <Image src="/logo.svg" alt="logo" width={40} height={40} /> */}
            </div>
            <span>We are</span>
          </div>
        </div>
        <h1 className="text-6xl sm:text-7xl font-extrabold mt-2">
          Hack
          <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
            UTD
          </span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl font-light">
          North America's Largest 24-hour Hackathon
        </p>
      </div>
    </section>
  );
}
