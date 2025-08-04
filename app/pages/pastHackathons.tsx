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
  return (
    <div>
        <h1
          className="font-inter text-[67px] text-center font-bold bg-gradient-to-r from-[#FF56D6] to-[#FF9167] bg-clip-text text-transparent"
          style={{ backgroundImage: 'linear-gradient(to bottom right, #FF56D6 0%, #FF7AA2 35%, #FF9167 70%)' }}
        >
          Oh how far we've come...
        </h1>
        <h3 className = "text-center mb-4">
          Hover over a badge to checkout past hackathons!
        </h3>
        
        {/* Badges for past hackathons in desktop version */}
        <div className="hidden lg:flex w-full max-w-7xl mx-auto flex-row items-center px-8 py-4 gap-32 mb-28">
            
            <div className = "font-DM-Sans text-center items-center flex flex-col ">
              <Link href="https://ripple.hackutd.co/" target="_blank" rel="noopener noreferrer">
              <Image
                src={Hack2024}
                alt="Hack Badge 2024"
                className="w-28 h-28 mx-2 transition-transform duration-200 hover:scale-110 cursor-pointer"
              />
              </Link>
              <p className="mt-4">Hackutd 2024</p>

            </div>
            
            <div className = "font-DM-Sans  text-center items-center flex flex-col "> 
              <Link href="https://x.hackutd.co/" target="_blank" rel="noopener noreferrer">
              <Image
                src={Hack2023}
                alt="Hack Badge 2023"
                className="w-28 h-28 mx-2 transition-transform duration-200 hover:scale-110 cursor-pointer"
              />
              </Link>
              <p className="mt-4">Hackutd 2023</p>
            </div>
            
            <div className = "font-DM-Sans  text-center items-center flex flex-col ">
              <Link href="https://ix.hackutd.co/" target="_blank" rel="noopener noreferrer">
              <Image
                src={Hack2022}
                alt="Hack Badge 2022"
                className="w-28 h-28 mx-2 transition-transform duration-200 hover:scale-110 cursor-pointer"
              />
              </Link>
              <p className="mt-4">Hackutd 2022</p>
            </div>

            <div className = "font-DM-Sans  text-center items-center flex flex-col ">
              <Link href="https://prod.hackutd.co/" target="_blank" rel="noopener noreferrer">
              <Image
                src={Hack2021}
                alt="Hack Badge 2021"
                className="w-28 h-28 mx-2 transition-transform duration-200 hover:scale-110 cursor-pointer"
              />
              </Link>
              <p className="mt-4">Hackutd 2021</p>
            </div>

            <div className = "font-DM-Sans  text-center items-center flex flex-col ">
              <Link href="https://vii.hackutd.co/" target="_blank" rel="noopener noreferrer">
              <Image
                src={Hack2020}
                alt="Hack Badge 2020"
                className="w-28 h-28 mx-2 transition-transform duration-200 hover:scale-110 cursor-pointer"
              />
              </Link>
              <p className="mt-4">Hackutd 2020</p>
            </div>
        </div>


        {/* Badges for past hackathons in mobile version */}
        <div className="flex lg:hidden w-full max-w-7xl mx-auto flex-col md:flex-row items-center px-8 py-4 gap-8 md:gap-32 mb-28">
          <div className="font-DM-Sans text-center items-center flex flex-col">
            <Link href="https://ripple.hackutd.co/" target="_blank" rel="noopener noreferrer">
              <Image
                src={Hack2024}
                alt="Hack Badge 2024"
                className="w-28 h-28 transition-transform duration-200 hover:scale-110 cursor-pointer"
              />
            </Link>
            <p className="mt-4 mb-8 md:mb-0">Hackutd 2024</p>
          </div>

          <div className = "font-DM-Sans  text-center items-center flex flex-col "> 
              <Link href="https://x.hackutd.co/" target="_blank" rel="noopener noreferrer">
              <Image
                src={Hack2023}
                alt="Hack Badge 2023"
                className="w-28 h-28 mx-2 transition-transform duration-200 hover:scale-110 cursor-pointer"
              />
              </Link>
              <p className="mt-4">Hackutd 2023</p>
            </div>
            
            <div className = "font-DM-Sans  text-center items-center flex flex-col ">
              <Link href="https://ix.hackutd.co/" target="_blank" rel="noopener noreferrer">
              <Image
                src={Hack2022}
                alt="Hack Badge 2022"
                className="w-28 h-28 mx-2 transition-transform duration-200 hover:scale-110 cursor-pointer"
              />
              </Link>
              <p className="mt-4">Hackutd 2022</p>
            </div>

            <div className = "font-DM-Sans  text-center items-center flex flex-col ">
              <Link href="https://prod.hackutd.co/" target="_blank" rel="noopener noreferrer">
              <Image
                src={Hack2021}
                alt="Hack Badge 2021"
                className="w-28 h-28 mx-2 transition-transform duration-200 hover:scale-110 cursor-pointer"
              />
              </Link>
              <p className="mt-4">Hackutd 2021</p>
            </div>

            <div className = "font-DM-Sans  text-center items-center flex flex-col ">
              <Link href="https://vii.hackutd.co/" target="_blank" rel="noopener noreferrer">
              <Image
                src={Hack2020}
                alt="Hack Badge 2020"
                className="w-28 h-28 mx-2 transition-transform duration-200 hover:scale-110 cursor-pointer"
              />
              </Link>
              <p className="mt-4">Hackutd 2020</p>
            </div>
          
        </div>
    </div>
  
  )
}

export default pastHackathons