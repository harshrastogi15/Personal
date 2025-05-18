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
            {/* <p className="text-gray-600 mb-6">
              Hello! I&apos;m Harsh Rastogi, a Computer Science graduate from IIIT Bhagalpur (Class of 2024) with a CGPA of 8.99. With a strong passion for programming and problem-solving, I&apos;ve honed my skills in various domains including Data Structures, Computer Networks, and Operating Systems. My technical expertise lies in C/C++, Python, and JavaScript, with specialization in full-stack web development using ReactJS, NodeJS, and Bootstrap.
              During my academic journey, I developed multiple projects such as a quiz platform and a book discovery platform, focusing on crafting user-friendly and efficient experiences. As a CodeForces Specialist and avid LeetCode problem solver, I&apos;ve tackled over 500 coding problems and participated in notable coding competitions, including ICPC regionals.
            </p> */}
            {/* <p className="text-gray-600 mb-6">
              Currently, I&apos;m working as a Software Engineering Specialist at GE Vernova, where I contribute to key projects and leverage my skills in automation, and cloud technologies.
            </p> */}
            <p className="text leading-relaxed text-gray-700">
              I&apos;m <strong>Harsh Rastogi</strong>, a Software Engineer with a passion for backend development and scalable systems. I specialize in building robust web applications using technologies like <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>MongoDB</strong>, and <strong>React</strong>. I enjoy designing clean APIs, automating workflows, and solving challenging system-level problems.
            </p>
            <p className="mt-3 text-gray-700">
              Currently, I&apos;m working at <strong>GE Vernova</strong>, where I&apos;ve contributed to deploying microservices in Kubernetes-based environments, writing automation scripts in Python, and improving backend validation pipelines. I&apos;ve also previously built full-stack applications and integrated tools like Elasticsearch, JWT auth, and CI/CD pipelines.
            </p>
            <p className="mt-3 text-gray-700">
              Outside of coding, I enjoy competitive programming and have qualified for <strong>ICPC Regionals</strong> and ranked globally in Google Kickstart. I&apos;m always excited to learn new technologies and collaborate on impactful engineering problems.
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
