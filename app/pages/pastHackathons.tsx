'use client';

import React from 'react'
import HackBadge20 from '@/public/HackBadge20.png'
import HackBadge21 from '@/public/HackBadge21.png'
import HackBadge22 from '@/public/HackBadge22.png'
import HackBadge23 from '@/public/HackBadge23.png'
import HackBadge24 from '@/public/HackBadge24.png'
import Image from 'next/image';
import Link from 'next/link';

const pastHackathons = () => {
  return (
    <div>
        <h1
          className="font-inter text-[67px] text-center font-bold bg-gradient-to-r from-[#FF56D6] to-[#FF9167] bg-clip-text text-transparent"
          style={{ backgroundImage: 'linear-gradient(to bottom right, #FF56D6 0%, #FF7AA2 35%, #FF9167 70%)' }}
        >
          Oh how far we've come...
        </h1>
        <h3 className = "text-center pt-2">
          Hover over a badge to checkout past hackathons!
        </h3>
        <div className="w-full max-w-6xl mx-auto flex flex-row mt-2 justify-center items-center flex-wrap py-4">
             <Link href="https://2024.hackutd.co" target="_blank" rel="noopener noreferrer">
            <Image
              src={HackBadge24}
              alt="Hack Badge 2024"
              className="w-48 h-48 mx-2 transition-transform duration-200 hover:scale-110 cursor-pointer"
            />
             </Link>
            <Link href="https://2023.hackutd.co" target="_blank" rel="noopener noreferrer">
            <Image
              src={HackBadge23}
              alt="Hack Badge 2023"
              className="w-48 h-48 mx-2 transition-transform duration-200 hover:scale-110 cursor-pointer"
            />
            </Link>
            <Link href="https://2022.hackutd.co" target="_blank" rel="noopener noreferrer">
            <Image
              src={HackBadge22}
              alt="Hack Badge 2022"
              className="w-48 h-48 mx-2 transition-transform duration-200 hover:scale-110 cursor-pointer"
            />
            </Link>

            <Link href="https://2021.hackutd.co" target="_blank" rel="noopener noreferrer">
            <Image
              src={HackBadge21}
              alt="Hack Badge 2021"
              className="w-48 h-48 mx-2 transition-transform duration-200 hover:scale-110 cursor-pointer"
            />
            </Link>

            <Link href="https://2020.hackutd.co" target="_blank" rel="noopener noreferrer">
            <Image
              src={HackBadge20}
              alt="Hack Badge 2020"
              className="w-48 h-48 mx-2 transition-transform duration-200 hover:scale-110 cursor-pointer"
            />
            </Link>
        </div>
    </div>
  )
}

export default pastHackathons