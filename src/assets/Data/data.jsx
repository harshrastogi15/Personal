
export const skills = [
  'NodeJs',
  'JavaScript',
  'React',
  'Python',
  'C++',
  'Java',
  'Sql',
  'MongoDB',
  'HTML/CSS',
  'Cucumber Framework',
  'Groovy Script',
  'Katalon Studio',
  'Kubernetes',
  'Helm & ArgoCD',
  'CI/CD',
  'Git/Github',
];

// Achievements
import icpc from '../Image/icpc_logo.png';
import kickStart from '../Image/kickStart.png';

export const achievements = [
  {
    title: 'Ranked 81 at ICPC Mathura-Kanpur Regional site 2022',
    message: 'Amongst 150 teams across the country',
    year: '2023',
    thumbnail: icpc,
    link: '',
  },
  {
    title: 'Secured a slot at ICPC Mathura-Kanpur Regionals 2022',
    message: 'AIR - 152 in preliminary round',
    year: '2023',
    thumbnail: icpc,
    link: '',
  },
  {
    title: 'Secured a slot at ICPC Amritapuri Regionals 2022',
    message: 'AIR - 238 in preliminary round',
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
// import textOnImage from '../Image/Text_On_Image.png';
// import bracketSolver from '../Image/Bracketsolver.png';
// import hrNote from '../Image/Hrnote.png';

export const projects = [
  {
    title: 'BookStore',
    image: bookStore,
    link: 'https://hr-book-store.vercel.app/',
    githubLink: 'https://github.com/harshrastogi15/Book_Store',
  },
  {
    title: 'Quiz Platform',
    image: quiz,
    githubLink: 'https://github.com/harshrastogi15/examportal',
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
        'Deployed and managed project in on-premise environments using Kubernetes (K8s), Helm,and ArgoCD, ensuring reliable and efficient application delivery.',
        'Developed and maintained Python scripts for automated data validation to ensure integrity across backend systems.',
        'Validated full-stack functionality through end-to-end testing of UI and backend components to ensure system integrity and requirement alignment.',
      ],
    },
    {
      name: 'Digital Technology Intern | GE Vernova',
      date: 'Jan 2024 - July 2024',
      responsibility: [
        'Automated frontend and backend testing for UI and APIs using Groovy and Cucumber, streamlining workflows and minimizing manual testing.',
        'Improved test accuracy and coverage by identifying and resolving issues in automation scripts.',
      ],
    },
    {
      name: 'Full Stack Developer Intern | RiseUpp',
      date: 'Mar 2023 - June 2023',
      responsibility: [
        'Designed and developed scalable backend services using Node.js, Express, and MongoDB,enabling efficient data flow and high system performance.',
        'Built responsive and interactive frontend interfaces with React.js, improving user experience.',
        'Integrated Elasticsearch for fast and accurate search capabilities, and implemented file upload handling using Multer to support multimedia data.',
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
