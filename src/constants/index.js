import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  dungeon,
  kriingg,
  uin,
  eth0,
  global_solusindo,
  weboender,
  osma,
  scout,
  pos_system,
  midtrans,
  iot_scale,
  kriingg_project,
  dungeon_project,
  flutter,
  laravel,
  php,
  sql,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// "What I Build" section mappings
const services = [
  {
    title: "Web Applications",
    icon: web,
    desc: "Robust interfaces built with Laravel, React, and Livewire.",
  },
  {
    title: "Backend Systems",
    icon: backend,
    desc: "Scalable systems with automated queues, auth, and database architecture.",
  },
  {
    title: "Mobile Applications",
    icon: mobile,
    desc: "Cross-platform mobile apps for business workflows utilizing Flutter.",
  },
  {
    title: "IoT Solutions & REST APIs",
    icon: creator,
    desc: "Real-time microcontroller integrations via WiFi and secure API endpoints.",
  },
];

// Categories for Tech section to boost recruiter scan efficiency
export const categorizedSkills = [
  {
    category: "Programming Languages",
    skills: [
      { name: "PHP", icon: php },
      { name: "JavaScript", icon: javascript },
      { name: "TypeScript", icon: typescript },
      { name: "SQL", icon: sql },
      { name: "C", icon: null },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React JS", icon: reactjs },
      { name: "HTML 5", icon: html },
      { name: "CSS 3", icon: css },
      { name: "Tailwind CSS", icon: tailwind },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Laravel", icon: laravel },
      { name: "Node JS", icon: nodejs },
      { name: "REST APIs", icon: null },
    ],
  },
  {
    category: "Mobile",
    skills: [
      { name: "Flutter", icon: flutter },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "SQL", icon: sql },
      { name: "MySQL", icon: null },
    ],
  },
  {
    category: "Cloud",
    skills: [
      { name: "AWS S3", icon: null },
    ],
  },
  {
    category: "IoT",
    skills: [
      { name: "ESP32", icon: null },
      { name: "HX711", icon: null },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: git },
      { name: "Figma", icon: figma },
    ],
  },
];

// Fallback technologies list for 3D Ball rendering (kept for visual compatibility)
const technologies = [
  { name: "PHP", icon: php },
  { name: "Laravel", icon: laravel },
  { name: "React JS", icon: reactjs },
  { name: "Flutter", icon: flutter },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "SQL", icon: sql },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "git", icon: git },
];

