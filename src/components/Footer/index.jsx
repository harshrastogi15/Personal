import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 py-4 text-center text-white">
      <div className="max-w-5xl mx-auto">
        <p>&copy; {currentYear} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
