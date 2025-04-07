import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";

const tabs = [
    {
        label: "To Travelers",
        content: [
            { title: "Secure Payments", description: "Treasurit's Escrow payment system protects travelers' funds, ensuring they're only released when services are delivered.", bgColor: "bg-purple-100" },
            { title: "Verified Travel Services", description: "Travelers can trust that their travel agencies, tour operators, and accommodations are verified and reputable.", bgColor: "bg-green-100" },
            { title: "Streamlined Documentation", description: "Treasurit simplifies visa application processes, reducing paperwork and administrative burdens.", bgColor: "bg-blue-100" },
            { title: "AI-Powered Risk Management", description: "Travelers are protected from potential risks, such as scams or human trafficking, with Treasurit's AI-driven risk management system.", bgColor: "bg-yellow-100" },
            { title: "Personalized Travel Solutions", description: "Treasurit offers tailored travel recommendations, ensuring a seamless and enjoyable journey.", bgColor: "bg-red-100" }
        ],
        imageUrl: assets.travelers_icon
    },
    {
        label: "To Travel and Recruitment Agencies",
        content: [
            { title: "Increased Trust", description: "Partnering with Treasurit enhances agencies' credibility, as they can offer secure payment solutions and verified services.", bgColor: "bg-purple-100" },
            { title: "Reduced Administrative Burdens", description: "Treasurit streamlines documentation and payment processes, freeing up agencies to focus on core services.", bgColor: "bg-green-100" },
            { title: "Improved Compliance", description: "Treasurit ensures agencies comply with regulatory requirements, minimizing risks and ensuring transparency.", bgColor: "bg-blue-100" },
            { title: "Access to New Markets", description: "Treasurit's global network connects agencies with new customers and markets, expanding their business opportunities.", bgColor: "bg-yellow-100" },
            { title: "Competitive Advantage", description: "By offering Treasurit's secure payment solutions, agencies differentiate themselves from competitors and attract more customers.", bgColor: "bg-red-100" }
        ],
        imageUrl: assets.agency_icon
    },
    {
        label: "To Individuals Home and Abroad",
        content: [
            { title: "Secure International Payments", description: "Treasurit's Escrow payment system protects investors' funds, ensuring they're only released when services are delivered.", bgColor: "bg-purple-100" },
            { title: "Verified Investment Opportunities", description: "Treasurit verifies investment opportunities, ensuring they're legitimate and compliant with regulatory requirements.", bgColor: "bg-green-100" },
            { title: "Streamlined Investment Processes", description: "Treasurit simplifies investment documentation and payment processes, reducing administrative burdens.", bgColor: "bg-blue-100" },
            { title: "AI-Powered Risk Management", description: "Treasurit's AI-driven risk management system protects investors from potential risks, such as fraud or scams.", bgColor: "bg-yellow-100" },
            { title: "Access to Emerging Markets", description: "Treasurit's global network connects investors with emerging markets and investment opportunities, expanding their portfolio possibilities.", bgColor: "bg-red-100" }
        ],
        imageUrl: assets.individual_icon
    }
];

const containerStyle = "w-full max-h-[1000px] rounded-[10px] overflow-hidden shadow-lg flex flex-col";
const navStyle = "bg-[#fdfdfd] p-[10px] pb-0 rounded-t-[10px] border-b border-[#eeeeee] h-[60px]";
const tabsContainerStyle = "flex w-full list-none p-0 m-0 font-medium text-[16px]";
const tabStyle = "rounded-t-[5px] w-full p-[10px_20px] relative bg-white cursor-pointer h-[44px] flex justify-center items-center flex-1 min-w-0 select-none text-[#0f1115] hover:bg-gray-200";
const underlineStyle = "absolute bottom-0 left-0 right-0 h-[2px] bg-[#ff385c]";
const contentContainerStyle = "flex justify-center items-center flex-1 text-center p-4 overflow-hidden";
const contentStyle = "p-10 rounded-lg w-full mx-auto min-h-[800px] text-black flex items-center flex-col bg-white";
const valueBoxStyle = "flex-shrink-0 flex-grow-0 w-[270px] h-[270px]  p-4 rounded-lg flex flex-col items-center space-y-4";
const infiniteScrollStyle = "flex space-x-4 overflow-x-auto p-4 gap-6 max-w-full styled-scrollbar-horizontal";

export default function ServiceBenefits() {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    const scrollRef = useRef(null);

    useEffect(() => {
        const container = scrollRef.current;
        let scrollAmount = 0;
        let scrollSpeed = 1;
        let animationFrameId;

        const animateScroll = () => {
            if (container) {
                scrollAmount += scrollSpeed;
                container.scrollLeft = scrollAmount;

                if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
                    scrollAmount = 0; // Reset scroll
                }

                animationFrameId = requestAnimationFrame(animateScroll);
            }
        };

        animateScroll();

        return () => cancelAnimationFrame(animationFrameId);
    }, [selectedTab]);

    return (
        <div className="flex justify-center items-center min-h-[100vh] my-5">

            <div className={containerStyle}>
                <nav className={navStyle}>
                    <ul className={tabsContainerStyle}>
                        {tabs.map((tab) => (
                            <motion.li
                                key={tab.label}
                                className={tabStyle}
                                onClick={() => setSelectedTab(tab)}
                            >
                                {tab.label}
                                {tab === selectedTab && (
                                    <motion.div className={underlineStyle} layoutId="underline" />
                                )}
                            </motion.li>
                        ))}
                    </ul>
                </nav>
                <main className={contentContainerStyle}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedTab.label}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className={contentStyle}
                        >
                            <img
                                src={selectedTab.imageUrl}
                                alt={selectedTab.label}
                                className="w-full h-[600px] rounded-lg shadow-md object-cover mb-4"
                            />

                            <div ref={scrollRef} className={infiniteScrollStyle}>
                                {selectedTab.content.map((box, index) => (
                                    <motion.div
                                        key={index}
                                        className={`${valueBoxStyle} ${box.bgColor}`}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <strong className="text-lg font-semibold">{box.title}</strong>
                                        <p className="text-sm text-center">{box.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
}
