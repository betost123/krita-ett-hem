import { motion } from "framer-motion";
import * as React from "react";

interface Props {
  children: React.ReactNode;
}

export const ScaleIn: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <motion.div
      initial={{ scale: 1.1 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
};
