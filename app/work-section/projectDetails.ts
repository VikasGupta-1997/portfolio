export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 1,
    name: "Opus io",
    description:
      "Developed an online music school platform where users can enroll in paid courses and request sessions with teachers",
    technologies: ["reactjs", "redux", "styled-components"],
    demo: "https://www.opus1.io/",
    image: require(".//../../public/projects/opus1.webp"),
    available: true,
  },
  {
    id: 2,
    name: "TextAssist",
    description:
      "Worked on authentication and core functionality for a text assistance platform.",
    technologies: ["Reactjs", "react-places-autocomplete"],
    demo: "https://textassistprod.au.auth0.com/login?state=hKFo2SBMdWR4NlJxNDNkN3BBaFVieGpGOC1peUJ3VHhqZHJfcKFupWxvZ2luo3RpZNkgRW9UQjVyRmRiVlZqcVZfd0dlOFN2aVhjMmE1RXhBXzCjY2lk2SBRZHRkZkpPd1hyamlPSXJOTmt5SUExOFVHWUhFdnFwWA&client=QdtdfJOwXrjiOIrNNkyIA18UGYHEvqpX&protocol=oauth2&redirect_uri=https%3A%2F%2Fwww.textassist.com.au%2Fmanage%2Fmanage-session&scope=openid%20profile%20email&response_type=code&response_mode=query&nonce=YTZhZ0M5NEFIMV9NRVI0MzdCOUplSGZsU1h3bDNMVkJobWdWVkM5NlBESQ%3D%3D&code_challenge=Mn4qTPXrSWIl6bRi-ToI8l6MzP4t4TIeaAyKoOlhLPg&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtcmVhY3QiLCJ2ZXJzaW9uIjoiMS4xMi4xIn0%3D",
    image: require(".//../../public/projects/textassist.webp"),
    available: true,
  },
  {
    id: 3,
    name: "Dizio",
    description: "A skydiving management application for both administrators and customers. Contributed to frontend and back-end development.",
    technologies: ["reactjs", "expressjs", "mongoDB"],
    demo: "https://dizio.app/",
    image: require(".//../../public/projects/dizio.webp"),
    available: true,
  },
  {
    id: 4,
    name: "TWR360",
    description:
      "Integrated Google AI API-powered chatbot with the backend for a global Christian media platform",
    technologies: ["expressjs", "nodejs", "google gemeni"],
    demo: "https://www.twr360.org/",
    image: require(".//../../public/projects/twr360.webp"),
    available: true,
  },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
