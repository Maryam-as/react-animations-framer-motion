import { motion } from "framer-motion";

export default function Badge({ caption }) {
  return (
    <motion.span
      animate={{
        scale: [1, 1.25, 1],
        rotate: [0, 15, -10, 7, -4, 0],
        y: [0, -2, 0],
      }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      className="badge"
    >
      {caption}
    </motion.span>
  );
}
