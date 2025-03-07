import React from "react";
import python from "../assets/python.jpg";
import R from "../assets/R.jpg";
import mysql from "../assets/mysql.png";
import github from "../assets/github.jpg";
import cplusplus from "../assets/c.png";
import js from "../assets/js.png";
import react from "../assets/react.png";

const Skills = () => {
  const technology = [
    {
      id: 1,
      icon: python,
      title: "Python",
    },
    {
      id: 2,
      icon: R,
      title: "R",
    },
    {
      id: 3,
      icon: github,
      title: "Github",
    },
    {
      id: 4,
      icon: js,
      title: "Javascript",
    },
    {
      id: 5,
      icon: react,
      title: "React JS",
    },
    {
      id: 6,
      icon: cplusplus,
      title: "C++",
    },
    {
      id: 7,
      icon: mysql,
      title: "My SQL",
    },
  ];
  
  return (
    <div name="Skills" className="w-full min-h-screen bg-black" id="skills">
      {/* Changed from h-screen to py-20 for better spacing control */}
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full">
        <div className="mb-8">
          <h2 className="text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-500 text-white">
            Skills
          </h2>
        </div>
        
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-0">
          {technology.map(({ id, icon, title }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 hover:scale-105 duration-500 py-6 rounded-lg bg-gray-900"
            >
              <img src={icon} alt={title} className="w-20 h-20 object-contain mx-auto" />
              <p className="text-xl mt-4 text-white">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
