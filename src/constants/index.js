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
  nehu,
  fso,
  nielit,
  cth,
  cdc,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },

  {
    id: 'contact',
    title: 'Contact',
  },
  {
    id: 'resume',
    title: 'Resume',
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'git',
    icon: git,
  },
]

const experiences = [
  {
    title: 'B.Tech in Information Technology',
    company_name: 'North-Eastern Hill University',
    icon: nehu,
    iconBg: '#E6DEDD',
    date: 'Nov 2020 - July 2024',
    points: [
      'Grade: 9.27/10 till 7th Semester.',
      'Academic Secretary, CIPHER Club, NEHU.',
      'Completed projects related to web development and database management.',
    ],
  },
  {
    title: 'Full Stack Open Certificate',
    company_name: 'University of Helsinki',
    icon: fso,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - June 2023',
    points: [
      'Learned modern JavaScript-based web development, including React and Node.js.',
      'Developed several full-stack applications as part of the course curriculum.',
      'Gained experience in testing and deploying applications to cloud platforms.',
    ],
  },
  {
    title: 'Internet of Things',
    company_name: 'NIELIT, Shillong',
    icon: nielit,
    iconBg: '#E6DEDD',
    date: 'Feb 2022 - Mar 2023',
    points: [
      'Completed a 100 Hours Training Course on IoT.',
      'Completed hands-on projects involving Arduino UNO, esp8266, DHT11 sensor.',
    ],
  },
  // {
  //   title: 'Full stack Developer',
  //   company_name: 'Meta',
  //   icon: meta,
  //   iconBg: '#E6DEDD',
  //   date: 'Jan 2023 - Present',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.',
  //   ],
  // },
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

const projects = [
  {
    name: 'CDC Web Portal, NEHU',
    description:
      'A Web-based application for colleges affiliated with North-Eastern Hill University to manage their profile, apply various affiliation related forms, document submission and tracking.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'chakra-ui',
        color: 'pink-text-gradient',
      },
    ],
    image: cdc,
    source_code_link: 'https://github.com/',
    link: 'http://cdc.nehu.ac.in/',
  },
  {
    name: 'CampusTradeHub',
    description:
      'A Web application that lets users sell and buy used goods tailored to the unique needs of university community. This web application seamlessly integrates essential features for user engagement and trust-building.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: cth,
    source_code_link: 'https://github.com/AKSinghWeb/CampusTradeHub',
    link: 'https://campustradehub.vercel.app/',
  },
]

export { technologies, experiences, testimonials, projects }
