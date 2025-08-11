"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import * as XLSX from "xlsx";

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
const ROW_OVERLAP = Math.round(HEX_H * 0.25);            
const ODD_ROW_SHIFT = Math.round(HEX_W * 0.5);           
const BORDER = 2;                                        
const MAX_PER_ROW = 9;                                   

/* --------- Team Colors --------- */
const getTeamColor = (team: string) => {
  const colors: Record<string, string> = {
    "Directors": "from-purple-500 to-purple-600",
    "Tech": "from-blue-500 to-cyan-500", 
    "Marketing": "from-pink-500 to-rose-500",
    "Logistics": "from-green-500 to-emerald-500",
    "Experience": "from-orange-500 to-amber-500",
    "Finance": "from-indigo-500 to-purple-500",
    "Outreach": "from-teal-500 to-cyan-500"
  };
  return colors[team] || "from-gray-500 to-gray-600";
};

const Members: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  const MemberImage: React.FC<MemberImageProps> = ({ member }) => {
    const [imageError, setImageError] = useState(false);

    if (!member.hasImage || imageError) {
      return (
        <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-xl font-bold">
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
  
  const teamGroups = teamMembers.reduce((groups, member) => {
    const team = member.team || 'Other';
    if (!groups[team]) groups[team] = [];
    groups[team].push(member);
    return groups;
  }, {} as Record<string, TeamMember[]>);

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
    <div className="w-full min-h-screen py-6 bg-black">
      <div className="w-[95%] max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-2">
            HackUTD Team
          </h1>
          <p className="text-sm text-gray-400">{teamMembers.length} amazing members</p>
        </div>


        <div className="space-y-12">
          {Object.entries(teamGroups).map(([teamName, members]) => (
            <div key={teamName} className="text-center">
              
              <div className="mb-6">
                <h2 className={`text-2xl font-bold bg-gradient-to-r ${getTeamColor(teamName)} bg-clip-text text-transparent mb-2`}>
                  {teamName}
                </h2>
                <p className="text-gray-400 text-sm">{members.length} member{members.length !== 1 ? 's' : ''}</p>
              </div>

 
              <div className="flex flex-col items-center">
                {chunk(members, MAX_PER_ROW).map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="flex justify-center"
                    style={{
                      marginTop: rowIndex === 0 ? 0 : -ROW_OVERLAP,
                      transform: rowIndex % 2 ? `translateX(${ODD_ROW_SHIFT}px)` : "none",
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
                          className="relative"
                          style={{
                            width: HEX_W,
                            height: HEX_H,
                            clipPath: hexClip,
                            background: "linear-gradient(90deg,#a855f7,#ec4899,#f59e0b)",
                            contain: "layout paint",
                          }}
                        >
                         
                          <div className="absolute bg-black overflow-hidden" style={{ inset: BORDER, clipPath: hexClip }}>
              
                            <MemberImage member={member} />
                          </div>
                        </div>

                
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-30">
                          <div className="bg-black/95 backdrop-blur-md border border-purple-500/60 rounded-xl p-4 text-center min-w-[180px] shadow-2xl">
                            <h3 className="text-white font-bold text-base mb-2">
                              {member.fullName}
                            </h3>
                            <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getTeamColor(member.team)} text-white`}>
                              {member.team}
                            </div>
                          </div>
                         
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/95"></div>
                        </div>
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;