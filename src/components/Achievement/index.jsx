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
        <div className="grid grid-cols-1 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`inline-flex bg-white shadow-md rounded-lg p-2 transition-transform duration-300 transform `}

              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={() => handleCardHover(-1)}
            >
              <div className="flex items-center justify-center w-28">
                {hoveredIndex === index ? (
                  <img src={achievement.thumbnail} alt="Trophy" className="w-12 h-12 mx-auto" />
                ) : (
                  <span className="text-4xl w-12 h-12 mx-auto">🏆</span>
                )}
              </div>
              <div className="pl-4">
                <h3 className="text-lg font-semibold  text-gray-800">{achievement.title} || <i>Year: {achievement.year} </i></h3>
                <p className="text-md text-gray-600 ">{achievement.message}</p>
                {/* <p className="text-gray-600 ">{achievement.year}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
