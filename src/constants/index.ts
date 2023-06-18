import {
  mobile,
  wordpress,
  creator,
  react,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  prisma,
  git,
  figma,
  ponisha,
  mapsa,
  carrent,
  jobit,
  tripguide,
  threejs,
  yasGroup,
  mediana,
  learnwise,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Front-end Developer',
    icon: react,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'WordPress',
    icon: wordpress,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

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
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'Prisma',
    icon: prisma,
  },
];

const experiences = [
  {
    title: 'React.js Developer',
    company_name: 'Yas.group',
    icon: yasGroup,
    iconBg: '#383E56',
    date: 'Sep 2019 - Feb 2020',
    points: [
      'YAS is emerging financial service provider in Iran, I was responsible for:',
      'Design user interface of admin panel for computing and analyzing cryptocurrency data',
      'Implement the user interface with ReactJS, Redux Saga, Styled Component',
    ],
  },
  {
    title: 'Senior Frontend Engineer',
    company_name: 'Ponisha',
    icon: ponisha,
    iconBg: '#E6DEDD',
    date: 'Jan 2019 - Oct 2021',
    points: [
      "As a designer and programmer, I have designed and implemented more than 10 websites. Depending on customer's need, different technologies such as WordPress, HTML CSS JavaScript PHP ReactJS were used.",
    ],
  },
  {
    title: 'Frontend Developer',
    company_name: 'Mediana',
    icon: mediana,
    iconBg: '#9AC8BE',
    date: 'Oct 2021 - Jun 2022',
    points: [
      'Mediana is a knowledge-based company with more than 200,000 clients in Iran, 24 developers on the project. In Mediana re-branding process, I am responsible for:',
      'implement the new UI design with ReactJS, Typescript, Redux, Redux Saga, JSS.',
      'Improve website performance .',
      'Participate in weakly front-end knowledge sharing sessions and sharing some new information with my colleagues',
      'Delivering features and fixing bugs',
    ],
  },
  {
    title: 'Teaching Assistant',
    company_name: 'Mapsa',
    icon: mapsa,
    iconBg: '#E6DEDD',
    date: 'Nov 2022 - Present',
    points: [
      'Teaching front-end development to Students in Mapsa HR, including HTML,CSS,JavaScript & React JS.My main responsibility is review students exercises and teach them how to write better codes & debug their own codes.Its just a great experience to work individually with students to teach them how to start their career in the front-end world.',
    ],
  },
  {
    title: 'Frontend Engineer',
    company_name: 'LearnWise',
    icon: learnwise,
    iconBg: '#383E56',
    date: 'Jul 2022 - Present',
    points: [
      'LearnWise is an e-Learning app generator with cloud-based LMS trying to solve self-branding and content customization. in this company, I am in charge of :',
      'Switching former Angular admin panel to a brand new admin dashboard panel with React.',
      'Design and implementing software architecture in Front-end development.',
      'Helping Project Managers on task definitions, chunking and time estimation.',
      'Implementing new features to the previous project with React, Typescript, Mobx , Tailwind , React-query and etc...',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I highly recommend Maziyar as a software engineer. His extensive knowledge, dedication, and passion make him an invaluable asset. Maziyar excels in breaking down complex concepts',
    name: 'Ehsan Gazar',
    designation: 'Technical Team Lead',
    company: 'Mecca',
    image:
      'https://media.licdn.com/dms/image/C5603AQHWuhLqZhJ1vA/profile-displayphoto-shrink_100_100/0/1659587216801?e=1692835200&v=beta&t=D7Zv3sLbbV27l56q4xywGSUXFKby8tHabzAgyN7QKdo',
  },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: 'Chris Brown',
  //   designation: 'COO',
  //   company: 'DEF Corp',
  //   image: 'https://randomuser.me/api/portraits/men/5.jpg',
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: 'Lisa Wang',
  //   designation: 'CTO',
  //   company: '456 Enterprises',
  //   image: 'https://randomuser.me/api/portraits/women/6.jpg',
  // },
];

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
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
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
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
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
