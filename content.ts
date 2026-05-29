// ────────────────────────────────────────────────────────────────
// EDIT THIS FILE TO PERSONALIZE YOUR PORTFOLIO
// Almost every text change you'll want to make lives here.
// You don't need to touch the components — they read from this file.
// ────────────────────────────────────────────────────────────────

export const hero = {
  name: "Natallia",
  role: "Creative Project Manager",
  location: "Berlin, Germany",
  headline:
    "On a mission to create effective, impactful projects. I turn ambitious ideas into results that actually matter.",
  ctaPrimary: { label: "See my work", href: "#projects" },
  ctaSecondary: { label: "Get in touch", href: "#contact" },
};

export const about = {
  heading: "About",
  paragraphs: [
    "I generate ideas and develop concepts and strategies for brand promotion, write and edit texts, and oversee the production and implementation of projects. I work with all types of content — SMM, articles, explainers, scripts for videos, small copy, big copy — everything, everywhere, all at once.",
    "My focus is on startups and technology companies. I understand trends, needs, and all the buzz around them, which helps me create engaging and effective content.",
    "My superpower is combining creativity with numbers to create content that solves business problems and meets needs.",
  ],
};

export const experience = {
  heading: "Experience",
  roles: [
    {
      title: "Creative Project & Marketing Manager",
      company: "Maramio",
      period: "2024 — Present",
      summary:
        "Increased total page views by 253% and content engagement by 77% for this Berlin startup.",
      link: { label: "maramio.com", href: "https://maramio.com" },
    },
  ],
};

export const projects = {
  heading: "Selected work",
  items: [
    {
      title: "Tide Checkout Redesign",
      year: "2024",
      summary:
        "Reframed the onboarding flow around clarity over speed. Three rounds of usability testing, six prototypes, one launch — 34% improvement in completion.",
      link: { label: "Case study", href: "#" },
    },
    {
      title: "GitLab Inline Code Review",
      year: "2022",
      summary:
        "Designed the inline review pattern now used by 30+ million developers. Started as a hack-week prototype, became a flagship feature.",
      link: { label: "Read the writeup", href: "#" },
    },
    {
      title: "Berlin Coffee Map",
      year: "2023",
      summary:
        "A side project mapping independent coffee roasters in Berlin. Built with React + Mapbox. Used by ~2k people a week.",
      link: { label: "View live", href: "#" },
    },
  ],
};

export const skills = {
  heading: "What I work with",
  groups: [
    {
      label: "Design",
      items: ["Product strategy", "Interaction design", "Prototyping", "Usability testing", "Design systems"],
    },
    {
      label: "Tools",
      items: ["Figma", "Linear", "Notion", "Framer", "FigJam"],
    },
    {
      label: "Code",
      items: ["HTML / CSS", "React (basics)", "Git"],
    },
  ],
};

export const testimonials = {
  heading: "What people say",
  quotes: [
    {
      text:
        "Anna is rare. She holds the long-term product vision and the pixel-level craft in the same head, and shifts between them without losing either.",
      author: "Lukas Weber",
      role: "Head of Product, Tide",
    },
    {
      text:
        "Working with Anna recalibrated how our whole team thinks about review. She has an instinct for what's actually friction versus what just feels like friction.",
      author: "Sara Patel",
      role: "Engineering Manager, GitLab",
    },
  ],
};

export const contact = {
  heading: "Get in touch",
  body:
    "Open to product design roles, collaborations, and the occasional coffee. Berlin or remote.",
  email: "anna@example.com",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/yourname" },
    { label: "Twitter / X", href: "https://twitter.com/yourname" },
    { label: "Read.cv", href: "https://read.cv/yourname" },
  ],
};

export const meta = {
  title: "Anna Schneider — Product Designer",
  description: "Berlin-based product designer. Currently at Tide.",
};
