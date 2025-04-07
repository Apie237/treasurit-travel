import React from "react";
import { motion } from "framer-motion";
import 'boxicons/css/boxicons.min.css'; // Import Boxicons CSS
import EscrowTitle from "../components/EscrowTitle";

const AgencyEscrow = () => {
  const cardVariants = {
    hover: { scale: 1.05, rotate: 2 }, // Slightly increase size and rotate
    tap: { scale: 0.95 }, // Scale down slightly on tap
  };

  return (
    <div>
      <EscrowTitle title='Agency Escrow'/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 p-6 min-h-screen bg-blue-950">
        {/* Card 1 - Travel Agency Escrow */}
        <motion.div
          className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform bg-black bg-opacity-40"
          variants={cardVariants}
          whileHover="hover"
          whileTap="tap"
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full p-6 bg-gradient-to-b from-indigo-700 to-indigo-900">
            <i className="bx bxs-plane text-7xl mb-4"></i> {/* Airplane icon */}
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              TRAVEL AGENCY ESCROW
            </h2>
            <p className="text-sm lg:text-base">
              Start your travel procedure with confidence. Our travel agency
              escrow service secures your travel arrangement. We hold funds
              securely, verifying travel arrangements and document authenticity
              before release. Ensure a seamless and enjoyable travel experience.
            </p>
          </div>
        </motion.div>

        {/* Card 2 - Recruitment Agency Escrow */}
        <motion.div
          className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform bg-black bg-opacity-40"
          variants={cardVariants}
          whileHover="hover"
          whileTap="tap"
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full p-6 bg-gradient-to-b from-teal-700 to-teal-900">
            <i className="bx bx-group text-7xl mb-4"></i> {/* Group icon */}
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              RECRUITMENT AGENCY ESCROW
            </h2>
            <p className="text-sm lg:text-base">
              Streamline your hiring process. Our recruitment agency escrow
              service protects your placement fees. We secure funds, verifying
              candidate qualifications and placement terms before release.
              Efficient, trusted, and secure recruitment transactions.
            </p>
          </div>
        </motion.div>

        {/* Card 3 - IT Agencies Escrow */}
        <motion.div
          className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform bg-black bg-opacity-40"
          variants={cardVariants}
          whileHover="hover"
          whileTap="tap"
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full p-6 bg-gradient-to-b from-purple-700 to-purple-900">
            <i className="bx bx-code-alt text-7xl mb-4"></i> {/* Code icon */}
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              IT AGENCIES ESCROW
            </h2>
            <p className="text-sm lg:text-base">
              Are you a programmer, website developer, or any IT service
              provider? Treasurit escrow guarantees secure and efficient services
              with payment after completion. We hold funds until you are
              satisfied with project milestones, deliverables, and terms before
              release. Protect your IT investments and ensure successful project
              outcomes while avoiding delays.
            </p>
          </div>
        </motion.div>

        {/* Card 4 - Service Provider Escrow */}
        <motion.div
          className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform bg-black bg-opacity-40"
          variants={cardVariants}
          whileHover="hover"
          whileTap="tap"
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full p-6 bg-gradient-to-b from-emerald-700 to-green-900">
            <i className="bx bx-briefcase-alt text-7xl mb-4"></i> {/* Briefcase icon */}
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              SERVICE PROVIDER ESCROW
            </h2>
            <p className="text-sm lg:text-base">
              Deliver with confidence. Are you a lawyer, project or thesis writer,
              business plan creator, or admission/scholarship guidance provider?
              Our friendly escrow service safeguards your business transactions.
              We secure funds, verifying service delivery, quality, and terms
              before release. Ensure timely payments, protect your business, and
              build trusted relationships with clients.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AgencyEscrow;
