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
            <p className="text leading-relaxed text-gray-700">
              I&apos;m <strong>Harsh Rastogi</strong>, a Software Engineer passionate about backend development, and system design. I graduated from IIIT Bhagalpur <strong>(B.Tech, CSE, 2024, CGPA 8.99)</strong> where I was awarded the <strong>Gold Medal</strong> for Academic Excellence.
            </p>
            <p className="mt-3 text-gray-700">
              Currently, I&apos;m working at GE Vernova as a <strong>Software Engineering Specialist</strong>, where I build backend validation workflows, Apache Camel-based data ingestion pipelines, and optimize PostgreSQL queries.
            </p>
            <p className="mt-3 text-gray-700">
              Beyond work, I&apos;ve proven my problem-solving ability as an ICPC Regionalist (Kanpur & Amritapuri) and enjoy applying algorithmic thinking to real-world software challenges.
            </p>
            <p className="mt-3 text-gray-700">
              I believe in writing efficient, scalable, and maintainable code that creates real impact.
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
