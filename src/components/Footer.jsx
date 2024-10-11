import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
          <nav className="flex flex-col gap-4">
            <Link to="/contact" className="text-gray-300 hover:text-white transition duration-300">Contact Us</Link>
            <Link to="/team" className="text-gray-300 hover:text-white transition duration-300">Our Team</Link>
          </nav>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
          <address className="not-italic space-y-4">
            <p className="flex items-center"><Mail className="mr-3 h-5 w-5" /> info@pratisol.com</p>
            <p className="flex items-center"><Phone className="mr-3 h-5 w-5" /> +1 (555) 123-4567</p>
            <p className="flex items-center"><MapPin className="mr-3 h-5 w-5" /> 123 Tech Street, Innovation City, IN 54321, USA</p>
          </address>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-6">About Pratisol</h3>
          <p className="text-gray-300">Pratisol specializes in cutting-edge IT solutions, including website development, app development, AI automation tools, and custom integrations.</p>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-gray-800 text-center">
        <p className="text-gray-400">© 2024 Pratisol. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;