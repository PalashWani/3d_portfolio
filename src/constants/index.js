import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  sheldon,
  html,
  sangu,
  huf,
  css,
  wander,
  medi,
  reactjs,
  redux,
  tejas,
  tailwind,
  bootstrap,
  nodejs,
  sorabh,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  rablo,
  tesla,
  shopify,
  cpp,
  carrent,
  jobit,
  tripguide,
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
    title: "Problem Solver",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud Practitioner",
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
    name: "C++",
    icon: cpp,
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
    name: "bootstrap",
    icon: bootstrap,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Rablo.in",
    icon: rablo,
    iconBg: "#383E56",
    date: "Feb 2023 - April 2023",
    points: [
      "My team works on developing Frontend components for a full stack Ed-Tech Web application.",
      "Team Lead of the Frontend team of 6 members.",
      "Technologies used are HTML, SASS, Javascipt, ReactJS, MicroFrontend.",
      "Troubleshooting and debugging front-end issues to ensure optimal performance and usability",
      "Work to achieve a balance between functional and aesthetic designs. Maintain brand consistency throughout the design process.",
    ],
  },
  {
    title: "MERN Stack Developer",
    company_name: "HUF",
    icon: huf,
    iconBg: "#E6DEDD",
    date: "July 2023 - Aug 2023",
    points: [
      "Inhouse project under college faculty for HUF India.",
      "My team is working on creating dashboards for maintenance system using MERN stack",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Throughout the internship period, Palash exhibited a high level of professionalism, enthusiasm, and dedication. He quickly adapted to our company culture, actively engaging with colleagues and demonstrating excellent teamwork skills.",
    name: "Sorabh Jain",
    designation: "Co Founder & COO",
    company: "Rablo.in",
    image: sorabh,
  },
  {
    testimonial:
      "I've had the pleasure of witnessing Palash's incredible talent in creating user-friendly web applications, setting new standards in development",
    name: "Tejas Ambekar",
    designation: " ",
    company: "PICT",
    image: tejas,
  },
  {
    testimonial:
      "Innovative and detail-oriented, Palash consistently delivers user-friendly MERN applications, like 'MediPortal,' that revolutionize the user experience",
    name: "Sangmeshwar Mahajan",
    designation: "Software Developer",
    company: "UBS",
    image: sangu,
  },
];

const projects = [
  {
    name: "Medi Portal",
    description:
      "Revolutionize healthcare accessibility with our MERN stack web app, offering seamless doctor appointments, real-time user profiles, and secure authentication, all enhanced by admin controls and real-time notifications for an informed medical experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: medi,
    source_code_link: "https://github.com/orgs/mediportal23/repositories",
    deployed_link: "https://mediiportal.onrender.com/",
  },
  {
    name: "Sheldon",
    description:
      "Elevate creativity and productivity with our SAAS platform, seamlessly integrating OpenAI's capabilities for image, code, conversation, video, and music generation, powered by a dynamic ReactJS frontend and a robust MongoDB backend.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "openAI",
        color: "green-text-gradient",
      },
      {
        name: "saas",
        color: "pink-text-gradient",
      },
    ],
    image: sheldon,
    source_code_link: "https://github.com/PalashWani/Sheldon",
    deployed_link: "https://sheldon-m9ohzqbwy-palashwani.vercel.app/",
  },
  {
    name: "Wander Stay",
    description:
      "Deliver a personalized and dynamic hotel booking experience through our platform, featuring real-time updates, advanced filtering, intuitive room reservations, and streamlined admin management for seamless hotel operations.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: wander,
    source_code_link: "https://github.com/PalashWani/Booking_Backend",
    // deployed_link:"#",
  },
];

export { services, technologies, experiences, testimonials, projects };
