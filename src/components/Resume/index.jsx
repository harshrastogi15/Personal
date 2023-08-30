import React from 'react';

const Resume = () => {
  return (
    <section className="bg-gray-100 py-16" id='ResumeSection'>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-800">
          Resume
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Experience</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Job Title - Company/Organization - Dates</li>
              <li>Job Title - Company/Organization - Dates</li>

            </ul>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Positions of Responsibility</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Position - Organization - Dates</li>
              <li>Position - Organization - Dates</li>

            </ul>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Courses</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Course Name - Institution - Dates</li>
              <li>Course Name - Institution - Dates</li>

            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <a href="/path/to/your/resume.pdf" download className="px-6 py-3 rounded-full font-semibold bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
