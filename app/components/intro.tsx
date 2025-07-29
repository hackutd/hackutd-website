"use client";

export default function Intro() {
  return (
    <section className="relative min-h-screen p-16 bg-gradient-to-b from-[#0B070C] to-[#211824] text-white overflow-hidden">
      {/* top row -- "Who we are" */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
        {/* text */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-purple-400">Who we</span>{' '}
              <span className="text-orange-400">are</span>
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                We host HackUTD, Texas' largest hackathon. We also assist with other 
                hackathons at UTD, and host helpful workshops that anyone can 
                attend. Regardless of what we're working on, we aim to make our 
                hackathons accessible and open to everyone. Glad to see you here!
              </p>
              <p>
                We inspire students to innovate and learn new technologies through 
                hackathons, 24-hour events with challenges, free food & merch, and 
                fun games & activities.
              </p>
            </div>
          </div>
        </div>

        {/* team image (placeholder) -- use ayro's sheet */}
        <div className="flex items-center">
          <div className="bg-gray-600 rounded-lg h-64 md:h-80 w-full"></div>
        </div>
      </div>

      {/* bottom row -- "Our vision" */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* team image (placeholder) -- use ayro's sheet*/}
        <div className="flex items-center order-2 lg:order-1">
          <div className="bg-gray-600 rounded-lg h-64 md:h-80 w-full"></div>
        </div>

        {/* text */}
        <div className="space-y-8 order-1 lg:order-2">
          <div className="text-right">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-purple-400">Our vision</span>
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat.
              </p> 
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