const experiences = [
  {
    title: "Fullstack Developer",
    company_name: "CV Global Solusindo",
    location: "Malang, Jawa Timur",
    icon: global_solusindo,
    iconBg: "#383E56",
    date: "Dec 2025 - Feb 2026",
    points: [
      "Developed an Android-based POS system using Flutter and Laravel, delivering 20+ core business features within 1 month.",
      "Integrated Midtrans payment gateway and REST APIs, enabling real-time digital transactions across mobile and backend systems.",
      "Engineered ESP32 and HX711 integration using C, achieving real-time weight transmission via WiFi with API-based processing.",
      "Designed database architecture and backend services independently, supporting 100% of project requirements within the initial development scope.",
    ],
    technologies: ["Flutter", "Laravel", "C", "ESP32", "HX711", "Midtrans", "REST APIs", "WiFi"],
    impact: "Delivered 20+ core features in 1 month, successfully launched integrated IoT scales, and processed real-time fintech payments.",
  },
  {
    title: "Web Developer Intern",
    company_name: "Kriingg",
    location: "Malang, Jawa Timur",
    icon: kriingg,
    iconBg: "#E6DEDD",
    date: "Jun 2025 - Aug 2025",
    points: [
      "Developed authentication and RBAC (Role-Based Access Control) features supporting 3 user roles (Admin, Driver, Merchant) using Laravel and Livewire.",
      "Built CRUD modules across 3 operational dashboards, integrating AWS S3 for media storage and Leaflet.js for location selection.",
      "Implemented media storage and location selection features, improving operational workflow efficiency.",
    ],
    technologies: ["Laravel", "Livewire", "AWS S3", "Leaflet.js", "RBAC", "CRUD"],
    impact: "Built secure dashboard systems handling 3 operational roles, improving media handling and mapping workflow.",
  },
  {
    title: "Staff of Developer and Speaker",
    company_name: "Weboender",
    location: "Malang, Jawa Timur",
    icon: weboender,
    iconBg: "#383E56",
    date: "Sep 2024 - Jul 2025",
    points: [
      "Delivered technical workshops for 20+ participants on web development fundamentals.",
      "Mentored community members through collaborative web development projects.",
      "Contributed to the development of community-driven web applications.",
    ],
    technologies: ["Laravel", "HTML", "CSS", "JavaScript", "React", "Bootcamp Instruction"],
    impact: "Taught web development fundamentals to 20+ participants and accelerated project deliveries.",
  },
  {
    title: "Leader",
    company_name: "Ethernet-0",
    location: "Malang, Jawa Timur",
    icon: eth0,
    iconBg: "#383E56",
    date: "Aug 2024 - Jul 2025",
    points: [
      "Led a technology community of 20+ active members focused on networking and cybersecurity.",
      "Organized 10+ internal workshops and technical sharing sessions.",
      "Coordinated partnerships with external organizations to support member skill development.",
    ],
    technologies: ["Networking", "Cybersecurity", "Cloud Technologies", "IT Infrastructure", "Leadership"],
    impact: "Led a 20+ active student tech community and hosted 10+ workshops and external partner events.",
  },
  {
    title: "Backend Developer",
    company_name: "Dungeon Education",
    location: "Malang, Jawa Timur",
    icon: dungeon,
    iconBg: "#E6DEDD",
    date: "May 2024 - Dec 2024",
    points: [
      "Developed authentication and password recovery features supporting 100% of user onboarding workflows.",
      "Built admin management modules with CRUD functionality for users and learning content.",
      "Implemented a ranking system to automatically calculate and display user performance metrics.",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "Authentication", "CRUD", "Algorithms"],
    impact: "Achieved 100% coverage of user onboarding flows and automated real-time performance metrics.",
  },
  {
    title: "Laboratory Assistant",
    company_name: "UIN Malang",
    location: "Malang, Jawa Timur",
    icon: uin,
    iconBg: "#383E56",
    date: "Feb 2024 - Present",
    points: [
      "Assisted practical sessions for core subjects: Database Systems, Algorithms & Programming, Web Programming, Software Engineering, Networking, and Object-Oriented Programming.",
      "Guided students in understanding theoretical concepts. Collaborated with lecturers to prepare materials and evaluate student work.",
    ],
    technologies: ["SQL", "C++", "Java", "OOP", "Networking", "Software Engineering"],
    impact: "Instructed over 100+ students in core technical subjects while designing grading materials.",
  },
  {
    title: "Staff of Network Layer",
    company_name: "Ethernet-0",
    location: "Malang, Jawa Timur",
    icon: eth0,
    iconBg: "#383E56",
    date: "Sep 2023 - Aug 2024",
    points: [
      "Built and maintained partnerships with internal and external parties.",
      "Managed and distributed information related to internships, job opportunities, webinars, and competitions.",
      "Provided regular updates and support to community members regarding events and opportunities.",
    ],
    technologies: ["Networking", "Partnerships", "Public Relations", "Communication"],
    impact: "Managed outreach and distribution streams to secure training opportunities for student members.",
  },
  {
    title: "Health Division Staff",
    company_name: "OSMA (Dormitory Student Organization)",
    location: "Pasuruan, Jawa Timur",
    icon: osma,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Apr 2022",
    points: [
      "Responsible for managing students' health-related needs, handling medicines and first aid, as well as administering medical leave permissions for dormitory residents.",
    ],
    technologies: ["First Aid", "Operations Management", "Administration"],
    impact: "Maintained health logs and managed sick leaves for MAN IC dormitories.",
  },
  {
    title: "Logistics Officer",
    company_name: "Scout Council",
    location: "Pasuruan, Jawa Timur",
    icon: scout,
    iconBg: "#383E56",
    date: "Oct 2020 - Oct 2021",
    points: [
      "Responsible for managing and maintaining all inventories owned by the Scout organization at MAN Insan Cendekia Pasuruan.",
    ],
    technologies: ["Inventory Custody", "Logistics Planning"],
    impact: "Administered and maintained 100% of equipment inventory for the Scout organization.",
  },
];

