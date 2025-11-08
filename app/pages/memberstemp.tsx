"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import * as XLSX from "xlsx";
import { initMembersAnimations } from "../animations/membersAnimations";

interface TeamMember {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  team: string;
  linkedinUrl: string;
  imagePath: string | null;
  hasImage: boolean;
}
interface MemberImageProps { member: TeamMember; }
interface ExcelRowData {
  [key: string]: string | number | undefined;
  "First Name"?: string; firstName?: string; First?: string; first?: string;
  "Last Name"?: string;  lastName?: string;  Last?: string;  last?: string;
  Team?: string; team?: string;
  linkedin_url?: string; LinkedIn_URL?: string; "LinkedIn URL"?: string; linkedinUrl?: string; LinkedIn?: string;
}

const HEX_W = 120;                                       
const HEX_H = Math.round((2 / Math.sqrt(3)) * HEX_W);   
const ROW_OVERLAP = Math.round(HEX_H * 0.3);            
const ODD_ROW_SHIFT = Math.round(HEX_W * 0.5);          
const BORDER = 2;                                        
const FUDGE_Y = 0;                                       
const MAX_PER_ROW = 4;                                   

const Members: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const membersContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true); setError("");
        const res = await fetch("/hackCo2025.xlsx");
        const buf = await res.arrayBuffer();
        const wb = XLSX.read(buf);
        const ws = wb.Sheets[wb.SheetNames[0]];
        const raw: ExcelRowData[] = XLSX.utils.sheet_to_json(ws);

        const members: TeamMember[] = raw.map((row, i) => {
          const firstName =
            row["First Name"] ?? row.firstName ?? row.First ?? row.first ?? (Object.values(row)[0] as string) ?? "";
          const lastName =
            row["Last Name"] ?? row.lastName ?? row.Last ?? row.last ?? (Object.values(row)[1] as string) ?? "";
          const team = row.Team ?? row.team ?? (Object.values(row)[3] as string) ?? "";
          const linkedinUrl =
            row.linkedin_url ?? row["linkedin_url"] ?? row.LinkedIn_URL ?? row["LinkedIn URL"] ??
            row.linkedinUrl ?? row.LinkedIn ?? (Object.values(row)[4] as string) ?? "";

          const imagePath = firstName ? `/assets/team/${String(firstName).toLowerCase()}.jpg` : null;

          return {
            id: i + 1,
            firstName: String(firstName),
            lastName: String(lastName),
            fullName: `${firstName} ${lastName}`.trim(),
            team: String(team),
            linkedinUrl: String(linkedinUrl),
            imagePath,
            hasImage: !!firstName,
          };
        });

        setTeamMembers(members);
      } catch (e) {
        console.error(e);
        setError("Failed to load team members data");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  
  useEffect(() => {
    if (!loading && teamMembers.length > 0) {
      const timer = setTimeout(() => {
        initMembersAnimations();
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [loading, teamMembers.length]);

  const MemberImage: React.FC<MemberImageProps> = ({ member }) => {
    const [imageError, setImageError] = useState(false);

    if (!member.hasImage || imageError) {
      return (
        <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-2xl md:text-3xl font-black tracking-wider">
          {member.firstName ? member.firstName[0].toUpperCase() : "?"}
        </div>
      );
    }
    return (
      <Image
        src={member.imagePath || ""}
        alt={member.fullName}
        fill
        className="object-cover"
        sizes={`${HEX_W - 2 * BORDER}px`}
        quality={95}
        onError={() => setImageError(true)}
      />
    );
  };

  const chunk = <T,>(arr: T[], n: number) =>
    Array.from({ length: Math.ceil(arr.length / n) }, (_, i) => arr.slice(i * n, i * n + n));
  
  const createAlternatingLayout = (members: TeamMember[]) => {
    const rows: TeamMember[][] = [];
    let currentIndex = 0;
    let rowIndex = 0;
    
    while (currentIndex < members.length) {
      const isEvenRow = rowIndex % 2 === 0;
      const rowSize = isEvenRow ? 5 : 7;
      const row = members.slice(currentIndex, currentIndex + rowSize);
      if (row.length > 0) {
        rows.push(row);
      }
      currentIndex += rowSize;
      rowIndex++;
    }
    
    return rows;
  };
  
  const rows = createAlternatingLayout(teamMembers);

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }
  if (error) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  const hexClip = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

  return (
    <div className="w-full min-h-screen flex items-center justify-center py-6 md:py-8 bg-black">
      <div className="w-[95%] max-w-8xl px-4 md:px-0">
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-4 md:mb-6 tracking-tight">
            HackUTD Team
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 font-medium tracking-wide">
            {teamMembers.length} amazing members building the future
          </p>
        </div>

        <div ref={membersContainerRef} data-members-container className="flex flex-col items-center">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex justify-center"
              style={{
                marginTop: rowIndex === 0 ? 0 : -ROW_OVERLAP,
                transform: rowIndex % 2 ? `translateX(-${ODD_ROW_SHIFT}px)` : "none",
              }}
            >
              {row.map((member) => (
                <a
                  key={member.id}
                  href={member.linkedinUrl || "#"}
                  target={member.linkedinUrl ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="group relative block"
                >
                  <div
                    data-hexagon
                    className="relative"
                    style={{
                      width: HEX_W,
                      height: HEX_H,
                      clipPath: hexClip,
                      background: "linear-gradient(90deg,#a855f7,#ec4899,#f59e0b)",
                      contain: "layout paint",
                      transform: "translateZ(0)",
                    }}
                  >
                    
                    <div className="absolute bg-black overflow-hidden" style={{ inset: BORDER, clipPath: hexClip }}>
                      <MemberImage member={member} />
                      
                      <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-center p-1">
                        <h3 className="text-white font-bold text-[8px] md:text-[8px] lg:text-[10px] xl:text-xs mb-0.5 leading-tight tracking-wide">
                          {member.fullName}
                        </h3>
                        <div className="text-purple-300 text-[6px] md:text-[6px] lg:text-[8px] font-semibold leading-tight tracking-wide uppercase">
                          {member.team}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
