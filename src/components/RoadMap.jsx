import React from 'react';
import { EXPERIENCES } from '../assets/assets';
import { motion } from 'framer-motion';

const RoadMap = () => {
    return (
        <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-16 border-b border-neutral-700">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-6 text-center text-3xl font-bold text-blue-400'
            >
                How It Started
            </motion.h1>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.75, delay: 0.2 }}
                className='my-10 mx-12 text-center text-gray-300 px-10'
            >
                Driven by our profound understanding of the complexities and challenges surrounding African and Middle Eastern migration processes,
                we recognized the urgent need for a solution. The devastating consequences of jobs and visa scams, financial losses, and human trafficking,
                coupled with the increasing demand for relocation abroad and international business inspired us to take action.
            </motion.h2>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4"
                        >
                            <p className='mb-2 text-xl font-bold text-blue-400'>{experience.year}</p>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className='w-full max-w-xl lg:w-3/4 text-center'
                        >
                            <h6 className='mb-2 font-semibold text-xl text-blue-400'>
                                {experience.role}
                            </h6>
                            <p className='mb-4 text-gray-300'>{experience.description}</p>
                            <div className='flex justify-center'>
                                {experience.images.map((image, idx) => (
                                    <img
                                        key={idx}
                                        src={image}
                                        alt={`Roadmap ${index + 1}`}
                                        className='mx-auto my-4 rounded p-1 text-sm w-2/3 h-64 max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg'
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoadMap;

