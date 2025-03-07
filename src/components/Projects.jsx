import React from "react";
import p1 from "../assets/p1.jpg";
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import p5 from '../assets/p5.jpg'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      image: p1,
      github: "https://github.com/madhavendrasingh1/Churn_Prediction",
      demo: "https://churnprediction-hj25tuswuryr88wg4hxn6t.streamlit.app/",
    },

    {
      id: 2,
      image: p2,
      github: "https://github.com/madhavendrasingh1/Word_Predictor",
      demo: "https://wordpredictor.streamlit.app/",
    },

    {
      id: 3,
      image: p3,
      github: "https://github.com/madhavendrasingh1/Movie_recommender",
      demo: "https://huggingface.co/spaces/Madhavendra3/Movie-Recommender",
    },

    {
      id: 4,
      image: p4,
      github: "https://github.com/madhavendrasingh1/Movie_Review_Sentiment_Analyser",
      demo: "https://moviereviewsentimentanalyser.streamlit.app/",
    },

    {
      id: 5,
      image: p5,
      github: "https://github.com/madhavendrasingh1/LSTMStocks",
      demo: "https://github.com/madhavendrasingh1/LSTMStocks/blob/main/EDA.ipynb",
    },
  ];

  return (
    <div
      name="portfolio"
      className="pb-45 bg-black bg-[size:20px_20px]"
    >
      <div className="max-w-screen-lg p-4 h-full w-full mx-auto text-white flex flex-col justify-center items-center md:items-start">
        <div className="pb-8">
          <h2 className="text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-500">
            Projects
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, image, title, github, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={image}></img>
              <div className="flex items-center justify-evenly p-2">
                <a href={github} className="hover:scale-110 duration-200"><FaGithub size={30}></FaGithub></a>
                <a href={demo}  className="hover:scale-110 duration-200"> <FaExternalLinkAlt size={30}></FaExternalLinkAlt> </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
