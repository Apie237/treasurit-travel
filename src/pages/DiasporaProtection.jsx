import React from "react";
import { motion } from "framer-motion";
import EscrowTitle from "../components/EscrowTitle";
// Import BoxIcons
import 'boxicons/css/boxicons.min.css';

const DiasporaProtection = () => {
  const cardVariants = {
    hover: { scale: 1.05, rotate: 2 }, // Slightly increase size and rotate
    tap: { scale: 0.95 }, // Scale down slightly on tap
  };

  return (
    <div>
      <EscrowTitle title='DIASPORA PROTECTION'/>
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
            style={{
              backgroundImage:
                "url('https://via.placeholder.com/600x400')", // Replace with actual image URL
            }}
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full p-6 bg-gradient-to-b from-indigo-700 to-indigo-900">
            <i className='bx bx-home-alt text-5xl mb-3'></i>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              LAND & HOUSE PURCHASE ESCROW
            </h2>
            <p className="text-sm lg:text-base">
              Are you purchasing a property back home or too busy to oversee the
              verification? Our escrow service guarantees the security and terms
              of your ideal land or house purchase.
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
            style={{
              backgroundImage:
                "url('https://via.placeholder.com/600x400')", // Replace with actual image URL
            }}
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full p-6 bg-gradient-to-b from-teal-700 to-teal-900">
            <i className='bx bx-building-house text-5xl mb-3'></i>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              COMPANY CREATION & INVESTMENT ESCROW
            </h2>
            <p className="text-sm lg:text-base">
              Expanding your business overseas? Our escrow service safeguards your
              investments from company incorporation to business execution.
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
            style={{
              backgroundImage:
                "url('https://via.placeholder.com/600x400')", // Replace with actual image URL
            }}
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full p-6 bg-gradient-to-b from-purple-700 to-purple-900">
            <i className='bx bx-hard-hat text-5xl mb-3'></i>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              CONSTRUCTION ESCROW
            </h2>
            <p className="text-sm lg:text-base">
              Building a house, hotel, or property? Our milestone release escrow
              enables funds to be released upon completion of predetermined milestones.
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
            style={{
              backgroundImage:
                "url('https://via.placeholder.com/600x400')", // Replace with actual image URL
            }}
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full p-6 bg-gradient-to-b from-emerald-700 to-green-900">
            <i className='bx bx-user-voice text-5xl mb-3'></i>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">BROKER ESCROW</h2>
            <p className="text-sm lg:text-base">
              Are you a broker serving the diaspora or international clients?
              Partner with us to secure your commissions.
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
            style={{
              backgroundImage:
                "url('https://via.placeholder.com/600x400')", // Replace with actual image URL
            }}
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full p-6 bg-gradient-to-b from-yellow-700 to-yellow-900">
            <i className='bx bx-calendar-heart text-5xl mb-3'></i>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              WEDDING & PROJECT ESCROW
            </h2>
            <p className="text-sm lg:text-base">
              Planning a wedding or managing a project? Our escrow service ensures
              that funds are allocated and released upon satisfactory completion
              of agreed-upon terms.
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
            style={{
              backgroundImage:
                "url('https://via.placeholder.com/600x400')", // Replace with actual image URL
            }}
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full p-6 bg-gradient-to-b from-pink-700 to-pink-900">
            <i className='bx bx-car text-5xl mb-3'></i>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              VEHICLE ESCROW
            </h2>
            <p className="text-sm lg:text-base">
              Purchasing a vehicle? Our escrow service guarantees a secure
              transaction, holding funds until the vehicle's condition and
              ownership are verified and agreed upon.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DiasporaProtection;