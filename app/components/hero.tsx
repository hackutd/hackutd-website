"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#050014] via-[#04002A] to-[#050032] text-white overflow-hidden"
      style={{
        background: ``
      }}>
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
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[120vw] h-[50vh] z-0">
        <div 
          className="absolute inset-0 blur-3xl scale-150 opacity-70"
          style={{
            background: 'radial-gradient(ellipse 50% 110% at center bottom, rgba(255, 177, 94, 1) 40%, rgba(242, 88, 204, 0.9) 70%, rgba(231, 105, 199, 0.4) 85%, transparent 100%)',
            pointerEvents: 'none'
          }}
        />
      </div>
    </section>
  );
}
