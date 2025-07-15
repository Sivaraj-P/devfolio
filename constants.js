export const METADATA = {
  author: "Sivaraj P",
  title: "Portfolio | Sivaraj P",
  description:
    "Sivaraj P is a passionate Backend Developer with experience in building scalable and secure web applications",
  siteUrl: "https://www.shubhporwal.me/",
  twitterHandle: "@shubhporwal24",
  keywords: [
    "Sivaraj P",
    "Backend Developer",
    "Python Developer",
    "Software Developer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A passionate Backend Developer",
  "I build scalable and high-performance systems",
  "Specialized in crafting reliable server-side applications",
];


export const RESUME={
  name:"Sivaraj P",
  resume:'/resume/resume.pdf'

}

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: sivarajpauldurai@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/sivarajpaldurai/",
  },
  {
    name: "github",
    url: "https://github.com/Sivaraj-P",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/sivaraj._/",
  }
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "python"
  ],
  librariesAndFrameworks: [
    "react",
    "tailwindcss",
    "django",
    "fastapi",
  ],
  databases: ["mysql","postgresql", "redis","mongodb"],
  other: ["git", "docker","postman","aws"],
};

export const PROJECTS = [
  {
    name: "Green City",
    image: "/projects/greencity.jpg",
    blurImage: "/projects/blur/greencity-blur.jpg",
    description: "Complaint Management System",
    gradient: ["#F14658", "#DC2537"],
    url: "https://sivarajpaldurai.pythonanywhere.com",
    tech: ["html", "css", "python","django", "sqlite"],
  },
  {
    name: "Sky Watch",
    image: "/projects/skywatch.jpg",
    blurImage: "/projects/blur/skywatch-blur.jpg",
    description: "Realtime weather data and forecasts.",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://shubh73-medium.vercel.app/",
    tech:  ["html", "css", "python","django", "sqlite"],
  },
  {
    name: "Rathna Store",
    image: "/projects/rathnastore.jpg",
    blurImage: "/projects/blur/rathnastore-blur.jpg",
    description:
      "Ecommerce with Razorpay Integration",
    gradient: ["#000066", "#6699FF"],
    url: "https://shubh73-inshorts.netlify.app/",
    tech: ["react", "mui", "tailwindcss","python","django"],
  },
  {
    name: "Man Power",
    image: "/projects/manpower.png",
    blurImage: "/projects/blur/tesla-blur.webp",
    description: "Managing workforce and job assignments efficiently.",
    gradient: ["#142D46", "#2E4964"],
    url: "https://github.com/shubh73/tesla",
    tech: ["react","python","django","postgresql"],
  },
];

// export const WORK = [
//   {
//     id: 1,
//     company: "Dukaan",
//     title: "Frontend Developer",
//     location: "Bangalore, Karnataka",
//     range: "December - Current",
//     responsibilities: [
//       "Led creation of a captivating cross-platform e-commerce solution.",
//       "Enhanced UX with gamification and personalized push notifications ensuring an ever-improving shopping journey.",
//       "The app boasts a DAU base of 32k and an extensive MAU count of 180k.",
//     ],
//     url: "https://mydukaan.io/",
//     video: "/work/dukaan.mp4",
//   },
//   {
//     id: 2,
//     company: "Aviate",
//     title: "Frontend Developer Intern",
//     location: "Goa",
//     range: "May - October 2022",
//     responsibilities: [
//       "Built their flagship product Q-Rate, a voice-based applicant screening platform.",
//       "Developed pixel-perfect responsive web applications achieving daily traffic of 1000-2000 users.",
//       "Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.",
//     ],
//     url: "https://www.aviate.jobs/",
//     video: "/work/aviate.mp4",
//   },
//   {
//     id: 3,
//     company: "Spacenos",
//     title: "Web Developer Intern",
//     location: "Bangalore, Karnataka",
//     range: "September - December 2021",
//     responsibilities: [
//       "Led the Full Stack revamp on the Admin Portal.",
//       "Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
//       "Implemented CRUD features for all the services and providers.",
//     ],
//     url: "https://spacenos.com/",
//     video: "/work/spacenos.mp4",
//   },
// ];

export const ORGANIZATIONS=["Cyces Innovation Labs","Zigma Technologies"]

export const WORK_CONTENTS = {
  CYCES: [
    {
      title: "Backend Developer",
      description:
        "Currently working at Cyces Innovation Labs, where I build scalable backend systems using Django and integrate various external services and APIs to enhance functionality and performance.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Backend Developer (May 2025 – Present)
        </div>
      ),
    }
  ],

  ZIGMA: [
    {
      title: "Project Engineer",
      description:
        "Worked at Zigma Technologies as a Project Engineer. Developed and maintained Django-based web applications and internal dashboards, collaborating with cross-functional teams.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Project Engineer (July 2023 – May 2025)
        </div>
      ),
    },
   {
  title: "Development",
  description:
    "Developed end-to-end backend applications using Django. Integrated external tools and third-party APIs. Implemented asynchronous tasks using Celery for scalable and seamless background processing. Ensured secure and modular architecture throughout the development lifecycle.",
  content: (
    <div className="h-full w-full flex items-center justify-center text-white px-4">
      Scalable Web Applications
    </div>
  ),
},
{
  title: "Deployment & Infrastructure",
  description:
    "Deployed solutions on cloud VMs using traditional setup as well as Docker-based containers. Managed production environments with proper configuration, monitoring, and optimization for performance and reliability.",
  content: (
    <div className="h-full w-full flex items-center justify-center text-white px-4">
      Cloud Services & Deployment
    </div>
  ),
},
{
  title: "Collaboration & Delivery",
  description:
    "Collaborated closely with project managers, designers, and fellow engineers to transform ideas into reliable production-ready solutions. Participated in planning, code reviews, and iterative releases to deliver high-quality applications aligned with client and stakeholder goals.",
  content: (
    <div className="h-full w-full flex items-center justify-center text-white px-4">
      Cross-functional Collaboration
    </div>
  ),
}

  ],
};


export const GTAG = "G-5HCTL2TJ5W";
