import React from 'react';

const Education = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-800">
          Education
        </h2>
        <div className="relative">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-blue-500 rounded-full mr-4"></div>
            <div className="flex-grow bg-gray-300 h-1"></div>
          </div>
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

export default Education;
