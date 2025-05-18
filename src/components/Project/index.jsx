import React from 'react';
import {projects} from '../../assets/Data/data';
import theme from '../../theme';

const ProjectShowcase = () => {
  return (
    <section className={theme.typography.section.mainBlock} id='ProjectSection'>
      <div className={theme.typography.section.childBlock}>
        <h2 className={theme.typography.heading}>
          Project
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-0 overflow-hidden">
              <img src={project.image} alt={project.title} className="mb-4 w-80 h-30 m-auto " />
              <h3 className="text-xl font-semibold mb-2 mx-2 text-gray-800">{project.title}</h3>
              <div className="flex justify-between items-center m-2">
                {project.link && <a
                  href={project.link}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                View Project
                </a>}
                <a
                  href={project.githubLink}
                  className="text-gray-600 hover:text-pink-950 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-2">Want to see more of my work?</p>
          <a
            href="https://github.com/harshrastogi15"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block px-6 py-3 rounded-full font-semibold bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out`}
          >
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
