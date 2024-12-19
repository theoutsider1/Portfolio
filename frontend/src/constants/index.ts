import { NavLinks, ProjectsInfos, SectionContentInterface } from "./Globals/types";

export const navLinks: NavLinks[] = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Stack',
      href: '#stack',
    },
    {
      id: 5,
      name: 'Contact',
      href: '#contact',
    },
  ];
export const ProjectsInfo: ProjectsInfos[] = [
    {
        id: 1,
        name: 'JosoPress Wordpress Website Customization',
        description: 'Customized the purchased Josopress WordPress theme for a news website using WordPress and Elementor, adjusting the layout and functionality to meet the client\'s needs.',
        date: '2024',
        tech: [{
          id:10,
          name: 'dsada',
          href: 'assets/react.svg'
        }],
        projectDirection: '/textures/project/project1.mp4',
      },
    { 
      id: 2,
      name: 'Responsive Booking interface (Stepper Form)',
      description: 'Developed a responsive booking interface featuring a step-by-step form for the Safiir Educational Advice and Study Guidance website. The interface allows users to easily navigate through the booking process. ',
      date: '2024',
      tech: [
        {
        id:10,
        name: 'React',
        href: 'assets/react.svg'
        },
        {
        id:11,
        name: 'PrimeReact',
        href: 'assets/react.svg'
        },
        {
          id:12,
          name: 'Tailwind',
          href: 'assets/tailwindcss.svg'
        },
        {
          id:13,
          name: 'Javascript',
          href: 'assets/typescript.svg'
        },
        {
          id:14,
          name: 'I18n Translator',
          href: 'assets/redux.svg'
        }],
        projectDirection: '/textures/project/project2.mp4',
    },
    {
      id: 3,
      name: '2Jobs Platform',
      description: 'Developed the 2Jobs platform, which connects job seekers with companies looking for candidates. A key feature of the platform is allowing job seekers to apply for jobs with minimal information, such as just their phone number.',
      date: '2024',
      tech: [
        {
        id:10,
        name: 'React',
        href: 'assets/react.svg'
        },
        {
        id:11,
        name: 'Tailwind',
        href: 'assets/tailwindcss.svg'
        },
        {
          id:12,
          name: 'Axios',
          href: 'assets/notion.svg'
        },
        {
          id:13,
          name: 'Typescript',
          href: 'assets/typescript.svg'
        },
        {
          id:14,
          name: 'nest',
          href: 'assets/nestjs.svg'
        },
        {
          id:15,
          name: 'node js',
          href: 'assets/nodejs.svg'
        },
        {
          id:16,
          name: 'Postman',
          href: 'assets/postman.svg'
        },
        {
          id:17,
          name: 'PostgreSQL',
          href: 'assets/postgresql.svg'
        },
        {
          id:18,
          name: 'github',
          href: 'assets/github.svg'
        },
        {
          id:19,
          name: 'firgma',
          href: 'assets/figma.svg'
        },
      ],
      projectDirection: '/textures/project/project3.mp4',
    },
    {
      id: 4,
      name: 'Petify E-commerce Store',
      description: 'Contributed to the development of Petify, an e-commerce store built by a team during my MERN bootcamp as a PFF. The platform features a modern, responsive user interface. ',
      date: '2023',
      tech: [
        {
          id:10,
          name: 'React',
          href: 'assets/react.svg'
          },
          {
          id:11,
          name: 'Tailwind',
          href: 'assets/tailwindcss.svg'
          },
          {
            id:12,
            name: 'Axios',
            href: 'assets/notion.svg'
          },
          {
            id:13,
            name: 'Typescript',
            href: 'assets/typescript.svg'
          },
          {
            id:14,
            name: 'nest',
            href: 'assets/expressSvg.svg'
          },
          {
          id:15,
          name: 'node js',
          href: 'assets/nodejs.svg'
          },
          {
            id:16,
            name: 'Postman',
            href: 'assets/postman.svg'
          },
          {
            id:17,
            name: 'PostgreSQL',
            href: 'assets/mongo.svg'
        },],
        projectDirection: '/textures/project/petify.mp4',
    },
  ];


  // Sections Content
  

  export const SectionContent: SectionContentInterface ={
   
      About: {
        title: 'About',
        paragraph: "Welcome to my magical realm of web development! I’m Hatim Tagmi, your friendly neighborhood Web Wizard, casting spells of creativity and innovation to bring your digital dreams to life. Armed with my trusty wand (or keyboard), I conjure captivating websites that blend enchanting designs with powerful functionality.",
        btnText: "Explore"
      },
      Project: {
        title : 'Projects',
        paragraph: "This is desktop content.",
        btnText: "Learn More", 
             
      },
  }

  