import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Text scramble effect
const scrambleText = (randomText: string, actualText: string, element: HTMLElement) => {
  const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?~`';
  let iterations = 0;
  
  const interval = setInterval(() => {
    element.textContent = actualText
      .split('')
      .map((char, index) => {
        if (index < iterations) {
          return actualText[index];
        }
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join('');
    
    if (iterations >= actualText.length) {
      clearInterval(interval);
      element.textContent = actualText;
    }
    
    iterations += 2;
  }, 30);
};

export const initIntroAnimations = (
  topRowRef: React.RefObject<HTMLElement | null>,
  bottomRowRef: React.RefObject<HTMLElement | null>,
  titleRefs: React.RefObject<HTMLHeadingElement | null>[],
  textRefs: React.RefObject<HTMLParagraphElement | null>[],
  imageRefs: React.RefObject<HTMLDivElement | null>[],
  magneticRefs: React.RefObject<HTMLDivElement | null>[],
  revealedTexts: Set<string>,
  setRevealedTexts: (texts: Set<string>) => void,
  isHovered: string | null,
  setIsHovered: (id: string | null) => void
) => {
  // Get actual DOM elements
  const titles = titleRefs.map(ref => ref.current).filter(Boolean) as HTMLElement[];
  const texts = textRefs.map(ref => ref.current).filter(Boolean) as HTMLElement[];
  const images = imageRefs.map(ref => ref.current).filter(Boolean) as HTMLElement[];
  const magneticElements = magneticRefs.map(ref => ref.current).filter(Boolean) as HTMLElement[];

  // Check if we have elements to animate
  console.log('Animation elements found:', {
    titles: titles.length,
    texts: texts.length,
    images: images.length,
    magneticElements: magneticElements.length
  });

  if (titles.length === 0 && texts.length === 0 && images.length === 0) {
    console.log('No elements found for animation');
    return;
  }

  // Initial state - hide all elements
  gsap.set([titles, texts, images], {
    opacity: 0,
    y: 50,
  });

  // Set initial random text for scramble effect
  const textElements = document.querySelectorAll('[id*="-text-"], [id*="-title"]');
  textElements.forEach((element) => {
    const actualText = element.textContent || '';
    const randomText = actualText.split('').map(() => '!@#$%^&*()_+-=[]{}|;:,.<>?~`'[Math.floor(Math.random() * 30)]).join('');
    element.textContent = randomText;
  });

  // Animate top row
  const topRowTl = gsap.timeline({
    scrollTrigger: {
      trigger: topRowRef.current,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  topRowTl
    .to(titles[0], {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    })
    .to(texts.slice(0, 2), {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out",
    }, "-=0.4")
    .to(images[0], {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.6");

  // Animate bottom row
  const bottomRowTl = gsap.timeline({
    scrollTrigger: {
      trigger: bottomRowRef.current,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  bottomRowTl
    .to(images[1], {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    })
    .to(titles[1], {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.4")
    .to(texts.slice(2, 4), {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out",
    }, "-=0.4");

  // Add subtle floating animation to images
  images.forEach((image, index) => {
    gsap.to(image, {
      y: -15,
      duration: 3 + index * 0.5,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      delay: index * 0.3,
    });
  });

  // Add text reveal effect for titles
  titles.forEach((title) => {
    const chars = title.textContent?.split('') || [];
    title.innerHTML = chars.map(char => 
      char === ' ' ? ' ' : `<span class="char">${char}</span>`
    ).join('');
    
    const charSpans = title.querySelectorAll('.char');
    gsap.set(charSpans, { opacity: 0, y: 20 });
    
    gsap.to(charSpans, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.03,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: title,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  });

  // Magnetic hover effect
  magneticElements.forEach((element) => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const distance = Math.sqrt(x * x + y * y);
      const maxDistance = Math.sqrt(rect.width * rect.width + rect.height * rect.height) / 2;
      const strength = Math.max(0, 1 - distance / maxDistance);
      
      const moveX = x * strength * 0.3;
      const moveY = y * strength * 0.3;
      
      gsap.to(element, {
        x: moveX,
        y: moveY,
        scale: 1 + strength * 0.05,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup event listeners
    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  });

  // Cleanup function
  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
};

export const handleTextScramble = (
  elementId: string, 
  actualText: string, 
  revealedTexts: Set<string>,
  setRevealedTexts: (texts: Set<string>) => void,
  isHovered: string | null,
  setIsHovered: (id: string | null) => void
) => {
  const element = document.getElementById(elementId);
  if (element) {
    // If text is already revealed, don't do anything
    if (revealedTexts.has(elementId)) {
      return;
    }
    
    if (isHovered === elementId) {
      // Don't scramble back - keep the revealed text
      setIsHovered(null);
    } else {
      // Scramble to actual text
      scrambleText('', actualText, element);
      setIsHovered(elementId);
      
      // Mark this text as revealed after animation completes
      setTimeout(() => {
        setRevealedTexts(new Set([...revealedTexts, elementId]));
      }, actualText.length * 15); // Approximate time for animation to complete
    }
  }
};
