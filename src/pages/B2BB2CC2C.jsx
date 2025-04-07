import React from "react";
import { motion } from "framer-motion";
import 'boxicons/css/boxicons.min.css'; // Import Boxicons CSS
import EscrowTitle from "../components/EscrowTitle";

const B2BB2CC2C = () => {
  const cardVariants = {
    hover: { scale: 1.05, rotate: 2 }, // Slightly increase size and rotate
    tap: { scale: 0.95 }, // Scale down slightly on tap
  };

  return (
    <div>
      <EscrowTitle title = 'B2B, B2C & C2C SOLUTIONS' />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 min-h-screen bg-blue-950">
        {/* Card 1 - Real Estate Escrow */}
        <motion.div
          className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform bg-black bg-opacity-40"
          variants={cardVariants}
          whileHover="hover"
          whileTap="tap"
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full p-6 bg-gradient-to-b from-indigo-700 to-indigo-900">
            <i className="bx bx-building-house text-7xl mb-4"></i> {/* Real estate icon */}
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">REAL ESTATE ESCROW</h2>
            <p className="text-sm lg:text-base">
              Buy, sell, or manage properties efficiently with Treasurit's secure and transparent real estate escrow services. Enjoy a seamless experience from the comfort of your home, whether you need a secure deposit, lease properties, or manage rental properties and tenant relations.
            </p>
          </div>
        </motion.div>

        {/* Card 2 - Vehicle Escrow */}
        <motion.div
          className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform bg-black bg-opacity-40"
          variants={cardVariants}
          whileHover="hover"
          whileTap="tap"
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full p-6 bg-gradient-to-b from-teal-700 to-teal-900">
            <i className="bx bx-car text-7xl mb-4"></i> {/* Car icon */}
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">VEHICLE ESCROW</h2>
            <p className="text-sm lg:text-base">
              Safeguard your vehicle transactions with Treasurit's escrow services. Whether buying or selling, ensure funds are released only when the vehicle meets all agreed-upon conditions. Our platform also enables secure and transparent vehicle leasing.
            </p>
          </div>
        </motion.div>

        {/* Card 3 - Goods & Service Escrow */}
        <motion.div
          className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform bg-black bg-opacity-40"
          variants={cardVariants}
          whileHover="hover"
          whileTap="tap"
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full p-6 bg-gradient-to-b from-purple-700 to-purple-900">
            <i className="bx bx-cart text-7xl mb-4"></i> {/* Shopping cart icon */}
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">GOODS & SERVICE ESCROW</h2>
            <p className="text-sm lg:text-base">
              Avoid disputes and disappointment over "what I ordered versus what I received online." Treasurit's escrow services ensure delivery and satisfaction for both buyers and sellers in goods and services transactions, including products, services rendered, customer-ordered projects, and maintenance guaranteed funds.
            </p>
          </div>
        </motion.div>

        {/* Card 4 - Broker Escrow */}
        <motion.div
          className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform bg-black bg-opacity-40"
          variants={cardVariants}
          whileHover="hover"
          whileTap="tap"
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full p-6 bg-gradient-to-b from-emerald-700 to-green-900">
            <i className="bx bx-money text-7xl mb-4"></i> {/* Money icon */}
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">BROKER ESCROW</h2>
            <p className="text-sm lg:text-base">
              Ensure your hard-earned commission is secure with our reliable escrow services. We safeguard your interests, providing a smooth and transparent transaction process for brokers. Whether it's real estate or vehicles.
            </p>
          </div>
        </motion.div>

        {/* Card 5 - NGO/Angel, VC Funding Escrow */}
        <motion.div
          className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform bg-black bg-opacity-40"
          variants={cardVariants}
          whileHover="hover"
          whileTap="tap"
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full p-6 bg-gradient-to-b from-yellow-700 to-yellow-900">
            <i className="bx bx-donate-heart text-7xl mb-4"></i> {/* Donation icon */}
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">NGO/ANGEL, VC FUNDING ESCROW</h2>
            <p className="text-sm lg:text-base">
              Safeguard your investments in startups, donations in NGOs, or projects with Treasurit's escrow services. Ensure funds are securely held and released according to agreed-upon milestones. Our platform also supports convertible notes and collaborations with venture capital, securing pole funds in escrow.
            </p>
          </div>
        </motion.div>

        {/* Card 6 - Merger & Acquisition Escrow */}
        <motion.div
          className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform bg-black bg-opacity-40"
          variants={cardVariants}
          whileHover="hover"
          whileTap="tap"
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full p-6 bg-gradient-to-b from-pink-700 to-pink-900">
            <i className="bx bx-briefcase text-7xl mb-4"></i> {/* Briefcase icon */}
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">MERGER & ACQUISITION ESCROW</h2>
            <p className="text-sm lg:text-base">
              Ensure seamless business transitions with Treasurit's trusted escrow services. Our secure and transparent solutions facilitate M&A transactions, company mergers, acquisition deals, asset purchases, and joint ventures.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default B2BB2CC2C;
