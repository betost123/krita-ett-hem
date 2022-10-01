import { motion } from "framer-motion";
import * as React from "react";

interface Props {
  children: React.ReactNode;
  delay?: number;
}

export const FadeIn: React.FunctionComponent<Props> = ({
  children,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 1.5,
        delay: delay,
        ease: [0.17, 0.67, 0.83, 0.67],
      }}
    >
      {children}
    </motion.div>
  );
};
