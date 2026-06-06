// ─── PERSONAL INFO ───────────────────────────────────────────────
import avatar from "../assests/person.jpg"

export const personal = {
  name: "Santhosh",
  role: "Full Stack Developer",
  tagline: "Building clean, scalable web experiences",
  bio: "Engineering graduate who transitioned from Mechanical to Software. Passionate about building beautiful UIs and robust full-stack applications. Currently seeking opportunities as a Frontend / Full Stack Developer.",
  location: "Coimbatore, Tamil Nadu, India",
  email: "santhoshmathavan165@gmail.com",
  github: "https://github.com/santhosh161-gi",
  linkedin: "https://www.linkedin.com/in/santhosh-mathavanr/",
  resumeUrl: "https://drive.google.com/file/d/17RA4cKAM-9c1Iphbce05xFF8_E3fYxq3/view?usp=drive_link",
  avatar: "avatar",
};

// ─── SKILLS ──────────────────────────────────────────────────────
export const skills = [
  {
    category: "Frontend",
    icon: "🎨",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript","React", "Next.js","Bootstrap", "Tailwind CSS", "UI/UX Design", "Responsive Design", "GSAP", "Framer Motion"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: ["Spring Boot", "Hibernate", "REST APIs", "Java", "MySQL", "PHP", "Laravel", "Firebase"],
  },
  {
    category: "Tools & Design",
    icon: "🛠️",
    items: ["Git", "VS Code", "Figma", "Postman", "Linux", "Command Line", "Agile Methodologies", "claude.ai"],
  },
  {
    category: "AI Tools",
    icon: "🤖",
    items: ["claude.ai", "GitHub Copilot", "Midjourney", "DALL·E", "RunwayML"],
  },
  {
    category: "Learning",
    icon: "📚",
    items: ["Cloud Technologies", "AI/ML"," Claude.ai"],
  },
];

// ─── PROJECTS ────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "Electronics Online Store",
    description: "Full-stack e-commerce application with product listing, cart, and CRUD operations. Built with React frontend and Spring Boot backend.",
    tags: ["React", "Spring Boot", "Hibernate", "REST API", "Java", "MySQL"],
    type: "Full Stack",
    color: "#6ee7b7",
    github: "https://github.com/santhosh161-gi",
    live: "#",
    year: "2024",
  },
  {
    id: 2,
    title: "Iphone Website Clone",
    description: "Frontend clone of the official Apple iPhone website. Focused on pixel-perfect design, responsive layout, and smooth animations using GSAP.",
    tags: ["HTML", "CSS", "GSAP", "next.js", "Framer Motion", "tailwind CSS", "TypeScript"],
    type: "Frontend",
    color: "#818cf8",
    github: "https://github.com/santhosh161-gi",
    live: "https://i-phone-s3rq.vercel.app/",
    year: "2025",
  },
  {
    id: 3,
    title: "Nike Shoes Store",
    description: "E-commerce style product showcase for Nike shoes. Features animated product cards, cart simulation, and mobile-first design.",
    tags: ["HTML", "CSS", "JavaScript"],
    type: "Frontend",
    color: "#f472b6",
    github: "https://github.com/santhosh161-gi",
    live: "#",
    year: "2024",
  },
  {
    id: 4,
    title: "Netflix UI Clone",
    description: "Frontend clone of the Netflix streaming service UI. Implemented responsive design, dynamic content loading, and smooth transitions.",
    tags: ["CSS", "tailwind CSS", "Framer Motion", "Next.js", "firebase", "TypeScript", "Tmdb API"],
    type: "Frontend",
    color: "#fb923c",
    github: "https://github.com/santhosh161-gi",
    live: "https://net-flix-seven-zeta.vercel.app/home",
    year: "2025",
  },

];

// ─── EDUCATION ───────────────────────────────────────────────────
export const education = [
  {
    degree: "Bachelor of Engineering",
    field: "Mechanical Engineering",
    institution: "Anna University",
    location: "Tamil Nadu, India",
    year: "2020 – 2024",
    grade: "7.8 CGPA",
    highlights: ["Relevant coursework in Mathematics, Physics", "Final year project on automation"],
  },
  {
    degree: "Higher Secondary Certificate",
    field: "Science (Physics, Chemistry, Maths)",
    institution: "St.Anns Matriculation Higher Secondary School",
    location: "Tamil Nadu, India",
    year: "2018 – 2020",
    grade: "82%",
    highlights: ["District level science competition finalist"],
  },
];

// ─── INTERNSHIPS ─────────────────────────────────────────────────
export const internships = [
  {
    role: "Frontend Developer Intern",
    company: "KGISL",
    location: "Coimbatore, Tamil Nadu",
    duration: "Oct 2025 – Jan 2026",
    type: "Internship",
    description: "Worked on building responsive UI components using Next.js and Tailwind CSS. Collaborated with design team to implement Figma designs.",
    responsibilities: [
      "Built reusable React components for the client dashboard",
      "Improved page load performance by 30% through code optimization",
      "Integrated REST APIs with frontend using Axios",
      "Participated in daily standups and Agile sprints",
    ],
    tags: ["React", "Tailwind CSS", "REST API", "Git", "Figma", "Next.js"],
    color: "#6ee7b7",
  },
  {
    role: "Web Developer",
    company: "KPRIET",
    location: "Coimbatore, Tamil Nadu",
    duration: "Feb 2026 – Present",
    type: "Employee",
    description: "Developing and maintaining the college's official website. Implemented new features, optimized performance, and ensured mobile responsiveness.",
    responsibilities: [
      "Designed and implemented REST APIs using Spring Boot",
      "Managed database schema and queries with Hibernate",
      "Built admin panel UI with React",
      "Wrote unit tests and handled bug fixes",
    ],
    tags: ["PHP", "Laravel", "Python", "GiyLab", "Docker", "AWS", "Mobaxterm", "claude.ai"],
    color: "#818cf8",
  },
];

// ─── CERTIFICATES ─────────────────────────────────────────────────
export const certificates = [
  {
    title: "Mastering AI on AWS",
    issuer: " AWS Certified AI Practitioner",
    date: "Oct 2025",
    credential: "UC-XXXXXXXX",
    color: "#6ee7b7",
    icon: "🌐",
    tags: ["AI", "Machine Learning", "AWS"],
  },
  {
    title: "Introduction to Front – End Development",
    issuer: "Simplilearn",
    date: "Aug 2025",
    credential: "AWS-XXXXXXXX",
    color: "#fb923c",
    icon: "☁️",
    tags: ["HTML", "CSS", "JavaScript", "responsive design", "Rect", "Tailwind CSS"],
  },
  {
    title: "Java Full Stack",
    issuer: "Jspiders - Bangalore",
    date: "Sep 2024 - Jun 2025",
    credential: "SL-XXXXXXXX",
    color: "#818cf8",
    icon: "⚙️",
    tags: ["Java", "Spring Boot", "REST"],
  },
  {
    title: "Software Engineering Job Simulation Certificate",
    issuer: "JPMorgan Chase & Co",
    date: "May 2025",
    credential: "FCC-XXXXXXXX",
    color: "#f472b6",
    icon: "📱",
    tags: ["Software Engineering", "Problem Solving", "Coding Interview"],
  },
  {
    title: "Technology / Consulting Virtual Experience",
    issuer: "Deloitte",
    date: "Mar 2025",
    credential: "UC-YYYYYYYY",
    color: "#34d399",
    icon: "⚛️",
    tags: ["React", "Hooks", "Redux"],
  }
];
