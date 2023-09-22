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
  NSYSU,
  SCU,
  TeamcalAi,
  DDB,
  task,
  ecommerce,
  threejs,
} from "../assets";

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
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Research Assistant",
    company_name: "Iris Lab - Object tracking",
    icon: NSYSU,
    iconBg: "#E6DEDD",
    date: "May 2019 - Jan 2020",
    points: [
      "Accurately detect and track pedestrians in real time using Faster R-CNN with Region Proposal Network (RPN) and Feature Pyramid Networks (FPN).",
      "Achieve 95% accuracy on challenging pedestrian detection datasets, while reducing training time by up to 50%.",
      "Calibrate pedestrian locations with Intersection over Union (IoU) and Non-Maximum Suppression (NMS) for optimal performance.",
    ],
  },
  {
    title: "Research Assistant",
    company_name: "Machine Learning Lab in Santa Clara University",
    icon: SCU,
    iconBg: "#f7f3f2",
    date: "May 2022 - Aug 2022",
    points: [
      "Accomplished outstanding performance on the Transformer model, surpassing industry standards by 15% with a BLEU score of 0.85.",
      "Optimized the model through extensive research and experimentation, achieving a remarkable 15% increase in accuracy compared to previous iterations.",
      "Collaborated effectively with a team of researchers to refine and optimize the Variational Auto-Encoder and Transformer models, delivering exceptional results with an impressive overall signal separation accuracy rate of 90%.",
    ],
  },
  {
    title: "Software engineer intern",
    company_name: "Teamcal.Ai",
    icon: TeamcalAi,
    iconBg: "#f7f3f2",
    date: "Jun 2023 - Sep 2023",
    points: [
      "Led a team of 8 developers in the development and maintenance of a scheduling software website using JavaScript, PHP, MySQL, and the CodeIgniter framework.",
      "Designed and implemented 10+ new product features that improved the overall functionality and performance of the product, resulting in a 20% increase in user satisfaction.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Solely developed and built to-do list features on MVC applications in 3 months, using HTML, CSS, and JavaScript.",
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
    name: "Distributed Database System",
    description:
      "Software systems that manage the consistency, consistency, and reliability of logically integrated data in distributed environments.",
    tags: [
      {
        name: "Python",
        color: "orange-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
    ],
    image: DDB,
    source_code_link: "https://github.com/leong86/Distributed-Database-System",
  },
  {
    name: "Task Management and Collaboration Project ",
    description:
      "Web application that enables users to create and manage tasks, track progress and collaborate projects, comunicate with team members and access data from anywhere.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Restapi",
        color: "green-text-gradient",
      },
      {
        name: "nodeJs",
        color: "pink-text-gradient",
      },
    ],
    image: task,
    source_code_link: "https://github.com/",
  },
  {
    name: "E-Commerce Website",
    description:
      "Allow users to buy and sell products online. The project involves a variety of tasks, such as choosing an e-commerce platform, designing the website, adding products, setting up payment processing and shipping, and promoting the website.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind",
        color: "orange-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
