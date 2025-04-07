import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import * as motion from "motion/react-client";
import { assets } from "../assets/assets";

const tabs = [
    {
        label: "Our Vision",
        content: "Empowering migrants with a secure and transparent environment for responsible immigration process, fostering trust and confidence in individual investment and business transactions now and in the future.",
        imageUrl: assets.vision_icon 
    },
    {
        label: "Our Mission",
        content: "To bridge the trust gap in immigration processes by preventing jobs and visa fraud incidents before they happen to potential victims while protecting genuine agencies, travelers, and businesses from travel restrictions.",
        imageUrl: assets.mission_icon 
    },
    {
        label: "Our Beliefs",
        content: (
            <>
                <h1 className="font-semibold text-2xl">Our Core Values</h1>
                <p>Our core values are:</p>
                <div className="flex space-x-4 overflow-x-auto p-3 gap-6 styled-scrollbar-horizontal w-full">
                    {[...
                        {
                            icon: assets.empathy_icon,
                            title: "Empathy",
                            description: "We understand the challenges and vulnerabilities of our users, and we're dedicated to supporting them.",
                            bgColor: "bg-purple-100",
                            hoverColor: "hover:bg-purple-200"
                        },
                        {
                            icon: assets.transparency_icon,
                            title: "Transparency",
                            description: "We operate with openness and honesty, ensuring our users have complete visibility into our processes.",
                            bgColor: "bg-green-100",
                            hoverColor: "hover:bg-green-200"
                        },
                        {
                            icon: assets.integrity_icon,
                            title: "Integrity",
                            description: "We uphold the highest standards of ethics and professionalism, always acting with integrity.",
                            bgColor: "bg-pink-100",
                            hoverColor: "hover:bg-pink-200"
                        },
                        {
                            icon: assets.security_icon,
                            title: "Security",
                            description: "We prioritize the safety and security of our users' information and transactions.",
                            bgColor: "bg-yellow-100",
                            hoverColor: "hover:bg-yellow-200"
                        }
                    ].map((box, index) => (
                        <motion.div
                            key={index}
                            className={`border border-black p-4 rounded-lg ${box.bgColor} ${box.hoverColor} flex flex-col items-center min-w-[250px] max-w-[250px] h-[360px] flex-shrink-0 space-y-4`}
                            whileHover={{ scale: 1.05 }}
                        >
                            <img src={box.icon} alt={box.title} className="w-20 h-20 mb-4" />
                            <strong>{box.title}:</strong>
                            <p className="text-center text-sm">{box.description}</p>
                        </motion.div>
                    ))}
                </div>
            </>
        ),
        imageUrl: assets.empathy_icon 
    }
];

export default function Description() {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    return (
        <div className="flex justify-center items-center min-h-screen p-4">
            <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
                <nav className="bg-gray-100 p-3 rounded-t-lg border-b border-gray-300">
                    <ul className="flex flex-wrap justify-around">
                        {tabs.map((item) => (
                            <motion.li
                                key={item.label}
                                className="cursor-pointer px-4 py-2 rounded-md hover:bg-gray-200 text-sm md:text-base"
                                onClick={() => setSelectedTab(item)}
                            >
                                {item.label}
                            </motion.li>
                        ))}
                    </ul>
                </nav>
                <main className="flex flex-col items-center p-4 text-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedTab.label}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="w-full flex flex-col items-center"
                        >
                            <img src={selectedTab.imageUrl} alt={selectedTab.label} className="w-40 h-40 object-cover rounded-md mb-4" />
                            {selectedTab.content}
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
}
