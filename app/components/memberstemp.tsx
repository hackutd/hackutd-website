"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import * as XLSX from 'xlsx';

// TypeScript interfaces for type safety
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

interface MemberImageProps {
  member: TeamMember;
}

// Interface for Excel row data
interface ExcelRowData {
  [key: string]: string | number | undefined;
  'First Name'?: string;
  firstName?: string;
  First?: string;
  first?: string;
  'Last Name'?: string;
  lastName?: string;
  Last?: string;
  last?: string;
  Team?: string;
  team?: string;
  linkedin_url?: string;
  LinkedIn_URL?: string;
  'LinkedIn URL'?: string;
  linkedinUrl?: string;
  LinkedIn?: string;
}

const Members: React.FC = () => {
  // State to store all team members data
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  // Function to load Excel file automatically from assets
  const loadExcelFile = async (): Promise<void> => {
    try {
      setLoading(true);
      setError('');
      
      // Fetch the Excel file from public folder
      const response = await fetch('/hackCo2025.xlsx');
      const arrayBuffer = await response.arrayBuffer();
      
      // Step 1: Read the Excel workbook
      const workbook = XLSX.read(arrayBuffer);
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      
      // Step 2: Convert Excel sheet to JSON array with proper typing
      const rawData: ExcelRowData[] = XLSX.utils.sheet_to_json(worksheet);
      
      // Step 3: Transform raw Excel data into our TeamMember format
      const members: TeamMember[] = rawData.map((row: ExcelRowData, index: number) => {
        // Try different possible column names (handles variations in Excel headers)
        const firstName = row['First Name'] || row.firstName || row.First || row.first || 
                         (Object.values(row)[0] as string) || '';
        const lastName = row['Last Name'] || row.lastName || row.Last || row.last || 
                        (Object.values(row)[1] as string) || '';
        const team = row.Team || row.team || (Object.values(row)[3] as string) || '';
        const linkedinUrl = row['linkedin_url'] || row.linkedin_url || row.LinkedIn_URL || 
                           row['LinkedIn URL'] || row.linkedinUrl || row.LinkedIn || 
                           (Object.values(row)[4] as string) || '';
        
        // Create image path based on first name: /images/team/john.jpg
        const imagePath = firstName ? `/assets/team/${firstName.toLowerCase()}.jpg` : null;
        
        return {
          id: index + 1,
          firstName: String(firstName),
          lastName: String(lastName),
          fullName: `${firstName} ${lastName}`.trim(),
          team: String(team),
          linkedinUrl: String(linkedinUrl),
          imagePath,
          hasImage: !!firstName
        };
      });
      
      // Step 4: Update state with processed data
      setTeamMembers(members);
      
      // DEBUG: Log the first few members to check LinkedIn URLs
      console.log('First 3 members with LinkedIn data:', 
        members.slice(0, 3).map(m => ({
          name: m.fullName,
          linkedinUrl: m.linkedinUrl,
          hasLinkedIn: !!m.linkedinUrl
        }))
      );
      
    } catch (error) {
      console.error('Error loading Excel file:', error);
      setError('Failed to load team members data');
    } finally {
      setLoading(false);
    }
  };

  // Load Excel file when component first mounts
  useEffect(() => {
    loadExcelFile();
  }, []);

  // Component to display member image with fallback for missing images
  const MemberImage: React.FC<MemberImageProps> = ({ member }) => {
    const [imageError, setImageError] = useState<boolean>(false);
    
    // Show placeholder if no image or image failed to load
    if (!member.hasImage || imageError) {
      return (
        <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-xl font-bold">
          {member.firstName ? member.firstName[0].toUpperCase() : '?'}
        </div>
      );
    }
    
    // Show actual image using Next.js Image component for better performance
    return (
      <Image 
        src={member.imagePath || ''}
        alt={member.fullName}
        fill
        className="object-cover"
        sizes="120px"
        onError={() => setImageError(true)}
      />
    );
  };

  // Function to group team members by their team name
  const groupMembersByTeam = (members: TeamMember[]): Record<string, TeamMember[]> => {
    return members.reduce((groups: Record<string, TeamMember[]>, member: TeamMember) => {
      const team = member.team || 'No Team';
      if (!groups[team]) groups[team] = [];
      groups[team].push(member);
      return groups;
    }, {});
  };

  // Calculate team statistics
  const teamGroups = groupMembersByTeam(teamMembers);

  if (loading) {
    return (
      <div className="w-full min-h-[400px] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-[400px] flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="w-full py-6 bg-gradient-to-br from-gray-900 via-purple-900 to-black min-h-screen">
      {/* 80% Width Container */}
      <div className="w-[80%] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent mb-3">
            HackUTD Team
          </h1>
          <p className="text-sm text-gray-300">
            {teamMembers.length} members across {Object.keys(teamGroups).length} teams
          </p>
        </div>
        
        {/* Team Member HoneyComb */}
        <div className="max-h-[80vh] overflow-auto p-6 scrollbar-hide" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          <div className="flex flex-wrap justify-center gap-2">
            {teamMembers.map((member: TeamMember, index: number) => (
              <a
                key={member.id}
                href={member.linkedinUrl || '#'}
                target={member.linkedinUrl ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="group block cursor-pointer relative"
                style={{ pointerEvents: 'auto' }}
              >
                {/* Hexagonal */}
                <div 
                  className="relative w-32 h-32 m-1 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:z-10"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                  }}
                >
                  {/* Gradient Border */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 p-1"
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                    }}
                  >
                    <div 
                      className="w-full h-full bg-gray-800 relative overflow-hidden"
                      style={{
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                      }}
                    >
                      {/* Profile */}
                      <div className="absolute inset-0">
                        <MemberImage member={member} />
                      </div>
                      
                      {/* Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/95 via-pink-600/95 to-orange-600/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center">
                        {/* Name */}
                        <h3 
                          className="text-white font-bold leading-tight mb-1"
                          style={{
                            fontSize: member.fullName.length > 18 ? '0.6rem' : 
                                     member.fullName.length > 14 ? '0.7rem' : '0.8rem'
                          }}
                        >
                          {member.fullName}
                        </h3>
                        
                        {/* Team */}
                        <p 
                          className="text-white/90 leading-tight"
                          style={{
                            fontSize: member.team.length > 20 ? '0.5rem' : 
                                     member.team.length > 15 ? '0.55rem' : '0.6rem'
                          }}
                        >
                          {member.team}
                        </p>
                        
                        {/* LinkedIn */}
                        {member.linkedinUrl && (
                          <div className="mt-1">
                            <div className="w-4 h-4 bg-blue-500 rounded-sm flex items-center justify-center">
                              <span className="text-white text-xs font-bold">in</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
