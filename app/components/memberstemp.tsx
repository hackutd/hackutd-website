"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import * as XLSX from "xlsx";

/* ---------------- Types ---------------- */
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

/* --------- Geometry: pointy-top hex (no horizontal overlap) ---------
 * H = (2/√3) * W  ≈ 1.1547 * W
 * Row step:       -25% of H  (rows interlock)
 * Odd-row shift:  +50% of W
 * Same-row:        0 overlap  (no margin-left between items)
  --------------------------------------------------------------------- */
const HEX_W = 120;                                       // smaller width
const HEX_H = Math.round((2 / Math.sqrt(3)) * HEX_W);    // ≈ 1.1547 * W
const ROW_OVERLAP = Math.round(HEX_H * 0.3);             // Increased to 30% of height for better connection
const ODD_ROW_SHIFT = Math.round(HEX_W * 0.5);           // 50% of width
const BORDER = 2;                                        // visual border (px)
const FUDGE_Y = 0;                                       // Removed fudge factor
const MAX_PER_ROW = 9;

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
  const rows = chunk(teamMembers, MAX_PER_ROW);

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
    <div className="w-full min-h-screen flex items-center justify-center py-6 bg-black">
      <div className="w-[95%] max-w-8xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-2">
            HackUTD Team
          </h1>
          <p className="text-sm text-gray-400">{teamMembers.length} amazing members</p>
        </div>

        {/* Honeycomb */}
        <div className="flex flex-col items-center">
          {rows.map((row, rowIndex) => (
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
                  {/* Outer hex with gradient border; fixed box size (no padding) */}
                  <div
                    className="relative"
                    style={{
                      width: HEX_W,
                      height: HEX_H,
                      clipPath: hexClip,
                      background: "linear-gradient(90deg,#a855f7,#ec4899,#f59e0b)",
                      contain: "layout paint",
                      transform: "translateZ(0)", // guards against subpixel bleed
                    }}
                  >
                    {/* Inner content inset = visible border */}
                    <div className="absolute bg-black overflow-hidden" style={{ inset: BORDER, clipPath: hexClip }}>
                      {/* Image layer */}
                      <MemberImage member={member} />
                      
                      {/* Hover Overlay - shows info within hexagon */}
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-center p-2">
                        <h3 className="text-white font-bold text-sm mb-1 leading-tight">
                          {member.fullName}
                        </h3>
                        <div className="text-purple-300 text-xs font-medium leading-tight">
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
