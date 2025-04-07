import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets";

const TEXTS = [
  <>Making Travel <span className="text-[#2196F3] font-bold">Safe and Secure with AI</span></>,
  <>Bringing Digitisation <span className="text-[#2196F3] font-xs">To Combat Fraud and Disrupt Traditional Processes</span>.</>,
];

const images = [assets.hero_image, assets.hero_image2];

const slideInterval = 10000; // Slide duration (ms)

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const autoNextRef = useRef(null);

  useEffect(() => {
    autoNextRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setTextIndex((prev) => (prev + 1) % TEXTS.length);
    }, slideInterval);
    return () => clearInterval(autoNextRef.current);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden">
      {/* Background Image Transition */}
      <div className="absolute inset-0 w-full h-screen">
        <AnimatePresence mode="sync">
          {images.map((image, index) => (
            currentIndex === index && (
              <motion.div
                key={index}
                className="absolute inset-0 w-full h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              />
            )
          ))}
        </AnimatePresence>
        
        {/* Dark Overlay for Better Text Visibility */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col justify-center items-center lg:items-start space-y-8 w-full px-12 py-12 text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={textIndex}
            className="flex flex-col space-y-6 flex-1 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Dynamic Heading */}
            <motion.h1 className="font-extrabold text-xl sm:text-3xl lg:text-5xl leading-relaxed tracking-wide text-white">
              {TEXTS[textIndex]}
            </motion.h1>

            {/* Description Paragraph */}
            <motion.p className="text-gray-200 text-sm sm:text-base lg:text-lg font-bold leading-relaxed tracking-wide">
              Treasurit Digital Escrow Service revolutionizes travel and trade transactions by offering comprehensive protection for buyers and sellers, ensuring transparency, security, and efficiency.
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gray-300/50">
        <motion.div
          className="h-full bg-blue-400"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: slideInterval / 1000, ease: "linear" }}
          key={currentIndex}
        />
      </div>
    </section>
  );
};

export default Hero;