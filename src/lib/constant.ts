import { navIcons } from "@/components/navIcons";
import { ReactElement } from "react";

interface LinksItem {
  href: string;
  label: string;
  icon: ReactElement;
}

export const LINKS: LinksItem[] = [
  {
    href: "/",
    label: "Home",
    icon: navIcons.HomeIcon,
  },
  {
    href: "/about",
    label: "About",
    icon: navIcons.AboutIcon,
  },
  {
    href: "/projects",
    label: "Projects",
    icon: navIcons.ProjectsIcon,
  },
  {
    href: "/contact",
    label: "Contact",
    icon: navIcons.ContactIcon,
  },
  // {
  //   href: "/signup",
  //   label: "Sign Up",
  //   icon: navIcons.SignUpIcon,
  // },
];

export const workProjects = [
  {
    title: "Änderungsmanagement App",
    description:
      "Digitale Lösung Projekt für effizientes Änderungsmanagement im Technikbereich",
    cover: "/assets/projects/Volkswagen_logo_2019.svg",
    techStack: ["React", "Redux", "GroupUI", "Formik", "Yup"],
    url: "https://github.com/BedirhanTalhaKuzucu/fireblog-with-redux",
    live: "https://firebaseblog-app.netlify.app/",
  },
  {
    title: "Datenintegration  App",
    description: "Datenintegration Projekt im Automobilsektor",
    cover: "/assets/projects/Volkswagen_logo_2019.svg",
    techStack: ["Angular", "Karma", "Jasmine", "Soap", "RestAPI"],
    url: "https://github.com/BedirhanTalhaKuzucu/fireblog-with-redux",
    live: "https://firebaseblog-app.netlify.app/",
  },
];

export function repositoriesList() {
  return [
    {
      title: "Blog App",
      description:
        "A website where the user can log in and register and produce their own content.",
      cover: "/assets/projects/BlogApp.png",
      techStack: ["React", "Redux", "Firebase", "Material UI", "Formik"],
      url: "https://github.com/BedirhanTalhaKuzucu/fireblog-with-redux",
      live: "https://firebaseblog-app.netlify.app/",
    },
    {
      title: "Tour Place App",
      description: "A web app that shows popular tour locations using free API",
      cover: "/assets/projects/PopularTourPlaceApp.png",
      techStack: ["React", "Bootstrap"],
      url: "https://github.com/BedirhanTalhaKuzucu/tour-places",
      live: "https://tour-places-with-react.netlify.app/",
    },
    {
      title: "Clarusway Landing Page",
      description: "A blueprint for the Clarusway landing website",
      cover: "/assets/projects/ClaruswayLandingPage.png",
      techStack: ["React", "React-router", "Bootstrap"],
      url: "https://github.com/BedirhanTalhaKuzucu/clarusway-web-page-with-router",
      live: "https://clarusway-web-page-with-router.netlify.app/",
    },
    {
      title: "Recipe App",
      description:
        "A web app with a fake login page that shows recipes and is searchable.",
      cover: "/assets/projects/RecipeApp.png",
      techStack: ["React", "styled-components"],
      url: "https://github.com/BedirhanTalhaKuzucu/recipe-app",
      live: "https://with-react-recipe-app.netlify.app/",
    },
    {
      title: "Random User App",
      description:
        "This is a notebook app which will help you to crate notes for your daily work.",
      cover: "/assets/projects/RandomUserApp.png",
      techStack: ["React", "Saas"],
      url: "https://github.com/BedirhanTalhaKuzucu/random-user-2",
      live: "https://random-user-app-2.netlify.app/",
    },
    {
      title: "Invoice Generator",
      description: "A Web App that generates invoices",
      cover: "/assets/projects/InvoiceGeneratorApp.png",
      techStack: ["React", "Bootstrap"],
      url: "https://github.com/BedirhanTalhaKuzucu/sales-taxes-project-with-tdd",
      live: "https://sales-tax-app.netlify.app/",
    },
    {
      title: "Task Tracker",
      description:
        "A task tracking application where the user can create, delete and edit tasks to keep track of tasks.",
      cover: "/assets/projects/TaskTracerApp.png",
      techStack: ["React", "Json-server"],
      url: "https://github.com/BedirhanTalhaKuzucu/task-tracker",
      live: "https://task-tracker-withreact.netlify.app/",
    },

    {
      title: "Weather App",
      description:
        "A web application where cities can be searched and saved to the list to view the weather",
      cover: "/assets/projects/WeatherApp.png",
      techStack: ["Jquery"],
      url: "https://github.com/BedirhanTalhaKuzucu/Weather-App-with-Jquery",
      live: "https://bedirhantalhakuzucu.github.io/Weather-App-with-Jquery/",
      stargazers_count: 19,
      forks_count: 8,
    },

    {
      title: "Guess Number",
      description: "Number guessing game",
      cover: "/assets/projects/GuessNumberGame.png",
      techStack: ["JavaScript"],
      url: "https://github.com/BedirhanTalhaKuzucu/Find_Number_Game",
      live: "https://bedirhantalhakuzucu.github.io/Find_Number_Game/",
    },
  ];
}

