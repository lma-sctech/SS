"use client";

import { useEffect, useState } from "react";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsVisible(window.scrollY > 520);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      className={`focus-ring fixed right-4 z-50 flex size-12 items-center justify-center rounded-full bg-[#F2A30F] text-xl font-bold leading-none text-navy shadow-[0_16px_45px_rgba(242,163,15,0.34)] transition duration-300 hover:-translate-y-1 hover:bg-[#f6b742] md:bottom-6 ${
        isVisible ? "bottom-24 opacity-100" : "pointer-events-none bottom-20 opacity-0"
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ^
    </button>
  );
}
