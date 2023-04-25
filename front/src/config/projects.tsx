import makebetter from "../assets/projects/makebetter.jpg";
import umaestro from "../assets/projects/umaestro.jpg";
import gca from "../assets/projects/gca.jpg";
import giveup from "../assets/projects/giveup.jpg";
import ca3 from "../assets/projects/ca3.jpg";

import adonisjs from "../assets/technologies/adonisjs.svg";

import type { Project, Technology } from "../types/project";

export const technologies: Record<string, Technology> = {
  react: {
    name: "React",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    href: "https://reactjs.org/",
  },
  typescript: {
    name: "TypeScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    href: "https://www.typescriptlang.org/",
  },
  adonisjs: {
    name: "AdonisJS",
    logo: adonisjs,
    href: "https://adonisjs.com/",
  },
  tailwindcss: {
    name: "TailwindCSS",
    logo: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg",
    href: "https://tailwindcss.com/",
  },
  nestjs: {
    name: "NestJS",
    logo: "https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg",
    href: "https://nestjs.com/",
  },
  laravel: {
    name: "Laravel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
    href: "https://laravel.com/",
  },
  vuejs: {
    name: "VueJS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
    href: "https://vuejs.org/",
  },
  nuxtjs: {
    name: "NuxtJS",
    logo: "https://nuxt.com/assets/design-kit/logo/icon-green.svg",
    href: "https://nuxtjs.org/",
  },
  sass: {
    name: "Sass",
    logo: "https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg",
    href: "https://sass-lang.com/",
  },
  mongodb: {
    name: "MongoDB",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
    href: "https://www.mongodb.com/",
  },
  mysql: {
    name: "MySQL",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png",
    href: "https://www.mysql.com/",
  },
  redis: {
    name: "Redis",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/6/6b/Redis_Logo.svg/1200px-Redis_Logo.svg.png",
    href: "https://redis.io/",
  },
  figma: {
    name: "Figma",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    href: "https://www.figma.com/",
  },
};

import makebetter1 from "../assets/projects/makebetter/1.png";
import makebetter2 from "../assets/projects/makebetter/2.png";
import makebetter3 from "../assets/projects/makebetter/3.png";
import makebetter4 from "../assets/projects/makebetter/4.png";