const achievements = [
  {
    title: "Bronze Medal",
    issuer: "National Applied Science Project Olympiad (NASPO)",
    year: "2020",
    description: "Awarded national bronze medal for presenting innovative applied science solutions.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Pok%C3%A9mon_GO_Bronze_Medal.png",
  },
  {
    title: "Best Participant",
    issuer: "Laravel Bootcamp",
    year: "2023",
    description: "Recognized as the overall best participant during intensive Laravel backend training.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Gold_Medal.svg/1200px-Gold_Medal.svg.png",
  },
];

const projects = [
  {
    name: "Android POS System",
    description: "Android POS application built with Flutter and Laravel backend. Designed and built 20+ business workflows (transactions, inventory, history) in 1 month.",
    tags: [
      { name: "flutter", color: "blue-text-gradient" },
      { name: "laravel", color: "green-text-gradient" },
      { name: "android", color: "pink-text-gradient" },
    ],
    image: pos_system,
    source_code_link: "https://github.com/SARSSXD",
    is_private: true,
  },
  {
    name: "Midtrans Payment Integration",
    description: "Secure payment gateway module built using Midtrans API and Laravel REST architecture. Enables mobile POS users to perform real-time cash-free transactions.",
    tags: [
      { name: "midtrans", color: "blue-text-gradient" },
      { name: "laravel", color: "green-text-gradient" },
      { name: "rest-api", color: "pink-text-gradient" },
    ],
    image: midtrans,
    source_code_link: "https://github.com/SARSSXD",
    is_private: true,
  },
  {
    name: "IoT Weight Scale Integration",
    description: "Integration of ESP32 and HX711 weight cell sensor. Programmed in C to process real-time weights and transmit them via WiFi sockets to a central Laravel API endpoint.",
    tags: [
      { name: "esp32", color: "blue-text-gradient" },
      { name: "c-programming", color: "green-text-gradient" },
      { name: "iot", color: "pink-text-gradient" },
    ],
    image: iot_scale,
    source_code_link: "https://github.com/SARSSXD",
    is_private: true,
  },
  {
    name: "Kriingg Dashboard Modules",
    description: "CRUD admin panel dashboards with fine-grained role permissions. Integrated AWS S3 for storage and Leaflet.js maps for driver coordinates/location selection.",
    tags: [
      { name: "laravel", color: "blue-text-gradient" },
      { name: "livewire", color: "green-text-gradient" },
      { name: "aws-s3", color: "pink-text-gradient" },
      { name: "leaflet", color: "orange-text-gradient" },
    ],
    image: kriingg_project,
    source_code_link: "https://github.com/SARSSXD",
    is_private: true,
  },
  {
    name: "Dungeon Education Platform",
    description: "Tech-focused e-learning backend with secure password recovery, admin interfaces for user/content control, and automated activity-based student rankings.",
    tags: [
      { name: "laravel", color: "blue-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
      { name: "bootstrap", color: "pink-text-gradient" },
    ],
    image: dungeon_project,
    source_code_link: "https://github.com/SARSSXD",
    is_private: true,
  },
];

export { services, technologies, experiences, achievements, projects };
