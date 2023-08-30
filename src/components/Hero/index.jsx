import React from 'react';
import theme from '../../theme';
import scrollToSection from '../../Function/ScrollToSection';

const HeroSection = () => {
  return (
    <div className={`${theme.colors.primary} ${theme.colors.textPrimary} py-32 md:py-48`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className={`${theme.typography.title}`}>
          Welcome to My Portfolio
        </h1>
        <p className={`${theme.typography.subheading}`}>
          Showcase of my work, skills, and achievements.
        </p>
        <button className={`${theme.colors.buttonBg} ${theme.colors.buttonText} ${theme.typography.button} ${theme.colors.buttonHover} ${theme.colors.buttonFocus}`} onClick={()=>{
          scrollToSection('ProjectSection');
        }}>
          View Projects
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
