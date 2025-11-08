export interface TeamMember {
    name: string;
    role: string;
    imagePath: string;
  }
  
  export interface TeamSlide {
    id: string;
    title: string;
    description: string;
    groupPhoto: string;
    members: TeamMember[];
  }
  
  export const teamSlides: TeamSlide[] = [
    {
      id: "intro",
      title: "Who we are",
      description: "We host HackUTD, Texas' largest hackathon. We also assist with other hackathons at UTD, and host helpful workshops that anyone can attend. Regardless of what we're working on, we aim to make our hackathons accessible and open to everyone. Glad to see you here!",
      groupPhoto: "/Team.png",
      members: [],
    },
    {
      id: "directors",
      title: "Directors",
      description: "Meet our leadership team guiding HackUTD to success.",
      groupPhoto: "/assets/team/Directors.jpg",
      members: [
        { name: "Kelly Zhou", role: "Co-Director", imagePath: "/assets/team/Kelly.jpg" },
        { name: "Adelaide Dunning", role: "Co-Director", imagePath: "/assets/team/Adelaide (Addy).jpg" },
      ],
    },
    {
      id: "experience",
      title: "Experience Team",
      description: "Creating memorable experiences for all participants.",
      groupPhoto: "/assets/team/Experienceteam.jpg",
      members: [],
    },
    {
      id: "marketing",
      title: "Marketing Team",
      description: "Spreading the word and building our community.",
      groupPhoto: "/assets/team/MarketingGoats.jpg",
      members: [],
    },
    {
      id: "logistics",
      title: "Logistics Team",
      description: "Ensuring everything runs smoothly behind the scenes.",
      groupPhoto: "/assets/team/Logisticsteam.jpg",
      members: [],
    },
  ];
  