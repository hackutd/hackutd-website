import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const initPastHackathonsAnimations = (
  sectionRef: React.RefObject<HTMLDivElement | null>,
  trackRef: React.RefObject<HTMLDivElement | null>
) => {
  const section = sectionRef.current;
  const track = trackRef.current;
  if (!section || !track) return;


  try {
    ScrollTrigger.normalizeScroll?.(true);
  } catch {}

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isDesktop = () => window.innerWidth >= 1024;
  let tween: gsap.core.Tween | null = null;

  const setup = () => {
    if (prefersReduced || !isDesktop()) return;

    const getAmount = () => track.scrollWidth - window.innerWidth;

    tween = gsap.to(track, {
      x: () => -getAmount(),
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => '+=' + getAmount(),
        scrub: 0.1, 
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
  };

  setup();

 
  const refresh = () => ScrollTrigger.refresh();
  const imgs = track.querySelectorAll('img');
  imgs.forEach((img) => {
    if (!img.complete) img.addEventListener('load', refresh, { once: true });
  });

  const onResize = () => {
    ScrollTrigger.refresh();
    if (!tween && isDesktop() && !prefersReduced) setup();
  };
  window.addEventListener('resize', onResize);

  
  return () => {
    window.removeEventListener('resize', onResize);
    if (tween) {
      tween.scrollTrigger?.kill();
      tween.kill();
    }
    ScrollTrigger.getAll().forEach((st) => st.kill());
  };
};
