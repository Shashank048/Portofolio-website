import { Project, Skill, Education, Achievement, ContactInfo } from '../types';

export const personalInfo = {
  name: 'Shashank Choure ',
  title: 'Full-Stack Developer & Aspiring Software Engineer',
  tagline: 'Building responsive, real-world web applications using the MERN stack and modern web technologies. Experienced in designing full-fledged platforms from scratch with authentication, real-time features. Passionate about clean architecture, problem solving, and building intuitive user experiences',
  about: 'I am a Computer Science and Engineering student at Indian Institute of Information Technology, Nagpur with a strong interest in web development and problem-solving. I am currently seeking internship opportunities to gain hands-on experience and contribute to real-world projects. My primary focus is on building scalable and efficient web applications, and I am eager to learn and grow in a dynamic professional environment.',
  image: '/profile.jpg', // Path to your profile image
};

export const contactInfo: ContactInfo = {
  email: 'choureshashank21@gmail.com',
  linkedin: 'www.linkedin.com/in/shashank-choure-0a4b14270/',
  github: 'github.com/Shashank048',
  phone: ''
};

export const projects: Project[] = [
  {
    title: 'StayEase',
    description: 'Implemented secure user authentication with personalized profiles, property listings with descriptions, images, pricing, and availability, and an interactive map with geocoding for precise property locations. Built a scalable and responsive application architecture based on the MVC design pattern.',
    techStack: 'Next.js, React, MongoDB, Bootstrap, Cloudinary API',
    githubLink: 'github.com/Shashank048/Major-Project-1',
    date: 'June 2024',
  },
  {
    title: 'TalkBridge  ',
    description: 'Implemented WebRTC for video and audio streaming, ensuring smooth communication. Used Socket.io for real-time event-based communication between client and server. Added real-time chat functionality and designed custom meeting rooms with unique URLs.',
    techStack: 'React, Node.js, WebRTC, Socket.io',
    githubLink: 'github.com/Shashank048/Zoom-clone',
    date: 'July 2024',
  },
  {
    title: 'CodeDeck',
    description: 'Developed a GitHub-like platform enabling seamless repository management. Implemented version control with commit history for tracking code changes. Designed a user authentication system with secure login and personalized profiles.',
    techStack: 'React, Node.js, MongoDB',
    githubLink: 'github.com/Shashank048/Github-clone-Frontend',
    date: 'August 2024',
  },
  {
    title: 'StockNest',
    description: 'Implemented real-time stock market data updates using WebSockets. Designed a user-friendly dashboard for stock buying. Ensured scalability with a responsive design. Integrated interactive charts for financial data visualization.',
    techStack: 'Express.js, Node.js, MongoDB, Bootstrap, Javascript',
    githubLink: 'github.com/Shashank048/Zerodha',
    date: 'November 2024',
  },
];

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['C', 'C++', 'JavaScript', 'HTML/CSS'],
  },
  {
    category: 'Frameworks',
    items: ['React', 'Node.js', 'TailwindCSS', 'Redux Toolkit', 'Material-UI'],
  },
  {
    category: 'Developer Tools',
    items: ['Git', 'GitHub', 'Docker', 'VS Code'],
  },
  {
    category: 'Libraries',
    items: ['Cloudinary', 'Axios', 'React Router'],
  },
  {
    category: 'API Tools',
    items: ['REST API', 'OAuth', 'Postman'],
  },
  {
    category: 'Soft Skills',
    items: ['Communication', 'Teamwork', 'Problem Solving', 'Adaptability'],
  },
];

export const education: Education[] = [
  {
    institution: 'Indian Institute of Information Technology',
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    duration: '2022 - 2026',
    location: 'Nagpur, Maharashtra',
  },
  {
    institution: 'Shri Shivaji Vidyamandir and Kanishtha Mahavidyalaya',
    degree: 'Maharashtra State Board of Secondary and Higher Secondary Education',
    duration: '2021',
    location: 'Pune',
  },
];

export const achievements: Achievement[] = [
  {
    title: 'HackVenture 2024-2025',
    description: 'Secured 2nd place in the HackVenture event at Technovation 2024-2025, hosted by Burhani College of Commerce and Arts, Mumbai.',
  },
  {
    title: 'LeetCode Problem Solving',
    description: 'Solved 260+ coding problems on LeetCode',
    link: 'leetcode.com/u/Shashank_048/',
  },
  {
    title: 'Competitive Programming',
    description: 'Solved 360+ coding problems across platforms including LeetCode, CodeChef, GFG, and HackerRank',
  },
  {
    title: 'Full Stack Web Development',
    description: 'Completed a comprehensive Full Stack Web Development course by Apna College',
  },
  {
    title: 'C++ with DSA',
    description: 'Completed a detailed C++ with DSA course by CodeHelp (Love Babbar)',
  },
];

export const resumeLink = '/resume.pdf'; // This would be the path to your resume file