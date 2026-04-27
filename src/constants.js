// Skills Section Logo's
import pythonLogo from './assets/tech_logo/python.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import djangoLogo from './assets/tech_logo/django.png';
import fastapiLogo from './assets/tech_logo/fastapi.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import figmaLogo from './assets/tech_logo/figma.png';

//work logo
import drowsinessImg from './assets/work_logo/drowsiness.jpeg';
import resumeParserImg from './assets/work_logo/resume_parser.png';
import attendanceImg from './assets/work_logo/attendance.jpeg';
import newsAppImg from './assets/work_logo/news-app.png';
import auth3faImg from './assets/work_logo/3fa.png';
import railwayImg from './assets/work_logo/Railway.png';

// Experience Logo
import codsoftLogo from './assets/company_logo/CodSoft.jpg';

// Education Logos
import adtuLogo from './assets/education_logo/ADTU.jpg';
import kvLogo from './assets/education_logo/KV.jpg';


// Skills

export const SkillsInfo = [
  {
    title: 'Programming',
    skills: [
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'Django', logo: djangoLogo },
      { name: 'FastAPI', logo: fastapiLogo },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'SQL', logo: mysqlLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];


// Experience

export const experiences = [
  {
    id: 0,
    img: codsoftLogo,
    role: "Data Science Virtual Intern",
    company: "CodSoft",
    date: "5 June 2025 – 5 July 2025",
    desc: "Worked on real-world data science tasks involving data preprocessing, analysis, and basic machine learning models. Gained practical experience with Python-based data analysis libraries and model evaluation techniques while learning complete data workflows.",
    skills: [
      "Python",
      "Data Analysis",
      "Machine Learning",
      "Data Cleaning",
    ],
  },
];


// Education

export const education = [
  {
    id: 0,
    img: adtuLogo,
    school: "Assam Down Town University, Guwahati",
    date: "2023 – 2026",
    grade: "8.9 CGPA  ",
    desc: "Currently pursuing Bachelor of Computer Application with focus on Data Science, software development, and modern web technologies.",
    degree: "Bachelor of Computer Application (BCA)",
  },
  {
    id: 1,
    img: kvLogo,
    school: "Kendriya Vidyalaya Rangapahar, Dimapur",
    date: "2022 – 2023",
    grade: "77%",
    desc: "Completed Higher Secondary education under CBSE board with Humanities stream.",
    degree: "CBSE (XII)",
  },
  {
    id: 2,
    img: kvLogo,
    school: "Kendriya Vidyalaya Rangapahar, Dimapur",
    date: "2020 – 2021",
    grade: "72%",
    desc: "Completed Secondary School education under CBSE board.",
    degree: "CBSE (X)",
  },
];


// Projects

export const projects = [
  {

    id: 0,
    title: "Smart Attendance System (QR + Network Validation)",
    description:
      "Mobile-based smart attendance system built with React Native and MERN stack. Uses QR code sessions, Wi-Fi IP prefix validation, and a real-time heartbeat mechanism to ensure secure and accurate attendance tracking. Prevents proxy attendance by requiring students to stay connected throughout the session.",
    image: attendanceImg,
    tags: ["React Native", "Node.js", "MongoDB", "Express", "MERN Stack"],
    github: "https://github.com/aryanjamatia/Attendance_backend",
    app: "https://drive.google.com/file/d/1qi7zzZVsGTrt8W0aLfCgxAVszxp2dng5/view?usp=drive_link",
    user_manual: "https://drive.google.com/file/d/1yhOUCzayRr04zwpkuBTWOyHbTzIz4NYv/view?usp=drive_link", 
  },
  {
    id: 1,
    title: "AI-Based Driver Drowsiness Detection System",
    description:
      "AI-powered driver monitoring system built with Python, OpenCV, and MediaPipe to detect driver fatigue in real time using facial landmarks and eye aspect ratio analysis with alert notifications.",
    image: drowsinessImg,
    tags: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
    github: "",
    webapp: "",
  },

  {
    id: 2,
    title: "AI-Powered Resume Parser",
    description:
      "AI-based resume parsing system built using MERN stack and FastAPI capable of processing 30–40 resumes simultaneously.",
    image: resumeParserImg,
    tags: ["MERN Stack", "FastAPI", "NLP", "MongoDB"],
    github: "https://github.com/aryanjamatia/Ai_Powered_Resume_Parser.git",
    webapp: "",
  },

  {
    id: 3,
    title: "Local News Mobile Application",
    description:
      "React Native mobile application that displays local news with category-based browsing and responsive UI for Android devices.",
    image: newsAppImg,
    tags: ["React Native", "Mobile App"],
    github: "https://github.com/aryanjamatia/React-Native-MERN-stack-NewsApp-frontend.git",
    webapp: "",
  },

  {
    id: 4,
    title: "3-Factor Authentication System for UIDAI",
    description:
      "Secure authentication system combining password, OTP, and identity verification built for Smart India Hackathon 2024.",
    image: auth3faImg,
    tags: ["Cyber Security", "Authentication", "OTP"],
    github: "https://github.com/montukr/Facial-3FA-UIDAI.git",
    webapp: "",
  },

  {
    id: 5,
    title: "Railway Reservation System",
    description:
      "Web-based train booking system built with Django supporting authentication, train search, ticket booking and MySQL database.",
    image: railwayImg,
    tags: ["Django", "Python", "MySQL"],
    github: "https://github.com/aryanjamatia/railway_reservation_system.git",
    webapp: "",
  }
];