import React from 'react';
import theme from '../../theme';
import {skills} from '../../assets/Data/data';
const SkillsSection = () => {
  return (
    <section className={theme.typography.section.mainBlock} id='SkillSection'>
      <div className={theme.typography.section.childBlock}>
        <h2 className={theme.typography.heading}>
          Skills
        </h2>
        <div className="space-y-8">
          {skills.map((group, gIdx) => (
            <div key={gIdx}>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">{group.category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {group.items.map((skill, index) => (
                  <div key={index} className="p-4 bg-white shadow-md rounded-lg flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-blue-500 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-800">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
