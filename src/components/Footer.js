import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container w-[80%] mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul>
            <li><Link to="/" className="text-gray-300 hover:text-gray-100">Home</Link></li>
            <li><Link to="/courses" className="text-gray-300 hover:text-gray-100">Courses</Link></li>
            <li><Link to="/admission" className="text-gray-300 hover:text-gray-100">Admission</Link></li>
            <li><Link to="/about" className="text-gray-300 hover:text-gray-100">About</Link></li>
            <li><Link to="/contact" className="text-gray-300 hover:text-gray-100">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
          <p className="text-gray-300">123 College Street,</p>
          <p className="text-gray-300">City, State, Zip Code</p>
          <p className="text-gray-300">Email: info@example.com</p>
          <p className="text-gray-300">Phone: 123-456-7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



