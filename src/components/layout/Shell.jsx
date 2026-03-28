import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Header } from "./Header";
import clsx from "clsx";

export function Shell({ children, compact = false, currentPath, calm = false }) {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const leftGlowY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const rightGlowY = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    <div className={clsx("relative", calm && "bg-gradient-to-b from-[#1c1a16] to-[#18160f]")}>
      {!calm && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div
            className="absolute w-[32rem] h-[32rem] rounded-full blur-[100px] opacity-[0.18] animate-drift -top-40 -left-32 bg-brand/30"
            style={reduceMotion ? undefined : { y: leftGlowY }}
          />
          <motion.div
            className="absolute w-[32rem] h-[32rem] rounded-full blur-[100px] opacity-[0.18] animate-drift top-96 -right-40 bg-brand/20"
            style={reduceMotion ? undefined : { y: rightGlowY }}
          />
        </div>
      )}
      <Header compact={compact} currentPath={currentPath} calm={calm} />
      {children}
    </div>
  );
}
