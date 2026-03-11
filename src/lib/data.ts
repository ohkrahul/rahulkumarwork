/* ============================================
   PROJECT DATA - Portfolio content configuration
   Optimized for freelance client conversion.
   Real projects, real services, real skills.
   ============================================ */

export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: string;
  images?: string[];
  color: string;
  year: string;
  role: string;
  client: string;
  result?: string;
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "the-foodie-zone",
    title: "THE FOODIE ZONE",
    subtitle: "React.js / Redux / Firebase / Framer Motion",
    description:
      "Food delivery platform with real-time menu/order updates, admin panel, and smooth animations.",
    longDescription:
      "Built a full-featured food delivery platform from scratch. Features include real-time menu and order synchronization via Firebase, a complete admin panel for inventory and order management, Framer Motion-powered animations throughout the UI, a dynamic cart and checkout system, and a responsive, SEO-friendly interface. My first freelance project that established my approach to client work.",
    tech: ["React.js", "Redux", "Firebase", "Framer Motion", "CSS3","Tailwind CSS","Vercel","Real-time Database","Admin Panel","E-Commerce","SEO","Responsive Design","Git","GitHub","Client Collaboration","Project Management"],
    image: "/projects/foodie-zone.jpg",
    images: [
      "https://res.cloudinary.com/dtpz8iptk/image/upload/v1773163383/Screenshot_2026-03-10_223830_h0zoeo.png",
      "https://res.cloudinary.com/dtpz8iptk/image/upload/v1773163383/Screenshot_2026-03-10_224047_pursmi.png",
      "https://res.cloudinary.com/dtpz8iptk/image/upload/v1773163382/Screenshot_2026-03-10_223910_xw6iae.png",
    ],
    color: "#f97316",
    year: "2025",
    role: "Full Stack Developer",
    client: "Freelance Client",
    result: "Live platform with real-time order management",
    link: "https://thefooddelivery.vercel.app/",
  },
  {
    id: 2,
    slug: "expatlives",
    title: "EXPATLIVES",
    subtitle: "React.js / CSS3 / JavaScript / Vercel",
    description:
      "Multi-page static website with modular components, mobile-first styling, and SEO-friendly structure.",
    longDescription:
      "Designed and developed a multi-page static website with componentized HTML sections, mobile-first responsive CSS, semantic markup with proper meta tags for SEO, and deployed on Vercel for blazing-fast global delivery. Built with clean, maintainable code that the client can easily extend.",
    tech: ["React.js", "CSS3", "JavaScript", "Vercel", "SEO", "Responsive Design", "Static Site", "Component Architecture", "HTML5", "Meta Tags", "Web Performance", "Accessibility", "Git", "GitHub", "Client Collaboration", "Project Management"],
    image: "/projects/expatlives.jpg",
    images: [
      "https://res.cloudinary.com/dtpz8iptk/image/upload/v1773163383/Screenshot_2026-03-10_224159_sipxkh.png",
      "https://res.cloudinary.com/dtpz8iptk/image/upload/v1773163384/Screenshot_2026-03-10_224346_a0vhbs.png",
      "https://res.cloudinary.com/dtpz8iptk/image/upload/v1773163386/Screenshot_2026-03-10_224458_n487yo.png",
    ],
    color: "#3b82f6",
    year: "2025",
    role: "Full Stack Developer",
    client: "Expatlives",
    result: "Mobile-first SEO-optimized multi-page site",
    link: "https://expatlives.vercel.app/",
  },
  {
    id: 3,
    slug: "ozford-university",
    title: "OZFORD UNIVERSITY",
    subtitle: "Website Maintenance & Optimization",
    description:
      "Ongoing maintenance for an Australian university website — performance optimization, updates, and security.",
    longDescription:
      "Providing ongoing website maintenance for Ozford Institute of Higher Education, an Australian university. Responsibilities include performance optimization, content updates, security patching, bug fixes, uptime monitoring, and ensuring smooth operation of the university's digital presence. This long-term retainer engagement demonstrates my reliability for enterprise-level maintenance work.",
    tech: ["Python","Django","HTML5","CSS3","JavaScript","Tailwind CSS", "PHP", "MySQL", "Performance Optimization", "SEO", "Security", "Content Updates", "Uptime Monitoring", "Bug Fixes", "Client Communication", "Project Management"],
    image: "/projects/ozford.jpg",
    images: [
      "https://res.cloudinary.com/dtpz8iptk/image/upload/v1773163387/Screenshot_2026-03-10_224553_pqujaz.png",
      "https://res.cloudinary.com/dtpz8iptk/image/upload/v1773163384/Screenshot_2026-03-10_224645_xefmco.png",
      "https://res.cloudinary.com/dtpz8iptk/image/upload/v1773163384/Screenshot_2026-03-10_224820_jdij68.png",
    ],
    color: "#8b5cf6",
    year: "2025",
    role: "Full Stack Developer",
    client: "Ozford Institute of Higher Education",
    result: "Improved site speed & ongoing reliability",
    link: "https://www.ozford.edu.au/",
  },
  {
    id: 4,
    slug: "personal-portfolio",
    title: "PERSONAL PORTFOLIO",
    subtitle: "Next.js / Tailwind CSS / GSAP / Framer Motion",
    description:
      "Awwwards-style personal portfolio with organic 3D blobs, smooth scroll, page transitions, and GSAP animations.",
    longDescription:
      "Designed and built my personal portfolio website as a showcase of modern web animation techniques. Features an organic 3D liquid blob using SVG gooey filters, GSAP-powered text reveals and scroll animations, Lenis smooth scrolling, Framer Motion page transitions, a custom cursor system, and a dark-themed Awwwards-inspired design.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP","E-Commerce", "Framer Motion", "Lenis", "SVG Gooey Filters", "Custom Cursor", "Dark Theme", "Awwwards-Inspired Design", "Performance Optimization", "SEO", "Responsive Design", "Git", "GitHub", "Personal Branding"],
    image: "/projects/portfolio.jpg",
    images: [
      "https://res.cloudinary.com/dtpz8iptk/image/upload/v1773163386/Screenshot_2026-03-10_224902_kwqub3.png",
      "https://res.cloudinary.com/dtpz8iptk/image/upload/v1773163387/Screenshot_2026-03-10_225008_v7ts7x.png",
      "https://res.cloudinary.com/dtpz8iptk/image/upload/v1773163383/Screenshot_2026-03-10_225117_lvh0ub.png",
    ],
    color: "#a855f7",
    year: "2025",
    role: "Full Stack Developer",
    client: "Personal",
    result: "Awwwards-quality animated portfolio",
    link: "https://www.rahulkumarsahu.in/",
  },
];

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  avatar?: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    // Project 1 — The Foodie Zone
    id: 1,
    name: "Arjun Mehta",
    role: "Restaurant Owner",
    company: "The Foodie Zone",
    text: "I came to Rahul with a rough idea for an online food ordering system. He built everything — real-time Firebase order tracking, admin panel, cart, payments — in under 3 weeks. Orders went up 40% after launch. Couldn't have asked for a better developer.",
    rating: 5,
    image: "https://res.cloudinary.com/dtpz8iptk/image/upload/c_thumb,g_face,w_200,h_200/v1773168765/Black_Amber_Day_3-1567-_1.jpg_1_zwvw9r.jpg",
  },
  {
    // Project 2 — Expatlives
    id: 2,
    name: "Nikhil Rajan",
    role: "Founder",
    company: "Expatlives",
    text: "Rahul redesigned our entire website from scratch — mobile-first, lightning fast, and SEO-perfect. We started ranking on Google within weeks of the new site going live. He communicated proactively and delivered on time. Highly recommend.",
    rating: 5,
    image: "https://res.cloudinary.com/dtpz8iptk/image/upload/c_thumb,g_face,w_200,h_200/v1773168745/WhatsApp_Image_2026-03-11_at_12.20.00_AM_kom9ky.jpg",
  },
  {
    // Project 3 — Ozford University
    id: 3,
    name: "Dr. Priya Kapoor",
    role: "IT Manager",
    company: "Ozford Institute",
    text: "Rahul has been maintaining our university website for over a year now. Response time is always under 2 hours, zero major outages, and the performance improvements he made dropped our bounce rate by 20%. He's become an essential part of our team.",
    rating: 5,
    image: "https://res.cloudinary.com/dtpz8iptk/image/upload/c_thumb,g_face,w_200,h_200/v1773168745/WhatsApp_Image_2026-03-11_at_12.19.59_AM_3_rsqera.jpg",
  },
  {
    // Project 4 — Portfolio
    id: 4,
    name: "Rohan Verma",
    role: "Creative Director",
    company: "Pixel & Co.",
    text: "I stumbled on Rahul's portfolio and immediately reached out. The animations, the attention to detail, the performance — it's Awwwards level. He then built our agency's site with the same quality. Clients keep complimenting it on every call.",
    rating: 5,
    image: "https://res.cloudinary.com/dtpz8iptk/image/upload/c_thumb,g_face,w_200,h_200/v1773168745/WhatsApp_Image_2026-03-11_at_12.20.00_AM_1_cdpqax.jpg",
  },
  {
    // Valentine website
    id: 5,
    name: "Karan Sharma",
    role: "Software Engineer",
    company: "Personal Project",
    text: "I asked Rahul to build a Valentine's Day surprise website for my girlfriend — animated love letters, photo gallery, a custom countdown, the works. He delivered in 3 days and added details I didn't even ask for. She literally cried happy tears. 10 out of 10.",
    rating: 5,
    image: "https://res.cloudinary.com/dtpz8iptk/image/upload/c_thumb,g_face,w_200,h_200/v1773168745/WhatsApp_Image_2026-03-11_at_12.19.59_AM_prl0zj.jpg",
  },
  {
    id: 6,
    name: "Ritika Joshi",
    role: "Co-founder",
    company: "GrowthHive",
    text: "We needed an MVP in 4 weeks for our investor demo. Rahul built the full-stack app — auth, dashboard, REST API, the whole thing — and even helped us think through the product flow. We closed our seed round. That's the ROI right there.",
    rating: 4,
    image: "https://res.cloudinary.com/dtpz8iptk/image/upload/c_thumb,g_face,w_200,h_200/v1773168745/WhatsApp_Image_2026-03-11_at_12.20.01_AM_iclbzo.jpg",
  },
  {
    id: 7,
    name: "Vikram Singh",
    role: "Product Lead",
    company: "NovaTech",
    text: "Rahul integrated a complex third-party API into our existing React app and nobody on our team could figure out the docs. He did it in two days, wrote clean modular code, and left detailed comments. Our senior devs were impressed.",
    rating: 4,
    image: "https://res.cloudinary.com/dtpz8iptk/image/upload/c_thumb,g_face,w_200,h_200/v1773168745/WhatsApp_Image_2026-03-11_at_12.20.00_AM_2_ht96gt.jpg",
  },
  {
    id: 8,
    name: "Aditya Kumar",
    role: "Marketing Manager",
    company: "BrandLab India",
    text: "We needed a high-converting landing page for a product launch — fast. Rahul had it live in 5 days. The page design, copywriting suggestions, and micro-animations all came from him. Our conversion rate was 11% which beat every benchmark we had.",
    rating: 5,
    image: "https://res.cloudinary.com/dtpz8iptk/image/upload/c_thumb,g_face,w_200,h_200/v1773168744/WhatsApp_Image_2026-03-11_at_12.19.59_AM_2_hnsvzk.jpg",
  },
  {
    id: 9,
    name: "Siddharth Rao",
    role: "Freelance Designer",
    company: "Self-employed",
    text: "I'm a designer who usually struggles to find developers who respect the design. Rahul is the exception. Pixel-perfect implementation, smooth animations, and he actually pushed back when something would hurt UX. A true collaborator — I refer him to everyone.",
    rating: 4,
    image: "https://res.cloudinary.com/dtpz8iptk/image/upload/c_thumb,g_face,w_200,h_200/v1773168744/WhatsApp_Image_2026-03-11_at_12.19.59_AM_1_vekfj0.jpg",
  },  {
    id: 10,
    name: "Disha Das",
    role: "Owner",
    company: "Das Gold & Jewellers",
    text: "I run a gold jewellery business and managing staff attendance, salaries, and advances on paper was a nightmare. Rahul built us a clean web-based system — employee profiles, monthly salary slips, attendance tracking, and advance deductions all in one place. Even my accountant loves it. No more Excel chaos.",
    rating: 5,
    image: "https://res.cloudinary.com/dtpz8iptk/image/upload/c_thumb,g_face,w_200,h_200/v1773170214/WhatsApp_Image_2026-03-11_at_12.45.54_AM_y1klfr.jpg",
  },];

