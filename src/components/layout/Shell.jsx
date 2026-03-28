import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Header } from "./Header";

export function Shell({ children, compact = false, currentPath, calm = false }) {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const leftGlowY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const rightGlowY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const topbarY = useTransform(scrollYProgress, [0, 0.08], [0, -6]);
  const topbarOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0.98]);

  return (
    <div
      className={`site-shell${compact ? " site-shell--compact" : ""}${calm ? " site-shell--calm" : ""}`}
    >
      {!calm && (
        <>
          <motion.div
            className="site-shell__glow site-shell__glow--left"
            style={reduceMotion ? undefined : { y: leftGlowY }}
          />
          <motion.div
            className="site-shell__glow site-shell__glow--right"
            style={reduceMotion ? undefined : { y: rightGlowY }}
          />
        </>
      )}
      <motion.div
        style={
          reduceMotion || calm ? undefined : { y: topbarY, opacity: topbarOpacity }
        }
      >
        <Header compact={compact} currentPath={currentPath} calm={calm} />
      </motion.div>
      {children}
    </div>
  );
}
