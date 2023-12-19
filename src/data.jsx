import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/ToDo_List.png";
import Work2 from "./assets/calculator.png";
import Work3 from "./assets/Weather.png";
import Work4 from "./assets/API.png";
import Work5 from "./assets/EMS.png";



import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Abdul Rauf",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Shaikh",
  },

  {
    id: 3,
    title: "Age : ",
    description: "23 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Indian",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Mumbai",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+91 7303976733",
  },

  {
    id: 8,
    title: "Email : ",
    description: "ar.eng.developer@gmail.com",
  },

  {
    id: 9,
    title: "Langages : ",
    description: "English, Hindi, Urdu",
  },

];

export const stats = [
  {
    id: 1,
    no: "Fresher",
    title: "Ready for New Challenges",
  },

  {
    id: 2,
    no: "5+",
    title: "Completed Projects",
  },

];

export const resume = [
  {
    id: 1,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2021",
    title: "Engineering Degree <span> Mumbai University </span>",
    percentage: "74.19%",
  },

  {
    id: 2,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2017",
    title: "HSC <span> Maharashtra Board </span>",
    percentage: "60%",
  },

  {
    id: 3,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2015",
    title: "SSC <span> Maharashtra Board </span>",
    percentage: "71.60%",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "85",
  },

  {
    id: 2,
    title: "Css",
    percentage: "78",
  },
  {
    id: 3,
    title: "Javascript",
    percentage: "75",
  },
  {
    id: 4,
    title: "ReactJs",
    percentage: "75",
  },
  {
    id: 5,
    title: "SQL",
    percentage: "86",
  },

  {
    id: 6,
    title: "Java",
    percentage: "85",
  },
  {
    id: 7,
    title: "JDBC",
    percentage: "76",
  },

  {
    id: 8,
    title: "Hibernate",
    percentage: "80",
  },

  {
    id: 9,
    title: "Servlet & Jsp",
    percentage: "77",
  },

  {
    id: 10,
    title: "Spring boot",
    percentage: "82",
  },
  {
    id: 11,
    title: "Postman",
    percentage: "70",
  },
  {
    id: 12,
    title: "Git & GitHub",
    percentage: "70",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "ToDo List",
    link: "https://shaikh-ar.github.io/To-Do-List/",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "ToDo List",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JavaScript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://shaikh-ar.github.io/To-Do-List/",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Normal Calculator",
    link: "https://shaikh-ar.github.io/Calculator/",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Normal Calculator",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JavaScript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://shaikh-ar.github.io/Calculator/",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Weather App",
    link: "https://shaikh-ar.github.io/Weather-App/",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Weather App",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JavaScript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://shaikh-ar.github.io/Weather-App/",
      },
    ],
  },
  {
    id: 4,
    img: Work4,
    title: "BookingShowApi",
    link: "https://github.com/Shaikh-AR/BookingShowAPI",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "BookingShowApi",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Java, MySQL, Spring-Boot, Postman",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://github.com/Shaikh-AR/BookingShowAPI",
      },
    ],
  },
  {
    id: 4,
    img: Work5,
    title: "Employee Management System",
    link: "https://github.com/Shaikh-AR/Employee-Management-System",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Employee Management System",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Java, Servlrt, JSP, MySQL",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://github.com/Shaikh-AR/Employee-Management-System",
      },
    ],
  },

];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
