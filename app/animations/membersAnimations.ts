import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initMembersAnimations = () => {
  const hexagons = document.querySelectorAll('[data-hexagon]');
  

  gsap.set(hexagons, {
    y: 100,
    opacity: 0,
    scale: 0.5,
    rotation: 180
  });

  gsap.to(hexagons, {
    y: 0,
    opacity: 1,
    scale: 1,
    rotation: 0,
    duration: 0.8,
    ease: "back.out(1.7)",
    stagger: {
      each: 0.1,
      from: "start",
      grid: "auto"
    },
    scrollTrigger: {
      trigger: "[data-members-container]",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });
};

export const initMembersScrollAnimations = () => {
  const hexagons = document.querySelectorAll('[data-hexagon]');
  
  gsap.set(hexagons, {
    y: 50,
    opacity: 0,
    scale: 0.8
  });

  gsap.to(hexagons, {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 0.6,
    ease: "back.out(1.7)",
    stagger: {
      each: 0.08,
      from: "start"
    },
    scrollTrigger: {
      trigger: "[data-members-container]",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });
};
