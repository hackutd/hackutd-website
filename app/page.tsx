"use client";

import Image from "next/image";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import Stats from "./pages/stats";
import Intro from "./pages/intro";
import OpenSource from "./pages/openSource";
import PastHackathons from "./pages/pastHackathons";
import Footer from "./pages/footer";
import Members from "./pages/memberstemp";

export default function Home() {
  return (
    <div>
      <main className="relative min-h-screen bg-[#070707] text-white overflow-hidden flex justify-center items-center">
        <div className="w-full mx-auto">
          <div className="fixed top-0 left-0 right-0 z-50">
            <Navbar
              logoSrc="/logo.svg"
              brandName="HackUTD"
              links={[
                { href: "#hero", label: "Home" },
                { href: "#intro", label: "About" },
                { href: "#members", label: "Team" },
                { href: "#past", label: "Hackathons" },
                { href: "#opensource", label: "Our Projects" },
              ]}
              ctaText="Register"
              ctaHref="#register"
            />
          </div>
          <div className="pt-16">
            {/* Add padding to prevent content from being hidden under the navbar */}
            <div id="hero">
              <Hero />
            </div>
            <div id="intro">
              <Stats />
              <div className="my-16" />
              <Intro />
            </div>
            <div className="my-16" />
            <div id="members">
              <Members />
            </div>
            <div className="my-16" />
            <div id="past">
              <PastHackathons />
            </div>
            <div className="my-16" />
            <div id="opensource">
              <OpenSource />
            </div>
          </div>
        </div>
        {/* <div className="relative min-h-screen bg-[#070707] text-white overflow-hidden">
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
      </div> */}
      </main>
      <Footer />
    </div>
  );
}
