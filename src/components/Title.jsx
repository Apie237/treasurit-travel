import { useEffect, useState } from "react";
import { presets } from "react-text-transition";
import { assets } from "../assets/assets";

const TEXTS = [
  "Making Travel Safe and Secure with AI",
  <>
    Bringing Digitisation to Combat Fraud and <span className="text-pink-600 font-bold">Disrupt Traditional Processes</span>.
  </>,
];

const Title = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((index) => index + 1);
    }, 8000); // Rotate text every 8 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-8 lg:space-y-0 px-6 lg:px-16 py-12 bg-gray-50 rounded-lg shadow-xl">
      {/* Left Section */}
      <div className="flex flex-col space-y-6 flex-1">
        {/* Announcement Banner */}
        <div className="bg-pink-600 text-white p-4 rounded-lg shadow-md">
          <p className="text-left font-semibold text-sm">
            Announcement:{" "}
            <span className="text-green-400 font-bold animate-pulse">
              Our App is under development. In the meantime, contact us for personalized enquiries.
            </span>
          </p>
        </div>

        {/* Dynamic Heading */}
        <div>
          <h1 className="font-black text-3xl sm:text-4xl lg:text-6xl text-gray-800 leading-tight text-center lg:text-left">
            <p springConfig={presets.wobbly}>{TEXTS[textIndex % TEXTS.length]}</p>
          </h1>
        </div>

        {/* Description */}
        <div>
          <p className="text-gray-700 text-base sm:text-lg lg:text-xl text-center lg:text-left">
            Treasurit Digital Escrow Service revolutionizes travel and trade transactions by offering comprehensive protection for both buyers and sellers, ensuring transparency, security, efficiency, and peace of mind throughout every step of the process.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center flex-1">
        <img
          src={assets.phone_landing}
          alt="Landing Icon"
          className="w-[80%] sm:w-[60%] lg:w-[500px] h-auto object-contain transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Title;
