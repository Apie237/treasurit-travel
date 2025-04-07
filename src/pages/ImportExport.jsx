import React from "react";
import { motion } from "framer-motion";
import 'boxicons/css/boxicons.min.css';
import EscrowTitle from "../components/EscrowTitle";

const ImportExport = () => {
  const cardVariants = {
    hover: { scale: 1.05, rotate: 2 }, // Slightly increase size and rotate
    tap: { scale: 0.95 }, // Scale down slightly on tap
  };

  return (
    <div>
      <EscrowTitle title='Import & Export'/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 min-h-screen bg-blue-950">
        {/* Card 1 */}
        <motion.div
          className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform bg-black bg-opacity-40"
          variants={cardVariants}
          whileHover="hover"
          whileTap="tap"
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full p-6 bg-gradient-to-b from-indigo-700 to-indigo-900">
            <i className="bx bx-diamond text-7xl mb-4"></i>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              PRECIOUS METALS IMPORT/EXPORT ESCROW
            </h2>
            <p className="text-sm lg:text-base">
              Secure your national and international transactions of gold,
              diamonds, and natural resources. Funds are held in our escrow
              platform and released only upon reception and verification that all
              agreed terms are met and compliance requirements fulfilled.
            </p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform bg-black bg-opacity-40"
          variants={cardVariants}
          whileHover="hover"
          whileTap="tap"
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full p-6 bg-gradient-to-b from-teal-700 to-teal-900">
            <i className="bx bx-tv text-7xl mb-4"></i>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              ELECTRONIC IMPORT/EXPORT ESCROW
            </h2>
            <p className="text-sm lg:text-base">
              Order your electronic equipment from Dubai, China, or America with
              confidence. Funds are held in escrow and released upon verification
              of quality, quantity, and agreed-upon delivery terms.
            </p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform bg-black bg-opacity-40"
          variants={cardVariants}
          whileHover="hover"
          whileTap="tap"
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full p-6 bg-gradient-to-b from-purple-700 to-purple-900">
            <i className="bx bx-car text-7xl mb-4"></i>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              VEHICLE IMPORT/EXPORT ESCROW
            </h2>
            <p className="text-sm lg:text-base">
              Whether you want to import used cars, spare parts, or brand-new
              vehicles from overseas, our escrow services ensure that funds are
              securely held and released only after all specified conditions are
              met.
            </p>
          </div>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform bg-black bg-opacity-40"
          variants={cardVariants}
          whileHover="hover"
          whileTap="tap"
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full p-6 bg-gradient-to-b from-emerald-700 to-green-900">
            <i className="bx bx-shopping-bag text-7xl mb-4"></i>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              CLOTHS IMPORT/EXPORT ESCROW
            </h2>
            <p className="text-sm lg:text-base">
              Ensure hassle-free import and export of garments and textiles. Our
              escrow services protect your transactions, verifying that the
              shipment meets quality and delivery standards before releasing the
              funds.
            </p>
          </div>
        </motion.div>

        {/* Card 5 */}
        <motion.div
          className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform bg-black bg-opacity-40"
          variants={cardVariants}
          whileHover="hover"
          whileTap="tap"
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full p-6 bg-gradient-to-b from-yellow-700 to-yellow-900">
            <i className="bx bx-crown text-7xl mb-4"></i>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              JEWELRIES IMPORT/EXPORT ESCROW
            </h2>
            <p className="text-sm lg:text-base">
              Safeguard your jewelry transactions with our secure escrow services.
              We hold payments until the jewelry is delivered, inspected, and
              verified to meet the agreed-upon standards and authenticity.
            </p>
          </div>
        </motion.div>

        {/* Card 6 */}
        <motion.div
          className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform bg-black bg-opacity-40"
          variants={cardVariants}
          whileHover="hover"
          whileTap="tap"
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full p-6 bg-gradient-to-b from-pink-700 to-pink-900">
            <i className="bx bx-capsule text-7xl mb-4"></i>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              MEDICATION IMPORT/EXPORT ESCROW
            </h2>
            <p className="text-sm lg:text-base">
              Ensure the safe and verified import or export of pharmaceutical
              products. Our escrow services guarantee funds are released only
              after verifying compliance with all regulations and quality
              standards.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ImportExport;
