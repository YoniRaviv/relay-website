import { motion, useReducedMotion } from "motion/react";
import { fadeUp } from "./animations";

export function RevealItem({ as = "div", className, children }) {
  const Component = motion[as];
  const reduceMotion = useReducedMotion();

  return (
    <Component
      className={className}
      variants={reduceMotion ? undefined : fadeUp}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={reduceMotion ? undefined : { once: true, amount: 0.22 }}
    >
      {children}
    </Component>
  );
}
