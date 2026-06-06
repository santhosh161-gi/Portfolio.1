import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Fade in + slide up on scroll
export function useFadeUp(selector, options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = selector
        ? gsap.utils.toArray(selector)
        : ref.current
        ? [ref.current]
        : [];

      elements.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: options.duration || 0.8,
            delay: (options.stagger || 0.1) * i + (options.delay || 0),
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: options.start || "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
}

// Stagger children on scroll
export function useStaggerReveal(childSelector = ".reveal-item", options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const items = ref.current.querySelectorAll(childSelector);

      gsap.fromTo(
        items,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: options.duration || 0.7,
          stagger: options.stagger || 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: options.start || "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [childSelector]);

  return ref;
}

// Text char reveal
export function useTextReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: options.duration || 1,
          delay: options.delay || 0,
          ease: "power4.out",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return ref;
}

// Page enter animation
export function usePageEnter() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );
    });

    return () => ctx.revert();
  }, []);

  return ref;
}

export { gsap, ScrollTrigger };
