
export const skills = [
  'SpringBoot',
  'Spring MVC',
  'NodeJs',
  'Automation',
  'JavaScript',
  'React',
  'Python',
  'SQL workflow',
  'C++',
  'Java',
  'PostgreSQL',
  'MongoDB',
  'Data Modeling',
  'HTML/CSS',
  // 'Cucumber Framework',
  // 'Groovy Script',
  // 'Katalon Studio',
  // 'CI/CD',
  'Git/Github',
];

// Achievements
import icpc from '../Image/icpc_logo.png';
import kickStart from '../Image/kickStart.png';
import medal from '../Image/medal.jpg';

export const achievements = [
  {
    title: 'President’s Gold Medal',
    message: 'Highest CGPA in B.Tech batch, IIIT Bhagalpur',
    year: '2025',
    thumbnail: medal,
    link: '',
  },
  {
    title: 'Director’s Gold Medal',
    message: 'Highest CGPA in CSE branch, IIIT Bhagalpur',
    year: '2025',
    thumbnail: medal,
    link: '',
  },
  {
    title: 'ICPC 2022 - Qualified for Kanpur & Amritapuri Regionals',
    message: 'ranked 81st at Kanpur site',
    year: '2023',
    thumbnail: icpc,
    link: '',
  },
  {
    title: 'Google Kickstart Round D 2022',
    message: 'Secured Global rank 1137',
    year: '2022',
    thumbnail: kickStart,
    link: '',
  },

];

// Project Links
import bookStore from '../Image/Book_store.png';
import quiz from '../Image/Quiz.png';
import exam from '../Image/exam.v2.png';
// import textOnImage from '../Image/Text_On_Image.png';
// import bracketSolver from '../Image/Bracketsolver.png';
// import hrNote from '../Image/Hrnote.png';

export const projects = [
  {
    title: 'Exam Portal (v2) - In Progress',
    image: exam,
    githubLink: 'https://github.com/harshrastogi15/examportal.v2/',
  },
  {
    title: 'Quiz Platform',
    image: quiz,
    githubLink: 'https://github.com/harshrastogi15/examportal',
  },
  {
    title: 'BookStore',
    image: bookStore,
    link: 'https://hr-book-store.vercel.app/',
    githubLink: 'https://github.com/harshrastogi15/Book_Store',
  },
  // {
  //   title: 'Text_On_Image',
  //   image: textOnImage,
  //   githubLink: 'https://github.com/harshrastogi15/Text_On_Image',
  // },
  // {
  //   title: 'HR Bracket solver',
  //   image: bracketSolver,
  //   link: 'https://harshrastogi15.github.io/Bodmas-Calculator/',
  //   githubLink: 'https://github.com/harshrastogi15/Bodmas-Calculator',
  // },
  // {
  //   title: 'HR Note',
  //   image: hrNote,
  //   link: 'https://harshrastogi15.github.io/Basic-Project/note/note.html',
  //   githubLink: 'https://github.com/harshrastogi15/Basic-Project/tree/main/note',
  // },

];


export const codingProfiles = [
  {
    name: 'Codeforces',
    username: 'harsh_r15',
    link: 'https://codeforces.com/profile/harsh_r15',
  },
  {
    name: 'LeetCode',
    username: 'harsh_r15',
    link: 'https://leetcode.com/harsh_r15/',
  },
  {
    name: 'GeeksforGeeks',
    username: 'hrastogi2002',
    link: 'https://auth.geeksforgeeks.org/user/hrastogi2002',
  },
];

export const contactDetail = {
  'mail': 'hrastogi2002@gmail.com',
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
      name: 'Software Engineering Specialist | GE Vernova',
      date: 'Aug 2024 - Present',
      responsibility: [
        'Automate backend data validation using Python scripts, reducing manual effort by ~70% and improving ingestion accuracy for large structured datasets',
        'Design SQL workflows for data ingestion and transformation, ensuring validation and consistency across systems',
        'Support deployment of services in on-prem infrastructure using Kubernetes, Helm, and ArgoCD',
        'Contribute to backend validation flows, ensuring system behavior aligns with business rules across microservices',
      ],
    },
    {
      name: 'Digital Technology Intern | GE Vernova',
      date: 'Jan 2024 - July 2024',
      responsibility: [
        'Automated frontend and backend testing for UI and APIs using Groovy and Cucumber, streamlining workflows and minimizing manual testing',
        'Improved test accuracy and coverage by identifying and resolving issues in automation scripts',
      ],
    },
    {
      name: 'Full Stack Developer Intern | RiseUpp',
      date: 'Mar 2023 - June 2023',
      responsibility: [
        'Designed and developed scalable backend services using Node.js, Express, and MongoDB,enabling efficient data flow and high system performance',
        'Built responsive and interactive frontend interfaces with React.js, improving user experience',
        'Integrated Elasticsearch for fast and accurate search functionality',
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
