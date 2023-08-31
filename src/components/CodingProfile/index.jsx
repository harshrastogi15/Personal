import React from 'react';
import {FaCode} from 'react-icons/fa';
import theme from '../../theme';
import {codingProfiles} from '../../assets/Data/data';
const CodingProfiles = () => {
  return (
    <section className={theme.typography.section.mainBlock} id="CodingProfiles">
      <div className={theme.typography.section.childBlock}>
        <h2 className={theme.typography.heading}>
          Coding Profiles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {codingProfiles.map((profile, index) => (
            <a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-md rounded-lg p-4 text-center transition transform hover:scale-105 bg-gradient-to-l"
            >
              <FaCode/>
              <h3 className="text-md font-semibold text-gray-800">{profile.name}</h3>
              <p className="text-blue-600">{profile.username}</p>
              <p className="text-gray-800">{profile.message}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
