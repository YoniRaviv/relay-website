import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";

export function TiltCard({ className, as = "article", children }) {
  const Component = motion[as];
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, {
    stiffness: 180,
    damping: 24,
    mass: 0.45,
  });
  const smoothY = useSpring(pointerY, {
    stiffness: 180,
    damping: 24,
    mass: 0.45,
  });
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-7, 7]);
  const glowX = useTransform(smoothX, [-0.5, 0.5], ["38%", "62%"]);
  const glowY = useTransform(smoothY, [-0.5, 0.5], ["38%", "62%"]);
  const background = useMotionTemplate`radial-gradient(circle at ${glowX} ${glowY}, rgba(85, 224, 193, 0.16), transparent 36%)`;

  const handleMove = (event) => {
    if (reduceMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <Component
      className={className}
      style={
        reduceMotion
          ? undefined
          : {
              rotateX,
              rotateY,
              transformPerspective: 1200,
              backgroundImage: background,
            }
      }
      whileHover={reduceMotion ? undefined : { y: -6, scale: 1.008 }}
      transition={{ type: "spring", stiffness: 200, damping: 24 }}
      onPointerMove={handleMove}
      onPointerLeave={reset}
    >
      {children}
    </Component>
  );
}
