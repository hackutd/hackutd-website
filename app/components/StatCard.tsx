"use client";

import { useState } from "react";

type StatCardProps = {
  title: string;
  subtitle: string;
  body: string;
  align?: "left" | "right" | "center";
};

export default function StatCard({
  title,
  subtitle,
  body,
  align = "left",
}: StatCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getAlignmentClasses = () => {
    switch (align) {
      case "center":
        return "items-center text-center";
      case "right":
        return "items-end text-right";
      default:
        return "items-start text-left";
    }
  };

  return (
    <div
      className={`
        flex flex-col justify-center
        w-[28vw] h-[35vh]
        rounded-[1rem]
        bg-gradient-to-br from-[rgba(193,193,255,0.15)] to-[rgba(193,193,255,0.25)]
        bg-blend-plus-lighter
        shadow-[-9.2px_-8.6px_39.8px_-9.9px_rgba(0,0,0,0.15),-1.54px_-1.44px_9.94px_-6.63px_rgba(0,0,0,0.10),1.93px_1.80px_14.09px_2.49px_rgba(193,193,255,0.13)_inset,1.16px_1.08px_23.2px_-2.49px_rgba(221,200,255,0.20)_inset]
        backdrop-blur-[9px]
        filter-[drop-shadow(-13.26px_15.74px_47.23px_rgba(96,109,255,0.5))]
        p-10
        border border-[rgba(255,255,255,0.1)]
        transition-all duration-500 ease-out
        transform hover:scale-105
        hover:shadow-[-15px_-15px_50px_-10px_rgba(0,0,0,0.25),-2px_-2px_15px_-8px_rgba(0,0,0,0.15),2px_2px_20px_3px_rgba(193,193,255,0.2)_inset,1.5px_1.5px_30px_-2px_rgba(221,200,255,0.3)_inset]
        hover:border-[rgba(255,255,255,0.2)]
        cursor-pointer
        group
        ${getAlignmentClasses()}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span 
        className={`
          text-[4vw] font-bold leading-none drop-shadow-lg
          transition-all duration-500 ease-out
          ${isHovered ? 'text-[4.2vw] text-white' : 'text-white/90'}
        `}
      >
        {title}
      </span>
      <span 
        className={`
          text-[1.5vw] font-medium mt-2
          transition-all duration-500 ease-out
          ${isHovered ? 'text-white' : 'text-white/80'}
        `}
      >
        {subtitle}
      </span>
      <span 
        className={`
          text-[1.2vw] font-normal mt-1
          transition-all duration-500 ease-out
          ${isHovered ? 'text-white/80' : 'text-white/60'}
        `}
      >
        {body}
      </span>
      
      <div 
        className={`
          absolute inset-0 rounded-[1rem] opacity-0
          transition-opacity duration-500 ease-out
          bg-gradient-to-br from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.05)]
          ${isHovered ? 'opacity-100' : ''}
        `}
      />
    </div>
  );
}