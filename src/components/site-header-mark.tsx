"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { ArjunKatwalMark } from "./arjun-katwal-mark";

export function SiteHeaderMark() {
  const pathname = usePathname();
  return pathname === "/" ? <ArjunKatwalMarkMotion /> : <ArjunKatwalMark />;
}

function ArjunKatwalMarkMotion() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const distanceRef = useRef(160);

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setVisible(latestValue >= distanceRef.current);
  });

  useEffect(() => {
    const coverMark = document.getElementById("js-cover-mark");
    if (!coverMark) return;

    distanceRef.current = calcDistance(coverMark);

    const resizeObserver = new ResizeObserver(() => {
      distanceRef.current = calcDistance(coverMark);
    });
    resizeObserver.observe(coverMark);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 400"
      initial={{
        opacity: 0,
        transform: "translateY(8px)",
      }}
      animate={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(8px)",
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Letter A - Made larger (30x30 pixels) */}
      <rect x="50" y="0" width="30" height="30" fill="currentColor" />
      <rect x="80" y="0" width="30" height="30" fill="currentColor" />
      <rect x="110" y="0" width="30" height="30" fill="currentColor" />
      <rect x="140" y="0" width="30" height="30" fill="currentColor" />
      <rect x="20" y="30" width="30" height="30" fill="currentColor" />
      <rect x="50" y="30" width="30" height="30" fill="currentColor" />
      <rect x="140" y="30" width="30" height="30" fill="currentColor" />
      <rect x="170" y="30" width="30" height="30" fill="currentColor" />
      <rect x="0" y="60" width="30" height="30" fill="currentColor" />
      <rect x="20" y="60" width="30" height="30" fill="currentColor" />
      <rect x="170" y="60" width="30" height="30" fill="currentColor" />
      <rect x="200" y="60" width="30" height="30" fill="currentColor" />
      <rect x="0" y="90" width="30" height="30" fill="currentColor" />
      <rect x="20" y="90" width="30" height="30" fill="currentColor" />
      <rect x="170" y="90" width="30" height="30" fill="currentColor" />
      <rect x="200" y="90" width="30" height="30" fill="currentColor" />
      <rect x="0" y="120" width="30" height="30" fill="currentColor" />
      <rect x="20" y="120" width="30" height="30" fill="currentColor" />
      <rect x="170" y="120" width="30" height="30" fill="currentColor" />
      <rect x="200" y="120" width="30" height="30" fill="currentColor" />
      <rect x="0" y="150" width="30" height="30" fill="currentColor" />
      <rect x="20" y="150" width="30" height="30" fill="currentColor" />
      <rect x="50" y="150" width="30" height="30" fill="currentColor" />
      <rect x="80" y="150" width="30" height="30" fill="currentColor" />
      <rect x="110" y="150" width="30" height="30" fill="currentColor" />
      <rect x="140" y="150" width="30" height="30" fill="currentColor" />
      <rect x="170" y="150" width="30" height="30" fill="currentColor" />
      <rect x="200" y="150" width="30" height="30" fill="currentColor" />
      <rect x="0" y="180" width="30" height="30" fill="currentColor" />
      <rect x="20" y="180" width="30" height="30" fill="currentColor" />
      <rect x="170" y="180" width="30" height="30" fill="currentColor" />
      <rect x="200" y="180" width="30" height="30" fill="currentColor" />
      <rect x="0" y="210" width="30" height="30" fill="currentColor" />
      <rect x="20" y="210" width="30" height="30" fill="currentColor" />
      <rect x="170" y="210" width="30" height="30" fill="currentColor" />
      <rect x="200" y="210" width="30" height="30" fill="currentColor" />
      <rect x="0" y="240" width="30" height="30" fill="currentColor" />
      <rect x="20" y="240" width="30" height="30" fill="currentColor" />
      <rect x="170" y="240" width="30" height="30" fill="currentColor" />
      <rect x="200" y="240" width="30" height="30" fill="currentColor" />
      <rect x="0" y="270" width="30" height="30" fill="currentColor" />
      <rect x="20" y="270" width="30" height="30" fill="currentColor" />
      <rect x="170" y="270" width="30" height="30" fill="currentColor" />
      <rect x="200" y="270" width="30" height="30" fill="currentColor" />

      {/* Letter K - Made larger (30x30 pixels) and moved right with spacing */}
      <rect x="300" y="0" width="30" height="30" fill="currentColor" />
      <rect x="330" y="0" width="30" height="30" fill="currentColor" />
      <rect x="430" y="0" width="30" height="30" fill="currentColor" />
      <rect x="460" y="0" width="30" height="30" fill="currentColor" />
      <rect x="300" y="30" width="30" height="30" fill="currentColor" />
      <rect x="330" y="30" width="30" height="30" fill="currentColor" />
      <rect x="410" y="30" width="30" height="30" fill="currentColor" />
      <rect x="430" y="30" width="30" height="30" fill="currentColor" />
      <rect x="300" y="60" width="30" height="30" fill="currentColor" />
      <rect x="330" y="60" width="30" height="30" fill="currentColor" />
      <rect x="380" y="60" width="30" height="30" fill="currentColor" />
      <rect x="410" y="60" width="30" height="30" fill="currentColor" />
      <rect x="300" y="90" width="30" height="30" fill="currentColor" />
      <rect x="330" y="90" width="30" height="30" fill="currentColor" />
      <rect x="380" y="90" width="30" height="30" fill="currentColor" />
      <rect x="300" y="120" width="30" height="30" fill="currentColor" />
      <rect x="330" y="120" width="30" height="30" fill="currentColor" />
      <rect x="360" y="120" width="30" height="30" fill="currentColor" />
      <rect x="380" y="120" width="30" height="30" fill="currentColor" />
      <rect x="300" y="150" width="30" height="30" fill="currentColor" />
      <rect x="330" y="150" width="30" height="30" fill="currentColor" />
      <rect x="380" y="150" width="30" height="30" fill="currentColor" />
      <rect x="410" y="150" width="30" height="30" fill="currentColor" />
      <rect x="300" y="180" width="30" height="30" fill="currentColor" />
      <rect x="330" y="180" width="30" height="30" fill="currentColor" />
      <rect x="380" y="180" width="30" height="30" fill="currentColor" />
      <rect x="410" y="180" width="30" height="30" fill="currentColor" />
      <rect x="300" y="210" width="30" height="30" fill="currentColor" />
      <rect x="330" y="210" width="30" height="30" fill="currentColor" />
      <rect x="410" y="210" width="30" height="30" fill="currentColor" />
      <rect x="430" y="210" width="30" height="30" fill="currentColor" />
      <rect x="300" y="240" width="30" height="30" fill="currentColor" />
      <rect x="330" y="240" width="30" height="30" fill="currentColor" />
      <rect x="430" y="240" width="30" height="30" fill="currentColor" />
      <rect x="460" y="240" width="30" height="30" fill="currentColor" />
      <rect x="300" y="270" width="30" height="30" fill="currentColor" />
      <rect x="330" y="270" width="30" height="30" fill="currentColor" />
      <rect x="430" y="270" width="30" height="30" fill="currentColor" />
      <rect x="460" y="270" width="30" height="30" fill="currentColor" />
    </motion.svg>
  );
}

const calcDistance = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  const scrollTop = document.documentElement.scrollTop;
  const headerHeight = 56;
  return scrollTop + rect.top + rect.height - headerHeight;
};