export interface Service {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  tags: string[];
}

export const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    subtitle: "Modern, responsive web applications",
    icon: "🖥",
    description:
      "Modern, responsive web applications with cutting-edge frameworks. SEO-optimized, fast-loading, and user-friendly interfaces.",
    tags: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "Material UI", "Shadcn", "Django", "Flask", "MongoDB", "Firebase", "MySQL", "FireStore"],
  },
  {
    id: 2,
    title: "E-Commerce Solutions",
    subtitle: "Full-featured online stores",
    icon: "🛒",
    description:
      "Full-featured e-commerce platforms with secure payment integration, inventory management, and analytics dashboards.",
    tags: ["Shopify", "WooCommerce", "Stripe", "PayPal", "Cart Systems", "Admin Panels", "WordPress", "React", "Next.js", "Node.js", "TypeScript"],
  },
  {
    id: 3,
    title: "Mobile App Development",
    subtitle: "Cross-platform mobile apps",
    icon: "📱",
    description:
      "Native and cross-platform mobile applications for iOS and Android. From concept to deployment with smooth UX and robust performance.",
    tags: ["React Native", "Expo", "iOS", "Android", "MongoDB", "Firebase", "MySQL", "FireStore"],
  },
  {
    id: 4,
    title: "SaaS Applications",
    subtitle: "Scalable software products",
    icon: "📊",
    description:
      "Scalable SaaS products with multi-tenant architecture, subscription billing, user management, and real-time features.",
    tags: ["MongoDB", "PostgreSQL", "AWS", "Docker", "Microservices", "APIs", "React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 5,
    title: "Custom Solutions",
    subtitle: "Tailored to your business",
    icon: "⚡",
    description:
      "From small MVPs to large-scale enterprise applications. Tailored solutions that fit your unique business requirements.",
    tags: ["Full Stack", "Consulting", "MVP Development", "Enterprise Apps", "Integrations"],
  },
  {
    id: 6,
    title: "UI / UX Design",
    subtitle: "Beautiful, intuitive interfaces",
    icon: "🎨",
    description:
      "Beautiful, intuitive interfaces with user-centered design principles. Wireframes, prototypes, and polished UI implementations.",
    tags: ["Figma", "Adobe XD", "Design Systems", "Prototyping", "User Research"],
  },
  {
    id: 7,
    title: "Marketing & SEO",
    subtitle: "Grow your online presence",
    icon: "📈",
    description:
      "Search engine optimization, content strategy, social media management, and digital marketing to drive traffic and conversions.",
    tags: ["SEO", "Google Analytics", "Social Media", "Content Strategy", "Keyword Research", "Link Building"],
  },
  {
    id: 8,
    title: "Video Editing",
    subtitle: "Professional video production",
    icon: "🎬",
    description:
      "Professional video editing for marketing content, social media, product demos, and brand storytelling.",
    tags: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Motion Graphics", "Color Grading"],
  },
  {
    id: 9,
    title: "Website Maintenance",
    subtitle: "Keep your site running smoothly",
    icon: "🔧",
    description:
      "Ongoing website maintenance, performance monitoring, security updates, bug fixes, and content updates to keep your site running at peak.",
    tags: ["Performance", "Security", "Updates", "Monitoring", "Bug Fixes", "Content Updates"],
  },
];

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "SQL", "HTML5", "CSS3"],
  },
  {
    category: "Frontend Development",
    skills: ["React.js", "Next.js", "Redux", "Tailwind CSS", "Material UI", "Shadcn UI", "Bootstrap", "Django", "Flask", "Webpack"],
  },
  {
    category: "Backend Development",
    skills: ["Node.js", "Express.js", "Django", "Flask", "REST APIs", "GraphQL", "Microservices"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Firestore"],
  },
  {
    category: "Mobile Development",
    skills: ["React Native", "Expo", "iOS", "Android"],
  },
  {
    category: "Tools & Design",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Adobe XD", "Docker", "Design Systems", "Prototyping"],
  },
  {
    category: "E-Commerce & SaaS",
    skills: ["Shopify", "WooCommerce", "Stripe", "PayPal", "AWS", "Multi-tenant", "Subscription Billing"],
  },
  {
    category: "Specialties",
    skills: ["Full Stack Development", "MVP Development", "Enterprise Apps", "SEO", "Video Editing", "UI/UX Design"],
  },
];