import gca1 from "../assets/projects/creatorsarea/1.png";
import gca2 from "../assets/projects/creatorsarea/2.png";
import gca3 from "../assets/projects/creatorsarea/3.png";
import gca4 from "../assets/projects/creatorsarea/4.png";
import gca5 from "../assets/projects/creatorsarea/5.png";
import gca6 from "../assets/projects/creatorsarea/6.png";
import gca7 from "../assets/projects/creatorsarea/7.png";
export const developmentProjects: Project[] = [
  {
    name: "MakeBetter",
    description: "Website containing tools targeting the content creators.",
    href: "https://makebetter.app",
    thumbnail: makebetter,
    slug: "makebetter",
    color: "#0140C1",
    technologies: [
      technologies.nuxtjs,
      technologies.vuejs,
      technologies.tailwindcss,
      technologies.typescript,
      technologies.adonisjs,
      technologies.mysql,
    ],
    sections: [
      {
        title: "What is MakeBetter?",
        content: (
          <>
            <p>
              MakeBetter is a website containing tools targeting the content
              creators. It is a project started in 2022 and I am still working
              on it. The website is currently in open beta{" "}
              <a href="https://makebetter.app" target="_blank">
                here
              </a>
            </p>
            <p>
              Currently, there is 4 tools available on the website. All these
              tools are mainly used for Discord. Our current tools are:
              <ul>
                <li>
                  <a
                    href="https://makebetter.app/tools/discord/embed"
                    target="_blank"
                  >
                    Embed Generator: A tool to generate embeds for Discord.
                  </a>
                </li>
                <li>
                  <a
                    href="https://makebetter.app/tools/discord/badges"
                    target="_blank"
                  >
                    Badges Generator: A tool to generate icons for Discord.
                  </a>
                </li>
                <li>
                  <a
                    href="https://makebetter.app/tools/discord/emoji_maker"
                    target="_blank"
                  >
                    Emoji Maker: A tool to generate emojis for Discord.
                  </a>
                </li>
                <li>
                  <a
                    href="https://makebetter.app/tools/general/markdown"
                    target="_blank"
                  >
                    Markdown Editor: A tool to edit markdown text.
                  </a>
                </li>
              </ul>
            </p>
          </>
        ),
      },
    ],
    images: [
      {
        src: makebetter1,
        alt: "MakeBetter Homepage",
      },
      {
        src: makebetter2,
        alt: "Embed Creator",
      },
      {
        src: makebetter3,
        alt: "Badge creator",
      },
      {
        src: makebetter4,
        alt: "Icon creator",
      },
    ],
  },
  {
    name: "UMaestro",
    description: "Creator of projects and content to help content creators.",
    href: "https://umaestro.fr",
    thumbnail: umaestro,
    slug: "umaestro",
    color: "#050505",
    technologies: [
      technologies.nuxtjs,
      technologies.vuejs,
      technologies.tailwindcss,
      technologies.typescript,
      technologies.adonisjs,
      technologies.mysql,
      technologies.mongodb,
      technologies.redis,
    ],
    sections: [
      {
        title: "What is UMaestro?",
        content: (
          <>
            <p>
              UMaestro is the group of the creators of different projects that
              help peoples to create content. We are currently working on{" "}
              <a href="https://makebetter.app" target="_blank">
                MakeBetter
              </a>
              . The website can be visited{" "}
              <a href="https://umaestro.fr" target="_blank">
                here
              </a>
              .
            </p>
          </>
        ),
      },
    ],
  },
  {
    name: "Creators Area v2",
    description: "Community of mutual aid around development and graphics.",
    href: "https://creatorsarea.fr",
    thumbnail: gca,
    slug: "creators-area",
    color: "#0F57C5",
    technologies: [
      technologies.nuxtjs,
      technologies.vuejs,
      technologies.sass,
      technologies.laravel,
    ],
    sections: [
      {
        title: "What is Creators Area?",
        content: (
          <>
            <p>
              Creators Area is a community of mutual aid around development and
              graphics. The website can be visited{" "}
              <a href="https://creatorsarea.fr" target="_blank">
                here
              </a>
              .
            </p>
          </>
        ),
      },
      {
        title: "My role on this project",
        content: (
          <>
            <p>
              Mainly, I was a Back End Developer but I also worked on the Front
              End to help the other developer. <br />I was also creating some of
              the designs for the website and the Discord server.
            </p>
          </>
        ),
      },
      {
        title: "Website features",
        content: (
          <>
            <p>
              The website was complementary to the discord server, peoples were
              publishing tutorials about differents topics on it.
              <br />
              The website was also containing a "job offer" section where the
              members of the community could publish job offers. Content
              creators were also able to publish their creations on the website
              and create a customizable portfolio.
            </p>
          </>
        ),
      },
    ],
    images: [
      {
        src: gca1,
        alt: "Creators Area Homepage",
      },
      {
        src: gca2,
        alt: "Creators Area Portfolio Creation",
      },
      {
        src: gca3,
        alt: "Creators Area Portfolio Example",
      },
      {
        src: gca4,
        alt: "Open Job Offer",
      },
      {
        src: gca5,
        alt: "Job Offer View",
      },
      {
        src: gca6,
        alt: "Tutorial List",
      },
      {
        src: gca7,
        alt: "Tutorial View",
      },
    ],
  },
  {
    name: "GiveUp",
    description: "Website allowing peoples to publish preborn dead projects.",
    href: "https://github.com/BriqueAuBob/GiveUp",
    thumbnail: giveup,
    slug: "giveup",
    color: "#6153E4",
    sourceAvailableAt: "https://github.com/BriqueAuBob/GiveUp",
    technologies: [technologies.nestjs, technologies.mongodb],
    sections: [
      {
        title: "What is GiveUp?",
        content: (
          <>
            <p>
              GiveUp is a project I made with someone else. It was created as a
              joke because we were working on projects that we were not able to
              finish. We wanted to share them with the community so they can use
              the idea.
            </p>
          </>
        ),
      },
    ],
  },
];

import cav31 from "../assets/projects/creatorsarea/v3/1.jpg";
import cav32 from "../assets/projects/creatorsarea/v3/2.jpg";
export const designProjects: Project[] = [
  {
    name: "Creators Area v3",
    description: "Worked on the design of the new version of the website",
    thumbnail: ca3,
    slug: "creators-area-v3",
    color: "#051D99",
    isDesign: true,
    technologies: [technologies.figma],
    sections: [
      {
        title: "Why Creators Area v3?",
        content: (
          <>
            <p>
              The Creators Area community was growing and we needed to create a
              new website to replace the old one.
              <br />
              At first, I started to work on the design of the website by
              keeping the structure of the old one. But after a discussion with
              the team, we decided to change the structure too.
            </p>
          </>
        ),
      },
    ],
    images: [cav31, cav32],
  },
];
