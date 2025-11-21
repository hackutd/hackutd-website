"use client";
import Image from "next/image";
import Stars from "./stars";

export default function Hero() {
  return (
    <section
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
          {/* Logo */}
          <Image 
            src="/logo.svg" 
            alt="HackUTD Logo" 
            width={120} 
            height={120} 
            className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 mb-2 md:mb-0"
          />

          {/* Text Section */}
          <div className="font-['CeraPro']">
            <p className="text-base md:text-md font-medium text-white ml-1">We are</p>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[6rem] font-bold leading-none">
              <span className="text-white">Hack</span>
              <span className="bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
                UTD
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-sm font-medium text-white mr-1 text-right">
              North America&apos;s Largest 24-hour Hackathon
            </p>
          </div>
        </div>
      </div>
      <div className="absolute left-0 right-0 z-10" style={{ lineHeight: 0, fontSize: 0, bottom: 0, marginBottom: 0 }}>
        <div className="relative w-full" style={{ lineHeight: 0, fontSize: 0, marginBottom: 0 }}>
          <div 
            className="w-full scale-[2.2] md:scale-100 origin-bottom"
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
