import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "Who is a fraudulent travel agent?",
            answer: "A fraudulent travel agent is someone who deceives individuals seeking travel services. They might offer fake travel deals, visas, or employment opportunities, leading to financial loss and, in some cases, severe personal consequences for the victims."
        },
        {
            question: "What is human trafficking?",
            answer: "Human trafficking involves the recruitment, transportation, transfer, harboring, or receipt of people through force, fraud, or coercion, for the purpose of exploitation. This exploitation can take various forms, including forced labor, sexual exploitation, and involuntary servitude."
        },
        {
            question: "What is vulnerable migration?",
            answer: "Vulnerable migration refers to the movement of individuals who are at a heightened risk of exploitation or abuse during the migration process. Factors contributing to this vulnerability may include lack of legal protection, socio-economic disadvantage, or fleeing from conflict or persecution."
        },
        {
            question: "What is an escrow?",
            answer: "An escrow is a financial arrangement where a third party holds and regulates the payment of funds required for two parties involved in a given transaction. It ensures that both parties meet the agreed-upon terms before the transaction is completed."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const backgroundImageStyle = {
        backgroundColor: '#ffffff',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='627' height='627' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='88' y1='88' x2='0' y2='0'%3E%3Cstop offset='0' stop-color='%23005092'/%3E%3Cstop offset='1' stop-color='%23007cc4'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='75' y1='76' x2='168' y2='160'%3E%3Cstop offset='0' stop-color='%23868686'/%3E%3Cstop offset='0.09' stop-color='%23ababab'/%3E%3Cstop offset='0.18' stop-color='%23c4c4c4'/%3E%3Cstop offset='0.31' stop-color='%23d7d7d7'/%3E%3Cstop offset='0.44' stop-color='%23e5e5e5'/%3E%3Cstop offset='0.59' stop-color='%23f1f1f1'/%3E%3Cstop offset='0.75' stop-color='%23f9f9f9'/%3E%3Cstop offset='1' stop-color='%23FFFFFF'/%3E%3C/linearGradient%3E%3Cfilter id='c' x='0' y='0' width='200%25' height='200%25'%3E%3CfeGaussianBlur in='SourceGraphic' stdDeviation='12' /%3E%3C/filter%3E%3C/defs%3E%3Cpolygon fill='url(%23a)' points='0 174 0 0 174 0'/%3E%3Cpath fill='%23000' fill-opacity='0.22' filter='url(%23c)' d='M121.8 174C59.2 153.1 0 174 0 174s63.5-73.8 87-94c24.4-20.9 87-80 87-80S107.9 104.4 121.8 174z'/%3E%3Cpath fill='url(%23b)' d='M142.7 142.7C59.2 142.7 0 174 0 174s42-66.3 74.9-99.3S174 0 174 0S142.7 62.6 142.7 142.7z'/%3E%3C/svg%3E")`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top left',
    };

    return (
        <div className="relative flex justify-center items-center min-h-screen" style={backgroundImageStyle}>
            {/* Dark overlay with less opacity */}
            <div className="absolute inset-0 bg-black opacity-30"></div>

            <motion.div
                className="bg-white p-6 rounded shadow-lg text-center w-full max-w-2xl min-h-[80vh] relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.h1
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold mb-10 text-blue-700"
                >
                    Frequently Asked Questions
                </motion.h1>
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        className="mb-8 text-left"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="flex justify-between items-center cursor-pointer mb-2" onClick={() => toggleFAQ(index)}>
                            <h2 className="text-xl font-semibold">{faq.question}</h2>
                            <motion.img
                                src={assets.dropdown_icon}
                                alt="Dropdown Icon"
                                className="w-6 h-6"
                                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                        <hr className="border-neutral-300 mb-6" />
                        {activeIndex === index && (
                            <motion.p
                                className="text-neutral-700 mt-2"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                transition={{ duration: 0.3 }}
                            >
                                {faq.answer}
                            </motion.p>
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default FAQ;
