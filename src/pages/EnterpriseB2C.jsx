import React from "react";
import { motion } from "framer-motion";
import "boxicons/css/boxicons.min.css";
import EscrowTitle from "../components/EscrowTitle";

const EnterpriseB2C = () => {
  const cardVariants = {
    hover: { scale: 1.1, rotate: 0.5, y: -10 }, // Lift the card and rotate slightly
    tap: { scale: 0.95, rotate: -0.5 }, // Slightly shrink and rotate back on click
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 }, // Initial state
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2, // Stagger the child animations for a cascading effect
      },
    },
  };

  return (
    <div>
      {/* Add the Typewriter Title Component */}
      <EscrowTitle title='Enterprise B2C SOLUTIONS'/>

      {/* Page-Specific Content */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 min-h-screen bg-blue-950"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Card 1 - E-Commerce Escrow */}
        <motion.div
          className="relative w-full h-96 bg-gradient-to-br from-indigo-500 to-indigo-900 rounded-xl shadow-lg overflow-hidden border border-gray-300 bg-opacity-20 backdrop-blur-xl cursor-pointer"
          variants={cardVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6">
            <i className="bx bx-cart text-7xl mb-4"></i> {/* Shopping cart icon */}
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">E COMMERCE ESCROW</h2>
            <p className="text-sm lg:text-base">
              Protect your online transactions with our comprehensive AI-powered
              fraud prevention and user-friendly escrow services. Ensure safe and
              efficient commerce for both enterprises and customers:
              <ul className="mt-2 list-disc list-inside">
                <li>Large-scale transactions</li>
                <li>Consumer purchases</li>
                <li>Subscription services</li>
                <li>International/cross-border transactions</li>
              </ul>
            </p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="relative w-full h-96 bg-gradient-to-br from-teal-500 to-teal-900 rounded-xl shadow-lg overflow-hidden border border-gray-300 bg-opacity-20 backdrop-blur-xl cursor-pointer"
          variants={cardVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6">
            <i className="bx bx-building-house text-7xl mb-4"></i>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              REAL ESTATE / GOODS & SERVICE ESCROW
            </h2>
            <p className="text-sm lg:text-base">
              Handle enterprise property acquisition, bulk product purchases,
              service contracts, and vendor agreements with ease:
              <ul className="mt-2 list-disc list-inside">
                <li>Corporate property transactions</li>
                <li>Service deliverables</li>
                <li>Customer orders and specifications</li>
              </ul>
            </p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="relative w-full h-96 bg-gradient-to-br from-purple-500 to-purple-900 rounded-xl shadow-lg overflow-hidden border border-gray-300 bg-opacity-20 backdrop-blur-xl cursor-pointer"
          variants={cardVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6">
            <i className="bx bx-code-curly text-7xl mb-4"></i>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              API INTEGRATION AND CHECKOUT SOLUTIONS
            </h2>
            <p className="text-sm lg:text-base">
              Effortlessly integrate our secure payment APIs into your systems:
              <ul className="mt-2 list-disc list-inside">
                <li>Streamline transactions</li>
                <li>Enhance functionality</li>
                <li>Integrate seamlessly with apps, platforms, and websites</li>
              </ul>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EnterpriseB2C;
