import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <section className="w-full py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
      <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-800"
      >
        About Pratisol
      </motion.h2>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-3xl mx-auto"
      >
        <p className="text-lg mb-6 text-gray-600">
          Pratisol is a leading IT solutions provider specializing in website development, app development, AI automation tools, and custom integrations. With a team of experienced professionals and a passion for innovation, we deliver cutting-edge solutions to businesses of all sizes.
        </p>
        <p className="text-lg mb-6 text-gray-600">
          Our mission is to empower businesses with technology that drives growth, efficiency, and success. We believe in creating tailored solutions that address the unique challenges and opportunities of each client.
        </p>
        <p className="text-lg text-gray-600">
          At Pratisol, we're committed to staying at the forefront of technological advancements, ensuring that our clients always have access to the latest and most effective IT solutions.
        </p>
      </motion.div>
    </div>
  </section>
);

export default About;   