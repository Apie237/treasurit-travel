import React from 'react';
import { assets } from '../assets/assets';

const AnimationComponent = () => {
    return (
        <section className='bg-purple-100 mt-0 py-12 px-4'>
            <article className="w-full max-w-[60ch] mx-auto">
                
                {/* Vision Section */}
                <section className='py-6 text-center'>
                    <h2 className='text-3xl font-bold text-gray-800'>Our Vision</h2>
                    <img
                        className="max-w-80 mx-auto mt-6"
                        src={assets.vision_icon}
                        alt="Illustration representing vision"
                        title="Photo by Maja Petric on Unsplash"
                    />
                    <p className="text-base text-gray-700 mt-4 leading-relaxed">
                        Empowering migrants with a secure and transparent environment for responsible immigration processes, fostering trust and confidence in individual investment and business transactions now and in the future.
                    </p>
                </section>

                {/* Mission Section */}
                <section className='py-6 text-center'>
                    <h2 className='text-3xl font-bold text-gray-800'>Our Mission</h2>
                    <img
                        className="max-w-80 mx-auto mt-6"
                        src={assets.mission_icon}
                        alt="Illustration representing mission"
                        title="Photo by Yair Mejía on Unsplash"
                    />
                    <p className="text-base text-gray-700 mt-4 leading-relaxed">
                        Bridging the trust gap in immigration processes by preventing jobs and visa fraud incidents before they happen to potential victims while protecting genuine agencies, travelers, and businesses from travel restrictions.
                    </p>
                </section>

                {/* Beliefs Section */}
                <section className='py-6 text-center'>
                    <h2 className='text-3xl font-bold text-gray-800'>Our Beliefs</h2>
                    <img
                        className="max-w-80 mx-auto mt-6"
                        src={assets.empathy_icon}
                        alt="Illustration representing beliefs"
                        title="Photo by PHÚC LONG on Unsplash"
                    />
                    <p className="text-base text-gray-700 mt-4 leading-relaxed">
                        We believe the future of business is built on efficiency, transparency, and trust. As artificial intelligence continues to transform industries, businesses that prioritize these values will thrive. At Treasurit, we're committed to creating a secure, trustworthy environment that fosters confidence and promotes ethical business practices.
                    </p>
                </section>

            </article>
        </section>
    );
};

export default AnimationComponent;