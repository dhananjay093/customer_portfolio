import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`px-4 lg:px-6 h-20 flex items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <motion.img
      style={{height:81,width:150}}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pratisol%20rework%20copy%20with%20leaf-8Up0UDMbU4bCs8X4vdf43ImKyW7RGr.svg"
        alt="Pratisol Logo"
        
      />
      <nav className="ml-auto flex gap-6">
        {['home', 'about', 'contact', 'team'].map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link 
              to={item === 'home' ? '/' : `/${item}`}
              className={`text-lg font-medium hover:text-primary cursor-pointer transition-colors duration-300 text-white`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </motion.div>
        ))}
      </nav>
    </motion.header>
  );
};

export default Header;  