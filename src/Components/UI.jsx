import React from "react";
import { Link } from "react-router-dom";

const UI = () => {
  const topics = [
    "1. What is React and Why React (Introduction)",
    "2. Install React-Vite Boilerplate (npm create vite)",
    "3. Import Export",
    "4. React Folder Structure",
    "5. Real DOM Vs Virtual DOM",
    "6. JSX",
    "7. useState hooks (variable of React) - Array and object usage are most common",
    "8. Adding CSS (Normal and Tailwind)",
    "9. Calling Functions in React",
    "10. Form Handling in React",
    "11. Two-Way Binding",
    "12. Components",
    "13. Props Drilling",
    "14. Rendering JSON Data",
    "15. Integrating API (axios)",
    "16. React Router DOM",
    "17. React Toastify (for flash messages)",
    "18. useEffect (lifecycle method)",
    "19. useRef (perform DOM events in React)",
    "20. Context API",
    "21. Redux Toolkit",
    "22. Framer Motion",
    "23. Deployment",
  ];

  return (
    <div className="h-screen w-full flex flex-col">
      {/* Hero Section */}
      <div className="h-[50%] w-full flex flex-col md:flex-row justify-between p-5 md:p-10">
        <div className="part1 h-full p-5 md:p-20 w-full md:w-[60%] flex flex-col justify-center">
          <h1 className="text-blue-200 text-3xl md:text-5xl mb-4 text-center md:text-left">
            Complete React Tutorial
          </h1>
          <p className="text-blue-200 text-base md:text-lg mt-4 md:mt-10 text-center md:text-left">
            Dive into the world of React! Learn about components, state management, hooks, and routing to build dynamic web applications. This tutorial covers everything you need to know to get started with React.
          </p>
        </div>
        <div className="part2 h-full w-full md:w-[40%] flex items-center justify-center mt-5 md:mt-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" // React logo
            alt="React Logo"
            className="max-w-xs md:max-w-md opacity-50 blur-sm transition-all duration-300" // Add opacity and blur
          />
        </div>
      </div>

      {/* Topic Name */}
      <div className="p-5 md:p-10 min-h-screen">
        <h1 className="text-2xl md:text-3xl text-blue-200 font-bold mb-6 text-center">
          React Topics
        </h1>
        <ul className="list-disc list-inside space-y-2">
          {topics.map((topic, index) => (
            <li key={index}>
              <Link to={`/${topic.replace(/\s+/g, '-').toLowerCase()}`} className="text-base md:text-lg text-blue-100 hover:underline">
                {topic}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UI;
