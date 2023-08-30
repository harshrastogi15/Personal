import React from 'react';
import profileImage from '../../assets/Image/Harsh_Rastogi.png';

const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-16" id='AboutSection'>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 md:mr-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800">
              About Me
            </h2>
            <p className="text-gray-600 mb-6">
              I&apos;m a passionate developer with a love for creating web applications that are both functional and beautiful.
            </p>
            <p className="text-gray-600 mb-6">
              I specialize in front-end development using modern technologies and frameworks.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={profileImage} alt="Profile" className="w-full rounded-full md:ml-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
