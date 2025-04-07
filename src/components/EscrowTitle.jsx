import React from "react";
import { motion } from "framer-motion";

const EscrowTitle = ({ title }) => {
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08, // Delay between each letter
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  const paragraphAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2, // Ensures it appears after the title animation
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="text-center bg-blue-950 text-white p-6 rounded-lg shadow-lg">
      {/* Animated Title */}
      <motion.h1
        className="text-4xl lg:text-5xl font-bold"
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {title.split("").map((char, index) => (
          <motion.span key={index} variants={letter}>
            {char}
          </motion.span>
        ))}
      </motion.h1>

      {/* Animated Paragraph */}
      <motion.p
        className="text-lg lg:text-xl mt-4"
        variants={paragraphAnimation}
        initial="hidden"
        animate="visible"
      >
        Ensure security, trust, transparency, and efficiency at every stage of
        your transaction with peace of mind with Treasurit.
      </motion.p>
    </div>
  );
};

export default EscrowTitle;