// Flat skills for the about section toolkit (top skills)
export interface Skill {
  name: string;
  icon: string;
}

export const skills: Skill[] = [
  { name: "Next.js", icon: "▲" },
  { name: "React", icon: "⚛" },
  { name: "TypeScript", icon: "TS" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "Firebase", icon: "🔥" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Tailwind", icon: "💨" },
];

export const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const socialLinks = [
  {
    name: "Portfolio",
    href: "https://www.rahulkumarsahu.in/",
    label: "rahulkumarsahu.in",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ohkrahul/",
    label: "linkedin.com/in/ohkrahul",
  },
  {
    name: "Github",
    href: "https://github.com/ohkrahul",
    label: "github.com/ohkrahul",
  },
  {
    name: "Email",
    href: "mailto:rahulsahu3612@gmail.com",
    label: "rahulsahu3612@gmail.com",
  },
];

export const processSteps = [
  { number: "01", title: "DISCOVERY", description: "Free consultation call to understand your vision, goals, timeline, and budget" },
  { number: "02", title: "PROPOSAL", description: "Detailed project scope, timeline, milestones, and transparent fixed-price quote" },
  { number: "03", title: "DEVELOPMENT", description: "Weekly demos, daily Slack/Discord updates, and iterative feedback loops" },
  { number: "04", title: "LAUNCH & SUPPORT", description: "Production deployment, performance testing, and 30 days of free post-launch support" },
];

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 25, suffix: "+", label: "Projects Delivered" },
  { value: 15, suffix: "+", label: "Happy Clients" },
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "What's your typical project timeline?",
    answer: "Most projects take 2-6 weeks depending on complexity. A landing page or portfolio takes ~1-2 weeks, a full web app 4-8 weeks. I'll give you an exact timeline after our discovery call.",
  },
  {
    question: "How much do you charge?",
    answer: "Every project is scoped and priced individually — a landing page has very different requirements from a full SaaS platform. I don't do hourly billing; you get a fixed-price quote upfront so there are zero surprises. Book a free 15-minute discovery call, tell me what you need, and I'll send you a detailed quote within 24 hours.",
  },
  {
    question: "What technologies do you specialize in?",
    answer: "My core stack is Next.js, React, TypeScript, Tailwind CSS, GSAP animations, Node.js, and Firebase/MongoDB. I also work with React Native for mobile, Shopify/WooCommerce for e-commerce, and Python/Django for backend. I pick the best tool for your specific needs.",
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Every project comes with 30 days of free bug-fix support after launch. For ongoing maintenance, updates, and feature additions, I offer affordable monthly retainer plans — like the work I do for Ozford University.",
  },
  {
    question: "Do you handle marketing, SEO & video editing too?",
    answer: "Yes! Beyond development, I offer SEO optimization, social media management, video editing for marketing content, and ongoing website maintenance. I can be your complete digital partner.",
  },
  {
    question: "Can you work with my existing design / team?",
    answer: "Absolutely. I regularly collaborate with designers (Figma/XD handoffs), backend developers, and project managers. I can also handle the full design + development if needed.",
  },
];

