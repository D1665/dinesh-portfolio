// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import Appsquadzlogo from './assets/company_logo/appsquadze.jpeg';


// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import skdLogo from './assets/education_logo/skdcollege.avif';
import asiLogo from './assets/education_logo/asicollege.jpeg';

// Project Section Logo's
import fitnesslogo from './assets/work_logo/fitness.png';
import portfoliologo from './assets/work_logo/portfolio.png';
import bookoselogo from './assets/work_logo/bookose.png';
import aicodelogo from './assets/work_logo/aicode.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      
      { name: 'Redux', logo: reduxLogo },
      
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      
     
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      
      
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: Appsquadzlogo,
      role: "Fullstack Developer Intern",
      company: "Appsquadz Software Pvt ltd",
      date: "1 june 2024 - 25 july 2024",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Express JS",
        "Node JS",
        "Tailwind CSS",
        "Bootstrap",
        "MongoDb",
        "Redux",
        "Git",
        "netlify",
        "Vercel",
        "Postman",
        "Figma",
      ],
    },
    
    
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "GLA University, Mathura",
      date: "Aug 2022 - May 2026",
      grade: "7.3 CGPA",
      desc: "I am currently pursuing my Bachelor's degree (BTech) in Computer Science from GLA University, Mathura. Throughout my studies, I have built a strong foundation in programming, software development, and core computer science principles. I have undertaken courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participate in workshops and technical events, which continue to enhance my skills and broaden my knowledge. My academic journey at GLA University is playing a crucial role in shaping my technical abilities and preparing me for a career in the tech industry.",
      degree: "Bachelor of Technology in Computer Science - Btech-CS",
    },

    {
      id: 1,
      img: asiLogo,
      school: "Adarsh Styadev Inter College, Malav",
      date: "Apr 2020 - March 2021",
      grade: "72%",
      desc: "I completed my class 12 education from Adarsh Styadev Inter College, Malav, under the UP board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "UP(XII) - PCM with English",
    },
    {
      id: 2,
      img: skdLogo,
      school: "SKD Inter College Pakhaudana Aligarh",
      date: "Apr 2018 - March 2019",
      grade: "82%",
      desc: "I completed my class 10 education from SKD Inter College Pakhaudana Aligarh, under the UP board, where I studied Basic Mathmatics , Science and English.",
      degree: "UP(X), Science with Mathematics",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Fitness Tracker Web App",
      description:
        "Fit Tracker is a powerful and user-friendly fitness tracking application built with React.js. It helps users monitor and manage their fitness journey by providing detailed insights into workouts, progress, and goals. With a clean and intuitive interface, FitTracker ensures a seamless experience for tracking activities, staying consistent, and achieving health milestones—making it an essential tool for fitness enthusiasts and trainers alike.",
      image: fitnesslogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/D1665/fittracker/tree/main",
      
    },
    {
      id: 1,
      title: "Ai Powered Code Reviewer",
      description:
        "AI-Powered Code Reviewer is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) integrated with the Google Gemini Developer API. The platform analyzes source code, detects errors, and provides AI-driven suggestions for optimization and improvements. Designed for developers, it helps in writing cleaner, more efficient, and error-free code.A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
      image: aicodelogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript","gemini API"],
      github: "https://github.com/D1665/Ai-powered-code-reviewer/tree/main",
      
    },
    {
      id: 2,
      title: "Personal Portfolio Website",
      description:
        "A React-based web application that provides movie recommendatioA sleek and responsive personal portfolio designed using React.js, Tailwind CSS, and modern web design practices. It showcases projects, skills, and achievements in an interactive and professional way. The portfolio acts as a digital resume, enabling recruiters and collaborators to explore your journey as a developer.ns based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: portfoliologo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/D1665/dinesh-portfolio",
     
    },
    {
      id: 3,
      title: "Bookify – Used Book Marketplace",
      description:
        "An efficient and customizable NPM package for validating Bookify is a group project developed using the MERN stack, providing a marketplace for users to buy and sell second-hand books. It simplifies book exchanges by connecting buyers and sellers directly through a user-friendly platform.email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
      image: bookoselogo,
      tags: ["React JS", "Node.js", "NPM", "Validation"],
      github: "https://github.com/D1665/Bookefy-Used-Book-Marketplace-/tree/master",
      
    },
   
   
  ];  