import React from "react";
import { motion } from "framer-motion";
import EscrowTitle from "../components/EscrowTitle";
// Import BoxIcons
import 'boxicons/css/boxicons.min.css';

const B2G = () => {
  const cardVariants = {
    hover: { scale: 1.05, rotate: 2 }, // Slightly increase size and rotate
    tap: { scale: 0.95 }, // Scale down slightly on tap
  };

  return (
    <div>
      <EscrowTitle title='B2G SOLUTIONS' />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 min-h-screen bg-blue-950">
        {/* Card 1 */}
        <motion.div
          className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform"
          variants={cardVariants}
          whileHover="hover"
          whileTap="tap"
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full p-6 bg-gradient-to-b from-indigo-700 to-indigo-900">
            <i className='bx bx-shopping-bag text-5xl mb-3'></i>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              PUBLIC PROCUREMENT
            </h2>
            <p className="text-sm lg:text-base">
              Treasurit ensure transparency and accountability in public procurement processes. Our escrow service can hold funds for government contracts, releasing payments only upon satisfactory completion of project milestones.
            </p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform"
          variants={cardVariants}
          whileHover="hover"
          whileTap="tap"
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full p-6 bg-gradient-to-b from-teal-700 to-teal-900">
            <i className='bx bx-buildings text-5xl mb-3'></i>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              INFRASTRUCTURE DEVELOPMENT
            </h2>
            <p className="text-sm lg:text-base">
              Secure government investments in infrastructure projects, such as road construction, public transportation, or utilities. Our escrow service can safeguard funds, verifying project progress and quality before releasing payments.
            </p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform"
          variants={cardVariants}
          whileHover="hover"
          whileTap="tap"
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full p-6 bg-gradient-to-b from-purple-700 to-purple-900">
            <i className='bx bx-group text-5xl mb-3'></i>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              SOCIAL PROGRAM AND BENEFITS
            </h2>
            <p className="text-sm lg:text-base">
              Protect government funds allocated for social programs, such as welfare benefits, subsidies, or grants. Our escrow service  ensure that funds are released only to verified beneficiaries or upon satisfactory program implementation.
            </p>
          </div>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform"
          variants={cardVariants}
          whileHover="hover"
          whileTap="tap"
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full p-6 bg-gradient-to-b from-emerald-700 to-green-900">
            <i className='bx bx-money text-5xl mb-3'></i>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">GOVERNMENT GRANT AND FUNDING</h2>
            <p className="text-sm lg:text-base">
              Manage government grants and funding for research, education, or community development projects. Your escrow service can ensure that funds are released only upon satisfactory project progress and compliance with grant requirements.
            </p>
          </div>
        </motion.div>

        {/* Card 5 */}
        <motion.div
          className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform"
          variants={cardVariants}
          whileHover="hover"
          whileTap="tap"
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full p-6 bg-gradient-to-b from-yellow-700 to-yellow-900">
            <i className='bx bx-gavel text-5xl mb-3'></i>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Government AUCTIONS AND SALES
            </h2>
            <p className="text-sm lg:text-base">
              Conduct secure and transparent government auctions and sales of assets, such as land, vehicles, or equipment. Your escrow service can hold funds, verifying the authenticity of transactions and ensuring timely releases.
            </p>
          </div>
        </motion.div>

        {/* Card 6 */}
        <motion.div
          className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform"
          variants={cardVariants}
          whileHover="hover"
          whileTap="tap"
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full p-6 bg-gradient-to-b from-pink-700 to-pink-900">
            <i className='bx bx-globe text-5xl mb-3'></i>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              EMBASSY AND IMMIGRATION AUTHORITIES USED CASE.
            </h2>
            <p className="text-sm lg:text-base">
              Our AI-powered fraud detection solution helps government agencies ( immigration authority, embassy) prevent travel fraud, ensuring national security and public safety. We analyze data from various sources to identify potential threats, assigning risk scores to travelers. Our solution sends alerts and notifications to officials, enabling proactive measures to prevent fraud. By leveraging our solution, government agencies can reduce travel fraud, enhance security, and improve efficiency.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default B2G;