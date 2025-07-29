import Image from "next/image";
import Hero from "./pages/hero";
import OpenSource from "./pages/openSource";
import PastHackathons from "./pages/pastHackathons";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#070707] text-white overflow-hidden flex justify-center items-center">
      <div className="w-4/5 mx-auto">
        <Hero />
        <div className="my-16" />
        <OpenSource />
        <div className="my-16" />
        <PastHackathons />
      </div>
    </main>
  );
}
