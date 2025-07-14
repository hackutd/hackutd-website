"use client";

import StatCard from "./StatCard";

export default function Stats() {
  return (
   <section className="relative min-h-screen bg-black text-white overflow-hidden">
    <div className="z-10 relative flex flex-col items-center justify-center text-center h-[70vh] px-4">
      <StatCard
        title="1000+"
        subtitle="Participants"
        body="Over 1000 students from across the country"
      />
    </div>
  </section>

  );
}