export const techLogos = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP",
  "Node.js", "Python", "Firebase", "MongoDB", "PostgreSQL",
  "React Native", "Shopify", "Docker", "Vercel", "Figma",
  "Django", "Flask", "Redux", "GraphQL", "AWS",
];

export interface Achievement {
  id: number;
  title: string;
  event: string;
  organizer: string;
  position: string;
  prize: string;
  date: string;
  description: string;
  problemStatement: string;
  teamName: string;
  highlights: string[];
  video: string;
  tags: string[];
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "3rd Runner Up — Gen AI Exchange Hackathon 2025",
    event: "Gen AI Exchange Hackathon 2025",
    organizer: "Google Cloud × Hack2skill",
    position: "3rd Runner Up",
    prize: "₹50,000",
    date: "2025",
    description:
      "Competed against 100 top teams at the Grand Finale in Bengaluru and secured 3rd Runner Up for building an AI-driven governance assistant that transforms citizen service delivery using Google Cloud AI technologies.",
    problemStatement: "AI-Powered Governance: Transforming Citizen Service Delivery",
    teamName: "ScriptDevs",
    highlights: [
      "Grand Finale in Bengaluru — Top 100 teams nationwide",
      "Built an AI-driven governance assistant prototype",
      "Won ₹50,000 cash prize",
      "Recognized for technical excellence, creativity & real-world impact",
      "Powered by Google Cloud AI technologies",
    ],
    video: "https://res.cloudinary.com/dtpz8iptk/video/upload/v1773092550/1_kbl3sb.mp4",
    tags: ["Google Cloud", "Gen AI", "Hack2skill", "Viksit Bharat", "AI Governance"],
  },
];
