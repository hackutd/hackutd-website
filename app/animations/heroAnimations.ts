import { gsap } from "gsap";

export const initHeroAnimations = (
  logoRef: React.RefObject<HTMLElement | null>,
  titleRef: React.RefObject<HTMLElement | null>,
  skylineRef: React.RefObject<HTMLElement | null>,
  setSkylineVisible: (visible: boolean) => void
) => {
  const tl = gsap.timeline();

  tl.fromTo(logoRef.current,
    { scale: 0, rotation: -180, opacity: 0 },
    { scale: 1, rotation: 0, opacity: 1, duration: 1.2, ease: "back.out(1.7)" }
  );

  tl.to(skylineRef.current, {
    y: 0,
    opacity: 1,
    duration: 0.6,
    ease: "power3.out",
    onComplete: () => setSkylineVisible(true)
  }, "-=0.8"); 

  tl.fromTo(titleRef.current,
    { x: -100, opacity: 0, scale: 0.8 },
    { x: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
  );

  tl.fromTo(".animate-twinkle",
    { scale: 0, opacity: 0 },
    { scale: 1, opacity: 1, duration: 2, stagger: 0.1, ease: "power2.out" }
  );
  gsap.to(logoRef.current, {
    y: -10,
    duration: 2,
    ease: "power2.inOut",
    yoyo: true,
    repeat: -1,
    delay: 5 
  });
};
