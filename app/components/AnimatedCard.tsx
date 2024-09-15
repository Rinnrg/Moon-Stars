// app/components/AnimatedCard.tsx
"use client"; // Ensure this component is used only on the client-side

import { motion } from "framer-motion";
import React from "react";

const AnimatedCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
