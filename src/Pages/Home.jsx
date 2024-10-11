import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, Bot, Settings, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../components/Button';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600',
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <section className="w-full py-24 md:py-32 lg:py-40 bg-orange-100 text-black mt-20 rounded-3xl ">
        <div className="container px-4 md:px-6 ">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center space-y-8 text-center"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Welcome to Pratisol
            </h1>
            <p className="mx-auto max-w-[700px] text-xl md:text-2xl text-gray-700">
              Innovative IT solutions for your business. We specialize in website development, app development, AI automation tools, and custom integrations.
            </p>
            <div className="space-x-4">
              <Button variant='outline' className=" border-black hover:bg-orange-500 text-black">
                Get Started
              </Button>
              <Button variant="outline" className=" border-black hover:bg-orange-500 text-black">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-24 md:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-16 text-gray-800"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Code, title: "Website Development", description: "Custom websites tailored to your needs" },
              { icon: Smartphone, title: "App Development", description: "Mobile apps for iOS and Android platforms" },
              { icon: Bot, title: "AI Automation Tools", description: "Cutting-edge AI solutions for your business" },
              { icon: Settings, title: "Custom Integration", description: "Seamless integration of various systems and platforms" }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <service.icon className="h-16 w-16 mb-6 text-black" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-24 md:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-16 text-gray-800"
          >
            Our Work
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-4xl mx-auto"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                src={carouselImages[currentSlide]}
                alt={`Project ${currentSlide + 1}`}
                className="w-full h-auto rounded-2xl shadow-2xl"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
            <Button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-3 shadow-lg"
              onClick={handlePrevSlide}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-3 shadow-lg"
              onClick={handleNextSlide}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-24 md:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-16 text-gray-800"
          >
            About Us
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-xl mb-8 text-gray-600">
              Pratisol is a leading IT solutions provider specializing in website development, app development, AI automation tools, and custom integrations. With a team of experienced professionals and a passion for innovation, we deliver cutting-edge solutions to businesses of all sizes.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/about" className="inline-flex items-center  text-black hover:underline text-lg font-medium">
                Learn more about us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;