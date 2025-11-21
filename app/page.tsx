"use client";

import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Intro from "./pages/intro";
import OpenSource from "./pages/openSource";
import PastHackathons from "./pages/pastHackathons";
import Footer from "./pages/footer";
import SponsorCarousel from "./components/SponsorCarousel";

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
                { href: "#past", label: "Hackathons" },
                { href: "#opensource", label: "Our Projects" },
              ]}
              ctaText="Register"
              ctaHref="#register"
            />
          </div>
          <div className="pt-16">
            <div id="hero">
              <Hero />
            </div>
            <div id="intro" className="bg-black">
              <div className="my-0" />
              
              <Intro />
              <div className="bg-black" style={{ backgroundColor: '#000000' }}>
                <SponsorCarousel />
              </div>
            </div>
            <div id="past" className="bg-black">
              <PastHackathons />
            </div>
            <div className="my-16" />
            <div id="opensource">
              <OpenSource />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