export const frontendContens = [
  {
    title: "React",
    content:
      " My go-to library for building dynamic user interfaces. Its component-based architecture and virtual DOM make development smooth and efficient.",
  },
  {
    title: "Next.js",
    content:
      "My favorite frontend framework. It stands out with its speed, flexibility, and SEO-friendliness. Its ability to easily adapt to needs like SSR and CSR is a huge plus for me.",
  },
  {
    title: "Angular",
    content:
      "A robust frontend framework that I rely on for complex web applications. Its comprehensive features, such as dependency injection and TypeScript support, empower me to build scalable projects.",
  },
  {
    title: "TypeScript",
    content:
      "My preferred language for frontend development. Its static typing helps catch errors early and enhances code maintainability, providing a solid foundation for building reliable applications.",
  },
  {
    title: "Tailwind CSS",
    content:
      "My go-to utility-first CSS framework. Its utility classes enable rapid prototyping and consistent styling, allowing me to create modern and responsive designs with ease.",
  },
  {
    title: "Bootstrap",
    content:
      "A versatile CSS framework that I often use for rapid prototyping and building responsive layouts. Its extensive component library and grid system expedite frontend development without sacrificing aesthetics.",
  },
  {
    title: "SASS",
    content:
      "My preferred CSS preprocessor for enhancing stylesheet maintainability and organization. Its features like variables, mixins, and nesting streamline CSS authoring and improve code readability.",
  },
];

export const backendContents = [
  {
    title: "Expres.Js",
    content:
      "My preferred backend framework for building fast and minimalist web applications. Its simplicity and robust middleware support make API development a breeze.",
  },
  {
    title: "Django",
    content:
      "A high-level Python web framework that I rely on for building scalable and secure web applications. Its batteries-included philosophy and built-in admin interface accelerate development without compromising on security.",
  },
  {
    title: "Node.js",
    content:
      "A versatile JavaScript runtime environment that I frequently use for building scalable network applications. Its non-blocking I/O and event-driven architecture enable high-performance and real-time applications.",
  },
  {
    title: "Python",
    content:
      "My go-to programming language for backend development. Its simplicity, readability, and extensive libraries make it ideal for building a wide range of applications, from web development to data analysis.",
  },
  {
    title: "Swagger",
    content:
      "My preferred tool for designing, building, and documenting APIs. Its user-friendly interface and robust features streamline the API development process and ensure consistency and reliability.",
  },
  {
    title: "Postman",
    content:
      "My favorite API client that I use for testing, debugging, and monitoring APIs.Its intuitive interface, automation capabilities, and extensive features simplify API testing and collaboration.",
  },
];
