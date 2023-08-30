import React from 'react';
import trophyIcon from '../../assets/Image/Harsh_Rastogi.png';

const AchievementSection = () => {
  const achievements = [
    {
      title: 'Web Design Contest Winner',
      year: '2022',
    },
    {
      title: 'Front-End Development Award',
      year: '2021',
    },
    {
      title: 'Top Performer in UI/UX Design',
      year: '2020',
    },
  ];

  return (
    <section className="bg-gray-100 py-16" id='AchievementSection'>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-800">
          Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <img src={trophyIcon} alt="Trophy" className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
