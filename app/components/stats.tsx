"use client";

export default function Stats() {
  return (
   <section className="relative min-h-screen bg-black text-white overflow-hidden">
    <div className="z-10 relative flex flex-col items-center justify-center text-center h-[70vh] px-4">
      <div
        className="
          flex flex-col items-start justify-center
          w-[30vw] h-[35vh]
          rounded-[1.04rem]
          border border-[rgba(255,255,255,0.35)]
          bg-[rgba(193,193,255,0.20)]
          bg-blend-plus-lighter
          shadow-[-9.2px_-8.6px_39.8px_-9.9px_rgba(0,0,0,0.15),-1.54px_-1.44px_9.94px_-6.63px_rgba(0,0,0,0.10),1.93px_1.80px_14.09px_2.49px_rgba(193,193,255,0.13)_inset,1.16px_1.08px_23.2px_-2.49px_rgba(221,200,255,0.20)_inset]
          backdrop-blur-[9.26px]
          filter-[drop-shadow(-13.26px_15.74px_47.23px_rgba(96,109,255,0.5))]
          p-10
        "
      >
        <span className="text-[4vw] font-bold leading-none drop-shadow-lg">1000+</span>
        <span className="text-[1.5vw] font-medium text-white/80 mt-2">Participants</span>
        <span className="text-[1.2vw] font-normal text-white/60 mt-1">And this stuff</span>
      </div>
    </div>
  </section>

  );
}
