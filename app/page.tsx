"use client";

import Image from "next/image";
import Hero from "./pages/hero";
import Stats from "./pages/stats";
import Intro from "./pages/intro";
import OpenSource from "./pages/openSource";
import PastHackathons from "./pages/pastHackathons";
import Footer from "./pages/footer";
import Members from "./pages/memberstemp";

export default function Home() {



  return (
    <div className="relative min-h-screen bg-[#070707] text-white overflow-hidden">


      <main className="flex justify-center items-center">
        <div className="w-4/5 mx-auto">
          <Hero />
          <Stats />
          <div className="my-16" />
          <Intro />
          <div className="my-16" />
          <Members />
          <div className="my-16" />
          <PastHackathons />
          <div className="my-16" />
          <OpenSource />
          
        </div>
      </main>
      <Footer />
    </div>
  );
}
