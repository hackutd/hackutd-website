"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full pt-6 md:pt-10 pb-10 md:pb-14 px-4 relative overflow-hidden animated-gradient">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 w-[140vw] h-64"
        style={{
          background:
            "radial-gradient(ellipse 75% 100% at 52% 100%, #ffb52500 0%, #FF56D650 60%, transparent 100%)",
          opacity: 0.15,
        }}
      />
      {/* Top Row */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-5xl mx-auto gap-3 md:gap-4 relative z-10 text-center md:text-left">
        <span className="text-white text-base md:text-lg lg:text-xl">© 2025 HackUTD by <span className="underline underline-offset-4">ACM UTD</span></span>
        <span className="text-white text-base md:text-lg lg:text-xl">
          Get in Touch: <a href="mailto:hello@hackutd.co" className="underline underline-offset-4">hello@hackutd.co</a>
        </span>
      </div>
      {/* Divider */}
      <hr className="my-6 md:my-8 border-white/60 relative z-10" />
      {/* Bottom Row */}
      <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto relative z-10">
        <span className="text-white text-lg md:text-2xl lg:text-3xl flex items-center gap-2 text-center">
          There&apos;s no HackUTD...without <span className="align-middle text-base font-bold tracking-tight ml-1">™</span>
          <span className="inline-flex items-center justify-center ml-2">
            <Image src="/heart.svg" alt="Heart U" width={28} height={28} className="md:w-9 md:h-9" />
          </span>
        </span>
      </div>
    </footer>
  );
} 