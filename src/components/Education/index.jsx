import React from 'react';
import theme from '../../theme';

const education = () => {
  return (
    <section className={theme.typography.section.mainBlock}>
      <div className={theme.typography.section.childBlock}>
        <h2 className={theme.typography.heading}>
          Education
        </h2>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">BTech - Your University</h3>
              <p className="text-gray-600">Field of Study - Dates</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">12th Grade - Your School</h3>
              <p className="text-gray-600">Dates</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">10th Grade - Your School</h3>
              <p className="text-gray-600">Dates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default education;
