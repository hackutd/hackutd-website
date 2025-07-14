"use client";

import StatCard from "./StatCard";

export default function Stats() {
  return (
   <section className="relative min-h-screen bg-black text-white overflow-hidden">
    <div className="z-10 relative flex flex-col items-center justify-center text-center h-[150vh] px-4">
      <div className="-translate-x-[12vw]">
        <StatCard
          title="1000+"
          subtitle="Participants"
          body="Over 1000 students from across the country"
          align="left"
        />
      </div>
      <div className="translate-x-[12vw] -translate-y-[7vh]">
        <StatCard
          title="500+"
          subtitle="so the thing is there's a lot of stuff"
          body="And this stuff"
          align="left"
        />
      </div>
      <div className="-translate-x-[12vw] -translate-y-[14vh]">
        <StatCard
          title="$10K+"
          subtitle="so there's even more stuff"
          body="wow monies"
          align="left"
        />
      </div>
    </div>
  </section>

  );
}
