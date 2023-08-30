import React from 'react';
import url from '../../assets/Image/Harsh_Rastogi.png';
const projects = [
  {
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: url,
    link: 'https://project1-demo.com',
    githubLink: 'https://github.com/yourusername/project2',
  },
  {
    title: 'Project 2',
    description: 'Praesent tincidunt justo in nisl congue, non vestibulum ex venenatis.',
    image: url,
    link: 'https://project2-demo.com',
    githubLink: 'https://github.com/yourusername/project2',
  },

];

const ProjectShowcase = () => {
  return (
    <section className="bg-gray-100 py-16" id='ProjectSection'>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-800">
          Project
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <img src={project.image} alt={project.title} className="mb-4 rounded-lg" />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex justify-between items-center">
                <a
                  href={project.link}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                View Project
                </a>
                <a
                  href={project.githubLink}
                  className="text-gray-600 hover:text-gray-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
