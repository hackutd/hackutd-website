import Image from "next/image";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#070707] text-white overflow-hidden flex justify-center items-center">
      <div className="w-full h-[10000px] mx-auto">
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar
            logoSrc="/logo.svg"
            brandName="HackUTD"
            links={[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
            ]}
            ctaText="Register"
            ctaHref="#register"
          />
        </div>
        <div className="pt-16">
          {" "}
          {/* Add padding to prevent content from being hidden under the navbar */}
          <Hero />
        </div>
      </div>
    </main>
  );
}
