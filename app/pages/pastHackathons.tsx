'use client';

import React from 'react'
import Hack2020 from '@/public/Hack2020.png'
import Hack2021 from '@/public/Hack2021.png'
import Hack2022 from '@/public/Hack2022.png'
import Hack2023 from '@/public/Hack2023.png'
import Hack2024 from '@/public/Hack2024.png'
import Image from 'next/image';
import Link from 'next/link';

const pastHackathons = () => {
  const hackathons = [
    {
      href: "https://ripple.hackutd.co/",
      src: Hack2024,
      alt: "Hack Badge 2024",
      label: "Hackutd 2024"
    },
    {
      href: "https://x.hackutd.co/",
      src: Hack2023,
      alt: "Hack Badge 2023",
      label: "Hackutd 2023"
    },
    {
      href: "https://ix.hackutd.co/",
      src: Hack2022,
      alt: "Hack Badge 2022",
      label: "Hackutd 2022"
    },
    {
      href: "https://prod.hackutd.co/",
      src: Hack2021,
      alt: "Hack Badge 2021",
      label: "Hackutd 2021"
    },
    {
      href: "https://vii.hackutd.co/",
      src: Hack2020,
      alt: "Hack Badge 2020",
      label: "Hackutd 2020"
    }
  ];

  return (
    <div>
        <h1
          className="font-inter text-[67px] text-center font-bold bg-gradient-to-r from-[#FF56D6] to-[#FF9167] bg-clip-text text-transparent"
          style={{ backgroundImage: 'linear-gradient(to bottom right, #FF56D6 0%, #FF7AA2 35%, #FF9167 70%)' }}
        >
          uh Oh how far we've come...
        </h1>
        <h3 className = "text-center mb-4">
          Hover over a badge to checkout past hackathons!
        </h3>
        
        {/* Badges for past hackathons in desktop version */}
        <div className="hidden lg:flex w-full max-w-7xl mx-auto flex-row items-center justify-between px-8 py-4 mb-28">
          {hackathons.map((hackathon, index) => (
            <div key={index} className="font-DM-Sans text-center items-center flex flex-col">
              <Link href={hackathon.href} target="_blank" rel="noopener noreferrer">
                <Image
                  src={hackathon.src}
                  alt={hackathon.alt}
                  className="w-28 h-28 mx-2 transition-all duration-300 hover:scale-110 hover:shadow-xl cursor-pointer"
                />
              </Link>
              <p className="mt-4">{hackathon.label}</p>
            </div>
          ))}
        </div>

        {/* Badges for past hackathons in mobile version */}
        <div className="flex lg:hidden w-full max-w-7xl mx-auto flex-col md:flex-row items-center px-8 py-4 gap-8 md:gap-32 mb-28">
          {hackathons.map((hackathon, index) => (
            <div key={index} className="font-DM-Sans text-center items-center flex flex-col">
              <Link href={hackathon.href} target="_blank" rel="noopener noreferrer">
                <Image
                  src={hackathon.src}
                  alt={hackathon.alt}
                  className="w-28 h-28 mx-2 transition-all duration-300 hover:scale-110 hover:shadow-xl cursor-pointer"
                />
              </Link>
              <p className={`mt-4 ${index === 0 ? 'mb-8 md:mb-0' : ''}`}>{hackathon.label}</p>
            </div>
          ))}
        </div>
    </div>
  
  )
}

export default pastHackathons