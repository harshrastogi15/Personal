import React from 'react';
import profileImage from '../../assets/Image/Harsh_Rastogi.png';
import theme from '../../theme';

const AboutSection = () => {
  return (
    <section className={theme.typography.section.mainBlock + ' pt-16'} id='AboutSection'>
      <div className={theme.typography.section.childBlock}>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 md:mr-16">
            <h2 className={theme.typography.heading}>
              About Me
            </h2>
            <p className="text-gray-600 mb-6">
              Hello! I&apos;m Harsh Rastogi, a dedicated Computer Science student at IIIT Bhagalpur with a passion for programming and technology. With a solid foundation in fundamentals and a love for problem-solving, I maintain a CGPA of 8.83 while embracing courses like Data Structures, Computer Networks, and Operating Systems.

              Proficient in C/C++, Python, and JavaScript, I specialize in web development using ReactJs, NodeJS, and Bootstrap. I&apos;ve crafted seamless user experiences through projects like a quiz platform and a book discovery platform.

            </p>
            <p className="text-gray-600 mb-6">
              As a CodeForces Specialist and LeetCode enthusiast, I&apos;ve solved over 400 problems and participated in prestigious coding competitions. My coordination role at the Web Development Club has allowed me to enhance my skills while fostering a collaborative spirit.
            </p>
          </div>
          <div className="md:w-1/2 h-80 md:h-80">
            <img src={profileImage} alt="Profile" className="w-80 h-80 m-auto rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
