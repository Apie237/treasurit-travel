import React from 'react';
import { motion } from 'framer-motion';
import 'boxicons/css/boxicons.min.css';

const Services = () => {
  const serviceContents = [
    "Travel with confidence, knowing your agency has undergone our rigorous 5-step verification process and attained the required trust-point. We ensure that only trusted and reliable agencies are connected with travelers for a transparent process.",
    "Our advanced AI system monitors and reports suspicious agencies, human traffickers, and travelers' activities, flagging potential document scams or fraud and alerting authorities in real-time. Stay safe with Treasurit's proactive travel protection.",
    "Our AI system monitors, detects, alerts, and protects travelers from potential procedural unfairness which could result in individual travel bans, visa denial, or human trafficking. Our secure digital escrow payment system safeguards client funds, ensuring that services are delivered and clients confirm satisfaction before payment is released.",
    "Unlock tailored travel tools and resources, designed to streamline your journey. From verified agents to self-service options, AI-powered booking (flight, hotel, tour package, international events), to admission and visa application portals."
  ];

  const headings = [
    "BUSINESS VERIFICATION",
    "AI-POWERED MONITORING",
    "PROTECTION",
    "Personalized Travel Solution"
  ];

  const icons = [
    "bxs-check-shield",
    "bxs-cctv",
    "bxs-shield-alt-2",
    "bxs-plane-alt"
  ];

  const colors = [
    "bg-orange-100",
    "bg-blue-100",
    "bg-green-100",
    "bg-purple-100"
  ];

  return (
    <div className="p-6 bg-gray-50 rounded-md shadow-lg">
      <h2 className="text-center font-extrabold text-4xl text-gray-800 mb-6">Our Services</h2>
      <div className="flex flex-wrap justify-around items-center">
        {serviceContents.map((content, index) => (
          <motion.div
            key={index}
            className={`relative cursor-pointer ${colors[index]} text-gray-800 p-6 rounded-md shadow-md m-4 max-w-xs text-center`}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-col items-center mb-2">
              <i className={`bx ${icons[index]} bx-lg mb-2 text-gray-700`}></i>
              <h3 className="font-bold text-lg">{headings[index]}</h3>
            </div>
            <p className="text-sm">{content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;