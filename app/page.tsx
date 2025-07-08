import Image from "next/image";
import Hero from "./components/hero";
import Stats from "./components/stats";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#070707] text-white overflow-hidden flex justify-center items-center">
      <div className="w-4/5 mx-auto">
        <Hero />
        <Stats />
      </div>
    </main>
  );
}
