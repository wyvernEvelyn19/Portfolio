import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  dominix,
} from "../assets";

import taskmanger from "../assets/taskmanager.png";
import musicroom from "../assets/musicroom.png";
import My_club from "../assets/My_club.png";
import budgetApp from "../assets/budgetApp.png";
import chitChat from "../assets/chitChat.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "ML Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Dominix Global Design Ltd",
    icon: dominix,
    iconBg: "#383E56",
    date: "November 2021 - February 2022",
    points: [
      "Developed and maintained an end customer-facing website using the MERN stack, attracting over 10,000 daily active users",
      "Implemented a robust authentication interface employing JWT, with an average of thousands of daily authentications and an outstanding availability rate of 99.99%.",
      "Optimized database operations, resulting in a 40% reduction in data retrieval time, reducing request latency to approximately 80 ms from 130 ms.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Social Club",
    description:
      "Web-based platform that allows user's to create events and book venues for their events. User's can register for an event. The application provides a convenient and efficient solution to managing different events.",
    tags: [
      {
        name: "python",
        color: "orange-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: My_club,
    source_code_link: "#",
  },
  {
    name: "Task Manager",
    description:
      "Web application that enables the user to manage and keep track of his tasks and plan their schedule accordingly.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Angular",
        color: "pink-text-gradient",
      },
    ],
    image: taskmanger,
    source_code_link: "#",
  },
  {
    name: "Music Room",
    description:
      "Experience real-time communication with my Node, Express, and WebSockets chat app. Join rooms, connect with others, and chat effortlessly. Powered by SocketJS, it guarantees smooth, interactive messaging for an enhanced user experience.",
    tags: [
      {
        name: "nodeJs",
        color: "blue-text-gradient",
      },
      {
        name: "socketJS",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: chitChat,
    source_code_link: "https://github.com/wyvernEvelyn19/chitChat",
  },
  {
    name: "Budget Tracker",
    description:
      "Discover financial empowerment through my ReactJS and Bootstrap budgeting app. Effortlessly manage budgets and track expenses with color-coded progress bars. Add, delete, and calculate total budgets for a holistic view of financial health. Simplify your financial journey with this intuitive, user-friendly interface.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "nodeJS",
        color: "pink-text-gradient",
      },
    ],
    image: budgetApp,
    source_code_link: "https://wyvernevelyn19.github.io/budgetTracker/",
  },
];

export { services, technologies, experiences, testimonials, projects };
