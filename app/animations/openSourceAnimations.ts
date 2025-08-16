import type { MutableRefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type El<T> = MutableRefObject<T | null>;
type Els<T> = MutableRefObject<T[]>;

export function initOpenSourceAnimations(
  sectionRef: El<HTMLElement>,
  headerRef: El<HTMLDivElement>,
  titleRef: El<HTMLHeadingElement>,
  subtitleRef: El<HTMLParagraphElement>,
  projectsRef: El<HTMLDivElement>,
  projectCardRefs: Els<HTMLDivElement>,
  _projectImageRefs: Els<HTMLDivElement>,
  _projectTitleRefs: Els<HTMLHeadingElement>,
  _projectDescRefs: Els<HTMLParagraphElement>
) {
  if (typeof window === "undefined") return () => {};

  const sectionEl = sectionRef.current;
  const headerEl = headerRef.current;
  const titleEl = titleRef.current;
  const subtitleEl = subtitleRef.current;
  const projectsEl = projectsRef.current;
  const cardEls = projectCardRefs.current.filter(Boolean);

  if (!sectionEl) return () => {};

  const ctx = gsap.context(() => {
    gsap.set([headerEl, titleEl, subtitleEl], {
      clearProps: "all",
      opacity: 1,
      visibility: "visible",
      display: "block",
    });

    const intro = gsap.timeline({ defaults: { ease: "power2.out" } });
    if (headerEl) intro.from(headerEl, { y: 16, duration: 0.4, immediateRender: false }, 0);
    if (titleEl) intro.from(titleEl, { y: 10, duration: 0.35, immediateRender: false }, 0.05);
    if (subtitleEl) intro.from(subtitleEl, { y: 10, duration: 0.35, immediateRender: false }, 0.12);

    if (projectsEl && cardEls.length) {
      gsap.from(cardEls, {
        y: 24,
        autoAlpha: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: projectsEl,
          start: "top 80%",
          once: true,
        },
      });
    }

    ScrollTrigger.refresh();
  }, sectionEl);

  return () => {
    ctx.revert();
    [headerEl, titleEl, subtitleEl].forEach((el) => el && gsap.set(el, { clearProps: "all" }));
  };
}
