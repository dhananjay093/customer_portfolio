import React from 'react';
import { motion } from 'framer-motion';

const Team = () => (
  <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
    <div className="container px-4 md:px-6">
      <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-800"
      >
        Our Team
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((member) => (
          <motion.div 
            key={member}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: member * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <img src={`/placeholder.svg?height=200&width=200`} alt={`Team Member ${member}`} className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-bold text-center mb-2">Team Member {member}</h3>
            <p className="text-gray-600 text-center">Position</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;