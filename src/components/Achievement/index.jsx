import React, {useState} from 'react';
import {achievements} from '../../assets/Data/data';
import theme from '../../theme';

const AchievementSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleCardHover = (index) => {
    setHoveredIndex(index);
  };

  return (
    <section className={theme.typography.section.mainBlock} id="AchievementSection">
      <div className={theme.typography.section.childBlock}>
        <h2 className={theme.typography.heading}>
          Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`bg-white shadow-md rounded-lg p-6 transition-transform duration-300 transform ${
                hoveredIndex === index ? 'hover:scale-105 hover:-translate-y-2' : ''
              }`}

              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={() => handleCardHover(-1)}
            >
              <div className="flex items-center justify-center mb-4">
                {hoveredIndex === index ? (
                  <img src={achievement.thumbnail} alt="Trophy" className="w-12 h-12 mx-auto" />
                ) : (
                  <span className="text-4xl w-12 h-12 mx-auto">🏆</span>
                )}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center text-gray-800">{achievement.title}</h3>
              <p className="text-md text-gray-600 text-center">{achievement.message}</p>
              <p className="text-gray-600 text-center">{achievement.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
