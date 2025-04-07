import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      text: "Our family trip to Bali was absolutely perfect thanks to this amazing travel agency. Every detail was taken care of, from luxury accommodations to private tours of temples and rice terraces. The local guides were knowledgeable and friendly, making our experience truly unforgettable."
    },
    {
      name: "Marco Rossi",
      location: "Milan, Italy",
      text: "I've traveled to over 30 countries, and this was by far the most seamless experience I've had. The customized itinerary through Japan hit all the right spots - from hidden gems in Tokyo to peaceful ryokans in Kyoto. Their attention to detail and responsiveness to my questions made all the difference."
    },
    {
      name: "Emily Chen",
      location: "Singapore",
      text: "The African safari they arranged exceeded all my expectations. From the moment we landed until our departure, everything was perfectly organized. The accommodations were luxurious yet authentic, and our guide helped us spot all the Big Five! I couldn't recommend them more highly."
    },
    {
      name: "James Wilson",
      location: "London, UK",
      text: "As a solo traveler exploring South America, I was initially nervous about the logistics. This team mapped out an incredible journey through Peru, Bolivia, and Chile with seamless transitions between destinations. The local experiences they arranged gave me authentic insights I would have missed otherwise."
    },
    {
      name: "Sophia Müller",
      location: "Berlin, Germany",
      text: "Our honeymoon in the Maldives was absolutely magical thanks to this exceptional travel agency. They secured us an overwater bungalow with stunning views, arranged private dinners on the beach, and organized snorkeling trips to pristine reefs. Every moment was pure paradise."
    },
    {
      name: "David Kim",
      location: "Seoul, South Korea",
      text: "This was my first time using a travel agency for my European adventure, and now I can't imagine planning a trip any other way. They created the perfect balance of guided tours and free time across five countries. Their restaurant recommendations alone were worth the investment!"
    },
    {
      name: "Olivia Santos",
      location: "Rio de Janeiro, Brazil",
      text: "I was impressed by how they handled our multi-generational family trip to Australia. They found activities that delighted everyone from my 8-year-old son to my 75-year-old father. The accommodations were perfectly suited to our needs, and their 24/7 support came in handy when we needed to adjust plans on the go."
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Enhanced animation variants for smoother horizontal sliding
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  // Improved transition configuration for smoother animation
  const transition = {
    x: { 
      type: "tween", 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] // Custom bezier curve for smooth easing
    },
    opacity: { 
      duration: 0.5 
    }
  };

  // Indicator dots to show current slide position
  const Dots = () => (
    <div className="flex justify-center mt-8 space-x-2">
      {testimonials.map((_, index) => (
        <button
          key={index}
          onClick={() => {
            setDirection(index > currentIndex ? 1 : -1);
            setCurrentIndex(index);
          }}
          className={`h-2 w-2 rounded-full transition-colors duration-300 ${
            currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );

  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Traveler Testimonials</h2>
          <p className="text-xl text-gray-600">Discover Why Our Clients Love Their Journeys</p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex justify-between absolute top-1/2 transform -translate-y-1/2 z-10 w-full px-4">
            <button
              onClick={prevSlide}
              className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          <div className="h-full py-8">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={transition}
                className="w-full"
              >
                <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
                  <div className="text-center">
                    <p className="text-gray-700 text-lg md:text-xl italic mb-8">
                      "{testimonials[currentIndex].text}"
                    </p>
                    <div className="mt-4">
                      <h4 className="font-semibold text-lg text-gray-900">{testimonials[currentIndex].name}</h4>
                      <p className="text-gray-500">{testimonials[currentIndex].location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <Dots />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;