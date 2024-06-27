import {
  mobile,
  wordpress,
  // creator,
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
  // mapsa,
  persiajs,
  misalearn,
  tourandto,
  threejs,
  kianDigital,
  mediana,
  learnwise,
  node
  // linkedin
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
    title: 'NodeJS Developer',
    icon: node,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'WordPress',
    icon: wordpress,
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
    title: 'Web developer',
    company_name: 'Freelance',
    icon: ponisha,
    iconBg: '#383E56',
    date: 'Jan 2015 - May 2018',
    points: [
      "As a designer and programmer, I have designed and implemented more than 10 websites. Depending on customer's need, different technologies such as WordPress, HTML CSS JavaScript PHP ReactJS were used.",
    ],
  },
  {
    title: 'Frontend Developer',
    company_name: 'Mediana',
    icon: mediana,
    iconBg: '#9AC8BE',
    date: 'Feb 2018 - Feb 2020',
    points: [
      'Mediana is a knowledge-based company with more than 200,000 clients in Iran, 24 developers on the project. In Mediana re-branding process, I am responsible for:',
      'Improve website performance .',
      'Participate in weakly front-end knowledge sharing sessions and sharing some new information with my colleagues',
      'Delivering features and fixing bugs',
      'implement the new UI design with ReactJS, Typescript, Redux, Redux Saga, JSS.',
    ],
  },
  {
    title: 'Senior Frontend Engineer',
    company_name: 'Kian Digital',
    icon: kianDigital,
    iconBg: '#FFF',
    date: 'March 2020 - Sep 2022',
    points: [
      'Kian digital is one of the lead financial enterprises (FINTECH) in Iran,with more than 300,000 active users',
      'Worked with a team of 5 developers and graduates to address obstacles and provide groundbreaking solutions that significantly benefited the project.',
      'Code review,Pair programming and mentoring junior developers.',
      'Unified all the async network calls from view and handled them with proper side effect handler using redux-toolkit and redux-thunk.',
      'Drove a notable 2-second reduction in Stoke market map page load time, significantly improving user experience and retention rates',
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
      'Creating a brand-new admin dashboard panel with React, While we were implementing the new design system, I implemented Storybook in order to make the collaboration between design and development much better. ',
      'Design and implementing software architecture and best practices that boosted website performance by 40% according lighthouse test. ',
      'Worked on creating some of our most important marketing pages, reducing duration by 6 seconds and improving user experience',
      'Writing end-to-end test for making sure of correct user flows.',
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
    link:"https://www.linkedin.com/in/gazar/",
    image:
      'https://media.licdn.com/dms/image/D5603AQEO0i6xK5i3pA/profile-displayphoto-shrink_400_400/0/1704170455986?e=1724889600&v=beta&t=q8EE6d57UDBtG230kxQ_hsej-rOO3G_a5tMdI5v1EGY',
  },
  {
    testimonial:
      "Maziar is a highly skilled professional who brings a positive attitude and strong work ethic to every task he undertakes. His attention to detail and commitment to excellence is truly commendable.",
    name: 'Niloofar Arazkhani',
    designation: ' Researcher',
    company: 'University of Pittsburgh',
    image: 'https://scholar.googleusercontent.com/citations?view_op=view_photo&user=VOXDJ-4AAAAJ&citpid=5',
    // image: 'https://x.com/NiloofarAraz/photo',
    link:"https://www.linkedin.com/in/niloofar-arazkhani-1581025b/"
  },
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
    name: 'Persia JS',
    description:
      'Teaching JavaScript to Persian developers is one of our services. As one of the community co-founders, I help them Learn front-end development. Im also in charge of writing and publishing related articles.',
    tags: [
      {
        name: 'Next JS',
        color: 'blue-text-gradient',
      },
      {
        name: 'emotion',
        color: 'green-text-gradient',
      },
      {
        name: 'sentry',
        color: 'pink-text-gradient',
      },
    ],
    image: persiajs,
    source_code_link: 'https://persiajs.dev/',
  },
  {
    name: 'MisaLearn',
    description:
      'LearnWise is an e-Learning app generator with cloud-based LMS trying to solve self-branding and content customization',
    tags: [
      {
        name: 'MobX',
        color: 'blue-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'TypeScript',
        color: 'pink-text-gradient',
      },
    ],
    image: misalearn,
    source_code_link: 'https://studio.misalearn.com/',
  },
  {
    name: 'Tourandto',
    description:
      'Tourandto travels Co. has been active in Iran’s travel and tourist  business since January 2021. Tourandto  providing innovative, competitive and enjoyable services for the people who visitIran and all Iranians traveling around the world',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'Antd',
        color: 'green-text-gradient',
      },
      {
        name: 'react-query',
        color: 'pink-text-gradient',
      },
    ],
    image: tourandto,
    source_code_link: 'https://tourandto.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
