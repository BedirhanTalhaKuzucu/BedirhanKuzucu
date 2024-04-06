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
    href: "/services",
    label: "Services",
    icon: navIcons.ServiceIcon,
  },
  {
    href: "/contact",
    label: "Contact",
    icon: navIcons.ContactIcon,
  },
  {
    href: "/signup",
    label: "Sign Up",
    icon: navIcons.SignUpIcon,
  },
];

export function repositoriesList() {
  return [
    {
      title: "BlogApp",
      description:
        "A website where the user can log in and register and produce their own content.",
      cover: "/assets/projects/BlogApp.png",
      language: "Typescript",
      techStack: ["React", "Redux", "Firebase"],
      url: "https://github.com/BedirhanTalhaKuzucu/fireblog-with-redux",
      live: "https://firebaseblog-app.netlify.app/",
    },
    {
      title: "Portfolio2",
      description: "Personal portfolio app to show my skills and experience.",
      cover: "/assets/projects/ClaruswayLandingPage.png",
      language: "Typescript",
      techStack: ["react", "chakraUi"],
      url: "https://github.com/MA-Ahmad/portfolio",
      live: "https://ma-ahmad.github.io/portfolio",
      stargazers_count: 67,
      forks_count: 14,
    },
    {
      title: "Dev.to clone",
      description:
        "This portfolio built by using Next.js, ChakraUi and Typescript.",
      cover: "/assets/projects/GuessNumberGame.png",
      language: "Typescript",
      techStack: ["Nextjs", "chakraUi"],
      url: "https://github.com/MA-Ahmad/dev.to-clone",
      live: "https://dev-to-clone-ma.vercel.app",
      stargazers_count: 54,
      forks_count: 5,
    },
    {
      title: "Notebook",
      description:
        "This is a notebook app which will help you to crate notes for your daily work.",
      cover: "/assets/projects/PopularTourPlaceApp.png",
      language: "Javascript",
      techStack: ["react", "typescript"],
      url: "https://github.com/MA-Ahmad/notebook",
      live: "https://ma-ahmad.github.io/notebook",
      stargazers_count: 19,
      forks_count: 8,
    },
    {
      title: "Notebook",
      description:
        "This is a notebook app which will help you to crate notes for your daily work.",
      cover: "/assets/projects/RandomUserApp.png",
      language: "Javascript",
      techStack: ["react", "typescript"],
      url: "https://github.com/MA-Ahmad/notebook",
      live: "https://ma-ahmad.github.io/notebook",
      stargazers_count: 19,
      forks_count: 8,
    },
    {
      title: "Notebook",
      description:
        "This is a notebook app which will help you to crate notes for your daily work.",
      cover: "/assets/projects/RecipeApp.png",
      language: "Javascript",
      techStack: ["react", "typescript"],
      url: "https://github.com/MA-Ahmad/notebook",
      live: "https://ma-ahmad.github.io/notebook",
      stargazers_count: 19,
      forks_count: 8,
    },
    {
      title: "Notebook",
      description:
        "This is a notebook app which will help you to crate notes for your daily work.",
      cover: "/assets/projects/TaskTracerApp.png",
      language: "Javascript",
      techStack: ["react", "typescript"],
      url: "https://github.com/MA-Ahmad/notebook",
      live: "https://ma-ahmad.github.io/notebook",
      stargazers_count: 19,
      forks_count: 8,
    },
    {
      title: "Notebook",
      description:
        "This is a notebook app which will help you to crate notes for your daily work.",
      cover: "/assets/projects/WeatherApp.png",
      language: "Javascript",
      techStack: ["react", "typescript"],
      url: "https://github.com/MA-Ahmad/notebook",
      live: "https://ma-ahmad.github.io/notebook",
      stargazers_count: 19,
      forks_count: 8,
    },
    {
      title: "Notebook",
      description:
        "This is a notebook app which will help you to crate notes for your daily work.",
      cover: "/assets/projects/InvoiceGeneratorApp.png",
      language: "Javascript",
      techStack: ["react", "typescript"],
      url: "https://github.com/MA-Ahmad/notebook",
      live: "https://ma-ahmad.github.io/notebook",
      stargazers_count: 19,
      forks_count: 8,
    },
  ];
}
