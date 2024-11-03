import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://weston.tickitechnology.com", // replace this with your deployed domain
  author: "Weston Gorczyca",
  profile: "https://github.com/PandaTwoxx/",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "Weston Gorczyca",
  ogImage: "assets/Panda.jpeg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  projectPerIndex: 4,
  projectPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/PandaTwoxx",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:pandatwoxx@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://x.com/Techboss1123",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "Twitch",
    href: "https://www.twitch.tv/pandatwo2xx",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@pandatwo834",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://codepen.io/FastWeston46",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://discord.gg/K5ggc7xYne",
    linkTitle: `${SITE.title} on Discord`,
    active: true,
  },
  {
    name: "Reddit",
    href: "https://www.reddit.com/user/According_Policy9094/",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  }
];
