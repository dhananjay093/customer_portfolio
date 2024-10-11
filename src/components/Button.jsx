import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, className, variant, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`px-6 py-3 rounded-full font-semibold transition-colors duration-300 ${className} ${
      variant === 'outline' ? 'border-2 border-current' : ''
    }`}
    onClick={onClick}
  >
    {children}
  </motion.button>
);

export default Button;