import React from 'react';
import {FaLinkedin, FaInstagram, FaGithub, FaEnvelope, FaPhone} from 'react-icons/fa';
import theme from '../../theme';

const ContactSection = () => {
  return (
    <section className={theme.typography.section.mainBlock} id='ContactSection'>
      <div className={theme.typography.section.childBlock}>
        <h2 className={theme.typography.heading}>
          Contact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Get in Touch</h3>
            <p className="text-gray-600 mb-4">Feel free to reach out to me through email or phone:</p>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-gray-600" />
              <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-blue-500">
                your.email@example.com
              </a>
            </div>
            <div className="flex items-center space-x-4 mt-2">
              <FaPhone className="text-gray-600" />
              <span className="text-gray-600">123-456-7890</span>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Social Media</h3>
            <div className="flex items-center space-x-4">
              <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-500 hover:text-blue-700" />
              </a>
              <a href="https://www.instagram.com/yourusername/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-pink-500 hover:text-pink-700" />
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-gray-600 hover:text-gray-800" />
              </a>
            </div>
            <h3 className="text-lg font-semibold mb-2 mt-2 text-gray-800">Profile</h3>
            <div className="">
              <a href="https://codeforces.com/profile/yourusername" target="_blank" rel="noopener noreferrer">
                Codeforces
              </a>
              <br />
              <a href="https://www.codechef.com/users/yourusername" target="_blank" rel="noopener noreferrer">
                CodeChef
              </a>
              <br />
              <a href="https://leetcode.com/yourusername/" target="_blank" rel="noopener noreferrer">
                LeetCode
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
