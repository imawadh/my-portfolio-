import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiTailwindcss, 
  SiBootstrap, 
  SiNodedotjs, 
  SiMongodb, 
  SiMysql, 
  SiGit, 
  SiVscodium, 
  SiPostman, 
  SiSimpleanalytics, 
  SiPandas, 
  SiPython,
  SiFlask,
  SiPlotly,
  SiScikitlearn,
  SiWolframmathematica,
  SiOpenai
} from "react-icons/si";

const iconMap = {
  // Frontend
  "HTML5": SiHtml5,
  "CSS3": SiCss3,
  "Javascript": SiJavascript,
  "Tailwind": SiTailwindcss,
  "Bootstrap": SiBootstrap,
  "Jinja": SiPython, // Fallback
  
  // Backend
  "Node Js": SiNodedotjs,
  "Express Js": SiJavascript, // Fallback
  "Mongo DB": SiMongodb,
  "SQL": SiMysql,
  "Flask": SiFlask,
  
  // Tools
  "Git": SiGit,
  "Vs Code": SiVscodium,
  "Postman": SiPostman,
  
  // Data Analysis
  "Power BI": SiSimpleanalytics,
  "SQL": SiMysql,
  "Numpy": SiPython, // Fallback
  "Matplotlib": SiPlotly, // Fallback
  "Pandas": SiPandas,

  // Machine Learning
  "Python": SiPython,
  "Scikit-learn": SiScikitlearn,
  "Statistics": SiSimpleanalytics, // Fallback
  "Linear Algebra": SiWolframmathematica, // Fallback
  "Natural Language Processing": SiOpenai // Fallback
};

export const getSkillIcon = (name) => {
  return iconMap[name] || null;
};
