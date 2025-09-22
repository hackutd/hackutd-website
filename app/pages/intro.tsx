"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import * as XLSX from "xlsx";
import { gsap } from "gsap";

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

interface ExcelRowData {
  [key: string]: string | number | undefined;
  "First Name"?: string; firstName?: string; First?: string; first?: string;
  "Last Name"?: string;  lastName?: string;  Last?: string;  last?: string;
  Team?: string; team?: string;
  linkedin_url?: string; LinkedIn_URL?: string; "LinkedIn URL"?: string; linkedinUrl?: string; LinkedIn?: string;
}

interface TeamSlide {
  id: string;
  title: string;
  description: string;
  groupPhoto: string;
  members: TeamMember[];
}

export default function Intro() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError("");
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
        
        const uniqueTeams = [...new Set(members.map(m => m.team))];
        console.log("All teams found:", uniqueTeams);
      } catch (e) {
        console.error(e);
        setError("Failed to load team members data");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const teamSlides: TeamSlide[] = [
    {
      id: "intro",
      title: "Who we are",
      description: "We host HackUTD, Texas' largest hackathon. We also assist with other hackathons at UTD, and host helpful workshops that anyone can attend. Regardless of what we're working on, we aim to make our hackathons accessible and open to everyone. Glad to see you here! We inspire students to innovate and learn new technologies through hackathons, 24-hour events with challenges, free food & merch, and fun games & activities.",
      groupPhoto: "/Team.png",
      members: []
    },
    {
      id: "directors",
      title: "Directors",
      description: "Our Directors lead the strategic vision and overall direction of HackUTD. They oversee all major decisions, coordinate with university administration, manage external partnerships, and ensure the organization's mission is fulfilled. They bring years of experience and passion to create the best possible hackathon experience for our participants.",
      groupPhoto: "/assets/team/Directors.jpg",
      members: teamMembers.filter(member => 
        member.team.toLowerCase().includes('director') || 
        member.team.toLowerCase().includes('executive')
      )
    },
    {
      id: "marketing",
      title: "Marketing Team",
      description: "Our Marketing Team creates compelling content and manages our brand presence across all platforms. They design graphics, manage social media, create promotional materials, and ensure HackUTD reaches the right audience. They're the creative force behind our visual identity and outreach efforts.",
      groupPhoto: "/assets/team/group/Marketing.jpg",
      members: teamMembers.filter(member => 
        member.team.toLowerCase().includes('marketing') ||
        member.team.toLowerCase().includes('social') ||
        member.team.toLowerCase().includes('content')
      )
    },
    {
      id: "logistics",
      title: "Logistics Team",
      description: "Our Logistics Team handles stuff.",
      groupPhoto: "/assets/team/group/Logistics.jpg",
      members: teamMembers.filter(member => 
        member.team.toLowerCase().includes('logistics') ||
        member.team.toLowerCase().includes('operations') ||
        member.team.toLowerCase().includes('venue')
      )
    },
    {
      id: "experience",
      title: "Experience Team",
      description: "Our Experience Team focuses on creating memorable moments for our participants. They plan workshops, coordinate activities, manage the participant journey, and ensure everyone has an engaging and educational experience. They're dedicated to making HackUTD more than just a coding competition.",
      groupPhoto: "/assets/team/group/Experience.jpg",
      members: teamMembers.filter(member => 
        member.team.toLowerCase().includes('experience') ||
        member.team.toLowerCase().includes('workshop') ||
        member.team.toLowerCase().includes('activities')
      )
    },
    {
      id: "tech",
      title: "Tech Team",
      description: "Our Tech Team handles all the technical aspects of our hackathons. They manage our website, develop tools and platforms, handle technical support during events, and ensure all our digital systems run smoothly. They're the backbone of our technical infrastructure.",
      groupPhoto: "/assets/team/group/Tech.jpg",
      members: teamMembers.filter(member => 
        member.team.toLowerCase().includes('tech') ||
        member.team.toLowerCase().includes('development') ||
        member.team.toLowerCase().includes('engineering') ||
        member.team.toLowerCase().includes('web')
      )
    },
    {
      id: "industry",
      title: "Industry Team",
      description: "Our Industry Team connects students with real-world opportunities and industry professionals. They organize networking events, coordinate industry partnerships, facilitate mentorship programs, and help bridge the gap between academic learning and professional development.",
      groupPhoto: "/assets/team/group/Industry.jpg",
      members: teamMembers.filter(member => 
        member.team.toLowerCase().includes('industry') ||
        member.team.toLowerCase().includes('networking') ||
        member.team.toLowerCase().includes('mentorship') ||
        member.team.toLowerCase().includes('professional')
      )
    },
    {
      id: "finance",
      title: "Finance Team",
      description: "Our Finance Team manages the financial aspects of HackUTD operations. They handle budgeting, expense tracking, financial planning, and ensure responsible stewardship of our resources. They work closely with all teams to maintain financial transparency and sustainability.",
      groupPhoto: "/assets/team/group/Finance.jpg",
      members: teamMembers.filter(member => 
        member.team.toLowerCase().includes('finance') ||
        member.team.toLowerCase().includes('financial') ||
        member.team.toLowerCase().includes('budget') ||
        member.team.toLowerCase().includes('treasury')
      )
    }
  ];

  const animateSlideTransition = (newSlide: number) => {
    if (isAnimating || !contentRef.current) return;
    
    setIsAnimating(true);
    
    gsap.to(contentRef.current, {
      opacity: 0,
      y: -30,
      scale: 0.95,
      duration: 0.3,
      ease: "power2.inOut",
      onComplete: () => {
        setCurrentSlide(newSlide);
        
        // Animate in new content
        gsap.fromTo(contentRef.current, 
          {
            opacity: 0,
            y: 30,
            scale: 0.95
          },
        {
          opacity: 1,
          y: 0,
            scale: 1,
            duration: 0.4,
          ease: "power2.out",
            onComplete: () => {
              setIsAnimating(false);
            }
          }
        );
      }
    });
  };

  const nextSlide = () => {
    const newSlide = (currentSlide + 1) % teamSlides.length;
    animateSlideTransition(newSlide);
  };

  const prevSlide = () => {
    const newSlide = (currentSlide - 1 + teamSlides.length) % teamSlides.length;
    animateSlideTransition(newSlide);
  };

  const goToSlide = (index: number) => {
    if (index !== currentSlide) {
      animateSlideTransition(index);
    }
  };

  const currentTeamSlide = teamSlides[currentSlide];

  const getTeamQuote = (teamId: string): string => {
    const quotes: { [key: string]: string } = {
      "directors": "Hi! We're Addy and Kelly the Co-Directors this year. Our team has been working super hard all year and we're so excited to put on an incredible event! See you there!.",
      "marketing": "Hey y'all! I'm Jordan, the marketing lead of this year and I can't wait to show y'all the amazing event that we've been putting together for y'all this year (and the fire merch that's coming 👀) Hope to see y'all there!",
      "logistics": "Heyyy! I'm Anwita, the Logistics Lead this year! With my awesome team, I'll make sure you're well-fed and loaded up with cool swag so look forward to that. Can't wait to see everyone at HackUTD!",
      "experience": "SUP SUP SUP! It's Daniel and I'm the HackUTD Experience Lead this year! I'm really looking forward to connecting with you all! Follow to stay up to date with all of the events we have coming up! Hope to see y'all there! 🫶",
      "tech": "Hey! My name is Rayyan and I'm the Tech Lead for HackUTD this year. My team works behind the scenes to keep everything from registrations to check ins to judging running smoothly. If things feel seamless, it's because we're on deck around the clock making it that way. Can't wait to see y'all at HackUTD!",
      "industry": "Hey guys I'm Ridwan and I'm the Industry lead of HackUTD this year! Along with the industry team, we work on bringing challenge statements, workshops, and other cool sponsorship opportunities to HackUTD! SUPER HYPED and excited to see all of our sponsors and hackers this year!",
      "finance": "Hiiiiiii! I'm Ayusha and I'm the Finance Lead for HackUTD this year! 💸 My job is making sure we don't go broke while still making HackUTD the best it can be! Superrrr excited to see everyone at the event and can't wait for y'all to experience what we've been working on!"
    };
    return quotes[teamId] || "Together we build the future, one hackathon at a time.";
  };

  const getTeamLeadName = (teamId: string): string => {
    const leadNames: { [key: string]: string } = {
      "directors": "Addy Dunning & Kelly Zhou",
      "marketing": "Jordan Tan",
      "logistics": "Anwita Gudapuri",
      "experience": "Daniel Kim",
      "tech": "Rayyan Waris",
      "industry": "Ridwan Amin",
      "finance": "Ayusha Timalsena"
    };
    return leadNames[teamId] || "Team Lead";
  };

  if (loading) {
    return (
      <section className="relative min-h-screen p-4 md:p-16 bg-gradient-to-b from-[#0B070C] to-[#211824] text-white overflow-hidden flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative min-h-screen p-4 md:p-16 bg-gradient-to-b from-[#0B070C] to-[#211824] text-white overflow-hidden flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen p-4 md:p-16 bg-gradient-to-b from-[#0B070C] to-[#211824] text-white overflow-hidden"
    >

      {/* Main Content */}
      {currentSlide === 0 ? (
        // Centered layout for "Who we are" slide
        <div ref={contentRef} className="flex flex-col items-center justify-center min-h-[60vh] mb-8 md:mb-16">
          <div className="text-center max-w-4xl mb-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-[#FF56D6] to-[#FF9167] bg-clip-text text-transparent">
                {currentTeamSlide.title}
            </span>
          </h2>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              {currentTeamSlide.description}
            </p>
        </div>

          <div className="flex items-center justify-center">
            <div className="relative rounded-lg h-[30vh] md:h-[40vh] w-[80vw] md:w-[50vw] max-w-2xl shadow-2xl overflow-hidden">
            <Image
                src={currentTeamSlide.groupPhoto}
                alt={`${currentTeamSlide.title} Team`}
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </div>
        </div>
      ) : (
        // Side-by-side layout for team slides
        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-8 md:mb-16">
          <div className="text-center md:text-left order-1">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-[#FF56D6] to-[#FF9167] bg-clip-text text-transparent">
                {currentTeamSlide.title}
              </span>
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              {currentTeamSlide.description}
            </p>
      </div>

          <div className="flex items-center order-2">
            <div className="relative rounded-lg h-[30vh] md:h-[40vh] w-full shadow-2xl overflow-hidden">
            <Image
                src={currentTeamSlide.groupPhoto}
                alt={`${currentTeamSlide.title} Team`}
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </div>
        </div>
      )}

      {/* Left Navigation Button */}
      <button
        onClick={prevSlide}
        disabled={isAnimating}
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 z-10 ${
          isAnimating 
            ? 'bg-gray-500/50 cursor-not-allowed' 
            : 'bg-black/70 hover:bg-black/90 hover:scale-110 active:scale-95'
        }`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Navigation Button */}
      <button
        onClick={nextSlide}
        disabled={isAnimating}
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 z-10 ${
          isAnimating 
            ? 'bg-gray-500/50 cursor-not-allowed' 
            : 'bg-black/70 hover:bg-black/90 hover:scale-110 active:scale-95'
        }`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Bottom Section - Individual Members and Quote */}
      {currentTeamSlide.members.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-8">
          {/* Individual Members - Bottom Left */}
          <div className="order-1">
            <h3 className="text-white font-semibold text-lg md:text-xl mb-4 text-center md:text-left">
              Team Members
            </h3>
            <div className="grid grid-cols-4 md:grid-cols-6 gap-3 md:gap-4">
              {currentTeamSlide.members.map((member, index) => (
                <div key={index} className="text-center group">
                  <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto mb-2 rounded-full overflow-hidden border-2 border-transparent hover:border-purple-500 transition-colors duration-300">
                    {member.hasImage && member.imagePath ? (
            <Image
                        src={member.imagePath}
                        alt={member.fullName}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          // Fallback to initials if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-lg md:text-xl font-black tracking-wider">
                                ${member.firstName ? member.firstName[0].toUpperCase() : "?"}
                              </div>
                            `;
                          }
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-lg md:text-xl font-black tracking-wider">
                        {member.firstName ? member.firstName[0].toUpperCase() : "?"}
          </div>
                    )}
                    
                    {/* Social Media Overlay */}
                    {member.linkedinUrl && member.linkedinUrl !== "" && (
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <a
                          href={member.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                  <h4 className={`font-medium text-xs mb-1 text-center ${
                    currentTeamSlide.id !== "directors" && index === 0
                      ? "text-yellow-400 font-bold"
                      : "text-white"
                  }`}>
                    {member.fullName}
                    {currentTeamSlide.id !== "directors" && index === 0 && (
                      <span className="block text-yellow-300 text-xs font-normal text-center">Team Lead</span>
                    )}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Section - Bottom Right */}
          <div className="order-2">
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg p-6 md:p-8 border border-purple-500/20">
              <div className="text-center md:text-right">
                <svg className="w-8 h-8 text-purple-400 mx-auto md:mx-0 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
                <blockquote className="text-gray-200 text-sm md:text-base italic leading-relaxed mb-4">
                  {getTeamQuote(currentTeamSlide.id)}
                </blockquote>
                <cite className="text-purple-300 text-xs md:text-sm font-medium">
                  — {getTeamLeadName(currentTeamSlide.id)}
                </cite>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dot Navigation - Bottom Center */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {teamSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-gradient-to-r from-[#FF56D6] to-[#FF9167] scale-125"
                : isAnimating 
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-gray-600 hover:bg-gray-500 hover:scale-110"
            }`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-4 right-4 bg-black/50 rounded-full px-4 py-2 text-white text-sm font-medium">
        {currentSlide + 1} / {teamSlides.length}
      </div>
    </section>
  );
}
