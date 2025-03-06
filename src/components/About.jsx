import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const About = () => {
  return (
    <div name="about" className="w-full pb-0 bg-black bg-[size:10px_10px]">
      <div className="max-w-screen-lg p-4 h-full w-full mx-auto flex flex-col justify-center items-center text-white md:items-start">
        <div className="py-6 sm:text-center">
          <h2 className="text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-500">
            About
          </h2>
        </div>

        <p className="text-xl sm:text-2xl mt-4">
          A committed Machine Learning Developer with a solid foundation in Natural Language Processing (NLP), Deep Learning, and Generative AI. Enthusiastic about using AI to address intricate real-world problems, with experience in creating smart systems, training deep learning models, and applying state-of-the-art AI technologies. Experienced in creating solutions at the intersection of machine learning and language processing to improve human-computer interactions. Prior experiences encompass a recommender system for movies, sentiment analysis of movie reviews, and several NLP-based applications. Innovation, problem-solving attitude, and continuous learning in the continuously changing AI arena are the drivers.
        </p>

        {/* Social Media Icons */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <a
            href="https://github.com/madhavendrasingh1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
          >
            <FaGithub size={32} className="text-gray-400 hover:text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/madhavendra-singh-243429265/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
          >
            <FaLinkedin size={32} className="text-blue-500 hover:text-blue-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
