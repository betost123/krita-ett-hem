import { motion } from "framer-motion";
import * as React from "react";

interface Props {
  children: React.ReactNode;
  delay?: number;
}

export const SlideinFromBottom: React.FunctionComponent<Props> = ({
  children,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ y: "30vh" }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        delay: delay,
        ease: "easeInOut",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: delay + 0.5,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
