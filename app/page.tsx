import Image from "next/image";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#070707] text-white overflow-hidden flex justify-center items-center">
      <div className="w-4/5 mx-auto">
        <Hero />
      </div>
    </main>
  );
}
