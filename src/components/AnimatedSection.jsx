import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedSection({ title, text, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.6, delay, ease: [0.25, 1, 0.5, 1] },
            }
          : {}
      }
    >
      <motion.h2
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={
          isInView
            ? {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.5,
                  delay: delay + 0.1,
                  ease: [0.25, 1, 0.5, 1],
                },
              }
            : {}
        }
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={
          isInView
            ? {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: delay + 0.2,
                  ease: [0.25, 1, 0.5, 1],
                },
              }
            : {}
        }
      >
        {text}
      </motion.div>
    </motion.section>
  );
}

export default AnimatedSection;
