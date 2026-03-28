import { motion, useReducedMotion } from "motion/react";
import { stagger } from "./animations";

export function SectionReveal({ as = "section", className, children, id }) {
  const Component = motion[as];
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <Component className={className} id={id}>
        {children}
      </Component>
    );
  }

  return (
    <Component
      className={className}
      id={id}
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
    >
      {children}
    </Component>
  );
}
