import Image from "next/image";
import Hero from "./pages/hero";
import Footer from "./pages/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070707] text-white overflow-hidden">
      <main className="flex justify-center items-center">
        <div className="w-4/5 mx-auto">
          <Hero />
        </div>
      </main>
      <Footer />
    </div>
  );
}
