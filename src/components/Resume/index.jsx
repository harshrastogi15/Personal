import React from 'react';
import theme from '../../theme';
import {resume} from '../../assets/Data/data';

const Resume = () => {
  return (
    <section className={theme.typography.section.mainBlock} id='ResumeSection'>
      <div className={theme.typography.section.childBlock}>
        <h2 className={theme.typography.heading}>
          Resume
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Experience</h3>
            <ul className="list-disc list-inside text-gray-600">
              {resume.experience.map((e, idx) => {
                return <li key={idx} className='pt-4'>
                  <span className='text-md text-gray-600 font-bold'>{e.name}</span>
                  <p className='pl-6 text-gray-600'>{e.date}</p>
                  <ul className="list-disc pl-6 list-inside text-gray-500">
                    {e.responsibility.map((e, idx)=>{
                      return <li key={idx}>{e}</li>;
                    })}
                  </ul>
                </li>;
              })}
            </ul>
          </div>
          <div className="grid grid-rows-2">
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Positions of Responsibility</h3>
              <ul className="list-disc list-inside text-gray-600">
                {resume.por.map((e, idx) => {
                  return <li key={idx}>
                    <span className='text-md text-gray-600 font-bold'>{e.name}</span>
                    <p className='pl-6 text-gray-600'>{e.date}</p>
                    <ul className="list-disc pl-6 list-inside text-gray-500">
                      {e.responsibility.map((e, idx)=>{
                        return <li key={idx}>{e}</li>;
                      })}
                    </ul>
                  </li>;
                })}
              </ul>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 mt-2">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Courses</h3>
              <ul className="list-disc list-inside list-none flex-wrap  text-gray-600">
                {resume.course.map((e, index) => {
                  return <li className='ml-4' key={index}>{e},</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <a href="https://drive.google.com/file/d/1SuF9XmyKUjPkFEsUneiQORHybgqYFYC4/view" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full font-semibold bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
