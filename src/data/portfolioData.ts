export interface Project {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  contribution: string;
  github: string;
  status?: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface Achievement {
  title: string;
  description: string;
}

export interface Education {
  degree: string;
  college: string;
  duration: string;
  cgpa: string;
}

export interface ProfileData {
  name: string;
  title: string;
  subtitle: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  about: string;
  skills: {
    languages: string[];
    frontend: string[];
    backend: string[];
    databases: string[];
    aiData: string[];
    tools: string[];
  };
  projects: Project[];
  experience: Experience[];
  achievements: Achievement[];
  education: Education[];
}

export const portfolioData: ProfileData = {
  name: "Dasprakash M",
  title: "Full Stack Developer",
  subtitle: "Aspiring AI Engineer",
  tagline: "Aspiring Python Full-Stack Developer focused on practical, scalable web applications and AI integration.",
  location: "Panruti, Tamil Nadu",
  email: "dasprakashmanikandan19@gmail.com",
  phone: "8778949790",
  github: "https://github.com/Dasprakash23",
  linkedin: "https://www.linkedin.com/in/dasprakash-manikandan/",
  about: "I am a final-year B.Tech CSE student focused on Python Full-Stack Development and AI integration. I enjoy building practical web applications, designing reliable backends, and engineering AI-assisted features to solve real-world problems. With experience in hackathons and symposiums, I bring strong problem-solving skills and a focus on product delivery.",
  skills: {
    languages: ["Python", "Java", "JavaScript", "TypeScript"],
    frontend: ["React", "HTML5", "CSS3", "Tailwind"],
    backend: ["Django", "DRF (Django REST Framework)", "REST APIs"],
    databases: ["MySQL", "MongoDB"],
    aiData: ["GenAI APIs", "AI API Integration", "Prompt Engineering"],
    tools: ["Git", "GitHub", "VS Code", "Jupyter", "Vite"]
  },
  projects: [
    {
      title: "SkillSphere",
      subtitle: "AI-Integrated Educational Platform",
      description: "An AI-integrated educational platform that features GenAI-powered course summarization and contextual Q&A to make online learning more interactive and structured.",
      technologies: ["Python", "HTML/CSS", "JavaScript", "Bootstrap", "GenAI APIs"],
      contribution: "Developed the GenAI course summarization backend and contextual Q&A interfaces.",
      github: "https://github.com/Dasprakash23/College_helpdesk"
    },
    {
      title: "College Help Desk System",
      subtitle: "College Query & Ticket Management",
      description: "A web-based ticketing and student support management system designed to track queries, assign them to departments, and resolve them efficiently.",
      technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
      contribution: "Built the user authentication flow and the MySQL query tracking system.",
      github: "https://github.com/Dasprakash23/College_helpdesk"
    },
    {
      title: "AI Study Planner",
      subtitle: "Personalized Study Routines Generator",
      description: "An AI-powered web application designed to generate customized study schedules, track milestones, and optimize study times based on learning patterns.",
      technologies: ["Python", "AI/ML", "Web Technologies"],
      contribution: "Creating the AI learning profile logic and study generation backend. Currently 60% complete.",
      github: "https://github.com/Dasprakash23/College_helpdesk",
      status: "60% Complete"
    }
  ],
  experience: [
    {
      role: "AI Intern",
      company: "NexGen Technology",
      duration: "June–July 2026",
      description: "Worked on AI/ML routines, data preprocessing, and exploratory data analysis using Python to support data-driven development."
    },
    {
      role: "Canva Designer",
      company: "Additional Experience",
      duration: "Ongoing",
      description: "Experienced in designing digital assets, presentations, and branding elements for college symposiums and projects."
    }
  ],
  achievements: [
    {
      title: "1st Prize — Mind Crush",
      description: "Won first prize and a cash award of ₹1,000 at the MVIT Technical Symposium."
    },
    {
      title: "Top 20 Finalist — NexBuildON Hackathon",
      description: "Secured a position in the top 20 out of 982+ teams nationally in the NexBuildON Ideathon/Hackathon."
    },
    {
      title: "Participant — ITERYX ’26 National Hackathon",
      description: "Competed in the St. Joseph's 24-hour national hackathon."
    },
    {
      title: "NPTEL DBMS Certification (IIT Kharagpur)",
      description: "Successfully completed an 8-week rigorous Database Management Systems course by IIT Kharagpur."
    },
    {
      title: "IEEE Madras Section Student Branch officers’ Meet",
      description: "Represented the student branch and participated in leadership discussions."
    }
  ],
  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      college: "Christ College of Engineering and Technology",
      duration: "2023 – 2027 (Expected)",
      cgpa: "8.4/10 CGPA (up to 6th semester)"
    }
  ]
};

