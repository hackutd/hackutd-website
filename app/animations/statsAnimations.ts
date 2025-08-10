import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const initStatsAnimations = (
  sectionRef: React.RefObject<HTMLElement | null>,
  cardsRef: React.RefObject<HTMLDivElement[]>,
  setIsHovered: (index: number | null) => void
) => {
  const cards = cardsRef.current;
  
  gsap.set(cards, {
    opacity: 0,
    y: 100,
    scale: 0.8,
    rotationX: 45,
    rotationY: 15,
    transformOrigin: "center center",
  });

  
  cards.forEach((card, index) => {
    gsap.to(card, {
      opacity: 1,
      y: 0,
      scale: 1,
      rotationX: 0,
      rotationY: 0,
      duration: 1.5,
      ease: "power3.out",
      delay: index * 0.4, 
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
        markers: false,
      },
    });
  });





  cards.forEach((card, index) => {
   
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      overflow: hidden;
      border-radius: 1rem;
    `;
    card.appendChild(particleContainer);

    
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: linear-gradient(45deg, #FF56D6, #FF9167);
        border-radius: 50%;
        opacity: 0;
        pointer-events: none;
      `;
      particleContainer.appendChild(particle);

     
      const startX = ((i * 137.5) % 100);
      const startY = ((i * 73.3) % 100);
      const endX = ((i * 89.2) % 100);
      const endY = ((i * 156.7) % 100);
      const delay = ((i * 0.7) % 2);
      const duration = 2 + ((i * 0.4) % 2);

      
      gsap.set(particle, {
        x: startX,
        y: startY,
        opacity: 0,
      });

      gsap.to(particle, {
        x: endX,
        y: endY,
        opacity: 0,
        scale: 0,
        duration: duration,
        repeat: -1,
        delay: delay,
        ease: "power2.inOut",
      });

    
      const particleTl = gsap.timeline({ repeat: -1 });
      particleTl
        .to(particle, { opacity: 1, scale: 1, duration: 1, ease: "power2.in" })
        .to(particle, { opacity: 0, scale: 0, duration: 1, ease: "power2.out" });
    }
  });

  
  cards.forEach((card, index) => {
    let isHovering = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovering) return;
      
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const distance = Math.sqrt(x * x + y * y);
      const maxDistance = Math.sqrt(rect.width * rect.width + rect.height * rect.height) / 2;
      const strength = Math.max(0, 1 - distance / maxDistance);
      
      const rotateX = (y / rect.height) * strength * 2;
      const rotateY = -(x / rect.width) * strength * 2;
      
      gsap.to(card, {
        rotationX: rotateX,
        rotationY: rotateY,
        scale: 1 + strength * 0.01, 
        duration: 0.8, 
        ease: "power1.out", 
      });
    };

    const handleMouseEnter = () => {
      isHovering = true;
      setIsHovered(index);
      
      
      const particles = card.querySelectorAll('.particle');
      gsap.to(particles, {
        opacity: 1,
        scale: 1.5,
        duration: 0.3,
        stagger: 0.02,
      });
    };

    const handleMouseLeave = () => {
      isHovering = false;
      setIsHovered(null);
      
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        duration: 1.2, 
        ease: "power2.out", 
      });

      
      const particles = card.querySelectorAll('.particle');
      gsap.to(particles, {
        opacity: 0.3,
        scale: 1,
        duration: 0.5, 
      });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
  });

  
  const numberElements = document.querySelectorAll('[data-number]');
  numberElements.forEach((element) => {
    const finalNumber = parseInt(element.getAttribute('data-number') || '0');
    const suffix = element.getAttribute('data-suffix') || '';
    
    gsap.to({}, {
      duration: 2,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
      },
      onUpdate: function() {
        const progress = this.progress();
        const currentNumber = Math.floor(finalNumber * progress);
        element.textContent = currentNumber + suffix;
      },
      onComplete: function() {
        element.textContent = finalNumber + suffix;
      }
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

 
  cards.forEach((card, index) => {
    gsap.to(card, {
      y: -3, 
      duration: 4 + index * 0.5, 
      ease: "power1.inOut", 
      yoyo: true,
      repeat: -1,
      delay: index * 0.8, 
    });
  });


  const timelinePhotos = document.querySelectorAll('.timeline-photo');
  timelinePhotos.forEach((photo, index) => {
    gsap.to(photo, {
      y: -100 + (index * 50),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  
  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
};
