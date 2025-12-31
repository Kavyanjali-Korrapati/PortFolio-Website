
import { Project, Skill, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: 'React.js', icon: 'fa-brands fa-react', category: 'Frontend' },
  { name: 'JavaScript', icon: 'fa-brands fa-js', category: 'Frontend' },
  { name: 'HTML5 & CSS3', icon: 'fa-brands fa-html5', category: 'Frontend' },
  { name: 'Node.js', icon: 'fa-brands fa-node-js', category: 'Backend' },
  { name: 'Express.js', icon: 'fa-solid fa-server', category: 'Backend' },
  { name: 'MongoDB', icon: 'fa-solid fa-database', category: 'Database' },
  { name: 'Git & GitHub', icon: 'fa-brands fa-github', category: 'Tools' },
  { name: 'TypeScript', icon: 'fa-solid fa-code', category: 'Frontend' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Website',
    description: 'A full-stack shopping application built with React, Node.js, and MongoDB. Includes a working shopping cart and user authentication.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'Social Media Dashboard',
    description: 'A responsive dashboard that tracks social media analytics across multiple platforms with interactive charts.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    tech: ['React', 'Chart.js', 'CSS3'],
    github: '#',
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A simple and effective task manager to help users organize their daily goals and collaborate with teams.',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=800&auto=format&fit=crop',
    tech: ['React', 'Redux', 'Firebase'],
    github: '#',
  },
];

export const PERSONAL_INFO = {
  name: 'Leo Sterling',
  role: 'Full Stack Web Developer',
  location: 'London, UK',
  email: 'leo@sterling.dev',
  bio: 'I am a passionate Full Stack Developer with a focus on creating interactive and user-friendly web applications. I love solving complex problems and turning ideas into reality using the latest MERN stack technologies.',
  resumeUrl: '#',
  socials: {
    github: 'https://github.com/leosterling',
    linkedin: 'https://linkedin.com/in/leosterling',
    twitter: 'https://twitter.com/leosterling',
  }
};
