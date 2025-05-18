import React from 'react';
import theme from '../../theme';
import scrollToSection from '../../Function/ScrollToSection';
import backgroundImage from '../../assets/Image/heroBackground.png';

const HeroSection = () => {
  return (
    <div className={`${theme.colors.primary} ${theme.colors.textPrimary} flex flex-col item-center justify-center h-screen`}
      style={{backgroundImage: `url("${backgroundImage}`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 10}}
    >
      <div className="max-w-7xl flex flex-col item-center justify-center mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className={`${theme.typography.title} text-center`}>
          Harsh Rastogi
        </h1>
        <p className={`${theme.typography.subheading} text-center`}>
          Software Engineer | Backend Developer | CSE&apos;24 IIIT Bhagalpur
        </p>
        {/* <p className={`${theme.typography.subheading} text-center`}>
          Node.js · Express · MongoDB · Kubernetes
        </p> */}
        <p className={`${theme.typography.subheading} text-center`}>
          Welcome to My Portfolio
        </p>
        {/* <p className={`${theme.typography.subheading}`}>
          Showcase of my work, skills, and achievements.
        </p> */}
        <button className={`w-40 mx-auto ${theme.colors.buttonBg} ${theme.colors.buttonText} ${theme.typography.button} ${theme.colors.buttonHover} ${theme.colors.buttonFocus} text-center my-2`} onClick={()=>{
          scrollToSection('ContactSection');
        }}>
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
