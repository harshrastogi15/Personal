import React from 'react';
import profileImage from '../../assets/Image/Harsh_Rastogi.jpg';
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
              Hello! I&apos;m Harsh Rastogi, a Computer Science graduate from IIIT Bhagalpur (Class of 2024) with a CGPA of 8.99. With a strong passion for programming and problem-solving, I&apos;ve honed my skills in various domains including Data Structures, Computer Networks, and Operating Systems. My technical expertise lies in C/C++, Python, and JavaScript, with specialization in full-stack web development using ReactJS, NodeJS, and Bootstrap.
              During my academic journey, I developed multiple projects such as a quiz platform and a book discovery platform, focusing on crafting user-friendly and efficient experiences. As a CodeForces Specialist and avid LeetCode problem solver, I&apos;ve tackled over 500 coding problems and participated in notable coding competitions, including ICPC regionals.
            </p>
            <p className="text-gray-600 mb-6">
              Currently, I&apos;m working as a Software Engineering Specialist at GE Vernova, where I contribute to key projects and leverage my skills in automation, and cloud technologies.
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
