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
        name: 'JosoPress',
        description: 'Customized the purchased Josopress WordPress theme for a news website using WordPress and Elementor, adjusting the layout and functionality to meet the client\'s needs.',
        logo: '/assets/josopressLogo.svg',
        style: 'w-1/6 -mt-5',
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
      logo: 'assets/logo-circle.ico ',
      style: 'w-20',
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
      logo: 'assets/2jobs.svg',
      style: '',
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
      ],
      projectDirection: '/textures/project/2jobs.mp4',
    },
    {
      id: 4,
      name: 'Petify E-commerce Store',
      description: 'Contributed to the development of Petify, an e-commerce store built by a team during my MERN bootcamp as a PFF. The platform features a modern, responsive user interface. ',
      logo: 'assets/PetifyLogo.png',
      style: 'w-10 my-3',
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
          //Axios svg
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
        paragraph: "Venture into the shadows of my enchanted archive, where every project holds a spark of magic and mystery. Here, spells are whispered into code, and visions take flight through ethereal design. Each creation is a portal to another realm, woven with care and bound by the secrets of the digital arts. Beyond the flicker of the wand, hidden within the scrolls of my craft, lies the essence of ingenuity—crafted to enchant, inspire, and leave a trace of wonder in every visitor's heart.",
        btnText: "Explore", 
             
      },
  }

  export const displayText = [
  { id: 1, name: 'Html' },
  { id: 2, name: 'Tailwind-Css' },
  { id: 3, name: 'Javascript' },
  { id: 4, name: 'Typescript' },
  { id: 5, name: 'React Js' },
  { id: 6, name: 'Redux Toolkit' },
  { id: 7, name: 'Axios' },
  { id: 8, name: 'GSAP' },
  { id: 9, name: 'React fiber three' },
  { id: 10, name: 'Nest Js' },
  { id: 11, name: 'Express' },
  { id: 12, name: 'MongoDB' },
  { id: 13, name: 'PostgreSQL' },
  { id: 14, name: 'Prisma' },
  { id: 15, name: 'Supabase' },
  { id: 16, name: 'Wordpress' },
  ]