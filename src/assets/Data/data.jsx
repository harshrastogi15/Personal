import url from '../Image/Harsh_Rastogi.png';

export const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Tailwind CSS',
  'Responsive Design',
  'Git',
  'UI/UX Design',
];

export const achievements = [
  {
    title: 'Web Design Contest Winner',
    year: '2022',
    thumbnail: url,
    link: url + '/Harsh_Rastogi.png',
  },
  {
    title: 'Front-End Development Award',
    year: '2021',
    thumbnail: url,
    link: url + '/Harsh_Rastogi.png',
  },
  {
    title: 'Top Performer in UI/UX Design',
    year: '2020',
    thumbnail: url,
    link: url + '/Harsh_Rastogi.png',
  },
];

// Project Links
import bookStore from '../Image/Book_store.png';
import quiz from '../Image/Quiz.png';
import textOnImage from '../Image/Text_On_Image.png';
import bracketSolver from '../Image/Bracketsolver.png';
import hrNote from '../Image/Hrnote.png';

export const projects = [
  {
    title: 'BookStore',
    description: 'A MERN stack project designed to provide a seamless book store experience. This app/website allows users to explore a wide range of books, read reviews, and contribute their own feedback to help fellow readers make informed choices.',
    image: bookStore,
    link: 'https://hr-book-store.vercel.app/',
    githubLink: 'https://github.com/harshrastogi15/Book_Store',
  },
  {
    title: 'Quiz Platform',
    description: 'Quiz Platform is a computer-based quiz test software designed to simplify the process of conducting quizzes.',
    image: quiz,
    link: ' ',
    githubLink: 'https://github.com/harshrastogi15/examportal',
  },
  {
    title: 'Text_On_Image',
    description: 'This project is a simple certificate generator that takes a template certificate in PNG format, along with a CSV file containing names and IDs, and generates personalized certificates with the respective names and IDs.',
    image: textOnImage,
    link: ' ',
    githubLink: 'https://github.com/harshrastogi15/Text_On_Image',
  },
  {
    title: 'HR Bracket solver',
    description: 'This calculator is designed to solve mathematical expressions based on the BODMAS rule, specifically focusing on solving brackets. It provides step-by-step methods to solve each bracket in an expression.',
    image: bracketSolver,
    link: 'https://harshrastogi15.github.io/Bodmas-Calculator/',
    githubLink: 'https://github.com/harshrastogi15/Bodmas-Calculator',
  },
  {
    title: 'HR Note',
    description: 'It is a learning project. Its work to keep your note by javascript method and show it to your screen with that time at which you saved your note.',
    image: hrNote,
    link: 'https://harshrastogi15.github.io/Basic-Project/note/note.html',
    githubLink: 'https://github.com/harshrastogi15/Basic-Project/tree/main/note',
  },

];


export const codingProfiles = [
  {
    name: 'Codeforces',
    username: 'harsh_r15',
    link: 'https://codeforces.com/profile/harsh_r15',
    message: 'Specialist (1454)',
  },
  {
    name: 'LeetCode',
    username: 'harsh_r15',
    link: 'https://leetcode.com/harsh_r15/',
    message: ' Problem Solved 500+',
  },
  {
    name: 'GeeksforGeeks',
    username: 'hrastogi2002',
    link: 'https://auth.geeksforgeeks.org/user/hrastogi2002',
    message: '',
  },
];

export const contactDetail = {
  'mail': 'hrastogi2002@gmail.com',
  'phone': '+91-7455878221',
};

export const resume = {
  course: [
    'Data Structure and Algorithms',
    'Design and Analysis of Algorithms',
    'Operating Systems',
    'Computer Networks',
    'Database Management Systems',
    'Software Engineering',
  ],
  experience: [
    {
      name: 'Full Stack Developer Intern (RiseUpp)',
      date: 'March,2023 - June,2023',
      responsibility: [
        'Developed end-to-end backend solutions with Node.js, Express, and MongoDB, ensuring high-performance and seamless data management.',
        'Integrated Elasticsearch to enhance search functionality and improved data security using Multer integration, elevating user experience and safeguarding by over 30%.',
        'Worked closely with frontend team to ensure smooth integration, delivering a unified and user-friendly experience.',
      ],
    },
  ],
  por: [
    {
      name: 'WebVerse Coordinator (Web Development Club, IIITBH)',
      date: 'Feb,2022 - Feb,2023',
      responsibility: [
        'Conducted sessions, intra College hackathons, doubts solving sessions, etc. throughout my tenure asthe Coordinator.',
        'Successfully organized Bit-By-Bit, a 36 hours hackathon under ENYUGMA’22 (Techno-cultural fest of IIIT Bhagalpur) which had more than 50 participants from all over India.',
      ],
    },
  ],
};
