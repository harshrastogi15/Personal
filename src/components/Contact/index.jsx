import React from 'react';
import {FaLinkedin, FaInstagram, FaGithub, FaEnvelope} from 'react-icons/fa';
import theme from '../../theme';
import {contactDetail} from '../../assets/Data/data';

const contactSection = () => {
  return (
    <section className={theme.typography.section.mainBlock} id='ContactSection'>
      <div className={theme.typography.section.childBlock}>
        <h2 className={theme.typography.heading}>
          Contact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-0 text-gray-800">Get in Touch</h3>
            <p className="text-gray-600 mb-2">Feel free to reach out to me through email:</p>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-gray-600" />
              <a href={'mailto:'+contactDetail.mail} className="text-gray-600 hover:text-blue-500">
                {contactDetail.mail}
              </a>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg text-center font-semibold mb-2 text-gray-800">Social Media</h3>
            <div className="flex items-center space-x-10 flex justify-center">
              <a href="https://www.linkedin.com/in/harsh-rastogi-114962200/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-3xl text-blue-500 hover:text-blue-700 " />
              </a>
              <a href="https://www.instagram.com/harsh_rastogi15" target="_blank" rel="noopener noreferrer">
                <FaInstagram className=" text-3xl text-pink-500 hover:text-pink-700" />
              </a>
              <a href="https://github.com/harshrastogi15" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-3xl text-gray-600 hover:text-gray-800" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contactSection;
