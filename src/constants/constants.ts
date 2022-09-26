import { IProject } from './IProjects';

export const projects : IProject[] = [
  {
    title: 'Library',
    description: 'Using TypeScript ,Nextjs, Node.js, Express & MongoDB. The App is called Library and it is a simple library app that allows users to create an account, "upload" books, "take" books and "take back" books.',
    image: '/images/1.png',
    tags: ['TypeScript','Mongo', 'Express', 'Nextjs', 'Node', 'JWT'],
    source: 'https://google.com',
    visit: 'https://github.com/vicentperezv/biblioteca-next',
    id: 0,
  },
  {
    title: 'E-Commerce',
    description:"An E-Commerce app. Using Laravel & MySQL ",
    image: '/images/2.png',
    tags: ['Laravel', 'MySQL'],
    source: 'https://google.com',
    visit: 'https://github.com/vicentperezv/Tiendita-Laravel',
    id: 1,
  },
  {
    title: 'Mailer App',
    description: "A Mailer app. This app that allows users to send emails. Using Flask, MySQL & Sendgrid",
    image: '/images/3.png',
    tags: ['Flask', 'MySQL', 'Sendgrid'],
    source: 'https://google.com',
    visit: 'https://github.com/vicentperezv/Mailer-Flask',
    id: 2,
  },
  
];