// Knowledge base for "Ask Das AI" chatbot
export const aiChatKnowledge = [
  {
    keywords: ["who", "about", "bio", "dasprakash", "das", "profile"],
    answer: "Dasprakash M is a Final Year B.Tech CSE student at Christ College of Engineering and Technology, specializing in Full Stack Development (especially Python/Django) and Generative AI integrations. He is an aspiring AI Engineer currently maintaining an 8.4/10 CGPA."
  },
  {
    keywords: ["skills", "languages", "stack", "technologies", "python", "react"],
    answer: "Dasprakash's technical skills include: \n- Languages: Python (primary), Java, JavaScript, TypeScript\n- Frontend: React, HTML5, CSS3, Tailwind CSS\n- Backend: Django, Django REST Framework, REST APIs\n- Databases: MySQL, MongoDB\n- AI: GenAI APIs, AI API Integration, Prompt Engineering\n- Tools: Git, GitHub, VS Code, Jupyter, Vite."
  },
  {
    keywords: ["project", "projects", "portfolio", "skillsphere", "help desk", "planner"],
    answer: "He has built three major projects:\n1. **SkillSphere**: An AI-integrated educational platform with GenAI course summarization and contextual Q&A (Python, JavaScript, GenAI APIs).\n2. **College Help Desk System**: A web ticketing platform with MySQL query tracking.\n3. **AI Study Planner**: An AI-powered study scheduler (Python, AI/ML, 60% complete)."
  },
  {
    keywords: ["experience", "intern", "internship", "nexgen", "work"],
    answer: "Dasprakash worked as an AI Intern at NexGen Technology (June–July 2026), where he focused on AI/ML routines, data preprocessing, and exploratory data analysis using Python. He also has freelance design experience as a Canva Designer."
  },
  {
    keywords: ["achievements", "prize", "win", "symposium", "hackathon", "award"],
    answer: "Key achievements include:\n- **1st Prize** at Mind Crush, MVIT Technical Symposium (won ₹1,000).\n- **Top 20** among 982+ teams in the NexBuildON Hackathon.\n- Participant in the St. Joseph's **ITERYX '26** 24-hour National Hackathon.\n- **NPTEL DBMS** 8-week certification from IIT Kharagpur."
  },
  {
    keywords: ["education", "college", "cgpa", "degree", "btech"],
    answer: "Dasprakash is pursuing B.Tech in Computer Science and Engineering at Christ College of Engineering and Technology (final year, graduating in 2027) with a CGPA of 8.4/10 up to his 6th semester."
  },
  {
    keywords: ["contact", "email", "phone", "linkedin", "github", "hire", "job"],
    answer: "You can reach out to Dasprakash directly via:\n- **Email**: dasprakashmanikandan19@gmail.com\n- **Phone**: +91 8778949790\n- **LinkedIn**: linkedin.com/in/dasprakash-manikandan/\n- **GitHub**: github.com/Dasprakash23\nHe is open to internships and entry-level roles in Full Stack and AI Engineering."
  }
];

export const getAIResponse = (query: string): string => {
  const cleanQuery = query.toLowerCase();
  
  // Search knowledge base
  for (const item of aiChatKnowledge) {
    if (item.keywords.some(keyword => cleanQuery.includes(keyword))) {
      return item.answer;
    }
  }
  
  return "I can answer questions regarding Dasprakash's projects, skills, internship experience, education, and achievements. Try asking: 'What projects has he built?' or 'What is his CGPA?' or 'How can I contact him?'";
};
