import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const initOpenSourceAnimations = (
  sectionRef: React.RefObject<HTMLElement | null>,
  headerRef: React.RefObject<HTMLDivElement | null>,
  titleRef: React.RefObject<HTMLHeadingElement | null>,
  subtitleRef: React.RefObject<HTMLParagraphElement | null>,
  projectsRef: React.RefObject<HTMLDivElement | null>,
  projectCardRefs: React.RefObject<HTMLDivElement[]>,
  projectImageRefs: React.RefObject<HTMLDivElement[]>,
  projectTitleRefs: React.RefObject<HTMLHeadingElement[]>,
  projectDescRefs: React.RefObject<HTMLParagraphElement[]>
) => {
  const cards = projectCardRefs.current;
  const images = projectImageRefs.current;
  const titles = projectTitleRefs.current;
  const descriptions = projectDescRefs.current;

  
  gsap.set([cards, images, titles, descriptions], {
    opacity: 0,
    y: 60,
  });

  
  setTimeout(() => {
    if (headerRef.current && titleRef.current && subtitleRef.current) {
     
      gsap.set([headerRef.current], {
        opacity: 0,
        y: 30,
      });

      
      const headerTl = gsap.timeline();
      headerTl
        .to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        })
        .to(subtitleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        }, "-=0.6");
    }
  }, 100);

 
  const cardsTl = gsap.timeline({
    scrollTrigger: {
      trigger: projectsRef.current,
      start: "top 75%",
      end: "bottom 25%",
      toggleActions: "play none none reverse",
    },
  });

  cardsTl
    .to(cards, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.4,
      ease: "power3.out",
    })
    .to(images, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.7)",
    }, "-=0.6")
    .to(titles, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
    }, "-=0.4")
    .to(descriptions, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
    }, "-=0.3");

 
  cards.forEach((card, index) => {
    gsap.to(card, {
      y: -20,
      duration: 4 + index * 0.5,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      delay: index * 0.8,
    });
  });

  
  images.forEach((image) => {
    const hoverTl = gsap.timeline({ paused: true });
    hoverTl.to(image, {
      scale: 1.05,
      rotationY: 5,
      duration: 0.3,
      ease: "power2.out",
    });

    image.addEventListener('mouseenter', () => hoverTl.play());
    image.addEventListener('mouseleave', () => hoverTl.reverse());
  });

  
  titles.forEach((title) => {
    const chars = title.textContent?.split('') || [];
    title.innerHTML = chars.map(char => 
      char === ' ' ? ' ' : `<span class="char">${char}</span>`
    ).join('');
    
    const charSpans = title.querySelectorAll('.char');
    gsap.set(charSpans, { opacity: 0, y: 30, rotationX: 90 });
    
    gsap.to(charSpans, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 0.6,
      stagger: 0.05,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: title,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  });

  
  gsap.to(sectionRef.current, {
    backgroundPosition: "50% 100%",
    ease: "none",
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  
  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
};
