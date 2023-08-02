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
  github,
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
  cssrn,
  SAQ,
  gyva,
  bostonpizza,
} from "../assets"

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
]

// These are the services I offer.
const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
]

// These are the technologies that I use.
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
    name: "React JS",
    icon: reactjs,
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
    name: "GitHub",
    icon: github,
  },
]

const experiences = [
  {
    title: "IT Technician",
    company_name: "Gyva Boutique Du Bureau",
    icon: gyva,
    iconBg: "#383E56",
    date: "September 2017 - January 2018",
    points: [
      "Installing and configuring computer hardware, software, and peripherals.",
      "Diagnosing and resolving hardware and software issues for end-users.",
      "Assisting with system upgrades and software installations.",
      "Assisting with IT inventory management and procurement of equipment and software.",
    ],
  },
  {
    title: "Delivery Person, Line Cook & Server",
    company_name: "Boston Pizza",
    icon: bostonpizza,
    iconBg: "#E6DEDD",
    date: "May 2018 - January 2022",
    points: [
      "Occupying positions of progressively increasing responsibilities.",
      "Greeting customers, presenting menus, and accurately recording food and beverage orders.",
      "Delivering orders promptly, ensuring accuracy, and providing excellent customer service.",
      "Accepting payment, processing transactions, and returning change or receipts as needed.",
    ],
  },
  {
    title: "Substitute Teacher & Teacher",
    company_name: "Centre de services scolaire de Rouyn-Noranda",
    icon: cssrn,
    iconBg: "#383E56",
    date: "January 2021 - June 2022",
    points: [
      "Developing and implementing engaging lesson plans aligned with the curriculum and educational standards.",
      "Conducting effective and interactive classroom teaching, providing explanations, answering questions, and facilitating discussions.",
      "Evaluating student performance through assignments, tests, and exams, and providing constructive feedback to support their learning and growth.",
      "Creating a conducive learning environment, maintaining discipline, and fostering a positive and respectful atmosphere for students to thrive academically and socially.",
    ],
  },
  {
    title: "Warehouse Associate",
    company_name: "Société des alcools du Québec",
    icon: SAQ,
    iconBg: "#E6DEDD",
    date: "February 2023 - July 2023",
    points: [
      "Picking, packing, and preparing orders accurately and efficiently for shipment or delivery to customers.",
      "Using equipment such as forklifts, pallet jacks, and hand trucks to move and transport goods safely within the warehouse.",
      "Adhering to safety protocols, maintaining a clean and organized warehouse space, and assisting with general warehouse duties as needed.",
    ],
  },
]

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
]

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
]

export { services, technologies, experiences, testimonials, projects }
